var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MathUtil = (function () {
    function MathUtil() {
    }
    /**
     * 3点钟顺时针
     */
    MathUtil.getRotationByPoints = function (point1, point2) {
        var p1 = point1; //new egret.Point(40,30);
        var p2 = point2; //new egret.Point(80,60);
        var angle = Math.atan2((p2.y - p1.y), (p2.x - p1.x)); //弧度  0.6435011087932844
        var theta = angle * (180 / Math.PI);
        return theta;
    };
    return MathUtil;
}());
__reflect(MathUtil.prototype, "MathUtil");
//# sourceMappingURL=MathUtil.js.map