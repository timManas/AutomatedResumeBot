package pageObjects;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
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
	public @FindBy(id = "viewJobSSRRoot") WebElement viewJobSSRRoot;
	public @FindBy(id = "indeedApplyButtonContainer") WebElement indeedApplyButton;
	
	
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

	public void searchElements() throws InterruptedException  {
		List<WebElement> listElements2 = driver.findElements(By.id("resultsCol"));
		System.out.println("Results: " + listElements2);
	}
	
	public void clickOnApplyNowButton() throws InterruptedException, FileNotFoundException, UnsupportedEncodingException {
		
		driver.navigate().refresh();
		
		System.out.println("----------getCurrentUrl " + driver.getCurrentUrl());
		System.out.println("--------- getTitle " + driver.getTitle());
		
		PrintWriter writer = new PrintWriter("pageSouece-Logs.txt", "UTF-8");
		writer.println(driver.getPageSource());
		
		
		WebElement iFrameElement = driver.findElement(By.id("vjs-container-iframe"));
		driver.switchTo().frame(iFrameElement);
		
		writer.println("--------------------------------------------------------------------------------------------------------------------------------------------------------- \n");
		
		writer.println(driver.getPageSource());


		writer.close();
		
		WebElement applyNowButton = driver.findElement(By.id("indeedApplyButton"));
		applyNowButton.click();
		
		
//		System.out.println("PageSource: " + driver.getPageSource());
//		System.out.println("isDisplayed: " + indeedApplyButton.isDisplayed());
//		waitAndClickElement(indeedApplyButton);
	}
	
}
