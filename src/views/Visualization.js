import React, {Component, useContext} from "react";
import PropTypes from "prop-types";
import {geoMercator, geoPath} from "d3-geo";
import {event, mouse, select} from "d3-selection";
import {scaleLinear} from "d3-scale";
import {zoom, zoomIdentity, zoomTransform} from "d3-zoom";
import {extent} from "d3-array";
import DataFetcherAndParser from "../utils/DataFetcherAndParser";
import {interpolateRdYlGn} from "d3-scale-chromatic";
import initTour from "../utils/ShepherdTourSetup";
import storageAvailable from "../utils/LocalStorageUtil";

// css
import "../css/Visualization.css";
import "../css/Tour.css";

class Visualization extends Component {
    dimensions = {
        height: 600,
        width: 600
    };

    strokeMap = {
        "street": "#000000",
        "campusLane": "#a5a5a5",
        "building": "#010057",
        "poi": "#004a00",
        "residenceHall": "#4a0200"
    };

    colorMap = {
        "building": "#6b94f2",
        "poi": "#6dc46f",
        "residenceHall": "#b35eb2"
    };

    static getStreetStroke (highwayType) {
        let width = 7;

        switch(highwayType) {
            case "footway":
                return {
                    "width": "1px",
                    "type": "dotted"
                };
            case "service":
                width--;
            case "residential":
                width--;
            case "tertiary":
            case "tertiary_link":
                width--;
            case "secondary":
            case "secondary_link":
                width--;
            case "primary":
            case "primary_link":
                width--;
            case "motorway":
            case "motorway_link":
                return {
                    width,
                    "type": "solid"
                };
            default:
                return {
                    "width": "2px",
                    "type": "solid"
                }
        }
    }

    constructor(props) {
        super(props);

        // displayed buildings are set here
        this.state = {
            "selectedMetric": "", // DataFetcherAndParser.pickRandomMetric(),
            "data": {},
            "tooltip": {
                "locationName": "Location",
                "locationCategory": "",
                "color": "#ffffff",
                "rank": -1,
                "display": false
            }
        };

        this.svg = React.createRef();

        // initialize shepherd-js tour
        this.tour = initTour();

        // bind
        this.d3RenderMap = this.d3RenderMap.bind(this);
    }

    componentDidMount() {

        // parse map for location names
        // set state for locations to be displayed to all true
        this.d3RenderMap();

        // fetch data
        DataFetcherAndParser.getAverages()
            .then(({body}) => this.setState({
                "data": body,
                "ranking": this.parseRanking(body, this.state.selectedMetric)
            }));

        // start tour if first time visiting
        if (storageAvailable() && !localStorage.getItem("visited")) {

            localStorage.setItem("visited", "true");
            this.tour.start();

        } else if (storageAvailable() && localStorage.getItem("visited")) {
            // do nothing
        } else this.tour.start();

    }

