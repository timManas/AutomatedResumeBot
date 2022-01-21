$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/features/Apply.feature");
formatter.feature({
  "line": 1,
  "name": "Apply for Jobs",
  "description": "",
  "id": "apply-for-jobs",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3259508542,
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
formatter.step({
  "line": 5,
  "name": "User enters job \"Automation Engineer\" in Job Title",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks Find Jobs Button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_goes_indeed_homepage()"
});
formatter.result({
  "duration": 1535512909,
  "status": "passed"
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
  "duration": 622763326,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_clicks_Find_Jobs_Button()"
});
formatter.result({
  "duration": 1467660427,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Find a Job",
  "description": "",
  "id": "apply-for-jobs;find-a-job",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User sorts by date",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "SearchElements",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Search for Easy Apply Button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click Apply Now Button",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Apply Job",
  "keyword": "Then "
});
formatter.match({
  "location": "JobListPageSteps.user_sorts_by_date()"
});
formatter.result({
  "duration": 4985234140,
  "status": "passed"
});
formatter.match({
  "location": "JobListPageSteps.searchelements()"
});
formatter.result({
  "duration": 149167012,
  "status": "passed"
});
formatter.match({
  "location": "JobListPageSteps.search_for_Easy_Apply_Button()"
});
formatter.result({
  "duration": 966175997,
  "status": "passed"
});
formatter.match({
  "location": "JobListPageSteps.click_Apply_Now_Button()"
});
formatter.result({
  "duration": 46388,
  "status": "passed"
});
formatter.match({
  "location": "JobListPageSteps.apply_Job()"
});
formatter.result({
  "duration": 41495,
  "status": "passed"
});
formatter.after({
  "duration": 105018,
  "status": "passed"
});
});