class ModelRoles extends egret.EventDispatcher{
	public rolesList:Array<RoleVo>;
	
	public constructor() {
		super();
		this.rolesList = new Array<RoleVo>();
	}

	public addRole(roleVo:RoleVo):void {
		this.rolesList.push(roleVo);
		this.dispatchEventWith(ModelRolesEvent.ON_ADD_ROLE, false, roleVo);
	}

	public removeRole(roleVo:RoleVo):void {
		this.rolesList.splice(this.rolesList.indexOf(roleVo));
		this.dispatchEventWith(ModelRolesEvent.ON_REMOVE_ROLE, false, roleVo);
	}

	public changeRolePos(roleVo:RoleVo,positionX:number,positionY:number):void {
		roleVo.setPosition(positionX,positionY);
		this.dispatchEventWith(ModelRolesEvent.ON_CHANGE_ROLE_POS, false, roleVo);
	}
}