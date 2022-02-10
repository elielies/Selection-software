Feature: Cow selection

	Scenario Outline: Cow selection
	     Given User opens selection panel
	     When Chooses first cow "<cow1>"
	     And Chooses the gender of first cow "<genderCow1>"
	     And Chooses the age of first cow <ageCow1>
	     And Chooses how long it has been since the last pregnancy <lastPregnancy>
	     And Chooses second cow "<cow2>"
	     And Chooses the gender of second cow "<genderCow2>"
	     And Chooses the age of second cow <ageCow2>
	     And Presses the confirm selection button
	    Then Sees message "<message>"
	    
	    Examples: 
      | cow1  | genderCow1 | ageCow1 | lastPregnancy  | cow2   | genderCow2 | ageCow2 | message                    |
      | Laika | female     | 4       | 12             | Bob    | male       | 3       | Good selection!            |
      | Laika | female     | 1       | 12             | Bob    | male       | 3       | Cow is too young!          |
			| Laika | female     | 4       | 12             | Bob    | male       | 1       | Cow is too young!          |
			| Laika | female     | 4       | 5              | Bob    | male       | 3       | Cant give birth within a period of less than ten months!     |
			| Laika | female     | 4       | 12             | Jil    | female     | 3       | Cant breed two female cows!|
			| Bil   | male       | 4       | 0              | Bob    | male       | 3       | Cant breed two male cows!  |
			|       | female     | 4       | 12             | Bob    | male       | 3       | Enter cows name!           |
			| Laika | female     | 4       | 12             |        | male       | 3       | Enter cows name!           |
			|       | female     | 4       | 12             |        | male       | 3       | Enter cows name!           |
			| Laika |            | 4       | 12             | Bob    | male       | 3       | Enter cows gender!         |
			| Laika | female     | 4       | 12             | Bob    |            | 3       | Enter cows gender!         |
			| Laika |            | 4       | 12             | Bob    |            | 3       | Enter cows gender!         |
			| Milka | female     | 4       | 12             | Bob    | male       | 3       | Animal not registered in database!     |