$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/features/Apply.feature");
formatter.feature({
  "line": 1,
  "name": "Apply for Jobs",
  "description": "",
  "id": "apply-for-jobs",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2901406555,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User goes indeed homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.user_goes_indeed_homepage()"
});
formatter.result({
  "duration": 1391362831,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Find a Job",
  "description": "",
  "id": "apply-for-jobs;find-a-job",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User enters job \"Automation Engineer\" in Job Title",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#\tThen User enters \"Toronto, ON\" in Location field"
    }
  ],
  "line": 9,
  "name": "User clicks Find Jobs Button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Engineer",
      "offset": 17
    }
  ],
  "location": "HomePageSteps.user_enters_job_in_Job_Title(String)"
});
formatter.result({
  "duration": 611800459,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_clicks_Find_Jobs_Button()"
});
formatter.result({
  "duration": 1414387571,
  "status": "passed"
});
formatter.after({
  "duration": 647941522,
  "status": "passed"
});
});