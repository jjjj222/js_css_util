import { BootstrapObj } from '../base_obj.js';

//------------------------------------------------------------------------------
//   Select
//------------------------------------------------------------------------------
export class Select extends BootstrapObj {
    constructor() {
        super('select');

        this.root.classList.add('form-control');
    }

    get value() {
        return this.root.value;
    }
}

//------------------------------------------------------------------------------
Select.prototype.addOption = function(text) {
    const option = document.createElement('option');
    option.textContent = text;
    this.root.appendChild(option);
}
