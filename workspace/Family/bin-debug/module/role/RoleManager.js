var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RoleManager = (function () {
    function RoleManager() {
        this.roleDict = new Object();
    }
    Object.defineProperty(RoleManager, "inst", {
        get: function () {
            if (!RoleManager.manager) {
                RoleManager.manager = new RoleManager();
            }
            return RoleManager.manager;
        },
        enumerable: true,
        configurable: true
    });
    RoleManager.prototype.addRole = function (role) {
        this.roleDict[role.spriteID] = role;
    };
    RoleManager.prototype.removeRole = function (role) {
        delete this.roleDict[role.spriteID];
    };
    // public movePlayer():void {
    // 	var role:Role;
    // 	for(var key in this.roleDict) {
    // 		role = this.roleDict[key];
    // 		role.roleObject.refreshStagePosition();
    // 	}
    // }
    RoleManager.prototype.updateFrame = function () {
        var role;
        for (var key in this.roleDict) {
            role = this.roleDict[key];
            role.updateFrame();
        }
    };
    RoleManager.prototype.reset = function () {
        var role;
        for (var key in this.roleDict) {
            role = this.roleDict[key];
            role.reset();
        }
        for (var key in this.roleDict) {
            delete this.roleDict[key];
        }
    };
    return RoleManager;
}());
__reflect(RoleManager.prototype, "RoleManager");
//# sourceMappingURL=RoleManager.js.map