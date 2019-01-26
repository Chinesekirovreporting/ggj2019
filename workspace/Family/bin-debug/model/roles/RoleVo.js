var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RoleVo = (function () {
    function RoleVo() {
    }
    RoleVo.prototype.setPosition = function (positionX, positionY, type) {
        if (type === void 0) { type = 1; }
        this.positionX = positionX;
        this.positionY = positionY;
        this.roleType = type;
    };
    Object.defineProperty(RoleVo.prototype, "isBall", {
        get: function () {
            return this.roleType == 1;
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