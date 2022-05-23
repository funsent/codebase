

const DateTime = {

    /**
     * 返回明天的日期
     * @returns {Date}
     */
    tomorrow: () => {
        let t = new Date();
        t.setDate(t.getDate() + 1);
        return t.toISOString().split('T')[0];
    },
    
    /**
     * 今天是今年的第几天
     * dayOfYear(new Date()); // 272
     * 
     * @param {Date} date
     * @returns {number}
     */
    dayOfYear: date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24),

    /**
     * 日期格式化
     * formatDate(); // "2020-2-24 13:44"
     * formatDate('M月D日 h:m'); // "2月24日 13:45"
     * formatDate('h:m Y-M-D', 1582526221604); // "14:37 2020-2-24"
     * 
     * @param {string} format
     * @param {number} timestamp - 时间戳
     * @return {string} 
     */
    format: (format = 'Y-M-D h:m', timestamp = Date.now()) => {
        let date = new Date(timestamp);
        let dateInfo = {
            Y: date.getFullYear(),
            M: date.getMonth() + 1,
            D: date.getDate(),
            h: date.getHours(),
            m: date.getMinutes(),
            s: date.getSeconds()
        };
        let formatNumber = (n) => n > 10 ? n : '0' + n;
        let res = format
            .replace('Y', dateInfo.Y)
            .replace('M', dateInfo.M)
            .replace('D', dateInfo.D)
            .replace('h', formatNumber(dateInfo.h))
            .replace('m', formatNumber(dateInfo.m))
            .replace('s', formatNumber(dateInfo.s));
        return res;
    },

    /**
     * 生成一周时间
     * ["2020/2/26", "2020/2/27", "2020/2/28", "2020/2/29", "2020/3/1", "2020/3/2", "2020/3/3"]
     * 
     * @returns {array}
     */
    weeks: () => {
        return [...new Array(7)].map((j, i) => new Date(Date.now() + i * 8.64e7).toLocaleDateString());
    },

    /**
     * 从Date对象里获取时间
     * getColonTimeFromDate(new Date()); // "08:38:00"
     * 
     * @param {Date} date
     * @returns {string}
     */
    getTimeFromDate: date => date.toTimeString().slice(0, 8),

    /**
     * 返回两个日期之间相差多少天
     * getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
     * 
     * @param {Date} dateInitial
     * @param {Date} dateFinal
     * @returns {number}
     */
    getDaysDiffBetweenDates: (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 3600 * 24),

    /**
     * 接收两个日期类型的参数，判断前者的日期是否晚于后者的日期
     * isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
     * 
     * @param {Date} dateA
     * @param {Date} dateB
     * @returns {boolean}
     */
    isAfterDate: (dateA, dateB) => dateA > dateB,

    /**
     * 接收两个日期类型的参数，判断前者的日期是否早于后者的日期
     * isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
     * 
     * @param {Date} dateA
     * @param {Date} dateB
     * @returns {boolean}
     */
    isBeforeDate: (dateA, dateB) => dateA < dateB,

    /**
     * 判断给定的两个日期是否是同一天
     * isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
     * 
     * @param {Date} dateA
     * @param {Date} dateB
     * @returns {boolean}
     */
    isSameDate: (dateA, dateB) => dateA.toISOString() === dateB.toISOString(),

    /** 
     * 查找日期数组中最早的日期进行输出
     * const array = [ new Date(2017, 4, 13), new Date(2018, 2, 12), new Date(2016, 0, 10), new Date(2016, 0, 9) ];
     * minDate(array); // 2016-01-08T22:00:00.000Z
     * 
     * @param  {...any} dates
     * @returns {Date}
     */
    minDate: (...dates) => new Date(Math.min.apply(null, ...dates)),

    /**
     * 查找日期数组中最大的日期进行输出
     * const array = [ new Date(2017, 4, 13), new Date(2018, 2, 12), new Date(2016, 0, 10), new Date(2016, 0, 9) ];
     * maxDate(array); // 2018-03-11T22:00:00.000Z
     * 
     * @param  {...any} dates
     * @returns {Date}
     */
    maxDate: (...dates) => new Date(Math.max.apply(null, ...dates)),
};

