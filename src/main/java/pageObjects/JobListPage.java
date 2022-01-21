package pageObjects;

import java.io.IOException;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;

public class JobListPage extends BasePage{
	public @FindBy(linkText = "date") WebElement sortByDate;
	public @FindBy(className = "iaIcon") WebElement easilyApplyToJob;
	public @FindBy(id = "resultCol") List<WebElement> listElements;
	public @FindBy(id = "popover-x") WebElement popOverX;
	
	public JobListPage() throws IOException {
		super();
	}
;
	public void sortByDate() throws InterruptedException {
		// Click on SortByDate
		waitAndClickElement(sortByDate);
	}

	public void clickOnEasyApplyButton() throws Exception {
		if (popOverX.isDisplayed()) {
			waitAndClickElement(popOverX);
		}
		waitAndClickElement(easilyApplyToJob);
	}

	public void searchElements() {
		// TODO Auto-generated method stub
		List<WebElement> listElements2 = driver.findElements(By.id("resultsCol"));
		System.out.println("Results: " + listElements2);
	}
	
}
