function replacer(key, value) {
	if (typeof value === "string") {
		return undefined;
	}
	return value;
}

console.log(JSON.stringify(
	{ name: '张三', age: 18 },
	replacer
));
