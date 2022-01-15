$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/features/Apply.feature");
formatter.feature({
  "line": 1,
  "name": "Apply for Jobs",
  "description": "",
  "id": "apply-for-jobs",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3410356969,
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
  "duration": 1650627392,
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
  "line": 8,
  "name": "User enters \"Toronto, ON\" in Location field",
  "keyword": "Then "
});
formatter.step({
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
  "duration": 310092465,
  "error_message": "java.lang.AssertionError: Unable to send keys to WebElement, Exception: invalid element state\n  (Session info: chrome\u003d97.0.4692.71)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Tims-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:e7:8cec:9884:da04%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_292\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: /var/folders/gg/63j0ftcx6s5...}, goog:chromeOptions: {debuggerAddress: localhost:57866}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1acd579e4c4b4f69dc730610c42c76f3\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat pageObjects.BasePage.sendKeysToWebElement(BasePage.java:156)\n\tat pageObjects.HomePage.enterJobInTitle(HomePage.java:24)\n\tat stepDefinitions.HomePageSteps.user_enters_job_in_Job_Title(HomePageSteps.java:21)\n\tat ✽.Given User enters job \"Automation Engineer\" in Job Title(src/test/java/resources/features/Apply.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toronto, ON",
      "offset": 13
    }
  ],
  "location": "HomePageSteps.user_enters_in_Location_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.user_clicks_Find_Jobs_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 875348547,
  "status": "passed"
});
});