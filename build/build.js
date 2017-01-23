/*! Hello Fengmap */

(function () {
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







var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set$1 = function set$1(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set$1(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

console.log(obj.name, obj.age);

var CONST_AGE = 25;

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
		get: function get() {
			return this._name;
		},
		set: function set(val) {
			this._name = val;
		}
	}, {
		key: 'age',
		get: function get() {
			return this._age;
		},
		set: function set(val) {
			this._age = val;
		}
	}]);
	return Person;
}();

console.log('num from module', num$$1);

var xiaoming = new Person('xiaoming', 13);

xiaoming.sayHi(' nice to meet you! ');
xiaoming.sayHi();

console.log(xiaoming, Person.prototype, Object.getPrototypeOf(xiaoming), xiaoming.myProp);

console.log('Symbol is ', Symbol('mysym'));

console.log('const value is ' + CONST_AGE);

var arr = [12, 3, 4, 6, 6];

var sum = arr.reduce(function (p, n) {
	return p + n;
}, 0);

console.log('sum is ' + sum);

var map = new Map();
map.set('name', 'ztc');

console.log(map.get('name'));

if (DEBUG) {
	(function () {
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

}());
