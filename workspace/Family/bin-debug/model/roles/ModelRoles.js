var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var ModelRoles = (function (_super) {
    __extends(ModelRoles, _super);
    function ModelRoles() {
        var _this = _super.call(this) || this;
        _this.rolesList = new Array();
        return _this;
    }
    ModelRoles.prototype.addRole = function (roleVo) {
        this.rolesList.push(roleVo);
        this.dispatchEventWith(ModelRolesEvent.ON_ADD_ROLE, false, roleVo);
    };
    ModelRoles.prototype.removeRole = function (roleVo) {
        this.rolesList.splice(this.rolesList.indexOf(roleVo));
        this.dispatchEventWith(ModelRolesEvent.ON_ADD_ROLE, false, roleVo);
    };
    ModelRoles.prototype.changeRolePos = function (roleVo, positionX, positionY) {
        roleVo.setPosition(positionX, positionY);
        this.dispatchEventWith(ModelRolesEvent.ON_CHANGE_ROLE_POS, false, roleVo);
    };
    return ModelRoles;
}(egret.EventDispatcher));
__reflect(ModelRoles.prototype, "ModelRoles");
//# sourceMappingURL=ModelRoles.js.map