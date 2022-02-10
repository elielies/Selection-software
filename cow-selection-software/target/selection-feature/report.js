$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("selection/Selection.feature");
formatter.feature({
  "line": 1,
  "name": "Cow selection",
  "description": "",
  "id": "cow-selection",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Cow selection",
  "description": "",
  "id": "cow-selection;cow-selection",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens selection panel",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Chooses first cow \"\u003ccow1\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Chooses the gender of first cow \"\u003cgenderCow1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Chooses the age of first cow \u003cageCow1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Chooses how long it has been since the last pregnancy \u003clastPregnancy\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Chooses second cow \"\u003ccow2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Chooses the gender of second cow \"\u003cgenderCow2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Chooses the age of second cow \u003cageCow2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Presses the confirm selection button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Sees message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "cow-selection;cow-selection;",
  "rows": [
    {
      "cells": [
        "cow1",
        "genderCow1",
        "ageCow1",
        "lastPregnancy",
        "cow2",
        "genderCow2",
        "ageCow2",
        "message"
      ],
      "line": 16,
      "id": "cow-selection;cow-selection;;1"
    },
    {
      "cells": [
        "Laika",
        "female",
        "4",
        "12",
        "Bob",
        "male",
        "3",
        "Good selection!"
      ],
      "line": 17,
      "id": "cow-selection;cow-selection;;2"
    },
    {
      "cells": [
        "Laika",
        "female",
        "1",
        "12",
        "Bob",
        "male",
        "3",
        "Cow is too young!"
      ],
      "line": 18,
      "id": "cow-selection;cow-selection;;3"
    },
    {
      "cells": [
        "Laika",
        "female",
        "4",
        "12",
        "Bob",
        "male",
        "1",
        "Cow is too young!"
      ],
      "line": 19,
      "id": "cow-selection;cow-selection;;4"
    },
    {
      "cells": [
        "Laika",
        "female",
        "4",
        "5",
        "Bob",
        "male",
        "3",
        "Cant give birth within a period of less than ten months!"
      ],
      "line": 20,
      "id": "cow-selection;cow-selection;;5"
    },
    {
      "cells": [
        "Laika",
        "female",
        "4",
        "12",
        "Jil",
        "female",
        "3",
        "Cant breed two female cows!"
      ],
      "line": 21,
      "id": "cow-selection;cow-selection;;6"
    },
    {
      "cells": [
        "Bil",
        "male",
        "4",
        "0",
        "Bob",
        "male",
        "3",
        "Cant breed two male cows!"
      ],
      "line": 22,
      "id": "cow-selection;cow-selection;;7"
    },
    {
      "cells": [
        "",
        "female",
        "4",
        "12",
        "Bob",
        "male",
        "3",
        "Enter cows name!"
      ],
      "line": 23,
      "id": "cow-selection;cow-selection;;8"
    },
    {
      "cells": [
        "Laika",
        "female",
        "4",
        "12",
        "",
        "male",
        "3",
        "Enter cows name!"
      ],
      "line": 24,
      "id": "cow-selection;cow-selection;;9"
    },
    {
      "cells": [
        "",
        "female",
        "4",
        "12",
        "",
        "male",
        "3",
        "Enter cows name!"
      ],
      "line": 25,
      "id": "cow-selection;cow-selection;;10"
    },
    {
      "cells": [
        "Laika",
        "",
        "4",
        "12",
        "Bob",
        "male",
        "3",
        "Enter cows gender!"
      ],
      "line": 26,
      "id": "cow-selection;cow-selection;;11"
    },
    {
      "cells": [
        "Laika",
        "female",
        "4",
        "12",
        "Bob",
        "",
        "3",
        "Enter cows gender!"
      ],
      "line": 27,
      "id": "cow-selection;cow-selection;;12"
    },
    {
      "cells": [
        "Laika",
        "",
        "4",
        "12",
        "Bob",
        "",
        "3",
        "Enter cows gender!"
      ],
      "line": 28,
      "id": "cow-selection;cow-selection;;13"
    },
    {
      "cells": [
        "Milka",
        "female",
        "4",
        "12",
        "Bob",
        "male",
        "3",
        "Animal not registered in database!"
      ],
      "line": 29,
      "id": "cow-selection;cow-selection;;14"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Cow selection",
  "description": "",
  "id": "cow-selection;cow-selection;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens selection panel",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Chooses first cow \"Laika\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Chooses the gender of first cow \"female\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Chooses the age of first cow 4",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Chooses how long it has been since the last pregnancy 12",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Chooses second cow \"Bob\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Chooses the gender of second cow \"male\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Chooses the age of second cow 3",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Presses the confirm selection button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Sees message \"Good selection!\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectionSteps.openSelectionPanel()"
});
formatter.result({
  "duration": 695480800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laika",
      "offset": 19
    }
  ],
  "location": "SelectionSteps.chooseCow1(String)"
});
formatter.result({
  "duration": 4323500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "female",
      "offset": 33
    }
  ],
  "location": "SelectionSteps.chooseGenderCow1(String)"
});
formatter.result({
  "duration": 109600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 29
    }
  ],
  "location": "SelectionSteps.chooseAgeCow1(Integer)"
});
formatter.result({
  "duration": 349300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 54
    }
  ],
  "location": "SelectionSteps.chooseLastPregnancy(Integer)"
});
formatter.result({
  "duration": 145700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bob",
      "offset": 20
    }
  ],
  "location": "SelectionSteps.chooseCow2(String)"
});
formatter.result({
  "duration": 124100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 34
    }
  ],
  "location": "SelectionSteps.chooseGenderCow2(String)"
});
formatter.result({
  "duration": 207300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "SelectionSteps.chooseAgeCow2(Integer)"
});
formatter.result({
  "duration": 198300,
  "status": "passed"
});
formatter.match({
  "location": "SelectionSteps.confirmSelection()"
});
formatter.result({
  "duration": 6437900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Good selection!",
      "offset": 14
    }
  ],
  "location": "SelectionSteps.message(String)"
});
formatter.result({
  "duration": 3193900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Cow selection",
  "description": "",
  "id": "cow-selection;cow-selection;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens selection panel",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Chooses first cow \"Laika\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Chooses the gender of first cow \"female\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Chooses the age of first cow 1",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Chooses how long it has been since the last pregnancy 12",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Chooses second cow \"Bob\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Chooses the gender of second cow \"male\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Chooses the age of second cow 3",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Presses the confirm selection button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Sees message \"Cow is too young!\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectionSteps.openSelectionPanel()"
});
formatter.result({
  "duration": 424300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laika",
      "offset": 19
    }
  ],
  "location": "SelectionSteps.chooseCow1(String)"
});
formatter.result({
  "duration": 455600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "female",
      "offset": 33
    }
  ],
  "location": "SelectionSteps.chooseGenderCow1(String)"
});
formatter.result({
  "duration": 81200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "SelectionSteps.chooseAgeCow1(Integer)"
});
formatter.result({
  "duration": 115900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 54
    }
  ],
  "location": "SelectionSteps.chooseLastPregnancy(Integer)"
});
formatter.result({
  "duration": 149800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bob",
      "offset": 20
    }
  ],
  "location": "SelectionSteps.chooseCow2(String)"
});
formatter.result({
  "duration": 82700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 34
    }
  ],
  "location": "SelectionSteps.chooseGenderCow2(String)"
});
formatter.result({
  "duration": 96500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "SelectionSteps.chooseAgeCow2(Integer)"
});
formatter.result({
  "duration": 118100,
  "status": "passed"
});
formatter.match({
  "location": "SelectionSteps.confirmSelection()"
});
formatter.result({
  "duration": 49200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cow is too young!",
      "offset": 14
    }
  ],
  "location": "SelectionSteps.message(String)"
});
formatter.result({
  "duration": 86300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Cow selection",
  "description": "",
  "id": "cow-selection;cow-selection;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens selection panel",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Chooses first cow \"Laika\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Chooses the gender of first cow \"female\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Chooses the age of first cow 4",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Chooses how long it has been since the last pregnancy 12",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Chooses second cow \"Bob\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Chooses the gender of second cow \"male\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Chooses the age of second cow 1",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Presses the confirm selection button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Sees message \"Cow is too young!\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectionSteps.openSelectionPanel()"
});
formatter.result({
  "duration": 66500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laika",
      "offset": 19
    }
  ],
  "location": "SelectionSteps.chooseCow1(String)"
});
formatter.result({
  "duration": 81400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "female",
      "offset": 33
    }
  ],
  "location": "SelectionSteps.chooseGenderCow1(String)"
});
formatter.result({
  "duration": 80700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 29
    }
  ],
  "location": "SelectionSteps.chooseAgeCow1(Integer)"
});
formatter.result({
  "duration": 614800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 54
    }
  ],
  "location": "SelectionSteps.chooseLastPregnancy(Integer)"
});
formatter.result({
  "duration": 140500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bob",
      "offset": 20
    }
  ],
  "location": "SelectionSteps.chooseCow2(String)"
});
formatter.result({
  "duration": 135600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 34
    }
  ],
  "location": "SelectionSteps.chooseGenderCow2(String)"
});
formatter.result({
  "duration": 127300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "SelectionSteps.chooseAgeCow2(Integer)"
});
formatter.result({
  "duration": 123100,
  "status": "passed"
});
formatter.match({
  "location": "SelectionSteps.confirmSelection()"
});
formatter.result({
  "duration": 43400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cow is too young!",
      "offset": 14
    }
  ],
  "location": "SelectionSteps.message(String)"
});
formatter.result({
  "duration": 163200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Cow selection",
  "description": "",
  "id": "cow-selection;cow-selection;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens selection panel",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Chooses first cow \"Laika\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Chooses the gender of first cow \"female\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Chooses the age of first cow 4",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Chooses how long it has been since the last pregnancy 5",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Chooses second cow \"Bob\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Chooses the gender of second cow \"male\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Chooses the age of second cow 3",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Presses the confirm selection button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Sees message \"Cant give birth within a period of less than ten months!\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectionSteps.openSelectionPanel()"
});
formatter.result({
  "duration": 72200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laika",
      "offset": 19
    }
  ],
  "location": "SelectionSteps.chooseCow1(String)"
});
formatter.result({
  "duration": 98100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "female",
      "offset": 33
    }
  ],
  "location": "SelectionSteps.chooseGenderCow1(String)"
});
formatter.result({
  "duration": 87100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 29
    }
  ],
  "location": "SelectionSteps.chooseAgeCow1(Integer)"
});
formatter.result({
  "duration": 138200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 54
    }
  ],
  "location": "SelectionSteps.chooseLastPregnancy(Integer)"
});
formatter.result({
  "duration": 123800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bob",
      "offset": 20
    }
  ],
  "location": "SelectionSteps.chooseCow2(String)"
});
formatter.result({
  "duration": 118500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 34
    }
  ],
  "location": "SelectionSteps.chooseGenderCow2(String)"
});
formatter.result({
  "duration": 329700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "SelectionSteps.chooseAgeCow2(Integer)"
});
formatter.result({
  "duration": 123500,
  "status": "passed"
});
formatter.match({
  "location": "SelectionSteps.confirmSelection()"
});
formatter.result({
  "duration": 75100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cant give birth within a period of less than ten months!",
      "offset": 14
    }
  ],
  "location": "SelectionSteps.message(String)"
});
formatter.result({
  "duration": 91200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Cow selection",
  "description": "",
  "id": "cow-selection;cow-selection;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens selection panel",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Chooses first cow \"Laika\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Chooses the gender of first cow \"female\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Chooses the age of first cow 4",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Chooses how long it has been since the last pregnancy 12",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Chooses second cow \"Jil\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Chooses the gender of second cow \"female\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Chooses the age of second cow 3",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Presses the confirm selection button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Sees message \"Cant breed two female cows!\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectionSteps.openSelectionPanel()"
});
formatter.result({
  "duration": 64100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laika",
      "offset": 19
    }
  ],
  "location": "SelectionSteps.chooseCow1(String)"
});
formatter.result({
  "duration": 94600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "female",
      "offset": 33
    }
  ],
  "location": "SelectionSteps.chooseGenderCow1(String)"
});
formatter.result({
  "duration": 82300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 29
    }
  ],
  "location": "SelectionSteps.chooseAgeCow1(Integer)"
});
formatter.result({
  "duration": 366200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 54
    }
  ],
  "location": "SelectionSteps.chooseLastPregnancy(Integer)"
});
formatter.result({
  "duration": 168200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jil",
      "offset": 20
    }
  ],
  "location": "SelectionSteps.chooseCow2(String)"
});
formatter.result({
  "duration": 85300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "female",
      "offset": 34
    }
  ],
  "location": "SelectionSteps.chooseGenderCow2(String)"
});
formatter.result({
  "duration": 127700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "SelectionSteps.chooseAgeCow2(Integer)"
});
formatter.result({
  "duration": 115600,
  "status": "passed"
});
formatter.match({
  "location": "SelectionSteps.confirmSelection()"
});
formatter.result({
  "duration": 50600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cant breed two female cows!",
      "offset": 14
    }
  ],
  "location": "SelectionSteps.message(String)"
});
formatter.result({
  "duration": 84300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Cow selection",
  "description": "",
  "id": "cow-selection;cow-selection;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens selection panel",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Chooses first cow \"Bil\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Chooses the gender of first cow \"male\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Chooses the age of first cow 4",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Chooses how long it has been since the last pregnancy 0",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Chooses second cow \"Bob\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Chooses the gender of second cow \"male\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Chooses the age of second cow 3",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Presses the confirm selection button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Sees message \"Cant breed two male cows!\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectionSteps.openSelectionPanel()"
});
formatter.result({
  "duration": 66100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bil",
      "offset": 19
    }
  ],
  "location": "SelectionSteps.chooseCow1(String)"
});
formatter.result({
  "duration": 81800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 33
    }
  ],
  "location": "SelectionSteps.chooseGenderCow1(String)"
});
formatter.result({
  "duration": 81600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 29
    }
  ],
  "location": "SelectionSteps.chooseAgeCow1(Integer)"
});
formatter.result({
  "duration": 365600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 54
    }
  ],
  "location": "SelectionSteps.chooseLastPregnancy(Integer)"
});
formatter.result({
  "duration": 101000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bob",
      "offset": 20
    }
  ],
  "location": "SelectionSteps.chooseCow2(String)"
});
formatter.result({
  "duration": 74700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 34
    }
  ],
  "location": "SelectionSteps.chooseGenderCow2(String)"
});
formatter.result({
  "duration": 78800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "SelectionSteps.chooseAgeCow2(Integer)"
});
formatter.result({
  "duration": 132400,
  "status": "passed"
});
formatter.match({
  "location": "SelectionSteps.confirmSelection()"
});
formatter.result({
  "duration": 52000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cant breed two male cows!",
      "offset": 14
    }
  ],
  "location": "SelectionSteps.message(String)"
});
formatter.result({
  "duration": 86000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Cow selection",
  "description": "",
  "id": "cow-selection;cow-selection;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens selection panel",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Chooses first cow \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Chooses the gender of first cow \"female\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Chooses the age of first cow 4",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Chooses how long it has been since the last pregnancy 12",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Chooses second cow \"Bob\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Chooses the gender of second cow \"male\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Chooses the age of second cow 3",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Presses the confirm selection button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Sees message \"Enter cows name!\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectionSteps.openSelectionPanel()"
});
formatter.result({
  "duration": 79300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "SelectionSteps.chooseCow1(String)"
});
formatter.result({
  "duration": 95600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "female",
      "offset": 33
    }
  ],
  "location": "SelectionSteps.chooseGenderCow1(String)"
});
formatter.result({
  "duration": 75700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 29
    }
  ],
  "location": "SelectionSteps.chooseAgeCow1(Integer)"
});
formatter.result({
  "duration": 115600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 54
    }
  ],
  "location": "SelectionSteps.chooseLastPregnancy(Integer)"
});
formatter.result({
  "duration": 130400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bob",
      "offset": 20
    }
  ],
  "location": "SelectionSteps.chooseCow2(String)"
});
formatter.result({
  "duration": 93300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 34
    }
  ],
  "location": "SelectionSteps.chooseGenderCow2(String)"
});
formatter.result({
  "duration": 68900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "SelectionSteps.chooseAgeCow2(Integer)"
});
formatter.result({
  "duration": 102900,
  "status": "passed"
});
formatter.match({
  "location": "SelectionSteps.confirmSelection()"
});
formatter.result({
  "duration": 249300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter cows name!",
      "offset": 14
    }
  ],
  "location": "SelectionSteps.message(String)"
});
formatter.result({
  "duration": 118700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Cow selection",
  "description": "",
  "id": "cow-selection;cow-selection;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens selection panel",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Chooses first cow \"Laika\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Chooses the gender of first cow \"female\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Chooses the age of first cow 4",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Chooses how long it has been since the last pregnancy 12",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Chooses second cow \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Chooses the gender of second cow \"male\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Chooses the age of second cow 3",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Presses the confirm selection button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Sees message \"Enter cows name!\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectionSteps.openSelectionPanel()"
});
formatter.result({
  "duration": 84800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laika",
      "offset": 19
    }
  ],
  "location": "SelectionSteps.chooseCow1(String)"
});
formatter.result({
  "duration": 80600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "female",
      "offset": 33
    }
  ],
  "location": "SelectionSteps.chooseGenderCow1(String)"
});
formatter.result({
  "duration": 88500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 29
    }
  ],
  "location": "SelectionSteps.chooseAgeCow1(Integer)"
});
formatter.result({
  "duration": 112200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 54
    }
  ],
  "location": "SelectionSteps.chooseLastPregnancy(Integer)"
});
formatter.result({
  "duration": 151600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "SelectionSteps.chooseCow2(String)"
});
formatter.result({
  "duration": 245300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 34
    }
  ],
  "location": "SelectionSteps.chooseGenderCow2(String)"
});
formatter.result({
  "duration": 87500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "SelectionSteps.chooseAgeCow2(Integer)"
});
formatter.result({
  "duration": 112600,
  "status": "passed"
});
formatter.match({
  "location": "SelectionSteps.confirmSelection()"
});
formatter.result({
  "duration": 33500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter cows name!",
      "offset": 14
    }
  ],
  "location": "SelectionSteps.message(String)"
});
formatter.result({
  "duration": 136800,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Cow selection",
  "description": "",
  "id": "cow-selection;cow-selection;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens selection panel",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Chooses first cow \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Chooses the gender of first cow \"female\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Chooses the age of first cow 4",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Chooses how long it has been since the last pregnancy 12",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Chooses second cow \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Chooses the gender of second cow \"male\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Chooses the age of second cow 3",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Presses the confirm selection button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Sees message \"Enter cows name!\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectionSteps.openSelectionPanel()"
});
formatter.result({
  "duration": 62200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "SelectionSteps.chooseCow1(String)"
});
formatter.result({
  "duration": 80700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "female",
      "offset": 33
    }
  ],
  "location": "SelectionSteps.chooseGenderCow1(String)"
});
formatter.result({
  "duration": 1046900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 29
    }
  ],
  "location": "SelectionSteps.chooseAgeCow1(Integer)"
});
formatter.result({
  "duration": 155200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 54
    }
  ],
  "location": "SelectionSteps.chooseLastPregnancy(Integer)"
});
formatter.result({
  "duration": 179000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "SelectionSteps.chooseCow2(String)"
});
formatter.result({
  "duration": 77600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 34
    }
  ],
  "location": "SelectionSteps.chooseGenderCow2(String)"
});
formatter.result({
  "duration": 121800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "SelectionSteps.chooseAgeCow2(Integer)"
});
formatter.result({
  "duration": 111300,
  "status": "passed"
});
formatter.match({
  "location": "SelectionSteps.confirmSelection()"
});
formatter.result({
  "duration": 38600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter cows name!",
      "offset": 14
    }
  ],
  "location": "SelectionSteps.message(String)"
});
formatter.result({
  "duration": 77300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Cow selection",
  "description": "",
  "id": "cow-selection;cow-selection;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens selection panel",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Chooses first cow \"Laika\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Chooses the gender of first cow \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Chooses the age of first cow 4",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Chooses how long it has been since the last pregnancy 12",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Chooses second cow \"Bob\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Chooses the gender of second cow \"male\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Chooses the age of second cow 3",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Presses the confirm selection button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Sees message \"Enter cows gender!\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectionSteps.openSelectionPanel()"
});
formatter.result({
  "duration": 67900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laika",
      "offset": 19
    }
  ],
  "location": "SelectionSteps.chooseCow1(String)"
});
formatter.result({
  "duration": 76400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "SelectionSteps.chooseGenderCow1(String)"
});
formatter.result({
  "duration": 82100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 29
    }
  ],
  "location": "SelectionSteps.chooseAgeCow1(Integer)"
});
formatter.result({
  "duration": 113200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 54
    }
  ],
  "location": "SelectionSteps.chooseLastPregnancy(Integer)"
});
formatter.result({
  "duration": 107200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bob",
      "offset": 20
    }
  ],
  "location": "SelectionSteps.chooseCow2(String)"
});
formatter.result({
  "duration": 85200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 34
    }
  ],
  "location": "SelectionSteps.chooseGenderCow2(String)"
});
formatter.result({
  "duration": 737700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "SelectionSteps.chooseAgeCow2(Integer)"
});
formatter.result({
  "duration": 110100,
  "status": "passed"
});
formatter.match({
  "location": "SelectionSteps.confirmSelection()"
});
formatter.result({
  "duration": 60400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter cows gender!",
      "offset": 14
    }
  ],
  "location": "SelectionSteps.message(String)"
});
formatter.result({
  "duration": 551500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Cow selection",
  "description": "",
  "id": "cow-selection;cow-selection;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens selection panel",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Chooses first cow \"Laika\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Chooses the gender of first cow \"female\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Chooses the age of first cow 4",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Chooses how long it has been since the last pregnancy 12",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Chooses second cow \"Bob\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Chooses the gender of second cow \"\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Chooses the age of second cow 3",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Presses the confirm selection button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Sees message \"Enter cows gender!\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectionSteps.openSelectionPanel()"
});
formatter.result({
  "duration": 82000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laika",
      "offset": 19
    }
  ],
  "location": "SelectionSteps.chooseCow1(String)"
});
formatter.result({
  "duration": 75400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "female",
      "offset": 33
    }
  ],
  "location": "SelectionSteps.chooseGenderCow1(String)"
});
formatter.result({
  "duration": 75800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 29
    }
  ],
  "location": "SelectionSteps.chooseAgeCow1(Integer)"
});
formatter.result({
  "duration": 108000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 54
    }
  ],
  "location": "SelectionSteps.chooseLastPregnancy(Integer)"
});
formatter.result({
  "duration": 125000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bob",
      "offset": 20
    }
  ],
  "location": "SelectionSteps.chooseCow2(String)"
});
formatter.result({
  "duration": 76900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 34
    }
  ],
  "location": "SelectionSteps.chooseGenderCow2(String)"
});
formatter.result({
  "duration": 1879100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "SelectionSteps.chooseAgeCow2(Integer)"
});
formatter.result({
  "duration": 117900,
  "status": "passed"
});
formatter.match({
  "location": "SelectionSteps.confirmSelection()"
});
formatter.result({
  "duration": 40900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter cows gender!",
      "offset": 14
    }
  ],
  "location": "SelectionSteps.message(String)"
});
formatter.result({
  "duration": 75200,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Cow selection",
  "description": "",
  "id": "cow-selection;cow-selection;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens selection panel",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Chooses first cow \"Laika\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Chooses the gender of first cow \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Chooses the age of first cow 4",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Chooses how long it has been since the last pregnancy 12",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Chooses second cow \"Bob\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Chooses the gender of second cow \"\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Chooses the age of second cow 3",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Presses the confirm selection button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Sees message \"Enter cows gender!\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectionSteps.openSelectionPanel()"
});
formatter.result({
  "duration": 71900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laika",
      "offset": 19
    }
  ],
  "location": "SelectionSteps.chooseCow1(String)"
});
formatter.result({
  "duration": 74400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "SelectionSteps.chooseGenderCow1(String)"
});
formatter.result({
  "duration": 73400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 29
    }
  ],
  "location": "SelectionSteps.chooseAgeCow1(Integer)"
});
formatter.result({
  "duration": 109800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 54
    }
  ],
  "location": "SelectionSteps.chooseLastPregnancy(Integer)"
});
formatter.result({
  "duration": 142300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bob",
      "offset": 20
    }
  ],
  "location": "SelectionSteps.chooseCow2(String)"
});
formatter.result({
  "duration": 108800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 34
    }
  ],
  "location": "SelectionSteps.chooseGenderCow2(String)"
});
formatter.result({
  "duration": 101300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "SelectionSteps.chooseAgeCow2(Integer)"
});
formatter.result({
  "duration": 111400,
  "status": "passed"
});
formatter.match({
  "location": "SelectionSteps.confirmSelection()"
});
formatter.result({
  "duration": 45500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter cows gender!",
      "offset": 14
    }
  ],
  "location": "SelectionSteps.message(String)"
});
formatter.result({
  "duration": 81100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Cow selection",
  "description": "",
  "id": "cow-selection;cow-selection;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens selection panel",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Chooses first cow \"Milka\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Chooses the gender of first cow \"female\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Chooses the age of first cow 4",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Chooses how long it has been since the last pregnancy 12",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Chooses second cow \"Bob\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Chooses the gender of second cow \"male\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Chooses the age of second cow 3",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Presses the confirm selection button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Sees message \"Animal not registered in database!\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectionSteps.openSelectionPanel()"
});
formatter.result({
  "duration": 68300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Milka",
      "offset": 19
    }
  ],
  "location": "SelectionSteps.chooseCow1(String)"
});
formatter.result({
  "duration": 599900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "female",
      "offset": 33
    }
  ],
  "location": "SelectionSteps.chooseGenderCow1(String)"
});
formatter.result({
  "duration": 74100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 29
    }
  ],
  "location": "SelectionSteps.chooseAgeCow1(Integer)"
});
formatter.result({
  "duration": 101900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 54
    }
  ],
  "location": "SelectionSteps.chooseLastPregnancy(Integer)"
});
formatter.result({
  "duration": 567700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bob",
      "offset": 20
    }
  ],
  "location": "SelectionSteps.chooseCow2(String)"
});
formatter.result({
  "duration": 93400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 34
    }
  ],
  "location": "SelectionSteps.chooseGenderCow2(String)"
});
formatter.result({
  "duration": 73400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "SelectionSteps.chooseAgeCow2(Integer)"
});
formatter.result({
  "duration": 315900,
  "status": "passed"
});
formatter.match({
  "location": "SelectionSteps.confirmSelection()"
});
formatter.result({
  "duration": 90300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Animal not registered in database!",
      "offset": 14
    }
  ],
  "location": "SelectionSteps.message(String)"
});
formatter.result({
  "duration": 75400,
  "status": "passed"
});
});