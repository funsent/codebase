

const Color = {

    /**
     * 生成随机的16进制颜色代码
     * randomHexColorCode(); // "#e34155"
     * 
     * @returns {String}
     */
    randomHexColorCode : () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
      },

};