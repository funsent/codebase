

/**
 * 计量测量类工具方法
 */
const Metry = {

    /**
     * 计算两点之间的距离
     * distance(1, 1, 2, 3); // 2.23606797749979
     * 
     * @param {Number} x0
     * @param {Number} y0
     * @param {Number} x1
     * @param {Number} y1
     * @returns {Number}
     */
    distance: (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0),

    /**
     * 角度转弧度
     * angleToRadian(90.0); // ~1.5708
     * 
     * @param {Number} deg 
     * @returns {Number}
     */
    angleToRadian: deg => (deg * Math.PI) / 180.0,

    /**
     * 弧度转度数
     * radianToAngle(Math.PI / 2); // 90
     * 
     * @param {Number} rad
     * @returns {Number}
     */
    radianToAngle: rad => (rad * 180.0) / Math.PI,
};