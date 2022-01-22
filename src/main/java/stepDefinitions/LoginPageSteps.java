package stepDefinitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageSteps extends DriverFactory{
	@When("^Enter Credentials$")
	public void enter_Credentials() throws Throwable {
		loginPage.enterCredentials();
	}

	@Then("^Enter Password$")
	public void enter_Password() throws Throwable {
		loginPage.enterPassword();
	}

	@Then("^Click SignIn Button$")
	public void click_SignIn_Button() throws Throwable {
		loginPage.login();
	}

}
