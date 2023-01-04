const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'promise-1');
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 2000, 'promise-2');
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'promise-3');
});

/* Promise 顺序执行 */
p1.then((res) => {
    console.log(res);
    return p2;
}, (err) => {
    console.log(err);
}).then((res) => {
    console.log(res);
    return p3;
}, (err) => {
    console.log(err);
}).then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});

/**
 * Promise.all() —— 批量执行;
 * 等待所有都完成（或第一个失败）;
 */
Promise.all([p1, p2, p3]).then((res) => {
    console.log(res);
}, (error) => {
    console.log(error);
});

/**
 * Promise.any();
 * 只要有一个成功，则返回成功的 Promise;
 * 没有一个成功，则返回一个失败的的 Promise;
 */
Promise.any([p1, p2, p3]).then((res) => {
    console.log(res);
}, (error) => {
    console.log(error);
});

/**
 * Promise.race();
 * 返回第一个完成的结果(无论成功或是失败);
 * 如下：p2 更快，返回失败结果 'promise-2';
 */
Promise.race([p2, p3]).then((res) => {
    console.log(res);
}, (error) => {
    console.log(error);
});

/**
 * Promise.resolve();
 * 返回一个解析过的 Promise 对象;
 */
Promise.resolve("Success").then((res) => {
    console.log(res);
}, (error) => {
    // 不会被调用
});

/**
 * Promise.reject();
 * 返回一个被拒绝的 Promise 对象;
 */
Promise.reject(new Error('fail')).then(() => {
    // not called
}, (error) => {
    console.error(error);
});