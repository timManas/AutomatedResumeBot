package pageObjects;

import java.io.IOException;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage{
	public @FindBy(id = "ifl-InputFormField-3") WebElement emailAddressField;
	public @FindBy(xpath = "//form[@id=\"emailform\"]/button") WebElement continueButton;
	public @FindBy(name =  "__password") WebElement passwordField;
	public @FindBy(xpath = "//form[@id=\"loginform\"]/button") WebElement signInButton;

	public LoginPage() throws IOException {
		super();
	}

	public void enterCredentials() throws Exception {
		Thread.sleep(10000);
		String email = "lazer_cyat@protonmail.com";
		sendKeysToWebElement(emailAddressField, email);
		waitAndClickElement(continueButton);
	}


	public void enterPassword() throws Exception {
		Thread.sleep(10000);
		String password = "06951789";
		sendKeysToWebElement(passwordField, password);
	}

	public void login() throws Exception {
		Thread.sleep(3000);
		waitAndClickElement(signInButton);
	}
	
}
