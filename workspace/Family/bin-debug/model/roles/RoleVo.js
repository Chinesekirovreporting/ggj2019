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
    return RoleVo;
}());
__reflect(RoleVo.prototype, "RoleVo");
//# sourceMappingURL=RoleVo.js.map