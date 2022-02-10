package selection.models;
import java.util.*;

/**
 * 
 */
public class User {

	private String username;
	private String password;
	private String email;
	private Set<Role> roles;
	private Set<Employee> employee;
    /**
     * Default constructor
     */
    public User() {
    }

    /**
     * 
     */

    /**
     * @return
     */
    public String getUsername() {
        return username;
    }

    /**
     * @param username 
     * @return
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * @return
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password 
     * @return
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email 
     * @return
     */
    public void setEmail(String email) {
      this.email = email;
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
        this.employee = employee;
    }

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

}