package fate3.models;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Version;

import org.hibernate.validator.constraints.NotBlank;

/**
 * Entity implementation class for Entity: Game
 * 
 */
@Entity(name="game")
public class Game implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Version
	private Long version;
	@NotBlank
	private String name;
	@NotBlank
	private String setting;
	@NotBlank
	private String scale;	
	
	@OneToMany(mappedBy="game", cascade=CascadeType.ALL, orphanRemoval=true)
	private List<PendingIssue> pendingIssues = new ArrayList<PendingIssue>();
	
	@OneToMany(mappedBy="game", cascade=CascadeType.ALL, orphanRemoval=true)
	private List<CurrentIssue> currentIssues = new ArrayList<CurrentIssue>();

	public Game() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public long getVersion() {
		return version;
	}

	public void setVersion(long version) {
		this.version = version;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSetting() {
		return setting;
	}

	public void setSetting(String setting) {
		this.setting = setting;
	}

	public String getScale() {
		return scale;
	}

	public void setScale(String scale) {
		this.scale = scale;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
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
		Game other = (Game) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return String.format(
				"Game [id=%s, version=%s, name=%s, setting=%s, scale=%s]", id,
				version, name, setting, scale);
	}
	private static final long serialVersionUID = 1L;

	public List<PendingIssue> getPendingIssues() {
		return pendingIssues;
	}

	public void setPendingIssues(List<PendingIssue> pendingIssues) {
		this.pendingIssues = pendingIssues;
	}

	public List<CurrentIssue> getCurrentIssues() {
		return currentIssues;
	}

	public void setCurrentIssues(List<CurrentIssue> currentIssues) {
		this.currentIssues = currentIssues;
	}

	public void setVersion(Long version) {
		this.version = version;
	}
}
