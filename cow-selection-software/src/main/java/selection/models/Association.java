package selection.models;
import java.util.*;

/**
 * 
 */
public class Association {

	private String name;
	private Set<Owner> members;
	private Set<Employee> employees;
    /**
     * Default constructor
     */
    public Association() {
    }

    /**
     * 
     */

    /**
     * @return
     */
    public Set<Owner> getMember() {
        return members;
    }

    /**
     * @param member 
     * @return
     */
    public void setMember(Set<Owner> members) {
        this.members = members;
    }

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

	public Set<Employee> getEmployees() {
		return employees;
	}

	public void setEmployees(Set<Employee> employees) {
		this.employees = employees;
	}

}