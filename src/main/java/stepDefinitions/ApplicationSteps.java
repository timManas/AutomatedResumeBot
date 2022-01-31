package stepDefinitions;

import cucumber.api.java.en.Then;

public class ApplicationSteps extends DriverFactory{
	
	@Then("^Apply Job$")
	public void apply_Job() throws Throwable {
		applicationPage.apply();
	}

}
