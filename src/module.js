import object from './module2';

// import { Math as tMath } from '../lib/three.modules';
// import { Math as tMath } from '../node_modules/three/build/three.module.js';
// import { Math as tMath } from '../node_modules/three/src/Three.js';
// import { Vector3 } from '../node_modules/three/build/three.module.js';

// console.log(tMath.DEG2RAD);
// console.log(new Vector3());

console.log(object.name, object.age);

const CONST_AGE = 25;

function myFun() {
	console.log('alksdjfasd');
}

var num = 1010;


class Person {
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

export { CONST_AGE, num, Person };