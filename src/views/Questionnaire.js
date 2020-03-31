import React, {Component} from "react";
import PropTypes from "prop-types";
import buildingQuestions from "../data/BuildingQuestions";
import profileQuestions from "../data/ProfileQuestions";
import {interpolateGreens, interpolateGreys} from "d3-scale-chromatic";
import "../css/Questionnaire.css";
import {text} from "d3-fetch";
import {Redirect} from "react-router-dom";

/**
 * Provides functionality for generating JSX elements for a
 * given question or array of questions. Must be initialized to a list of buildings.
 */
class Questionnaire extends Component {
    helpText = {
        "RATING": "Please rate all the given buildings from 0-10. If you have no rating for a building, leave blank!",
        "CHOOSE_ONE": "Please pick one answer from the set of answers",
        "CHOOSE_MULTIPLE": "Please pick all answers that apply"
    };

    constructor(props) {
        super(props);

        const {
            buildings
        } = props;

        console.log(buildings);

        // initialize static profiling questions state tracking
        this.state = {
            "percentComplete": 0,
            "gradeLevel": "Freshman",
            "age": 18,
            "major": "",
            "residence": "",
            "formSubmitted": false
        };

        // initialize building response state tracking
        buildings.forEach(building => {
            this.state[building.name] = Questionnaire.initializeResponsesStateForBuilding(building);
        });

        // bindings
        this.handleScroll = this.handleScroll.bind(this);

    }

    renderProfileQuestions() {
        const questionElements = [];

        // changes for each question
        let inputComponents = [];
        let q = profileQuestions[0];

        // grade level
        inputComponents = q.inputOptions.map((ans, index) => (
            <label key={ans+index}>
                <input type="radio"
                       value={ans}
                       checked={this.state.gradeLevel === ans}
                       onChange={event => this.setState({"gradeLevel": event.target.value})}
                />
                {ans}
            </label>
        ));

        questionElements.push(
            <div className="question profile-question" key={"profile_0"}>
                <h2>{q.prompt}</h2>
                <h3>{this.helpText.CHOOSE_ONE}</h3>
                <div className="answers-container">
                    {inputComponents}
                </div>
            </div>
        );

        // age
        q = profileQuestions[1];
        questionElements.push(
            <div className="question profile-question" key={"profile_1"}>
                <h2>{q.prompt}</h2>
                <h3>{"Please write your age."}</h3>
                <div className="answers-container">
                    <label>
                        <input
                            style={{
                                "width": "15vw",
                                "textAlign": "center",
                                "padding": 0,
                                "marginRight": "2vw"
                            }}
                            type="text"
                            value={this.state.age}
                            onChange={evt => this.setState({ "age": evt.target.value})}
                            placeholder={"21"}
                        /> Years old
                    </label>
                </div>
            </div>
        );

        // major
        q = profileQuestions[2];

        inputComponents = q.inputOptions.map((ans, index) => (
            <label key={ans+index}>
                <input type="radio"
                       value={ans}
                       checked={this.state.major === ans}
                       onChange={event => this.setState({"major": event.target.value})}
                />
                {ans}
            </label>
        ));

        questionElements.push(
            <div className="question profile-question" key={"profile_2"}>
                <h2>{q.prompt}</h2>
                <h3>{this.helpText.CHOOSE_ONE}</h3>
                <div className="answers-container"
                     id="major-container"
                     style={{
                    "overflow": "auto",
                    "backgroundColor": "#212121",
                    "borderRadius": "5px",
                    "padding": "2vh"
                }}>
                    {inputComponents}
                </div>
            </div>
        );

        // residence
        q = profileQuestions[3];
        inputComponents = q.inputOptions.map((ans, index) => (
            <label key={ans+index}>
                <input type="radio"
                       value={ans}
                       checked={this.state.residence === ans}
                       onChange={event => this.setState({"residence": event.target.value})}
                />
                {ans}
            </label>
        ));

        questionElements.push(
            <div className="question profile-question" key={"profile_3"}>
                <h2>{q.prompt}</h2>
                <h3>{this.helpText.CHOOSE_ONE}</h3>
                <div className="answers-container">
                    {inputComponents}
                </div>
                <hr/>
            </div>
        );

        return questionElements;
    }

    // mounts scroll listener
    componentDidMount() {
    }

    // removes scroll listener
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        const ROUND_TO_FINISH = 1000;

