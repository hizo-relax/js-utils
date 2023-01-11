/**
 * @description: 类型判断
 * @param {*} data 任意数据
 * @returns {String} data的数据类型
 * @example typeOf(null) => null
 * @example typeOf({}) => object
 * @example typeOf(1) => number
 */
export function typeOf(data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
