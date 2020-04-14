import Shepherd from "shepherd.js";

const initTour = () => {

    const tourOptions = {
        defaultStepOptions: {
            classes: 'tour-overlay',
            arrow: true,
            cancelIcon: {
                enabled: true
            }
        },
        useModalOverlay: true
    };

    const tour = new Shepherd.Tour(tourOptions);

    // define steps
    const welcome = {
        id: "step-00-welcome",
        attachTo: {
            element: "",
            on: ""
        },
        title: "Welcome!",
        arrow: false,
        text: [
            "Welcome to the WPI Campus map visualization. This was the final project for the Data Visualization class, made by Leo Gonsalves. Please enjoy",
            "<br><br><a href='https://www.leogons.com/about'>About the Author</a>",
            "<br><br><a href='https://www.leogons.com/portfolio/wpi-map'>About the Project</a>"
        ],
        buttons: [
            {
                classes: 'shepherd-button-secondary',
                text: 'ok!',
                action: tour.cancel
            },
            {
                classes: 'shepherd-button-primary',
                text: 'tutorial',
                action: tour.next
            }
        ]
    };
    const metricStep = {
        id: "step-01-metric",
        attachTo: {
            element: ".options-overlay",
            on: "bottom"
        },
        title: "Select a metric",
        text: ["Changing metrics automatically updates the visualization. Select \"Group Meeting Accommodation Rating\" to proceed."],
        buttons: [
            {
                classes: 'shepherd-button-secondary',
                text: 'cancel',
                action: tour.cancel
            }
        ]
    };
    const mapElementStep = {
        id: "step-02-select-element",
        attachTo: {
            element: "#path-higgins-labs",
            on: "bottom"
        },
        title: "Select A Building",
        text: ["You can select buildings on campus to see more information about them", "and you can also drag and zoom on the map to see more info. Select the Higgins Labs building (highlighted) to proceed!"],
        buttons: [
            {
                classes: 'shepherd-button-primary',
                text: '<',
                action: tour.back
            }
        ]
    };
    const tooltipTitleStep = {
        id: "step-03-tooltip-title",
        attachTo: {
            element: "#tooltip-title",
            on: "top"
        },
        title: "Location Name",
        text: ["This element displays the building / point of interest / dining hall / residence hall name. Each category is represented by a different color."],
        buttons: [
            {
                classes: 'shepherd-button-primary',
                text: '<',
                action: tour.back
            },
            {
                classes: 'shepherd-button-primary',
                text: '>',
                action: tour.next
            }
        ]
    };
    const tooltipValueStep = {
        id: "step-04-tooltip-value",
        attachTo: {
            element: "#tooltip-value",
            on: "top"
        },
        title: "Location Rating",
        text: ["This element displays the rating the selected building received, and it is color coded to the relative position it is in the whole list of rated buildings."],
        buttons: [
            {
                classes: 'shepherd-button-primary',
                text: '<',
                action: tour.back
            },
            {
                classes: 'shepherd-button-primary',
                text: '>',
                action: tour.next
            }
        ]
    };
    const tooltipRankStep = {
        id: "step-05-tooltip-rank",
        attachTo: {
            element: "#tooltip-rank",
            on: "top"
        },
        title: "Location Ranking",
        text: ["This element displays the ranking the location is."],
        buttons: [
            {
                classes: 'shepherd-button-primary',
                text: '<',
                action: tour.back
            },
            {
                classes: 'shepherd-button-primary',
                text: 'done!',
                action: tour.next
            }
        ]
    };

    // add steps
    tour.addStep(welcome);
    tour.addStep(metricStep);
    tour.addStep(mapElementStep);
    tour.addStep(tooltipTitleStep);
    tour.addStep(tooltipValueStep);
    tour.addStep(tooltipRankStep);

    return tour;

};

export default initTour;