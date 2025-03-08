Feature: Login to the web application

    As a user
    I want to login in to web application so that i can access

    Scenario: Valid Login
        Given I open the login page
        When I submit valid login
        Then I should see the homepage

    Scenario: Invalid Login
        Given I open the login page
        When I submit invalid login
        Then I should see an error message