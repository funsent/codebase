

const Obj = {

    /**
     * 去重对象的属性，如果对象中含有重复的属性，以前面的为准
     * defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
     * 
     * @param {Object} obj
     * @param  {...any} defs
     * @returns {Object}
     */
    defaults: (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj),

    /**
     * 判断当前变量的值是否为 null 或 undefined 类型    
     * isNullOrUndefined(null); // true
     * isNullOrUndefined(undefined); // true
     * 
     * @param {any} val
     * @returns {boolean}
     */
    isNullOrUndefined: val => val === undefined || val === null,

    /**
     * 检查当前的值是否为数字类型
     * isNumber('1'); // false
     * isNumber(1); // true
     * 
     * @param {any} n
     * @returns {boolean}
     */
    isNumber: n => !isNaN(parseFloat(n)) && isFinite(n),

    /**
     * 判断参数的值是否是对象
     * isObject([1, 2, 3, 4]); // true
     * isObject([]); // true
     * isObject(['Hello!']); // true
     * isObject({ a: 1 }); // true
     * isObject({}); // true
     * isObject(true); // false
     * 
     * @param {any} obj
     * @returns {boolean}
     */
    isObject: obj => obj === Object(obj),

    /**
     * 是否是类对象，或者类似类对象
     * isObjectLike({}); // true
     * isObjectLike([1, 2, 3]); // true
     * isObjectLike(x => x); // false
     * isObjectLike(null); // false
     * 
     * @param {any} val
     * @returns {boolean}
     */
    isObjectLike: val => val !== null && typeof val === 'object',

    /**
     * 是否是扁平对象
     * 检查参数的值是否是由Object构造函数创建的对象
     * isPlainObject({ a: 1 }); // true
     * isPlainObject(new Map()); // false
     * 
     * @param {any} val
     * @returns {boolean}
     */
    isPlainObject: val => !!val && typeof val === 'object' && val.constructor === Object,

    /**
     * 准确的判断数据类型
     * isType([], 'Array'); // true
     * isType(/\d/, 'RegExp'); // true
     * isType(new Date(), 'Date'); // true
     * isType(function(){}, 'Function'); // true
     * isType(Symbol(1), 'Symbol'); // true
     * 
     * @param {any} target 
     * @param {string} type 
     * @returns {boolean}
     */
    isType: (target, type) => {
        let targetType = Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
        return targetType === type.toLowerCase();
    },

    /**
     * 判断数据是否为指定的数据类型，如果是则返回true
     * is(Array, [1]); // true
     * is(ArrayBuffer, new ArrayBuffer()); // true
     * is(Map, new Map()); // true
     * is(RegExp, /./g); // true
     * is(Set, new Set()); // true
     * is(WeakMap, new WeakMap()); // true
     * is(WeakSet, new WeakSet()); // true
     * is(String, ''); // true
     * is(String, new String('')); // true
     * is(Number, 1); // true
     * is(Number, new Number(1)); // true
     * is(Boolean, true); // true
     * is(Boolean, new Boolean(true)); // true
     * 
     * @param {Object} type
     * @param {any} val
     * @returns {boolean}
     */
    is: (type, val) => ![, null].includes(val) && val.constructor === type,

    /**
     * 返回数据的类型
     * getType(new Set([1, 2, 3])); // 'set'
     * 
     * @param {Object} v
     * @returns {string}
     */
    getType: v => v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase(),

    /**
     * 对象属性剔除
     * let data = {id: 1, title: 'xxx', comment: []};
     * omit(data, ['id']) // {title: 'xxx', comment: []};
     * 
     * @param {Object} object
     * @param {String[]} props
     * @return {Object}
     */
    omit: (object, props = []) => {
        let res = {};
        Object.keys(object).forEach(key => {
            if (props.includes(key) === false) {
                res[key] = typeof object[key] === 'object' && object[key] !== null ?
                    JSON.parse(JSON.stringify(object[key])) :
                    object[key];
            }
        })
        return res
    },

    /**
     * 按照给定的函数条件，查找第一个满足条件对象的键值
     * findKey({ barney: { age: 36, active: true }, fred: { age: 40, active: false }, pebbles: { age: 1, active: true } }, o => o['active']); // 'barney'
     * 
     * @param {Object} obj
     * @param {Function} fn
     * @returns {any}
     */
    findKey: (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj)),

    /**
     * 按照给定的函数条件，支持三个参数作为输入（值、键、对象本身），进行迭代对象
     * forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
     * 
     * @param {Object} obj
     * @param {Function} fn
     * @returns {any}
     */
    forOwn: (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj)),

    /**
     * 比较两个对象，以确定第一个对象是否包含与第二个对象相同的属性与值
     * matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
     * matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
     * 
     * @param {Object} obj
     * @param {Object} source
     * @returns {Boolean}
     */
    matches: (obj, source) => Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]),
};