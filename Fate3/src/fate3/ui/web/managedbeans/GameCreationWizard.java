package fate3.ui.web.managedbeans;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.EJB;

import org.primefaces.event.FlowEvent;

import fate3.models.CurrentIssue;
import fate3.models.PendingIssue;
import fate3.services.GameCreationService;

public class GameCreationWizard {

	@EJB GameCreationService gcs;
	

	private String name = "New Game";
	private String setting = "New Setting";
	private String scale = "New scale";
	private List<PendingIssue> pendingIssues = new ArrayList<PendingIssue>();
	private List<CurrentIssue> currentIssues = new ArrayList<CurrentIssue>();

	private PendingIssue newPendingIssue = new PendingIssue();
	private CurrentIssue newCurrentIssue = new CurrentIssue();
	
	public String onFlowProcess(FlowEvent event) {

		return event.getNewStep();
	}

	public String save() {		
		gcs.createGame(name, setting, scale);
		return "editGame";
	}
	
	public String createNewPendingIssue() {
		newPendingIssue = new PendingIssue();
		newPendingIssue.setName("New Pending Issue");
		return null;
	}
	
	public String createNewCurrentIssue() {
		newCurrentIssue = new CurrentIssue();
		newCurrentIssue.setName("New Current Issue");
		return null;
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

	public PendingIssue getNewPendingIssue() {
		return newPendingIssue;
	}

	public void setNewPendingIssue(PendingIssue newPendingIssue) {
		this.newPendingIssue = newPendingIssue;
	}

	public CurrentIssue getNewCurrentIssue() {
		return newCurrentIssue;
	}

	public void setNewCurrentIssue(CurrentIssue newCurrentIssue) {
		this.newCurrentIssue = newCurrentIssue;
	}

}
