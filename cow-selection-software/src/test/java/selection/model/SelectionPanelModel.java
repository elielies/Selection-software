package selection.model;

import selection.service.SelectionService;

public class SelectionPanelModel {

	private String cow1;
	private String gender1;
	private int age1;
	private Integer lastPregnancy;
	private String cow2;
	private String gender2;
	private int age2;
	private String message;

	public void chooseCow1(final String cow) {
		this.cow1 = cow;
	}

	public void chooseGenderCow1(final String gender) {
		this.gender1 = gender;
	}

	public void chooseAgeCow1(final Integer age) {
		this.age1=age;
	}

	public void lastPregnancy(Integer lastPregnancy) {
		this.lastPregnancy = lastPregnancy;
	}

	public void chooseCow2(String cow) {
		this.cow2 = cow;
	}

	public void chooseGenderCow2(String gender) {
		this.gender2 = gender;
	}

	public void chooseAgeCow2(Integer age) {
		this.age2=age;
	}


	public void confirmSelectionButton() {
		message = SelectionService.selection(cow1, gender1, age1, lastPregnancy, cow2, gender2, age2);
		
	}
	public String getMessage() {
		return message;
	}

}
