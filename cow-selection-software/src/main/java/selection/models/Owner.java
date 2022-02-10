package selection.models;
import java.util.*;

/**
 * 
 */
public class Owner {

	private String name;
	private Association association;
	private Set<Animal> animals;
	private Set<Farm> farm;
	private Set<Employee> employee;
    /**
     * Default constructor
     */
    public Owner() {
    }

    /**
     * 
     */

    /**
     * @return
     */
 

    /**
     * @return
     */
    public String getName() {
        return name;
    }

    /**
     * @param name 
     * @return
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return
     */
    public Association getAssociation() {
        return association;
    }

    /**
     * @param association 
     * @return
     */
    public void setAssociation(Association association) {
        this.association = association;
    }

    /**
     * @return
     */
    public Set<Employee> getEmployee() {
        return employee;
    }

    /**
     * @param employee 
     * @return
     */
    public void setEmployee(Set<Employee> employee) {
        this.employee=employee;
    }

	public Set<Farm> getFarm() {
		return farm;
	}

	public void setFarm(Set<Farm> farm) {
		this.farm = farm;
	}

	public Set<Animal> getAnimals() {
		return animals;
	}

	public void setAnimals(Set<Animal> animals) {
		this.animals = animals;
	}

}