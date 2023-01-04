// 发布订阅模式

class Publish {
	constructor(center) {
		this.value = '';
		this.center = center;
	}

	getValue() {
		return this.value;
	}

	setValue(val) {
		this.value = val;
		this.center.notify(this.value);
	}
}

class newsCenter {
	constructor() {
		this.subscribers = [];
	}

	attach(subscriber) {
		this.subscribers.push(subscriber);
	}

	notify(val) {
		this.subscribers.forEach(subscriber => {
			subscriber.update(val);
		});
	}
}

class Subscription {
	constructor(name, newsCenter) {
		this.name = name;
		newsCenter.attach(this);
	}

	update(val) {
		console.log(`${this.name}收到更新：${val}`);
	}
}

const news = new newsCenter();
const pub = new Publish(news);

const sub1 = new Subscription('小明', news);
const sub2 = new Subscription('小张', news);

pub.setValue('哈哈哈哈');