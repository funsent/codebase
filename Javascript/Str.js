

const Str = {

    /**
     * 字符串颠倒
     * reverse('foobar'); // 'raboof'
     * 
     * @param {String} str
     * @returns {String}
     */
    reverse: str => [...str].reverse().join(''),

    /**
     * 返回字符串的字节长度
     * byteSize(''); // 4
     * byteSize('Hello World'); // 11
     * 
     * @param {String} str
     * @returns {Number}
     */
    byteSize: str => new Blob([str]).size,

    /**
     * 将字符串的首字母转成大写
     * capitalize('fooBar'); // 'FooBar'
     * capitalize('fooBar', true); // 'FooBar'
     * 
     * @param {String} first
     * @param {...any} rest
     * @returns {String}
     */
    capitalize: ([first, ...rest]) => first.toUpperCase() + rest.join(''),

    /**
     * 将一个句子中每个单词首字母转换成大写字母
     * capitalizeEveryWord('hello world!'); // 'Hello World!'
     * 
     * @param {String} str
     * @returns {String}
     */
    capitalizeEveryWord: str => str.replace(/\b[a-z]/g, char => char.toUpperCase()),

    /**
     * 将字符串的首字母转换成小写字母
     * decapitalize('FooBar'); // 'fooBar'
     * 
     * @param {String} first
     * @param {...any} rest
     * @returns {String}
     */
    decapitalize: ([first, ...rest]) => first.toLowerCase() + rest.join(''),

    /**
     * 检测两个单词是否相似
     * isAnagram('iceman', 'cinema'); // true
     * 
     * @param {String} str1
     * @param {String} str2
     * @returns {Boolean}
     */
    isAnagram: (str1, str2) => {
        const normalize = str => str.toLowerCase().replace(/[^a-z0-9]/gi, '').split('').sort().join('');
        return normalize(str1) === normalize(str2);
    },

    /**
     * 判断当前字符串是否都为小写
     * sLowerCase('abc'); // true
     * isLowerCase('a3@$'); // true
     * isLowerCase('Ab4'); // false
     * 
     * @param {String} str
     * @returns {Boolean}
     */
    isLowerCase: str => str === str.toLowerCase(),

    /**
     * 判断当前字符串的字母是否都为大写
     * isUpperCase('ABC'); // true
     * isLowerCase('A3@$'); // true
     * isLowerCase('aB4'); // false
     * 
     * @param {String} str
     * @returns {Boolean}
     */
    isUpperCase: str => str === str.toUpperCase(),

    /**
     * 判断给定的字符串是否是 JSON 字符串
     * isValidJSON('{"name":"Adam","age":20}'); // true
     * isValidJSON('{"name":"Adam",age:"20"}'); // false
     * isValidJSON(null); // true
     * 
     * @param {String} str
     * @returns {Boolean}
     */
    isValidJSON: str => {
        try {
            JSON.parse(str);
            return true;
        } catch (e) {
            return false;
        }
    },

    /**
     * 按照指定的长度生成字符串，如果字符串不够，可以按照设定的字符串内容在左右两边进行填充，默认空格为填充字符
     * pad('cat', 8); // '  cat   '
     * pad(String(42), 6, '0'); // '004200'
     * pad('foobar', 3); // 'foobar'
     * 
     * @param {String} str
     * @param {Number} length
     * @param {String} char
     * @returns {String}
     */
    pad: (str, length, char = ' ') => str.padStart((str.length + length) / 2, char).padEnd(length, char),

    /**
     * 将单词的内容按照字母的顺序进行重新排序
     * sortCharactersInString('cabbage'); 
     * 
     * @param {String} str
     * @returns {String}
     */
    sortCharactersInString: str => [...str].sort((a, b) => a.localeCompare(b)).join(''),

    /**
     * 将一段字符串按照”换行符“分割成数组进行输出
     * splitByLine('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
     * 
     * @param {String} str
     * @returns {Array}
     */
    splitByLine: str => str.split(/\r?\n/),

    /**
     * 将一段英文字符串拆分成单词数组，去除一些特殊符号
     * words('I love javaScript!!'); // ["I", "love", "javaScript"]
     * words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
     * 
     * @param {String} str
     * @param {Regex} pattern
     * @returns {String}
     */
    words: (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean),
};