$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/features/Apply.feature");
formatter.feature({
  "line": 1,
  "name": "Apply for Jobs",
  "description": "",
  "id": "apply-for-jobs",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3201528863,
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
  "name": "I access indeed homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.i_access_indeed_homepage()"
});
formatter.result({
  "duration": 1503291557,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat stepDefinitions.HomePageSteps.i_access_indeed_homepage(HomePageSteps.java:13)\n\tat ✽.Given I access indeed homepage(src/test/java/resources/features/Apply.feature:4)\n",
  "status": "pending"
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
  "name": "User clicks on Search Button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User is taken to Page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_clicks_on_Search_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.user_is_taken_to_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 492959545,
  "status": "passed"
});
});