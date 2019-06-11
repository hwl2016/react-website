const defaultOption = {
    onEmit: function() {},
    onAfterEmit: function() {},
    onDone: function() {}
}

module.exports = class WebpackEventHooks {
    constructor(option) {
        this.option = Object.assign(defaultOption, option);
    }
    apply(compiler) {
        compiler.plugin('emit', (compilation, callback) => {
            this.option.onEmit && this.option.onEmit(compilation);
            callback();
        })

        compiler.plugin('after-emit', (compilation, callback) => {
            this.option.onAfterEmit && this.option.onAfterEmit(compilation);
            callback();
        })

        compiler.plugin('done', (compilation, callback) => {
            this.option.onDone && this.option.onDone(compilation);
        })
    }
}