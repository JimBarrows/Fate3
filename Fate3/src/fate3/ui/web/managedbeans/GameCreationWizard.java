package fate3.ui.web.managedbeans;

import javax.ejb.EJB;

import org.primefaces.event.FlowEvent;

import fate3.services.GameCreationService;

public class GameCreationWizard {

	@EJB GameCreationService gcs;
	

	private String name = "New Game";
	private String setting = "New Setting";
	private String scale = "New scale";

	public String onFlowProcess(FlowEvent event) {

		return event.getNewStep();
	}

	public String save() {		
		gcs.createGame(name, setting, scale);
		return "editGame";
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
}
