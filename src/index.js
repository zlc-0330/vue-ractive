import Vue from './Vue.js';
window.vm = new Vue({
    el: '#container',
    templateStr: `
    <div>
        <h1>我{{age}}岁了</h1>
    </div>
    `,
    data: {
        age: 10
    }
});