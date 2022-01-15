package pageObjects;

import java.io.IOException;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends BasePage {
	public @FindBy(xpath="//*[@id=\"jobsearch\"]/div/div[1]/div/div[1]") WebElement jobTitleInputField;
	public @FindBy(xpath="//*[@id=\"jobsearch\"]/div/div[2]/div/div[1]/div") WebElement locationInputField;
	public @FindBy(xpath="//*[@id=\"jobsearch\"]/button") WebElement findJobBtn;
	

	public HomePage() throws IOException {
		super();
	}

	public HomePage getHomePage() throws IOException {
		getDriver().get("https://ca.indeed.com/");
		return new HomePage();
	}

	public void enterJobInTitle(String arg1) throws Exception {
		sendKeysToWebElement(jobTitleInputField, arg1);
	}
	

	public void enterLocation(String arg1) throws Exception {
		sendKeysToWebElement(locationInputField, arg1);

	}

	public void clickFindJobButton() throws InterruptedException {
		waitAndClickElement(findJobBtn);
	}


}
