package fate3.services;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import fate3.models.Game;

@Stateless
public class GameCreationService {

	@PersistenceContext
	private EntityManager em;
	
	public Game createGame(String name, String setting, String scale) {
		Game game = new Game();
		game.setName(name);
		game.setSetting(setting);
		game.setScale(scale);

	//	em.getTransaction().begin();
		em.persist(game);
//		em.getTransaction().commit();
		return game;

	}
}
