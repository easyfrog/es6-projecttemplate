import object from './module2';


console.log(object.name, object.age);

export const CONST_AGE = 25;

function myFun() {
	console.log('alksdjfasd');
}

export var num = 1010;

export class Person {
	constructor(name, age) {
		this._name = name;
		this._age = age;

		Object.defineProperties(this, {
			myProp: {
				value: 'myProp'
			}
		});
	}

	get name() {
		return this._name;
	}

	set name(val) {
		this._name = val;
	}

	get age() {
		return this._age;
	}

	set age(val) {
		this._age = val;
	}

	sayHi(words = 'haha') {
		console.log(`${this.name} say hi~ and ${words}`);
		myFun();
	}
}