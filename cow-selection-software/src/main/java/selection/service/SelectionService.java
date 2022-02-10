package selection.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import selection.models.Animal;

public class SelectionService {


	public static final List<Animal> animalDb = new ArrayList<Animal>();
	
	{
		animalDb.add(new Animal("Laika"));
		animalDb.add(new Animal("Bob"));
		animalDb.add(new Animal("Jil"));
	}
	
	public static String selection(String cow1, String gender1, Integer age1, Integer lastPregnancy, String cow2, String gender2, Integer age2) {
		
		animalDb.add(new Animal("Laika"));
		
		if(cow1.isEmpty() || cow2.isEmpty()) {
			return "Enter cows name!";
		}
		if(gender1.isEmpty() || gender2.isEmpty()) {
			return "Enter cows gender!";
		}
		
		if(age1 < 3 || age2 < 3) {
			return "Cow is too young!";
		}
		if(gender1.equalsIgnoreCase("female") && gender2.equalsIgnoreCase("female")) {
			return "Cant breed two female cows!";
		}
		
		if(gender1.equalsIgnoreCase("male") && gender2.equalsIgnoreCase("male")) {
			return "Cant breed two male cows!";
		}
		if(lastPregnancy < 10) {
			return "Cant give birth within a period of less than ten months!";
		}
		boolean doesAnimalExist = animalDb.stream().anyMatch(a->a.getName().equalsIgnoreCase(cow1));
		if(!doesAnimalExist) {
			return "Animal not registered in database!";
		}
		return "Good selection!";
	}

}