    /**
     * @param data
     * @param metric
     * @param reverse
     * @returns {{name: string, value: *}[]}
     */
    parseRanking(data, metric, reverse = false) {
        const buildingNames = Object.keys(data);
        return buildingNames.map(name => ({
            name,
            "value": data[name][metric]
        })).filter(d => typeof(d.value) !== "undefined").sort((a, b) => {
            if (a.value < b.value) return reverse ? -1 : 1;
            else if (a.value === b.value) return 0;
            else return reverse ? 1 : -1;
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if ( prevState.selectedMetric !== this.state.selectedMetric ||
             prevState.data !== this.state.data ) {
            this.d3UpdateMap();
        }

    }

    /**
     * Renders map on SVG for the first time
     */
    d3RenderMap() {

        const updateTooltip = (name, display, rank, color, locationCategory) => {
            const tooltip = {
                ...this.state.tooltip,
            };
            tooltip.locationName = name !== null ? name : tooltip.locationName;
            tooltip.display = display !== null ? display : tooltip.display;
            tooltip.rank = rank !== null ? rank : tooltip.rank;
            tooltip.color = color ? color : tooltip.color;
            tooltip.locationCategory = locationCategory ? locationCategory : tooltip.locationCategory;

            this.setState({
                tooltip
            });
        };

        const {
            rawBuildingsJSON,
            streetsJSON
        } = this.props;

        const {
            height,
            width
        } = this.dimensions;

        const svg = select(this.svg.current);

        const campus = [],
              offCampus = [];

        rawBuildingsJSON.features.forEach(feature => {
            if (feature.properties.category) {
                campus.push(feature);
            } else offCampus.push(feature);
        });

        const campusData = {...rawBuildingsJSON};
        const offCampusData = {...rawBuildingsJSON};

        offCampusData.features = offCampus;
        campusData.features = campus;

        function reset() {
            updateTooltip(null, false, null);

            svg.transition().duration(750).call(
                zoomFunc.transform,
                zoomIdentity,
                zoomTransform(svg.node()).invert([width / 2, height / 2])
            );
        }

        const findRankAndUpdateTooltip = (d) => {

            const {
                ranking
            } = this.state;

            // find rank
            for (let i = 0; i < ranking.length; i++) {
                if (ranking[i].name === d.properties.name) {
                    updateTooltip(d.properties.name, true, i + 1, null, d.properties.category);
                    return;
                }
            }

            updateTooltip(d.properties.name, true, undefined, null, d.properties.category);
        };

        const advanceTour = buildingName => {

            // advance tour on metric change if current step is appropriate
            if (this.tour.getCurrentStep() &&
                this.tour.getCurrentStep().id === "step-02-select-element" &&
                buildingName === "Higgins Labs"
            ) {
                this.tour.next();
            }

        };

        function clicked(d) {
            // updates tooltip
            findRankAndUpdateTooltip(d);

            // moves tour forward if appropriate
            advanceTour(d.properties.name);

            // zooms
            const [[x0, y0], [x1, y1]] = path.bounds(d);
            event.stopPropagation();
            svg.transition().duration(750).call(
                zoomFunc.transform,
                zoomIdentity
                    .translate(width / 2, height / 2)
                    .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)))
                    .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
                mouse(svg.node())
            );
        }

        function zoomed() {
            const {transform} = event;
            g.attr("transform", transform);
            g.attr("stroke-width", 1 / transform.k);
        }

        const projection = geoMercator().fitExtent([[-100, -350], [height + 100, width + 350]], campusData);
        const path = geoPath().projection(projection);

        const zoomFunc = zoom()
            .scaleExtent([1, 8])
            .on("zoom", zoomed);


        svg.on("click", reset);

        const g = svg.append("g").attr("id", "viewport");

        // off campus buildings
        g.append("g")
            .attr("id", "off-campus")
            .selectAll("path")
            .data(offCampusData.features)
            .join("path")
            .attr("fill",  "#404040")
            .attr("stroke", "#2a2a2a")
            .attr("stroke-width", "2")
            .attr("d", path)
            .append("title")
            .text(d => d.properties.name);

        // campus buildings and pois etc
        g.append("g")
            .attr("cursor", "pointer")
            .attr("id", "buildings")
            .selectAll("path")
            .data(campusData.features)
            .join("path")
            .attr("fill", d => this.colorMap[d.properties.category])
            .attr("id", d => `path-${String(d.properties.name).replace(/\s/g, '-').toLowerCase()}`)
            .attr("stroke", "black")
            .attr("stroke-width", 0.5)
            .on("click", clicked)
            .attr("d", path)
            .append("title")
            .text(d => d.properties.name);


        // streets
        g.append("g")
            .attr("id", "streets")
            .selectAll("path")
            .data(streetsJSON.features)
            .join("path")
            .attr("stroke", d => d.properties.highway === "footway" ? "#2f2f2f" : "#4c4c4c")
            .attr("fill", "none")
            .attr("stroke-width", d => Visualization.getStreetStroke(d.properties.highway).width)
            .attr("d", path)
            .append("title")
            .text(d => `${d.properties.name || "pathway"} - ${d.properties.highway}`);

        svg.call(zoomFunc);

