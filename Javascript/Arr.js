

const Arr = {

    /**
     * 从数组中获取一个随机元素
     * sample([3, 7, 9, 11]); // 9
     * 
     * @param {Array} arr
     * @returns {any}
     */
    sample: arr => arr[Math.floor(Math.random() * arr.length)],

    /**
     * 在数组中随机生选择 n 个元素生成新的数组，如果n大于数组长度，则为随机整个数组的排序
     * 使用了高效的 Fisher–Yates shuffle 洗牌算法
     * sampleSize([1, 2, 3], 2); // [3,1]
     * sampleSize([1, 2, 3], 4); // [2,3,1]
     * 
     * @param {Array} arr
     * @param {Number} n
     * @returns {Array}
     */
    sampleSize: ([...arr], n = 1) => {
        let m = arr.length;
        while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
        }
        return arr.slice(0, n);
    },

    /**
     * 数组洗牌
     * 使用 Fisher–Yates shuffle 洗牌算法对数组的内容进行随机排序，生成新的数组
     * const foo = [1, 2, 3];
     * shuffle(foo); // [2, 3, 1]
     * 
     * @param {Array} arr
     * @returns {Array}
     */
    shuffle: ([...arr]) => {
        let m = arr.length;
        while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
        }
        return arr;
    },

    /**
     * 按照指定的数字范围随机生成长度为 n 的数组
     * randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
     * 
     * @param {Number} min
     * @param {Number} max
     * @param {Number} n
     * @returns {Array}
     */
    randomIntArrayInRange: (min, max, n = 1) => Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min),

    /**
     * 检测对象是否为类数组对象,是否可迭代
     * isArrayLike(document.querySelectorAll('.className')); // true
     * isArrayLike('abc'); // true
     * isArrayLike(null); // false
     * 
     * @param {any} obj
     * @returns {boolean}
     */
    isArrayLike: obj => obj != null && typeof obj[Symbol.iterator] === 'function',

    /**
     * 数组的第一个元素
     * head([1, 2, 3]); // 1
     * 
     * @param {array} arr
     * @returns {any}
     */
    head: arr => arr[0],

    /**
     * 返回数组的最后一个元素
     * last([1, 2, 3]); // 3
     * 
     * @param {Array} arr
     * @returns {any}
     */
    last: arr => arr[arr.length - 1],

    /**
     * 获取数组除第一个元素之外的所有元素，如果数组只有一个元素，则返回本数组
     * tail([1, 2, 3]); // [2,3]
     * tail([1]); // [1]
     * 
     * @param {Array} arr
     * @returns {Array}
     */
    tail: arr => (arr.length > 1 ? arr.slice(1) : arr),

    /**
     * 返回数组中除最后一个元素的所有元素
     * initial([1, 2, 3]); // [1,2]
     * 
     * @param {array} arr
     * @returns {array}
     */
    initial: arr => arr.slice(0, -1),

    /**
     * 返回两个数组元素之间的交集
     * intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
     * 
     * @param {array} a
     * @param {array} b
     * @returns {array}
     */
    intersection: (a, b) => {
        const s = new Set(b);
        return a.filter(x => s.has(x));
    },

    /**
     * 返回两个数组之间的交集
     * similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
     * 
     * @param {Array} arr
     * @param {Array} values
     * @returns {Array}
     */
    similarity: (arr, values) => arr.filter(v => values.includes(v)),

    /**
     * 按照给定的函数处理需要对比的数组元素，然后根据处理后的数组，找出交集，最后从第一个数组中将对应的元素输出
     * intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
     * 
     * @param {array} a
     * @param {array} b
     * @param {function} fn
     * @returns {array}
     */
    intersectionBy: (a, b, fn) => {
        const s = new Set(b.map(fn));
        return a.filter(x => s.has(fn(x)));
    },

    /**
     * 按照给定的函数对比两个数组的差异，然后找出交集，最后从第一个数组中将对应的元素输出
     * intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
     * 
     * @param {array} a
     * @param {array} b
     * @param {function} comp
     * @returns {array}
     */
    intersectionWith: (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1),

    /**
     * 如果数组所有元素满足函数条件，则返回true。调用时，如果省略第二个参数，则默认传递布尔值
     * all([4, 2, 3], x => x > 1); // true
     * all([1, 2, 3]); // true复制代码
     * 
     * @param {array} arr 
     * @param {function} fn 
     * @returns {boolean}
     */
    all: (arr, fn = Boolean) => arr.every(fn),

    /**
     * 判断数组中的元素是否都相等
     * allEqual([1, 2, 3, 4, 5, 6]); // false
     * allEqual([1, 1, 1, 1]); // true复制代码
     * 
     * @param {array} arr 
     * @returns {boolean}
     */
    allEqual: arr => arr.every(val => val === arr[0]),

    /**
     * 检查两个数字是否近似相等，差异值可以通过传参的形式进行设置
     * approximatelyEqual(Math.PI / 2.0, 1.5708); // true复制代码
     * 
     * @param {number} v1 
     * @param {number} v2 
     * @param {number} epsilon 
     * @returns 
     */
    approximatelyEqual: (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon,

    /**
     * 将没有逗号或双引号的元素转换成带有逗号分隔符的字符串即CSV格式识别的形式
     * arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
     * arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'复制代码
     * 
     * @param {array} arr 
     * @param {string} delimiter 
     * @returns {string}
     */
    arrayToCSV: (arr, delimiter = ',') => arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n'),

    /**
     * 数组分组
     * 依据第二个参数的真假条件，将一个参数的数组进行分组，条件为真的放入第一个数组，其它的放入第二个数组
     * bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]
     * 
     * @param {array} arr
     * @param {array} filter
     * @returns {array}
     */
    bifurcate: (arr, filter) => arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]),

    /**
     * 数组分组
     * 依据指定的函数逻辑(第二个参数)进行分组，满足函数条件的逻辑为真，放入第一个数组中，其它不满足的放入第二个数组
     * bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); // [ ['beep', 'boop', 'bar'], ['foo'] ]
     * @param {array} arr
     * @param {function} fn
     * @returns {array}
     */
    bifurcateBy: (arr, fn) => arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]),

    /**
     * 将非数值的值转换成数组对象
     * castArray('foo'); // ['foo']
     * castArray([1]); // [1]
     * 
     * @param {any} val
     * @returns {array}
     */
    castArray: val => (Array.isArray(val) ? val : [val]),

    /**
     * 移除数组中值为false的元素
     * 
     * @param {array} arr
     * @returns {array}
     */
    compact: arr => arr.filter(Boolean),

    /**
     * 统计数组中某个值出现的次数
     * 
     * @param {array} arr
     * @param {any} val
     * @returns {number}
     */
    countOccurrences: (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0),

    /**
     * 按照指定数组的深度，将嵌套数组进行展平
     * flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
     * flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
     * 
     * @param {array} arr
     * @param {number} depth
     * @returns {array}
     */
    flatten: (arr, depth = 1) => arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []),

    /**
     * 通过递归的形式，将多维数组展平成一维数组
     * deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
     * 
     * @param {array} arr 
     * @returns {array}
     */
    deepFlatten: arr => [].concat(...arr.map(v => (Array.isArray(v) ? this.deepFlatten(v) : v))),

    /**
     * 查找两个给定数组的差异，查找出前者数组在后者数组中不存在元素
     * difference([1, 2, 3], [1, 2, 4]); // [3]
     * 
     * @param {array} a
     * @param {array} b
     * @returns {array}
     */
    difference: (a, b) => {
        const s = new Set(b);
        return a.filter(x => !s.has(x));
    },

    /**
     * 通过给定的函数来处理需要对比差异的数组，查找出前者数组在后者数组中不存在元素
     * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
     * differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
     * 
     * @param {array} a
     * @param {array} b
     * @param {function} fn
     * @returns {array}
     */
    differenceBy: (a, b, fn) => {
        const s = new Set(b.map(fn));
        return a.filter(x => !s.has(fn(x)));
    },

    /**
     * 按照给定函数逻辑筛选需要对比差异的数组，查找出前者数组在后者数组中不存在元素
     * differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]
     * 
     * @param {array} arr
     * @param {array} val
     * @param {function} comp
     * @returns {array}
     */
    differenceWith: (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1),

    /**
     * 将输入的数字拆分成单个数字组成的数组
     * digitize(431); // [4, 3, 1]
     * 
     * @param {number} n
     * @returns {array}
     */
    digitize: n => [...`${n}`].map(i => parseInt(i)),

    /**
     * 将给定的数组从左边开始删除 n 个元素
     * drop([1, 2, 3]); // [2,3]
     * drop([1, 2, 3], 2); // [3]
     * drop([1, 2, 3], 42); // []
     * 
     * @param {array} arr
     * @param {number} n
     * @returns {array}
     */
    drop: (arr, n = 1) => arr.slice(n),

    /**
     * 将给定的数组从右边开始删除 n 个元素
     * dropRight([1, 2, 3]); // [1,2]
     * dropRight([1, 2, 3], 2); // [1]
     * dropRight([1, 2, 3], 42); // []
     * 
     * @param {array} arr
     * @param {number} n
     * @returns {array}
     */
    dropRight: (arr, n = 1) => arr.slice(0, -n),

    /**
     * 将给定的数组按照给定的函数条件从右开始删除，直到当前元素满足函数条件为True时，停止删除，并返回数组剩余元素
     * dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
     * 
     * @param {array} arr
     * @param {function} func
     * @returns {array}
     */
    dropRightWhile: (arr, func) => {
        while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
        return arr;
    },

    /**
     * 按照给的的函数条件筛选数组，不满足函数条件的将从数组中移除
     * dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
     * 
     * @param {array} arr
     * @param {function} func
     * @returns {array}
     */
    dropWhile: (arr, func) => {
        while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
        return arr;
    },

    /**
     * 移除数组中重复的元素
     * unique([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
     * 
     * @param {array} arr
     * @returns {array}
     */
    unique: arr => [...new Set(arr)],

    /**
     * 按照给定的函数条件筛选数组，将最后一个满足条件的元素进行删除
     * findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
     * 
     * @param {array} arr
     * @param {function} fn
     * @returns {any}
     */
    findLast: (arr, fn) => arr.filter(fn).pop(),

    /**
     * 按照给定的函数条件，从数组的右边往左依次进行执行
     * forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
     * 
     * @param {array} arr
     * @param {function} fn
     * @returns {any}
     */
    forEachRight: (arr, fn) => arr.slice(0).reverse().forEach(fn),

    /**
     * 返回数组中某个值对应的所有索引值，如果不包含该值，则返回一个空数组
     * indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
     * indexOfAll([1, 2, 3], 4); // []
     * 
     * @param {array} arr
     * @param {any} val
     * @returns {array}
     */
    indexOfAll: (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []),

    /**
     * 合并两个数组，并删除重复的内容
     * union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
     * 
     * @param {Array} a
     * @param {Array} b
     * @returns {Array}
     */
    union: (a, b) => Array.from(new Set([...a, ...b])),

};