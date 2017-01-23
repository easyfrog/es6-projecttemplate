import {CONST_AGE, Person, num} from './module'

console.log('num from module', num);

let xiaoming = new Person('xiaoming', 13);

xiaoming.sayHi(' nice to meet you! ');
xiaoming.sayHi();

console.log(xiaoming, Person.prototype, Object.getPrototypeOf(xiaoming), xiaoming.myProp);

console.log('Symbol is ', Symbol('mysym'));

console.log(`const value is ${CONST_AGE}`);

let arr = [12,3,4,6,6];

var sum = arr.reduce((p, n) => p + n, 0);

console.log(`sum is ${ sum }`);

var map = new Map();
map.set('name', 'ztc');

console.log(map.get('name'));


if (DEBUG) {
	(function() {
		console.log('IS DEBUG');
	})();
}

/*function* generator() {
	yield 1;
	yield 2;
	yield 3;
}

let gen = generator();

(function dg() {
	var _id = setTimeout(() => {
		var res = gen.next();
		if (res.done) {clearInterval(_id); return;}
		console.log(res.value);
		dg();
	}, 1000);
})();*/

/*var pro = new Promise((res, rej) => {
	setTimeout(() => {
		res('hahahaah promise');
	}, 1200);
});

var pro2 = new Promise((res, rej) => {
	setTimeout(() => {
		console.log('1111111');
		res(pro);
	}, 1000);
});

pro2.then((res) => console.log(res))
	.catch(err => console.log(err));*/


