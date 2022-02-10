package selection;

import static org.junit.Assert.assertEquals;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import selection.model.SelectionPanelModel;

public class SelectionSteps {

	private SelectionPanelModel selectionModel;
	private Object[] expectedMessage;

	@Given("^User opens selection panel$")
	public void openSelectionPanel() throws Throwable {
	    selectionModel = new SelectionPanelModel();
	    
	}

	@When("^Chooses first cow \"([^\"]*)\"$")
	public void chooseCow1(String cow1) throws Throwable {
	    selectionModel.chooseCow1(cow1);
	}

	@When("^Chooses the gender of first cow \"([^\"]*)\"$")
	public void chooseGenderCow1(String genderCow1) throws Throwable {
	    selectionModel.chooseGenderCow1(genderCow1);
	}

	@When("^Chooses the age of first cow (\\d+)$")
	public void chooseAgeCow1(Integer age1) throws Throwable {
		selectionModel.chooseAgeCow1(age1);
	}

	@When("^Chooses how long it has been since the last pregnancy (\\d+)$")
	public void chooseLastPregnancy(Integer lastPregnancy) throws Throwable {
		
	    selectionModel.lastPregnancy(lastPregnancy);
	}
	@When("^Chooses second cow \"([^\"]*)\"$")
	public void chooseCow2(String cow2) throws Throwable {
		selectionModel.chooseCow2(cow2);
	}

	@When("^Chooses the gender of second cow \"([^\"]*)\"$")
	public void chooseGenderCow2(String genderCow2) throws Throwable {
		selectionModel.chooseGenderCow2(genderCow2);
	}

	@When("^Chooses the age of second cow (\\d+)$")
	public void chooseAgeCow2(Integer ageCow2) throws Throwable {
		selectionModel.chooseAgeCow2(ageCow2);
	}

	@When("^Presses the confirm selection button$")
	public void confirmSelection() throws Throwable {
	    selectionModel.confirmSelectionButton();
	}

	@Then("^Sees message \"([^\"]*)\"$")
	public void message(final String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, selectionModel.getMessage());
	}


	
}
