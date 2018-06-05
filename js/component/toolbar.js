import { Button } from '../bootstrap/button.js';
import { Label } from '../bootstrap/label.js';
import { Form } from '../bootstrap/form/form.js';
import { TextInput } from '../bootstrap/form/text_input.js';
import { Checkbox } from '../bootstrap/form/checkbox.js';
import { Select } from '../bootstrap/form/select.js';

//------------------------------------------------------------------------------
//   Toolbar
//------------------------------------------------------------------------------
export class Toolbar {
    constructor(parent) {
        this.root = document.createElement("div");
        if (parent) {
            parent.appendChild(this.root);
        }

        this.root.classList.add("toolbar");

        const form = document.createElement('form');
        form.classList.add('form-inline');
        this.root.appendChild(form);

        this.left_group = document.createElement('div');
        this.left_group.classList.add('form-group');
        form.appendChild(this.left_group);

        this.right_group = document.createElement('div');
        this.right_group.classList.add('form-group');
        this.right_group.classList.add('ml-auto');
        form.appendChild(this.right_group);

        this.form = this.left_group
    }
}

//------------------------------------------------------------------------------
Toolbar.prototype.setAppendRight = function(val = true) {
    if (val) {
        this.form = this.right_group;
    } else {
        this.form = this.left_group;
    }
}

//------------------------------------------------------------------------------
Toolbar.prototype.addCheckbox = function(label, callback) {
    const checkbox = new Checkbox(label, callback);

    const margin = '10px'
    checkbox.root.style.marginLeft = margin;
    checkbox.root.style.marginRight = margin;

    this.form.appendChild(checkbox.root);
}

Toolbar.prototype.addButton = function(label, callback) {
    const btn = new Button(label);

    btn.setSmall();
    btn.setNoRadius();
    btn.setNoHighlight();
    btn.root.classList.add('btn-outline-secondary');

    btn.on('click', callback);
    this.form.appendChild(btn.root);
}

Toolbar.prototype.addFileInputButton = function(label, callback) {
    const input = new FormFileInput(label, callback);
    this.form.appendChild(input.root);
}

Toolbar.prototype.addInput = function() {
    const input = new TextInput();
    input.setSmall();
    input.setNoRadius();
    input.setNoHighlight();

    this.form.appendChild(input.root);

    return input;
}

Toolbar.prototype.addLabel = function(text) {
    const label = new Label(text);

    const margin = '10px'
    label.root.style.marginLeft = margin;
    label.root.style.marginRight = margin;
    this.form.appendChild(label.root);

    return label;
}

Toolbar.prototype.addSelect = function() {
    const select = new Select();
    select.setSmall();
    select.setNoRadius();
    select.setNoHighlight();

    this.form.appendChild(select.root);

    return select;
}

//------------------------------------------------------------------------------
//   
//------------------------------------------------------------------------------
class FormFileInput {
    constructor(label, callback) {
        const btn = new Button(label);
        this.root = btn.root;

        btn.setSmall();
        btn.setNoRadius();
        btn.setNoHighlight();
        btn.root.classList.add('btn-outline-secondary');
        //const btn = btn_o.root;

        //const btn = document.createElement("button");
        //const btn = document.createElement("span");
        //btn.classList.add("btn");
        //btn.classList.add("btn-primary");
        //btn.textContent = label;
        btn.root.style.overflow = "hidden";
        btn.root.style.position = "relative";
        //this.root.appendChild(btn);
        //this.root.style.userSelect = "none";
        //btn.classList.add('btn');
        //btn.classList.add('btn-sm');
        //btn.classList.add('btn-outline-secondary');


        const input = document.createElement("input");
        input.type = "file"
        btn.root.appendChild(input);

        const onchange_fn = (e) => {
            const file = e.target.files[0];
            if (!file) {
                return;
            }

            callback(file);
        }

        input.addEventListener('change', onchange_fn);
        input.addEventListener('click', () => {
            input.value = null;
        })

        input.title = " ";
        input.style.position = "absolute";
        input.style.top = "0px";
        input.style.right = "0px";
        input.style.minWidth = "100%";
        input.style.minHeight = "100%";
        input.style.outline = "none";
        input.style.opacity = "0";
    }
}
