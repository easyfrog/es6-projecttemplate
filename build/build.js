(function (exports) {
'use strict';

var obj = {
	name: 'ztc',
	age: 34
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

// import { Math as tMath } from '../lib/three.modules';
// import { Math as tMath } from '../node_modules/three/build/three.module.js';
// import { Math as tMath } from '../node_modules/three/src/Three.js';
// import { Vector3 } from '../node_modules/three/build/three.module.js';

// console.log(tMath.DEG2RAD);
// console.log(new Vector3());

console.log(obj.name, obj.age);

function myFun() {
	console.log('alksdjfasd');
}

var num$$1 = 1010;

var Person = function () {
	function Person(name, age) {
		classCallCheck(this, Person);

		this._name = name;
		this._age = age;

		Object.defineProperties(this, {
			myProp: {
				value: 'myProp'
			}
		});
	}

	createClass(Person, [{
		key: 'sayHi',
		value: function sayHi() {
			var words = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'haha';

			console.log(this.name + ' say hi~ and ' + words);
			myFun();
		}
	}, {
		key: 'name',
		get: function get$$1() {
			return this._name;
		},
		set: function set$$1(val) {
			this._name = val;
		}
	}, {
		key: 'age',
		get: function get$$1() {
			return this._age;
		},
		set: function set$$1(val) {
			this._age = val;
		}
	}]);
	return Person;
}();

// import { CONST_AGE } from './module';



/*
console.log('num from module', num);

let xiaoming = new Person('xiaoming', 13);

xiaoming.sayHi(' nice to meet you! ');
xiaoming.sayHi();

// console.log(xiaoming, Person.prototype, Object.getPrototypeOf(xiaoming), xiaoming.myProp);

console.log('Symbol is ', Symbol('mysym'));

console.log(`const value is ${CONST_AGE}`);

let arr = [12,3,4,6,6];

var sum = arr.reduce((p, n) => p + n, 0);

console.log(`sum is ${ sum }`);

var map = new Map();
map.set('name', 'ztc');

console.log(map.get('name'));


if (DEBUG) {
	console.log('IS DEBUG');
}

// export { Person, map }

// export { num } from './module';

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

exports.num = num$$1;
exports.Person = Person;

}((this.fengmap = this.fengmap || {})));
