Feature: home page

  Scenario: As a user I can log into the portal
    Given The portal login page
    When I log in as a user
    Then I see the homepage

  Scenario: As a user I can create a project
    Given The project dashboard
    When I add a new project
    And  I fill in the project details
    Then I see the project was successfully created



  