/**
 * @description: 节流函数
 * @param {*} fn 需要处理的函数
 * @param {*} delay 多久执行一次
 */
export function throttle(fn, delay) {
    let flag = false;
    return (e) => {
        if (flag) return;
        flag = true;
        setTimeout(() => {
            fn(e);
            flag = false;
        }, delay);
    }
}
