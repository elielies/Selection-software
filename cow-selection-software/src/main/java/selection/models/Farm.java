package selection.models;
import java.util.*;

/**
 * 
 */
public class Farm {

	private String name;
	private String location;
	private Set<Animal> animals;
	private Set<Owner> owners;
	private Set<Employee> employees;
    /**
     * Default constructor
     */
    public Farm() {
    }

    /**
     * 
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
    

    /**
     * @return
     */
    public Set<Animal> getAnimals() {
        return animals;
    }

    /**
     * @param animals 
     * @return
     */
    public void setAnimals(Set<Animal> animals) {
        this.animals=animals;
    }

    /**
     * @return
     */
    public Set<Employee> getEmployee() {
        return employees;
    }

    /**
     * @param employee 
     * @return
     */
    public void setEmployee(Set<Employee> employee) {
        this.employees=employee;
    }

	public Set<Owner> getOwners() {
		return owners;
	}

	public void setOwners(Set<Owner> owners) {
		this.owners = owners;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

}