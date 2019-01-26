class ModuleRole {
	public objectMapViews:egret.Sprite;
	public objectDict:Object;

	public constructor() {
		this.objectMapViews = new egret.Sprite();
		this.objectDict = new Object();
	}
	
	public onShow():void {
		LayerManager.roles.addChild(this.objectMapViews);
		this.addEventListeners();
	}

	private addEventListeners():void {
		GameModel.roles.addEventListener(ModelRolesEvent.ON_ADD_ROLE, this.onAddRole, this);
		GameModel.roles.addEventListener(ModelRolesEvent.ON_REMOVE_ROLE, this.onRemoveRole,this);
		GameModel.roles.addEventListener(ModelRolesEvent.ON_CHANGE_ROLE_POS, this.onChangeRolePos,this);
		GameModel.player.addEventListener(ModelPlayerEvent.ON_CHANGE_PLAYER_POS, this.onChangePlayerPos, this);
	}

	public onExit():void {
		LayerManager.roles.removeChild(this.objectMapViews);
		this.removeEventListeners();
	}

	private removeEventListeners():void {
		GameModel.roles.removeEventListener(ModelRolesEvent.ON_ADD_ROLE, this.onAddRole, this);
		GameModel.roles.removeEventListener(ModelRolesEvent.ON_REMOVE_ROLE, this.onRemoveRole,this);
		GameModel.roles.removeEventListener(ModelRolesEvent.ON_CHANGE_ROLE_POS, this.onChangeRolePos,this);
		GameModel.player.removeEventListener(ModelPlayerEvent.ON_CHANGE_PLAYER_POS, this.onChangePlayerPos, this);
	}

	private onAddRole(event:egret.Event):void {
		var roleVo:RoleVo = event.data;
		var roleObject:RoleObject = new RoleObject(roleVo.positionX,roleVo.positionY);
		roleVo.spriteID = roleObject.spriteID;
		var role:Role = new Role();
		role.roleVo = roleVo;
		role.roleObject = roleObject;
		RoleManager.inst.addRole(role);
		this.objectMapViews.addChild(roleObject);
		this.objectDict[roleObject.spriteID] = roleObject;
	}

	private onRemoveRole(event:egret.Event):void {
		var roleVo:RoleVo = event.data;
		var roleObject:RoleObject = this.objectDict[roleVo.spriteID];
		RoleManager.inst.removeRole(RoleManager.inst.roleDict[roleObject.spriteID]);
		this.objectMapViews.removeChild(roleObject);
	}

	private onChangeRolePos(event:egret.Event):void {
		var roleVo:RoleVo = event.data;
		var roleObject:RoleObject = this.objectDict[roleObject.spriteID];
		roleObject.changePosition(roleVo.positionX,roleVo.positionY);
	}

	private onChangePlayerPos(event:egret.Event):void {
		
	}
}