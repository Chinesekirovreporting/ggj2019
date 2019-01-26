class RoleManager {
	public static manager:RoleManager;

	public roleDict:Object;

	public static get inst():RoleManager {
		if(!RoleManager.manager) {
			RoleManager.manager = new RoleManager();
		}
		return RoleManager.manager;
	}
	public constructor() {
		this.roleDict = new Object();
	}
	
	public addRole(role:Role) {
		this.roleDict[role.spriteID] = role;
	}

	public removeRole(role:Role):void {
		delete this.roleDict[role.spriteID];
	}

	// public movePlayer():void {
	// 	var role:Role;
	// 	for(var key in this.roleDict) {
	// 		role = this.roleDict[key];
	// 		role.roleObject.refreshStagePosition();
	// 	}
	// }

	public updateFrame():void {
		var role:Role;
		for(var key in this.roleDict) {
			role = this.roleDict[key];
			role.updateFrame();
		}
	}
}