        this.setState({
            "percentComplete": Math.round(((event.target.scrollTop + ROUND_TO_FINISH) / event.target.scrollHeight) * 100)
        });
    }

    /**
     *
     * @param {Object} building contains name and category
     */
    static initializeResponsesStateForBuilding (building) {
        const buildingState = {};
        const sections = Object.keys(buildingQuestions);

        // 1st section
        buildingQuestions[sections[0]].forEach((question, index) => {
            if (!question.filter.includes(building.category)) return;

            let val;

            switch (question.type) {
                case "RATING":
                    val = "";
                    break;
                case "CHOOSE_ONE":
                    val = false;
                    break;
                case "CHOOSE_MULTIPLE":
                    val = false;
                    break;
                default:
                    throw new Error("Question type not accounted for: " + question.type);

            }

            buildingState[`${sections[0]}_${index}`] = val;
        });

        // 2nd section
        buildingQuestions[sections[1]].forEach((question, index) => {
            if (!question.filter.includes(building.category)) return;

            let val;

            switch (question.type) {
                case "RATING":
                    val = "";
                    break;
                case "CHOOSE_ONE":
                    val = false;
                    break;
                case "CHOOSE_MULTIPLE":
                    val = false;
                    break;
                default:
                    throw new Error("Question type not accounted for: " + question.type);

            }

            buildingState[`${sections[1]}_${index}`] = val;
        });

        // 3rd section
        buildingQuestions[sections[2]].forEach((question, index) => {
            if (!question.filter.includes(building.category)) return;

            let val;

            switch (question.type) {
                case "RATING":
                    val = "";
                    break;
                case "CHOOSE_ONE":
                    val = false;
                    break;
                case "CHOOSE_MULTIPLE":
                    val = false;
                    break;
                default:
                    throw new Error("Question type not accounted for: " + question.type);

            }

            buildingState[`${sections[2]}_${index}`] = val;
        });

        return buildingState;
    }

    /**
     * Updates state for given rating questionID, to a given location to new value.
     * @param locationName
     * @param questionID
     * @param newValue
     */
    handleChangeRating(locationName, questionID, newValue) {

        const constrainValue = () => {
            if (!newValue) return "";

            const num = Number.parseFloat(newValue);

            if (num < 0) return 0;
            else if (num > 10) return 10;
            else return num;

        };

        this.setState(oldState => {
            const newState = {}; // object containing all buildings
            newState[locationName] = {...oldState[locationName]}; // object containing questions
            newState[locationName][questionID] = constrainValue(); // question value

            return newState;
        });
    }

    /**
     * Handles change in a given choose one question.
     * @param {String} locationName name of state key that has been selected
     * @param {Array<String>} allLocations array of all other locations in order to disable other buttons
     * @param {String} questionID id of question in order to access state dictionary
     * @param {Boolean} value whether it is selected or not
     */
    handleChangeChooseOne(locationName, allLocations, questionID, value) {

        this.setState(oldState => {
            const newState = {}; // object containing all buildings
            newState[locationName] = {...oldState[locationName]}; // object containing questions
            newState[locationName][questionID] = value; // question value

            allLocations.forEach(disableLocation => {
                newState[disableLocation] = {...oldState[disableLocation]};
                newState[disableLocation][questionID] = !value;
            });

            console.log(newState);

            return newState;
        });

    }

    /**
     * Updates state for given rating questionID, to a given location to new value.
     * @param locationName
     * @param questionID
     * @param newValue
     */
    handleChangeChooseMultiple(locationName, questionID, newValue) {

        this.setState(oldState => {
            const newState = {}; // object containing all buildings
            newState[locationName] = {...oldState[locationName]}; // object containing questions
            newState[locationName][questionID] = newValue; // question value

            return newState;
        });

    }

    /**
     * Returns a JSX element containing a question in the rating format.
     *
     * @param prompt
     * @param filter
     * @param questionID
     * @returns {*}
     */
    renderRatingQuestion(prompt, filter, questionID) {
        let possibleResponses;

        // filter only buildings that are of appropriate category.
        if (prompt !== "Rate each dining hall") {
            possibleResponses = this.props.buildings
                .filter(b => filter.includes(b.category))
                .map(b => b.name)
                .sort();
        } else {
            const diningHallNames = [
                "CC Dining Area",
                "Goat's Head",
                "Library Cafe",
                "Pulse On Dining (DAKA)"
            ];

            possibleResponses = this.props.buildings
                .filter(b => filter.includes(b.category) && diningHallNames.includes(b.name))
                .map(b => b.name)
                .sort();
        }

        // map each possible response to an input label
        const inputComponents = possibleResponses.map(locationName => (
            <label key={locationName+questionID}>
                <input type="number"
                       min="0"
                       max="10"
                       step="0.1"
                       value={this.state[locationName][questionID]}
                       onChange={event => this.handleChangeRating(locationName, questionID, event.target.value)}
                />
                <h5>/10</h5>
                {locationName}
            </label>
        ));

        return (
            <div className="question rating-question" key={questionID}>
                <h2>{prompt}</h2>
                <h3>{this.helpText.RATING}</h3>
                <div className="answers-container">
                    {inputComponents}
                </div>
                <hr/>
            </div>
        );
    }

    /**
     * Renders a multiple choice question
     * @param prompt
     * @param filter
     * @param questionID
     * @returns {*}
     */
    renderChooseOneQuestion(prompt, filter, questionID) {

        // filter only buildings that are of appropriate category.
        const possibleResponses = this.props.buildings
            .filter(b => filter.includes(b.category))
            .map(b => b.name)
            .sort();

        // map each possible response to an input label
        const inputComponents = possibleResponses.map(locationName => (
            <label key={locationName+questionID}>
                <input type="radio"
                       value={true}
                       checked={this.state[locationName][questionID]}
                       onChange={event => this.handleChangeChooseOne(locationName, possibleResponses.filter(res => res !== locationName), questionID, Boolean(event.target.value))}
                />
                {locationName}
            </label>
        ));

        return (
            <div className="question rating-question" key={questionID}>
                <h2>{prompt}</h2>
                <h3>{this.helpText.CHOOSE_ONE}</h3>
                <div className="answers-container">
                    {inputComponents}
                </div>
                <hr/>
            </div>
        );
    }

    /**
     * Renders a multiple choice question
     * @param prompt
     * @param filter
     * @param questionID
     * @returns {*}
     */
    renderChooseMultipleQuestion(prompt, filter, questionID) {

        // filter only buildings that are of appropriate category.
        const possibleResponses = this.props.buildings
            .filter(b => filter.includes(b.category))
            .map(b => b.name)
            .sort();

        // map each possible response to an input label
        const inputComponents = possibleResponses.map(locationName => (
            <label className="checkbox-label" key={locationName+questionID}>
                <input type="checkbox"
                       checked={this.state[locationName][questionID]}
                       onChange={event => this.handleChangeChooseMultiple(
                           locationName,
                           questionID,
                           event.target.checked)}
                />
                <span className="checkbox-custom rectangular"/>
                {locationName}
            </label>
        ));

        return (
            <div className="question rating-question" key={questionID}>
                <h2>{prompt}</h2>
                <h3>{this.helpText.CHOOSE_MULTIPLE}</h3>
                <div className="answers-container">
                    {inputComponents}
                </div>
                <hr/>
            </div>
        );

    }

    /**
     * Renders all questions in questionnaire
     * @returns {*[]}
     */
    renderQuestions() {
        const categories = Object.keys(buildingQuestions);

        // iterate through each category
        return categories.map(category => (
            // iterate through questions in a category
            buildingQuestions[category].map(({type, prompt, filter}, index) => {
                switch (type) {

                    case "RATING":
                        return this.renderRatingQuestion(prompt, filter, `${category}_${index}`);
                    case "CHOOSE_ONE":
                        return this.renderChooseOneQuestion(prompt, filter, `${category}_${index}`);
                    case "CHOOSE_MULTIPLE":
                        return this.renderChooseMultipleQuestion(prompt, filter, `${category}_${index}`);
                    default:
                        throw new Error("Question type not accounted for!");

                }

            })
        ));

    }

    /**
     * Submits responses to back end API;
     * @returns {null}
     */
    submitResponses() {

        const convertState = () => {
            return this.props.buildings.map(building => ({
                "buildingName": building.name,
                ...this.state[building.name]
            }));
        };

        const backEndUrl = "https://api.leogons.com/datavis/campus-survey/submit";
        const init = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                profile: {
                    "gradeLevel": this.state.gradeLevel,
                    "age": this.state.age,
                    "major": this.state.major,
                    "residence": this.state.residence
                },
                response: convertState()
            })
        };

        fetch(backEndUrl, init)
            .then(ans => ans.json())
            .then(() => {
                alert("Response successfully submitted!");
                this.setState({
                    "formSubmitted": true
                })
            });

    }

    render() {

        const avoidGrays = (input) => {
            if (input > 0.5 && input < 0.7) return 0.7;
            else return input;
        };

        const progressElementStyle = {
            "color": interpolateGreys(avoidGrays(1 - this.state.percentComplete / 100)),
            "backgroundColor": interpolateGreens(this.state.percentComplete / 100),
            "cursor": this.state.percentComplete === 100 ? "pointer" : "default"
        };

        return (
            <div id="questionnaire" onScroll={this.handleScroll}>
                <div className="question-container">
                    <div className="question">
                        <h2>Welcome to the comprehensive WPI campus survey!</h2>
                        <h3>A data visualization endeavor by Léo Gonsalves.</h3>
                        <p>The objective of this project is to gather qualitative data
                            about different aspects of a variety of WPI locations. The first set of questions
                            will form a profile of the subject responding to the questionnaire.
                            Its purpose is to provide a variety of filters to the visualization. </p>
                        <p> The other sets of questions will require your utmost honesty. Please answer
                            them as openly as possible, and as thoroughly as possible. Your answers
                            will help draw an accurate map of WPI from the view of the student body.</p>
                        <p> A link to the visualization can be found here. </p>
                        <p> About the author</p>
                        <hr/>
                    </div>
                    <button className={"progress-overlay"}
                            style={progressElementStyle}
                            onClick={() => this.state.percentComplete < 100 ?
                                null : this.submitResponses()} >
                        {this.state.percentComplete < 100 ?
                            `${this.state.percentComplete}% Complete${ this.state.percentComplete > 85 ? "! Almost done!" : "."}` :
                            "You're done! Click here to submit!"
                        }
                    </button>
                    {this.renderProfileQuestions()}
                    {this.renderQuestions()}
                    {this.state.formSubmitted ? <Redirect to="/vis" /> : null}
                </div>
            </div>
        );
    }
}

Questionnaire.propTypes = {
    "buildings": PropTypes.arrayOf(PropTypes.shape({
        "name": PropTypes.string,
        "category": PropTypes.string
    }))
};

export default Questionnaire;
