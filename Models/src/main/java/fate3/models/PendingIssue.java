package fate3.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

@Entity
public class PendingIssue extends Aspect {

	@ManyToOne(fetch = FetchType.LAZY)
	private Game game;
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public Game getGame() {
		return game;
	}

	public void setGame(Game game) {
		this.game = game;
	}

	@Override
	public String toString() {
		return String
				.format("PendingIssue [game=%s, getId()=%s, getVersion()=%s, getName()=%s]",
						game, getId(), getVersion(), getName());
	}
}
