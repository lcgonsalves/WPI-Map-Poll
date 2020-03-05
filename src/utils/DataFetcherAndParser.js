import {metricToDescriptor, metricToQuestionType, metricToColorInterpolation} from "../data/MetricConverter";
import BuildingQuestions from "../data/BuildingQuestions";

/**
 * Responsible for converting questions into a
 * descriptive qualitative title as well as doing most data manipulation
 * when fetching responses.
 */
class DataFetcherAndParser {
    static url = "https://api.leogons.com/datavis/";

    /**
     * Parses data and returns a question-mapped
     * set of averages for each building
     * @return {Promise<Object>} data
     */
    static getAverages() {

        const init = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        };

        return fetch(`${this.url}/campus-survey/responses`, init)
            .then(res => res.json());
    }

    /**
     * Returns type of question in order to properly render
     * @param question
     * @returns {*}
     */
    static getTypeOf(question) {
        return metricToQuestionType[question];
    }

    /**
     * Returns descriptive text for displaying when choosing a metric.
     * @param question
     * @returns {*}
     */
    static getQuestionDescriptor(question) {
        return metricToDescriptor[question];
    }

    static getAllQuestionIDs() {
        return Object.keys(metricToDescriptor);
    }

    /**
     * Returns a random metric. Useful for initializing graph to
     * a different metric each initialization.
     */
    static pickRandomMetric() {
        const metrics = Object.keys(metricToDescriptor);
        return metrics[Math.floor(Math.random() * metrics.length)];
    }

    /**
     * Returns a color value
     * @param metric
     * @param value must be between 0-1
     */
    static getColor(metric, value) {
        return metricToColorInterpolation[metric](value);
    }

}

export default DataFetcherAndParser;