Feature: Apply for Jobs

Background: 
	Given User goes indeed homepage
	
Scenario: Find a Job
	Given User enters job "Automation Engineer" in Job Title
#	Then User enters "Toronto, ON" in Location field
	Then User clicks Find Jobs Button