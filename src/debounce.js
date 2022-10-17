/**
 * 防抖函数
 * @param {*} fn 需要处理的函数
 * @param {*} delay 多久执行一次
 * @returns 
 */
export function debounce(fn, delay) {
    let timer;
    return function() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn();
        }, delay);
    }
}