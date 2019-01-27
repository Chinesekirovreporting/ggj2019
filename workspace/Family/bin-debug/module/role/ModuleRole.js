var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ModuleRole = (function () {
    function ModuleRole() {
        this.objectMapViews = new egret.Sprite();
        this.objectDict = new Object();
    }
    ModuleRole.prototype.onShow = function () {
        LayerManager.roles.addChild(this.objectMapViews);
        this.addEventListeners();
    };
    ModuleRole.prototype.addEventListeners = function () {
        GameModel.roles.addEventListener(ModelRolesEvent.ON_ADD_ROLE, this.onAddRole, this);
        GameModel.roles.addEventListener(ModelRolesEvent.ON_REMOVE_ROLE, this.onRemoveRole, this);
        GameModel.roles.addEventListener(ModelRolesEvent.ON_CHANGE_ROLE_POS, this.onChangeRolePos, this);
        GameModel.player.addEventListener(ModelPlayerEvent.ON_CHANGE_PLAYER_POS, this.onChangePlayerPos, this);
    };
    ModuleRole.prototype.onExit = function () {
        LayerManager.roles.removeChild(this.objectMapViews);
        this.removeEventListeners();
    };
    ModuleRole.prototype.removeEventListeners = function () {
        GameModel.roles.removeEventListener(ModelRolesEvent.ON_ADD_ROLE, this.onAddRole, this);
        GameModel.roles.removeEventListener(ModelRolesEvent.ON_REMOVE_ROLE, this.onRemoveRole, this);
        GameModel.roles.removeEventListener(ModelRolesEvent.ON_CHANGE_ROLE_POS, this.onChangeRolePos, this);
        GameModel.player.removeEventListener(ModelPlayerEvent.ON_CHANGE_PLAYER_POS, this.onChangePlayerPos, this);
    };
    ModuleRole.prototype.onAddRole = function (event) {
        var roleVo = event.data;
        var roleObject = new RoleObject(roleVo.positionX, roleVo.positionY);
        roleVo.spriteID = roleObject.spriteID;
        if (roleVo.roleType == 1) {
            roleObject.drawStone();
        }
        else if (roleVo.roleType == 3) {
            roleObject.drawScore();
        }
        else {
            roleObject.drawStone();
        }
        var role = new Role();
        role.roleVo = roleVo;
        role.roleObject = roleObject;
        RoleManager.inst.addRole(role);
        this.objectMapViews.addChild(roleObject);
        this.objectDict[roleObject.spriteID] = roleObject;
    };
    ModuleRole.prototype.onRemoveRole = function (event) {
        var roleVo = event.data;
        var roleObject = this.objectDict[roleVo.spriteID];
        RoleManager.inst.removeRole(RoleManager.inst.roleDict[roleObject.spriteID]);
        this.objectMapViews.removeChild(roleObject);
    };
    ModuleRole.prototype.onChangeRolePos = function (event) {
        var roleVo = event.data;
        var roleObject = this.objectDict[roleObject.spriteID];
        roleObject.changePosition(roleVo.positionX, roleVo.positionY);
    };
    ModuleRole.prototype.onChangePlayerPos = function (event) {
    };
    ModuleRole.prototype.reset = function () {
        this.objectMapViews.removeChildren();
    };
    return ModuleRole;
}());
__reflect(ModuleRole.prototype, "ModuleRole");
//# sourceMappingURL=ModuleRole.js.map