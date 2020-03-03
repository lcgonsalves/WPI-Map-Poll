import React, {Component} from "react";
import PropTypes from "prop-types";
import buildingQuestions from "../data/BuildingQuestions";
import "../css/Questionnaire.css";

/**
 * Provides functionality for generating JSX elements for a
 * given question or array of questions. Must be initialized to a list of buildings.
 */
class Questionnaire extends Component {
    helpText = {
        "RATING": "Please rate all the given buildings from 0-10",
        "CHOOSE_ONE": "Please pick one answer from the set of answers",
        "CHOOSE_MULTIPLE": "Please pick all answers that apply"
    };

    constructor(props) {
        super(props);

        const {
            buildings
        } = props;

        // initialize static profiling questions state tracking
        this.state = {};

        // initialize building response state tracking
        buildings.forEach(building => {
            this.state[building.name] = Questionnaire.initializeResponsesStateForBuilding(building);
        });

    }

    /**
     *
     * @param {Object} building contains name and category
     * @param {Object} questions contains questions with IDs
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
                    val = 0;
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
                    val = 0;
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
                    val = 0;
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

            console.log("new state object is: ", newState);

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

        // filter only buildings that are of appropriate category.
        const possibleResponses = this.props.buildings
                                            .filter(b => filter.includes(b.category))
                                            .map(b => b.name);

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
                {locationName}
            </label>
        ));

        return (
            <div className="question rating-question">
                <h2>{prompt}</h2>
                <h3>{this.helpText.RATING}</h3>
                <div className="answers-container">
                    {inputComponents}
                </div>
            </div>
        );
    }

    // todo: render choose one
    // todo: render choose multiple
    // todo: render profile questions

    render() {
        return (
            <div>
                {this.renderRatingQuestion(buildingQuestions.STUDY_QUALITY[0].prompt, buildingQuestions.STUDY_QUALITY[0].filter, "STUDY_QUALITY_0")}
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
