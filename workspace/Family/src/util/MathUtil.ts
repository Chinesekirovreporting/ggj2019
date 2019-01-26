class MathUtil {
	/**
	 * 3点钟顺时针
	 */
	public static getRotationByPoints(point1:egret.Point,point2:egret.Point):number {
		var p1:egret.Point = point1;//new egret.Point(40,30);
		var p2:egret.Point = point2;//new egret.Point(80,60);

		var angle:number = Math.atan2((p2.y-p1.y), (p2.x-p1.x)) //弧度  0.6435011087932844
		var theta:number = angle*(180/Math.PI);
		return theta;
	}
}