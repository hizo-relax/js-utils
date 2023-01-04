const numbers = [ 3, 2, 1, 5, 6 ];

/**
 * Includes
 * numbers 中是否存在数值 3
 */
const test_includes = numbers.reduce((includes, cur) => {
	return includes ? includes : cur === 3;
}, false);

/**
 * Slice
 * 将 numbers 中索引 0~4 之间的值截取并组成新的数组
 */
const test_slice = numbers.reduce((arr, cur, index) => {
	return index > 0 && index < 4 ? [ ...arr, cur ] : arr;
}, []);

/**
 * Map
 * 将 numbers 数组中的值都乘以 100
 */
const test_map = numbers.reduce((arr, cur) => {
	return [ ...arr, cur * 100 ];
}, []);

/**
 * Filter
 * 过滤 numbers 中小于 3 的数
 */
const test_filter = numbers.reduce((arr, cur) => {
	if (cur >= 3) {
		arr.push(cur);
	}
	return arr;
}, []);

/**
 * Max and Min
 * 获取 numbers 中的最大值和最小值
 */
const test_value = numbers.reduce(({ max, min }, cur) => {
	return {
		max: Math.max(max, cur),
		min: Math.min(min, cur)
	};
}, { max: -Infinity, min: Infinity });


// function getId(id) {
// 	return new Promise((reslove, reject) => {
// 		setTimeout(() => {
// 			reslove(id);
// 		}, 1000);
// 	});
// }
// const ids = [ 10, 20, 30 ];
// ids.reduce(async (promise, cur) => {
// 	await promise;
// 	return getId(cur);
// }, Promise.resolve());