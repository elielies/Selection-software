package selection.models;
import java.util.*;

/**
 * 
 */
public class Role {

	private String code;
	private Set<User> user;
    /**
     * Default constructor
     */
    public Role() {
    }

    /**
     * 
     */

    /**
     * @return
     */
    public String getRoleCode() {
        return code;
    }

    /**
     * @param code 
     * @return
     */
    public void setRoleCode(String code) {
      this.code=code;
    }

    /**
     * @return
     */
    public Set<User> getUsers() {
        return user;
    }

    @Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((code == null) ? 0 : code.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Role other = (Role) obj;
		if (code == null) {
			if (other.code != null)
				return false;
		} else if (!code.equals(other.code))
			return false;
		return true;
	}

	/**
     * @param users 
     * @return
     */
    public void setUsers(Set<User> user) {
       this.user=user;
    }

}