        return this;

    }

    /**
     * Updates map given a state change
     */
    d3UpdateMap() {

        const {
            ranking,
            selectedMetric,
            data
        } = this.state;

        const path = select(this.svg.current)
            .select("#buildings")
            .selectAll("path")
            .transition()
            .delay(150);

        // create fill logic for rank-like data
        if (DataFetcherAndParser.getTypeOf(selectedMetric) === "RATING") {

            const fillLogic = d => data[d.properties.name] && data[d.properties.name][selectedMetric] ?
                DataFetcherAndParser.getColor(selectedMetric, data[d.properties.name][selectedMetric] / 10) :
                "rgba(126,126,126,0.58)";


            path.attr("fill", fillLogic);

        }
        else {

            // iterate and find extents
            const scale = scaleLinear().domain(extent(ranking, v => v.value)).range([0, 1]);

            const fillLogic = d => data[d.properties.name] && data[d.properties.name][selectedMetric] ?
                DataFetcherAndParser.getColor(selectedMetric, scale(data[d.properties.name][selectedMetric])) :
                "rgba(126,126,126,0.58)";


            path.attr("fill", fillLogic);

        }


    }

    render() {

        const {
            selectedMetric,
            tooltip,
            data,
            ranking
        } = this.state;

        const rankLogic = () => {
            // ranking
            if (DataFetcherAndParser.getTypeOf(selectedMetric) !== "RATING") {
                return `${DataFetcherAndParser.getQuestionDescriptor(selectedMetric)} : ${tooltip.rank}`;
            } else { // show rating
                const rating = data[tooltip.locationName] ? Number(data[tooltip.locationName][selectedMetric]).toFixed(2) : "Unavailable";
                return `${DataFetcherAndParser.getQuestionDescriptor(selectedMetric)} : ${rating ? rating : "None"}`
            }
        };

        const subtitleLogic = () => {
            // ranking
            if (DataFetcherAndParser.getTypeOf(selectedMetric) === "RATING") {
                return `Ranked at: ${tooltip.rank} position`;
            } else { // show number of votes
                const numVotes = data[tooltip.locationName] ? data[tooltip.locationName][selectedMetric] : "Unavailable";
                return `Number of votes received: ${numVotes ? numVotes : "None"}`
            }
        };

        return (
            <div>
                <div title="List of metrics available to filter data" className="options-overlay">
                    <select
                        className="select-css"
                        defaultValue="none"
                        onChange={e => {

                            const curTourStep = this.tour.getCurrentStep();

                            // advance tour on metric change if current step is appropriate
                            if (curTourStep &&
                                curTourStep.id === "step-01-metric" &&
                                e.target.value === "STUDY_QUALITY_4" // group meeting accommodation rating (TODO: not hardcode it)
                            ) {
                                this.tour.next();
                            }

                            // update metric and ranking
                            this.setState({
                                "selectedMetric": e.target.value,
                                "ranking": this.parseRanking(this.state.data, e.target.value)
                            });

                        }}>
                        <option value="none" disabled hidden>
                            Select a Filter
                        </option>
                        {DataFetcherAndParser.getAllQuestionIDs().map((question, index) =>
                            <option value={question} key={question + index}>
                                {DataFetcherAndParser.getQuestionDescriptor(question)}
                            </option>
                        )}
                    </select>
                </div>
                <div className={`title show-${!tooltip.display}`}>
                    <h1>WPI Campus</h1>
                    <h3>Through Different Lenses</h3>
                </div>
                <div className={`information-overlay show-${tooltip.display}`}>
                    <h1 id="tooltip-title" style={{
                        "background": this.colorMap[tooltip.locationCategory]
                    }}>{tooltip.locationName}</h1>
                    <h1 id="tooltip-value" style={{
                        "display": data[tooltip.locationName] && data[tooltip.locationName][selectedMetric] ? "flex" : "none",
                        "background": data[tooltip.locationName] && data[tooltip.locationName][selectedMetric] ?
                            interpolateRdYlGn(1 - tooltip.rank / ranking.length) :
                            "rgba(126,126,126,0.58)"
                    }}>{subtitleLogic()}</h1>
                    <h1  id="tooltip-rank" style={{
                        "display": data[tooltip.locationName] && data[tooltip.locationName][selectedMetric] ? "flex" : "none",
                        "background": data[tooltip.locationName] && data[tooltip.locationName][selectedMetric] ?
                            DataFetcherAndParser.getColor(selectedMetric, data[tooltip.locationName][selectedMetric] / 10) :
                            "rgba(126,126,126,0.58)"
                    }}>{rankLogic()}</h1>
                </div>
                <button title="How to navigate this visualization" id="help-button" onClick={this.tour.start}>?</button>
                <svg
                    id="d3Node"
                    height="100vh"
                    width="100vw"
                    viewBox={`0 0 ${this.dimensions.height} ${this.dimensions.width}`}
                    preserveAspectRatio={"xMidYMid meet"}
                    ref={this.svg}
                />
            </div>
        );
    }

}

Visualization.propTypes = {
    "rawBuildingsJSON": PropTypes.object.isRequired,
    "streetsJSON": PropTypes.object.isRequired
};

export default Visualization;