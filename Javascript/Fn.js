

const Fn = {

    /**
     * 输出函数的名称
     * functionName(Math.max); // max (logged in debug channel of console)
     * 
     * @param {function} fn
     * @returns {string}
     */
    functionName : fn => (console.debug(fn.name), fn),

    /**
     * 执行一个函数，将剩余的参数传回函数当参数，返回相应的结果，并能捕获异常
     * let elements = attempt(function(selector) { return document.querySelectorAll(selector); }, '>_>');
     * if (elements instanceof Error) elements = []; // elements = []
     * @param {function} fn
     * @param  {...any} args 
     * @returns 
     */
    attempt: (fn, ...args) => {
        try {
            return fn(...args);
        } catch (e) {
            return e instanceof Error ? e : new Error(e);
        }
    },

    /**
    * 防抖 基础版本
    * 防抖用于减少函数请求次数，对于频繁的请求，只执行这些请求的最后一次
    * 
    * @param {function} func 
    * @param {number} wait 
    * @returns {function}
    */
    debounce: (func, wait = 300) => {
        let timer = null;
        return function () {
            if (timer !== null) {
                clearTimeout(timer);
            }
            timer = setTimeout(func.bind(this), wait);
        }
    },


            // 防抖
            debounce2：function (func, wait = 0) {
                if (typeof func !== 'function') {
                    throw new TypeError('need a function arguments')
                }
                let timeid = null;
                let result;


                return function() {
                    let context = this;
                    let args = arguments;

                    if (timeid) {
                        clearTimeout(timeid);
                    }
                    timeid = setTimeout(function() {
                        result = func.apply(context, args);
                    }, wait);

                    return result;　
                }
            }，

    /**
     * 防抖 改进版本
     * 改进版本添加是否立即执行的参数，因为有些场景下，我们希望函数能立即执行
     * let scrollHandler = debounce(function(e) { console.log(e); }, 500);
     * window.onscroll = scrollHandler;
     * 
     * @param {function} func - 执行函数
     * @param {number} wait - 等待时间
     * @param {boolean} immediate - 是否立即执行
     * @return {function}
     */
    debounceImmediate: (func, wait = 300, immediate = false) => {
        let timer, ctx;
        let later = (arg) => setTimeout(() => {
            func.apply(ctx, arg)
            timer = ctx = null
        }, wait)
        return function (...arg) {
            if (!timer) {
                timer = later(arg)
                ctx = this
                if (immediate) {
                    func.apply(ctx, arg)
                }
            } else {
                clearTimeout(timer)
                timer = later(arg)
            }
        }
    },

    /**
     * 
     * 节流用于减少函数请求次数，与防抖不同，节流是在一段时间执行一次
     * let scrollHandler = throttle(function(e) { console.log(e); }, 500);
     * window.onscroll = scrollHandler;
     * 
     * @param {function} func - 执行函数
     * @param {number} delay - 延迟时间
     * @return {function}
     */
    throttle: (func, delay) => {
        let timer = null
        return function (...arg) {
            if (!timer) {
                timer = setTimeout(() => {
                    func.apply(this, arg)
                    timer = null
                }, delay)
            }
        }
    },
};