package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import stepDefinitions.DriverFactory;

public class HomePageSteps extends DriverFactory{
	@Given("^I access indeed homepage$")
	public void i_access_indeed_homepage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		homePage.getHomePage();
	    throw new PendingException();
	}

	@Given("^User clicks on Search Button$")
	public void user_clicks_on_Search_Button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^User is taken to Page$")
	public void user_is_taken_to_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
}
