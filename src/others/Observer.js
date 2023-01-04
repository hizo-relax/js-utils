// 观察者模式

class Subject {
	constructor() {
		this.state = 0;
		this.observers = [];
	}

	// 获取状态
	getState() {
		return this.state;
	}

	// 更新状态
	setState(state) {
		this.state = state;
		this.notify();
	}

	// 添加观察者
	attach(observer) {
		this.observers.push(observer);
	}

	// 事件更新通知所有观察者
	notify() {
		this.observers.forEach(observer => {
			observer.update();
		});
	}
}

class Observer {
	constructor(name, subject) {
		this.name = name;
		this.subject = subject;
		this.subject.attach(this);
	}

	update() {
		console.log(`${this.name} update, state: ${this.subject.getState()}`)
	}
}

let s = new Subject();
let o1 = new Observer('o1', s);
let o2 = new Observer('o2', s);
let o3 = new Observer('o3', s);

s.setState(4);