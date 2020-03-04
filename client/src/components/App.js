import React, {Component} from 'react';
import {json} from "d3-fetch";
import '../css/App.css';
import Questionnaire from "../utils/Questionnaire";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "geoJSON": null,
      "buildings": []
    }
  }

  componentDidMount() {

    json("https://raw.githubusercontent.com/lcgonsalves/WPI-Map-Poll/master/map.geojson")
        .then(fetchedJSON => this.setState({
          "geoJSON": fetchedJSON,
          "buildings": App.parseBuildingInformation(fetchedJSON)
        }));

  }

  /**
   * Parses GeoJSON to get cleaner building information
   * @param {Object} geoJSON
   * @returns {[Object]} object containing properties of each json feature
   */
  static parseBuildingInformation(geoJSON) {

    let buildings = [];
    const names = {};

    // filter by non-street/campus lane features
    geoJSON.features.forEach(
        ({properties}) => {
          if (properties.category !== "street" &&
              properties.category !== "campusLane") {
                if (!names[properties.name]) {
                    buildings.push(properties);
                    names[properties.name] = true;
                }
          }

    });

    return buildings;

  }


  render() {

    return (
        <div className="App">
            {this.state.geoJSON && <Questionnaire buildings={this.state.buildings} />}
        </div>
    );

  }
}

export default App;
