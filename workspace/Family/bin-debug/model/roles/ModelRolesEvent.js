var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ModelRolesEvent = (function () {
    function ModelRolesEvent() {
    }
    ModelRolesEvent.ON_ADD_ROLE = "ON_ADD_ROLE";
    ModelRolesEvent.ON_REMOVE_ROLE = "ON_REMOVE_ROLE";
    ModelRolesEvent.ON_CHANGE_ROLE_POS = "ON_CHANGE_ROLE_POS";
    return ModelRolesEvent;
}());
__reflect(ModelRolesEvent.prototype, "ModelRolesEvent");
//# sourceMappingURL=ModelRolesEvent.js.map