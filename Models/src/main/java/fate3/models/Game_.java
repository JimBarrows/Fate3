package fate3.models;

import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2014-01-18T08:55:56.879-0700")
@StaticMetamodel(Game.class)
public class Game_ {
	public static volatile SingularAttribute<Game, Long> id;
	public static volatile SingularAttribute<Game, Long> version;
	public static volatile SingularAttribute<Game, String> name;
	public static volatile SingularAttribute<Game, String> setting;
	public static volatile SingularAttribute<Game, String> scale;
	public static volatile ListAttribute<Game, PendingIssue> pendingIssues;
	public static volatile ListAttribute<Game, CurrentIssue> currentIssues;
}
