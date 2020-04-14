
const stepOne = {
    id: "step-one",
    attachTo: {
        element: ".options-overlay",
        on: "left"
    },
    title: "Select a metric",
    text: ["Changing metrics automatically updates the visualization!"],
    buttons: [
        {
            classes: 'shepherd-button-primary',
            text: '>',
            type: 'next'
        }
    ]
};

const stepTwo = {
    id: "step-one",
    attachTo: {
        element: "#building-RubinCampusCenter",
        on: "left"
    },
    title: "Select A Building",
    text: ["You can select buildings on campus to see more information about them.", "You can also drag and zoom on the map to see more info."],
    buttons: [
        {
            classes: 'shepherd-button-primary',
            text: '<',
            type: 'back'
        },
        {
            classes: 'shepherd-button-primary',
            text: 'done!',
            type: 'next'
        }
    ]
};

export default [
    stepOne,
    stepTwo
];