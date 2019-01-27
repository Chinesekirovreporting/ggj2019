var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RoleVo = (function () {
    function RoleVo() {
    }
    RoleVo.prototype.setPosition = function (positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
    };
    Object.defineProperty(RoleVo.prototype, "isBall", {
        get: function () {
            return this.roleType == 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleVo.prototype, "isScore", {
        get: function () {
            return this.roleType == 3;
        },
        enumerable: true,
        configurable: true
    });
    RoleVo.prototype.reset = function () {
    };
    return RoleVo;
}());
__reflect(RoleVo.prototype, "RoleVo");
//# sourceMappingURL=RoleVo.js.map