package selection.models;
import java.util.*;

/**
 * 
 */
public class Employee {

	private String name;
	private Association association;
	private Set<Owner> owner;
	private Set<Farm> farm;
	private Set<User> users;
    /**
     * Default constructor
     */
    public Employee() {
    }

    /**
     * 
     */

    /**
     * @param farm 
     * @return
     */

    /**
     * @return
     */
    

    /**
     * @param owner 
     * @return
     */


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

	public Set<Farm> getFarm() {
		return farm;
	}

	public void setFarm(Set<Farm> farm) {
		this.farm = farm;
	}

	public Set<Owner> getOwner() {
		return owner;
	}

	public void setOwner(Set<Owner> owner) {
		this.owner = owner;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<User> getUsers() {
		return users;
	}

	public void setUsers(Set<User> users) {
		this.users = users;
	}

}