/**
 * 类型判断
 * @param {*} data
 * @returns 
 */
function typeOf(data) {
	return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
