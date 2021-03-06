import { BootstrapObj } from '../base_obj.js';

//------------------------------------------------------------------------------
//   TextInput
//------------------------------------------------------------------------------
export class TextInput extends BootstrapObj {
    constructor() {
        super('input');

        this.root.type = 'text';
        this.root.classList.add('form-control');
    }

    get value() {
        return this.root.value;
    }
}

//------------------------------------------------------------------------------
TextInput.prototype.focus = function() {
    this.root.focus();
}

TextInput.prototype.select = function() {
    this.root.select();
}
