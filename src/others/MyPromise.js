/**
 * pending - 等待
 * resolved - 成功
 * rejected - 失败
 */
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

class MyPromise {

	// 执行的状态
	_status = PENDING;

	// 成功或者失败返回的结果
	_value = null;

	// 成功的函数队列
	_resolvedCallbacks = [];

	// 失败的函数队列
	_rejectedCallbacks = [];

	constructor(executor) {
		try {
			executor(this._resolve.bind(this), this._reject.bind(this));
		} catch (err) {
			this._reject(err);
		}
	}

	// 请求成功 - 依次执行成功队列中的函数，并清空队列
	_resolve(val) {
		if (this._status !== PENDING) return;
		const runResolved = (value) => {
			let cb;
			while (cb = this._resolvedCallbacks.shift()) {
				cb(value)
			}
		};
		this._status = RESOLVED;
		this._value = val;
		runResolved(val);
	};

	// 请求失败 - 依次执行失败队列中的函数，并清空队列
	_reject(val) {
		if (this._status !== PENDING) return;
		const runRejected = (error) => {
			let cb;
			while (cb = this._rejectedCallbacks.shift()) {
				cb(error)
			}
		}
		this._status = REJECTED;
		this._value = val;
		runRejected(val);
	};

	then(onResolve, onReject) {
		return new MyPromise((onResolveNext, onRejectNext) => {
			const resolved = (value) => {
				if (typeof onResolve === 'function') {
					const res = onResolve(value);
					if (res instanceof MyPromise) {
						res.then(onResolveNext, onRejectNext);
					} else {
						onResolveNext(res);
					}
				} else {
					// throw new Error('params error');
					onResolveNext(value);
				}
			}
			const rejected = (error) => {
				if (typeof onReject === 'function') {
					const res = onReject(error);
					if (res instanceof MyPromise) {
						res.then(onResolveNext, onRejectNext);
					} else {
						onRejectNext(res);
					}
				} else {
					// throw new Error('params error');
					onRejectNext(error);
				}
			}

			switch (this._status) {
				case PENDING:
					this._resolvedCallbacks.push(resolved);
					this._rejectedCallbacks.push(rejected);
					break;
				case RESOLVED:
					resolved(this._value);
					break;
				case REJECTED:
					rejected(this._value);
					break;	
			}
		});
	}
}

new MyPromise((resolve, reject) => {
	// resolve(1);
	reject(2);
}).then(1, 2).then((res) => {
	console.log(res);
}, (err) => {
	console.log(err);
});