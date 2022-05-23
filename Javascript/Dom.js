

const Dom = {

    /**
     * 接收两个DOM元素对象参数，判断后者是否是前者的子元素
     * elementContains(document.querySelector('head'), document.querySelector('title')); // true
     * elementContains(document.querySelector('body'), document.querySelector('body')); // false
     * 
     * @param {HTMLDOMElement} parent
     * @param {HTMLDOMElement} child
     * @returns {Boolean}
     */
    elementContains: (parent, child) => parent !== child && parent.contains(child),

    /**
     * 返回DOM节点对应的样式
     * getStyle(document.querySelector('p'), 'font-size'); // '16px'
     * 
     * @param {HTMLDOMElement} el
     * @param {String} ruleName
     * @returns {String}
     */
    getStyle: (el, ruleName) => getComputedStyle(el)[ruleName],

    /**
     * 在相应的DOM节点添加样式
     * setStyle(document.querySelector('p'), 'font-size', '20px'); // The first <p> element on the page will have a font-size of 20px
     * 
     * @param {HTMLDOMElement} el
     * @param {String} ruleName
     * @param {String} val
     * @returns
     */
    setStyle: (el, ruleName, val) => (el.style[ruleName] = val),

    /**
     * 返回DOM元素是否包含指定的Class样式
     * hasClass(document.querySelector('p.special'), 'special'); // true
     * 
     * @param {HTMLDOMElement} el
     * @param {String} className
     * @returns {Boolean}
     */
    hasClass: (el, className) => el.classList.contains(className),

    /**
     * 隐藏指定的DOM元素
     * hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
     * 
     * @param  {...any} el
     * @returns
     */
    hide: (...el) => [...el].forEach(e => (e.style.display = 'none')),

    /**
     * 显示所有指定的 DOM 元素
     * show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
     * 
     * @param  {...any} el
     * @returns
     */
    show: (...el) => [...el].forEach(e => (e.style.display = '')),

    /**
     * 在给定的DOM节点后插入新的节点内容
     * insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
     * 
     * @param {HTMLDOMElement} el
     * @param {String} htmlString
     * @returns
     */
    insertAfter: (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString),

    /**
     * 在给定的DOM节点前插入新的节点内容
     * insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
     * 
     * @param {HTMLDOMElement} el
     * @param {String} htmlString
     * @returns
     */
    insertBefore: (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString),

    /**
     * 页面平滑的滚动到页面的顶部
     */
    scrollToTop: () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    },

    /**
     * 让指定的DOM节点平滑滚动到可视区域
     * smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar
     * smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
     * 
     * @param {String} element
     * @returns
     */
    smoothScroll: element => document.querySelector(element).scrollIntoView({ behavior: 'smooth' }),

    /**
     * 去掉HTML标签，输出文本内容
     * stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
     * 
     * @param {String} str
     * @returns {String}
     */
    stripHTMLTags: str => str.replace(/<[^>]*>/g, ''),

    /**
     * 使用 element.classList.toggle() 来切换元素中指定样式类
     * toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
     * 
     * @param {HTMLDOMElement} el
     * @param {String} className
     * @returns
     */
    toggleClass: (el, className) => el.classList.toggle(className), 

};