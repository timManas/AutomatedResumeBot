package stepDefinitions;

import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class JobListPageSteps extends DriverFactory {
	@Given("^User sorts by date$")
	public void user_sorts_by_date() throws Throwable {
		jobListPage.sortByDate();
	}

	@Then("^Search for Easy Apply Button$")
	public void search_for_Easy_Apply_Button() throws Throwable {
		jobListPage.clickOnEasyApplyButton();
	}

	@Given("^Click Apply Now Button$")
	public void click_Apply_Now_Button() throws Throwable {
		jobListPage.clickOnApplyNowButton();
	}

	
	@When("^SearchElements$")
	public void searchelements() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		jobListPage.searchElements();
	}


}
