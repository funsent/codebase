

const Currency = {

    /**
     * 按照指定的货币类型格式化货币数字
     * format(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
     * format(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
     * format(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
     * format(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
     * format(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
     * 
     * @param {Number} n
     * @param {String} curr
     * @param {String} LanguageFormat
     * @returns {String}
     */
    format: (n, curr, LanguageFormat = undefined) => Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n),



};