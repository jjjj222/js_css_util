import { GraphBaseObj } from "./graph_base_obj.js";
import { Point } from "./point.js";
import { d3_min, d3_max } from '../util/array.js';

import * as class_util from "../util/class.js";

//------------------------------------------------------------------------------
//   Edge
//------------------------------------------------------------------------------
export class Edge extends GraphBaseObj{
    constructor(id, source, target) {
        super(id);
        class_util.set_readonly(this, 'source', source);
        class_util.set_readonly(this, 'target', target);

        //this.path = [];
    }

    isEdge() {
        return true;
    }
}
