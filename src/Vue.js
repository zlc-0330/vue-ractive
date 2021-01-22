import observe from './observe.js';
import Watcher from './Watcher.js';
export default class Vue {
    constructor(options) {
        this.$el = options.el;
        this.$data = options.data;
        this.$templateStr = options.templateStr;
        // 变为响应式
        observe(this.$data);
        // 编译模板
        this.compileTemplate();
    }
    compileTemplate() {
        var self = this;
        var compileStr = this.$templateStr.replace(/\{\{(\w+)\}\}/g, function(str, $1) {
            // 发现{{}}的形式，new Watcher()一下，监听所有值
            new Watcher(self.$data, $1, value => {
                self.compileTemplate();
            });
            return self.$data[$1];
        });
        document.querySelector(this.$el).innerHTML = compileStr;
    }
};