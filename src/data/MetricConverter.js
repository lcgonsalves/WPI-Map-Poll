import {
    interpolateBrBG,
    interpolateGreens,
    interpolateRdBu, interpolateRdGy, interpolateRdPu, interpolateRdYlBu,
    interpolateRdYlGn,
    interpolateReds,
    interpolateSpectral, interpolateYlGn, interpolateYlOrRd
} from "d3-scale-chromatic";

const metricToDescriptor = {
    STUDY_QUALITY_0: "Lecture Enjoyability",
    STUDY_QUALITY_1: "Building Navigability",
    STUDY_QUALITY_2: "Noise Rating (lower is better)",
    STUDY_QUALITY_3: "Comfort Rating",
    STUDY_QUALITY_4: "Group Meeting Accommodation Rating",
    STUDY_QUALITY_5: "Solo Studying Rating",
    STUDY_QUALITY_6: "Best for IQP/MQP Rank",
    STUDY_QUALITY_7: "Best Exam Study Spot Rank",
    STUDY_QUALITY_8: "Best Final/Midterm Study Spot Rank",
    STUDY_QUALITY_9: "Worst Final/Midterm Study Spot Rank",
    STUDY_QUALITY_10: "Skip Class Rating",
    LIVING_AND_EATING_0: "Should I have a meal here?",
    LIVING_AND_EATING_1: "Relaxmeter",
    LIVING_AND_EATING_2: "How appropriate is this place to chill with friends?",
    LIVING_AND_EATING_3: "Extra curricular activity rating",
    LIVING_AND_EATING_4: "Nap Spot Rating",
    LIVING_AND_EATING_5: "Popularity",
    LIVING_AND_EATING_6: "Dining Hall Rating",
    MISC_0: "How enjoyable is it to poop here?",
    MISC_1: "Student beauty meter",
    MISC_2: "Photogenic Rating",
    MISC_3: "Post-Midnight Rating"
};

const metricToColorInterpolation = {
    STUDY_QUALITY_0: interpolateRdYlGn,
    STUDY_QUALITY_1: interpolateRdYlBu,
    STUDY_QUALITY_2: val => interpolateRdYlBu(1 - val),
    STUDY_QUALITY_3: val => interpolateRdPu(1 - val),
    STUDY_QUALITY_4: interpolateRdYlBu,
    STUDY_QUALITY_5: interpolateRdYlBu,
    STUDY_QUALITY_6: interpolateYlGn,
    STUDY_QUALITY_7: interpolateYlGn,
    STUDY_QUALITY_8: interpolateYlGn,
    STUDY_QUALITY_9: interpolateYlOrRd,
    STUDY_QUALITY_10: interpolateYlOrRd,
    LIVING_AND_EATING_0: interpolateRdYlGn,
    LIVING_AND_EATING_1: interpolateRdBu,
    LIVING_AND_EATING_2: interpolateRdBu,
    LIVING_AND_EATING_3: interpolateRdYlGn,
    LIVING_AND_EATING_4: interpolateBrBG,
    LIVING_AND_EATING_5: val => interpolateRdGy(1- val),
    LIVING_AND_EATING_6: interpolateRdYlGn,
    MISC_0: interpolateRdYlGn,
    MISC_1: interpolateRdYlGn,
    MISC_2: interpolateRdYlGn,
    MISC_3: interpolateRdYlGn
};


const metricToQuestionType = {
    STUDY_QUALITY_0: "RATING",
    STUDY_QUALITY_1: "RATING",
    STUDY_QUALITY_2: "RATING",
    STUDY_QUALITY_3: "RATING",
    STUDY_QUALITY_4: "RATING",
    STUDY_QUALITY_5: "RATING",
    STUDY_QUALITY_6: "CHOOSE_MANY",
    STUDY_QUALITY_7: "CHOOSE_MANY",
    STUDY_QUALITY_8: "CHOOSE_ONE",
    STUDY_QUALITY_9: "CHOOSE_ONE",
    STUDY_QUALITY_10: "RATING",
    LIVING_AND_EATING_0: "RATING",
    LIVING_AND_EATING_1: "RATING",
    LIVING_AND_EATING_2: "RATING",
    LIVING_AND_EATING_3: "RATING",
    LIVING_AND_EATING_4: "RATING",
    LIVING_AND_EATING_5: "RATING",
    LIVING_AND_EATING_6: "RATING",
    MISC_0: "RATING",
    MISC_1: "RATING",
    MISC_2: "RATING",
    MISC_3: "RATING"
};

export {
    metricToDescriptor,
    metricToQuestionType,
    metricToColorInterpolation
};
