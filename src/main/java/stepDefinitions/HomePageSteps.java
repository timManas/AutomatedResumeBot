package stepDefinitions;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import stepDefinitions.DriverFactory;

public class HomePageSteps extends DriverFactory{

	
	@Given("^User goes indeed homepage$")
	public void user_goes_indeed_homepage() throws Throwable {
		homePage.getHomePage();
	}

	@Given("^User enters job \"([^\"]*)\" in Job Title$")
	public void user_enters_job_in_Job_Title(String arg1) throws Throwable {
		homePage.enterJobInTitle(arg1);
	}

	@Then("^User enters \"([^\"]*)\" in Location field$")
	public void user_enters_in_Location_field(String arg1) throws Throwable {
		homePage.enterLocation(arg1);
	}

	@Then("^User clicks Find Jobs Button$")
	public void user_clicks_Find_Jobs_Button() throws Throwable {
	    homePage.clickFindJobButton();
	}
}

