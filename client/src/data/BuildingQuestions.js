export default {
  "STUDY_QUALITY": [
    {
      "prompt": "How enjoyable is having a lecture in the following buildings?",
      "type": "RATING",
      "filter": ["building"]
    },
    {
      "prompt": "How easy/hard is it to find lecture rooms, exits, or bathrooms?",
      "type": "RATING",
      "filter": ["building"]
    },
    {
      "prompt": "How noisy are the following buildings?",
      "type": "RATING",
      "filter": ["building"]
    },
    {
      "prompt": "How comfortable, in general, are the rooms in the following buildings?",
      "type": "RATING",
      "filter": ["building"]
    },
    {
      "prompt": "How appropriate for group meetings are the following buildings?",
      "type": "RATING",
      "filter": ["building"]
    },
    {
      "prompt": "How appropriate for studying alone are the following buildings?",
      "type": "RATING",
      "filter": ["building"]
    },
    {
      "prompt": "Where did you find yourself working on your IQP and/or MQP the most?",
      "type": "CHOOSE_MULTIPLE",
      "filter": ["building", "poi", "residenceHall"]
    },
    {
      "prompt": "Where did you find yourself studying for exams the most?",
      "type": "CHOOSE_MULTIPLE",
      "filter": ["building", "poi", "residenceHall"]
    },
    {
      "prompt": "What is your favorite spot for studying for finals/midterms?",
      "type": "CHOOSE_ONE",
      "filter": ["building", "poi", "residenceHall"]
    },
    {
      "prompt": "What is your LEAST favorite spot for studying for finals/midterms?",
      "type": "CHOOSE_ONE",
      "filter": ["building", "poi", "residenceHall"]
    },
    {
      "prompt": "How likely are you to skip a class in the following buildings?",
      "type": "RATING",
      "filter": ["building"]
    }
  ],
  "LIVING_AND_EATING": [
    {
      "prompt": "Best / worst places to have a meal at?",
      "type": "RATING",
      "filter": ["building", "poi", "residenceHall"]
    },
    {
      "prompt": "Best / worst places to relax after class?",
      "type": "RATING",
      "filter": ["building", "poi", "residenceHall"]
    },
    {
      "prompt": "Best / worst places to chill with friends?",
      "type": "RATING",
      "filter": ["building", "poi", "residenceHall"]
    },
    {
      "prompt": "Best / worst places to do extra-curriculars (club meetings, exercise, etc)?",
      "type": "RATING",
      "filter": ["building", "poi", "residenceHall"]
    },
    {
      "prompt": "Best / worst places to nap?",
      "type": "RATING",
      "filter": ["building", "poi", "residenceHall"]
    },
    {
      "prompt": "Which places did you spend the most time at this school year?",
      "type": "RATING",
      "filter": ["building", "poi", "residenceHall"]
    },
    {
      "prompt": "Rate each dining hall",
      "type": "RATING",
      "filter": ["residenceHall"]
    }
  ],
  "MISC": [
    {
      "prompt": "Best / worst places to poop at?",
      "type": "RATING",
      "filter": ["building", "residenceHall"]
    },
    {
      "prompt": "How good looking are the students that frequent these locations?",
      "type": "RATING",
      "filter": ["building", "poi"]
    },
    {
      "prompt": "Rate the smell of each location",
      "type": "RATING",
      "filter": ["building", "poi", "residenceHall"]
    },
    {
      "prompt": "Most / least photogenic locations on campus",
      "type": "RATING",
      "filter": ["building", "poi", "residenceHall"]
    },
    {
      "prompt": "Best / worst places to be at after midnight",
      "type": "RATING",
      "filter": ["building", "poi", "residenceHall"]
    }
  ]
};