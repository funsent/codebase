

const Num = {

    /**
     * 格式化数字，将其转换成逗号分隔的数字字符串
     * toDecimalMark(12305030388.9087); // "12,305,030,388.909"
     * 
     * @param {Number} num
     * @returns {String}
     */
    toDecimalMark: num => num.toLocaleString('en-US'),

    /**
     * 计算数字之和
     * sum(1, 2, 3, 4); // 10
     * sum(...[1, 2, 3, 4]); // 10
     * 
     * @param  {...any} arr
     * @returns {Number}
     */
    sum : (...arr) => [...arr].reduce((acc, val) => acc + val, 0),

    /**
     * 返回指定范围内的随机数字（包含小数）
     * randomNumberInRange(2, 10); // 6.0211363285087005
     * 
     * @param {Number} min
     * @param {Number} max
     * @returns {Number}
     */
    randomNumberInRange: (min, max) => Math.random() * (max - min) + min,

    /**
     * 按照指定的范围内生成一个随机整数
     * randomIntegerInRange(0, 5); // 3
     * 
     * @param {Number} min
     * @param {Number} max
     * @returns {Number}
     */
    randomIntegerInRange: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,

    /**
     * 将小数按照指定的位数，进行四舍五入保留
     * round(1.005, 2); // 1.01
     * 
     * @param {Number} n
     * @param {Number} decimals
     * @returns {Number}
     */
    round : (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`),

    /**
     * 返回两个或多个数的平均数
     * average(...[1, 2, 3]); // 2
     * average(1, 2, 3); // 2
     * 
     * @param  {...any} nums
     * @returns {number}
     */
    average: (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length,

    /**
     * 通过 map() 函数将对象转换成数组，然后在调用reduce()函数进行累加，然后根据数组长度返回平均值
     * averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
     * averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
     * 
     * @param {array} arr
     * @param {function} fn
     * @returns {number}
     */
    averageBy: (arr, fn) => arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) / arr.length,
};