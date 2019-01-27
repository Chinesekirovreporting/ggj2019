var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Role = (function () {
    function Role() {
    }
    Object.defineProperty(Role.prototype, "spriteID", {
        get: function () {
            return this.roleObject.spriteID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Role.prototype, "positionX", {
        get: function () {
            return this.roleObject.positionX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Role.prototype, "positionY", {
        get: function () {
            return this.roleObject.positionY;
        },
        enumerable: true,
        configurable: true
    });
    Role.prototype.updateFrame = function () {
        this.roleObject.updateFrame();
    };
    Role.prototype.testHit = function () {
    };
    Role.prototype.hiting = function () {
    };
    Role.prototype.reset = function () {
        this.roleVo.reset();
        this.roleObject.reset();
    };
    return Role;
}());
__reflect(Role.prototype, "Role");
//# sourceMappingURL=Role.js.map