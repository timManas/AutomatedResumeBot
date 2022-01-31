$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/features/Apply.feature");
formatter.feature({
  "line": 1,
  "name": "Apply for Jobs",
  "description": "",
  "id": "apply-for-jobs",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4657529302,
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
  "duration": 337579070,
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
  "duration": 15476653165,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d97.0.4692.99)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Tims-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:4c8:f566:79b2:4e3%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_292\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.99, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: /var/folders/gg/63j0ftcx6s5...}, goog:chromeOptions: {debuggerAddress: localhost:54114}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5d5b60192123ca3aa0fa9737dffbbafb\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"text-input-what\"]}\n\tat sun.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy21.toString(Unknown Source)\n\tat pageObjects.BasePage.sendKeysToWebElement(BasePage.java:155)\n\tat pageObjects.HomePage.enterJobInTitle(HomePage.java:24)\n\tat stepDefinitions.HomePageSteps.user_enters_job_in_Job_Title(HomePageSteps.java:21)\n\tat ✽.Given User enters job \"Automation Engineer\" in Job Title(src/test/java/resources/features/Apply.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSteps.user_clicks_Find_Jobs_Button()"
});
formatter.result({
  "status": "skipped"
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
  "name": "Enter Credentials",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Enter Password",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click SignIn Button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Apply Job",
  "keyword": "Then "
});
formatter.match({
  "location": "JobListPageSteps.user_sorts_by_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobListPageSteps.searchelements()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobListPageSteps.search_for_Easy_Apply_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobListPageSteps.click_Apply_Now_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageSteps.enter_Credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageSteps.enter_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageSteps.click_SignIn_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationSteps.apply_Job()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2358618,
  "status": "passed"
});
});