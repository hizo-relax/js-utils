const tree = [
	{
		title: '鞋子',
		key: 'shoes',
		children: [
			{
				title: '男鞋',
				key: 'manShoes',
				children: [
					{
						title: '运动鞋',
						key: 'sportsShoes',
					}
				]
			}
		]
	},
	{
		title: '衣服',
		key: 'clothes',
		children: [
			{
				title: '裤子',
				key: 'pants',
				children: [
					{
						title: '休闲裤',
						key: 'casualPants',
					}
				]
			}
		]
	},
];

const filterData = (arr, target) => {
	let filter = [];
	for (const item of arr) {
		const { title, children, key } = item;
		if (children && children.length) {
			const child = filterData(children, target);
			if (child.length) {
				filter = [ title, ...child ]
			}
		} else if (key === target) {
			filter.push(title);
		}
	}
	return filter;
};

console.log(filterData(tree, 'casualPants'));