

const Cookie = {
    /**
     * 将 cookie 序列化成 name=value 的字符串形式
     * serialize('foo', 'bar'); // 'foo=bar'
     * 
     * @param {String} name
     * @param {String} val
     * @returns {String}
     */
    serialize: (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`,
};