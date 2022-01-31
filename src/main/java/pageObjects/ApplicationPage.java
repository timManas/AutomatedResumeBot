package pageObjects;

import java.io.IOException;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ApplicationPage extends BasePage {
	public @FindBy (xpath = "//div[@class='ia-Navigation-steps ia-Navigation-steps--wideScreen']") WebElement applicationStepNum;
	public @FindBy (xpath = "//h1[@class='ia-BasePage-heading fs-unmask']") WebElement pageTitle;
	public @FindBy (css = "//div[@class^='ia-continueButton ia-ContactInfo-continue']") WebElement addContactInfoContinueBtn;
		
	public ApplicationPage() throws IOException {
		super();
	}

	public void apply() throws Exception {
		Thread.sleep(3000);
		// Find Number of Steps
		String[] stepArr = applicationStepNum.getText().split("of");
		int numSteps = Integer.parseInt(stepArr[1].trim());
		System.out.println("NumSteps: " + numSteps);
		
		// Find out which page is located ?
		System.out.println("PageTitle: " + pageTitle.getText());
		if (pageTitle.getText().equalsIgnoreCase("Add your contact information")) {
			waitAndClickElement(addContactInfoContinueBtn);
		}
		

		
	}
	
	

}
