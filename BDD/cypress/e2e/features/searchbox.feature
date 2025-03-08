Feature: Search items to the web application 

    As a user
    I want to search item on the web application so that i can find

    Scenario: Valid Item Search
        Given I open the index page
        When I enter valid keyword in the searchbox
        Then I should see search results of valid keyword

    Scenario: Invalid Item Search
        Given I open the index page
        When I enter invalid keyword in the searchbox
        Then I should see search results of invalid keyword