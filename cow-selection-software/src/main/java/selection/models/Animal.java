package selection.models;
import java.util.*;

/**
 * 
 */
public class Animal {

	private String name;
	private String gender;
	private Integer age;
	private Integer lastPregnancy;
	private Set<Animal> children;
	private Set<Animal> parent;
	private Set<Owner> owners;
	private Farm farm;
	
	
    /**
     * Default constructor
     */
	public Animal(final String name) {
		this(name, null, null, null);
	}
    public Animal() {
    	this(null, null, null, null);
    }
    
    public Animal(final String name, final String gender, final Integer age, final Integer lastPregnancy) {
    	this.name = name;
    	this.gender = gender;
    	this.age = age;
    	this.lastPregnancy = lastPregnancy;
    }
    

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
    public String getGenger() {
        return gender;
    }

    /**
     * @param gender 
     * @return
     */
    public void setGender(String gender) {
        this.gender = gender;
        
    }

    /**
     * @return
     */
    public int getAge() {
		return age;
        
    }

    /**
     * @param age 
     * @return
     */
    public void setAge(Integer age) {
        this.age = age;
        
    }

    /**
     * @return
     */
    public int getLastPregnancy() {
		return lastPregnancy;
       
    }

    /**
     * @param lastPregnancy 
     * @return
     */
    public void setLastPregnancy(Integer lastPregnancy) {
        this.lastPregnancy = lastPregnancy;
    }

    /**
     * @return
     */
//    public Set<Animal> getParent() {
//    	return parent;
//    }

    /**
     * @param parent 
     * @return
     */
//    public void setParent(Animal parent) {
//        this.parent = parent;
//    }

    /**
     * @return
     */
    public Set<Animal> getChildren() {
        return children;
    }

    /**
     * @return
     */
    public Farm getFarm() {
        return farm;
    }

    /**
     * @param farm 
     * @return
     */
    public void setFarm(Farm farm) {
        this.farm = farm;
    }

	public Set<Owner> getOwners() {
		return owners;
	}

	public void setOwners(Set<Owner> owners) {
		this.owners = owners;
	}

	public Set<Animal> getParent() {
		return parent;
	}

	public void setParent(Set<Animal> parent) {
		this.parent = parent;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
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
		Animal other = (Animal) obj;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}

}