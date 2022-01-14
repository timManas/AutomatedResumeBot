package pageObjects;

import java.io.IOException;

public class HomePage extends BasePage {

	public HomePage() throws IOException {
		super();
		// TODO Auto-generated constructor stub
	}

	public HomePage getHomePage() throws IOException {
		// TODO Auto-generated method stub
		getDriver().get("https://ca.indeed.com/");
		return new HomePage();
	}

}
