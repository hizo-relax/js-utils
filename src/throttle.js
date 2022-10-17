/**
 * 节流函数
 * @param {*} fn 需要处理的函数
 * @param {*} delay 多久执行一次
 * @returns 
 */
function throttle(fn, delay) {
	let timer;
	let flag = false;
	return (e) => {
		if (flag) return;
		flag = true;
		timer = setTimeout(() => {
			fn(e);
			flag = false;
		}, delay);
	}
}
