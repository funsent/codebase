

const Env = {

    /**
     * 将页面导向一个指定的网址
     * 
     * @param {String} url
     * @param {Boolean} asLink
     * @returns
     */
    redirect: (url, asLink = true) => asLink ? (window.location.href = url) : window.location.replace(url),

    /**
     * 运行环境是否在浏览器
     * isBrowser(); // true (browser)
     * isBrowser(); // false (Node)
     * 
     * @returns {boolean}
     */
    isBrowser: () => ![typeof window, typeof document].includes('undefined'),

    /**
     * 判断当前页面是否处于活动状态（显示状态）
     * isBrowserTabFocused(); // true
     * 
     * @returns {boolean}
     */
    isBrowserTabFocused: () => !document.hidden,

    /**
     * 返回当前访问的 URL 地址
     * @returns {string}
     */
    currentUrl: () => window.location.href,

    /**
     * 检测是否为PC端浏览器
     * 
     * @returns {boolean}
     */
    isPCBroswer: () => {
        let e = window.navigator.userAgent.toLowerCase()
            , t = "ipad" == e.match(/ipad/i)
            , i = "iphone" == e.match(/iphone/i)
            , r = "midp" == e.match(/midp/i)
            , n = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i)
            , a = "ucweb" == e.match(/ucweb/i)
            , o = "android" == e.match(/android/i)
            , s = "windows ce" == e.match(/windows ce/i)
            , l = "windows mobile" == e.match(/windows mobile/i);
        return !(t || i || r || n || a || o || s || l)
    },

    /**
     * 识别浏览器及平台
     * 
     * @returns {string}
     */
    platform: () => {
        // 运行环境是浏览器 
        let inBrowser = typeof window !== 'undefined';
        // 运行环境是微信 
        let inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
        let weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
        // 浏览器UA判断 
        let UA = inBrowser && window.navigator.userAgent.toLowerCase();
        if (UA) {
            let platforms = {
                IE: /msie|trident/.test(UA),
                IE9: UA.indexOf('msie 9.0') > 0,
                Edge: UA.indexOf('edge/') > 0,
                Android: UA.indexOf('android') > 0 || (weexPlatform === 'android'),
                IOS: /iphone|ipad|ipod|ios/.test(UA) || (weexPlatform === 'ios'),
                Chrome: /chrome\/\d+/.test(UA) && !(UA.indexOf('edge/') > 0),
            }
            for (const key in platforms) {
                if (platforms.hasOwnProperty(key)) {
                    if (platforms[key]) return key
                }
            }
        }
    },

    /**
     * 性能分析
     * performance.timing 包含延迟相关的性能信息
     * performance.memory 包含内存信息，是Chrome中添加的一个非标准扩展，在使用时需要注意
     * window.onload = function () { performance(); };
     */
    performance: () => {
        setTimeout(() => {
            let t = performance.timing,
                m = performance.memory;
            console.table({
                'DNS查询耗时': (t.domainLookupEnd - t.domainLookupStart).toFixed(0),
                'TCP链接耗时': (t.connectEnd - t.connectStart).toFixed(0),
                'request请求耗时': (t.responseEnd - t.responseStart).toFixed(0),
                '解析dom树耗时': (t.domComplete - t.domInteractive).toFixed(0),
                '白屏时间': (t.responseStart - t.navigationStart).toFixed(0),
                'domready时间': (t.domContentLoadedEventEnd - t.navigationStart).toFixed(0),
                'onload时间': (t.loadEventEnd - t.navigationStart).toFixed(0),
                'js内存使用占比': m ? (m.usedJSHeapSize / m.totalJSHeapSize * 100).toFixed(2) + '%' : undefined
            })
        })
    },

    /**
     * 计算函数执行时间
     * useTime(() => Math.pow(2, 10)); // 1024, (logged): useTime: 0.02099609375ms
     * 
     * @param {Function} callback
     * @returns {any}
     */
    useTime: callback => {
        console.time('useTime');
        const r = callback();
        console.timeEnd('useTime');
        return r;
    },

    /**
     * 检测页面是否滚动到页面底部
     * 
     * @returns {boolean}
     */
    bottomVisible: () => document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight),
};