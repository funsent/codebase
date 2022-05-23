

const Net = {
    /**
     * base64数据导出文件下载
     * 
     * @param {string} filename - 下载时的文件名
     * @param {string} data - base64字符串
     */
    download: (filename, data) => {
        let el = document.createElement('a');
        if (el) {
            document.body.appendChild(el);
            el.style = 'display: none';
            el.download = filename;
            el.href = data;
            if (document.createEvent) {
                let mouseEvt = document.createEvent('MouseEvents');
                mouseEvt.initEvent('click', true, false);
                el.dispatchEvent(mouseEvt);
            } else if (document.createEventObject) {
                el.fireEvent('onclick');
            } else if (typeof el.onclick == 'function') {
                el.onclick();
            }
            document.body.removeChild(el);
        }
    },
};