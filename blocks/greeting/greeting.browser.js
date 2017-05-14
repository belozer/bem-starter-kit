/**
 * @module greeting
 */
modules.define('greeting',
    ['i-bem-dom', 'input', 'button'],
    function(provide, bemDom, Input, Button) {

/**
 * @exports
 * @class greeting
 * @bem
 */
provide(bemDom.declBlock(this.name, /** @lends greeting.prototype */{
    onSetMod : {
        js : {
            inited : function() {
                this._input = this.findChildBlock(Input);
                this._button = this.findChildBlock(Button);
            }
        }
    },

    _onSubmit : function() {
        const text = this._input.getVal();

        bemDom.update(this._elem('viewer').domElem, `Hi, ${text}!`);

        return this;
    }

}, /** @lends greeting */ {
    lazyInit : true,

    onInit : function() {
        const ptp = this.prototype;

        this._events(Button)
            .on('click', ptp._onSubmit)
    }
}));

});
