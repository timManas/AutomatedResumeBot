Feature: Apply for Jobs

Background: 
	Given User goes indeed homepage
	Given User enters job "Automation Engineer" in Job Title
	Then User clicks Find Jobs Button
	
Scenario: Find a Job
	Given User sorts by date
	When SearchElements
	Then Search for Easy Apply Button
	Given Click Apply Now Button
	Then Apply Job
	
	

	
	
	