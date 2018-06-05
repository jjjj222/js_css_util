import { GraphBaseObj } from "./graph_base_obj.js";

//------------------------------------------------------------------------------
//   Node
//------------------------------------------------------------------------------
export class Node extends GraphBaseObj {
    constructor(id) {
        super(id);
        this.inputs = [];
        this.outputs = [];
    }

    isNode() {
        return true;
    }
}

//------------------------------------------------------------------------------
Node.prototype.addInput = function(edge) {
    this.inputs.push(edge);
}

Node.prototype.addOutput = function(edge) {
    this.outputs.push(edge);
}

Node.prototype.getOutputEdge = function(dst_id) {
    return this.outputs.find((e) => {
        return e.target.id == dst_id;
    });
}
