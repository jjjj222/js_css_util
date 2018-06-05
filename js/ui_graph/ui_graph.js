import { Graph } from "../graph/graph.js";

//------------------------------------------------------------------------------
//   UIGraph
//------------------------------------------------------------------------------
export class UIGraph extends Graph {
    constructor() {
        super();
    }
}

//------------------------------------------------------------------------------
UIGraph.prototype.resetSelect = function() {
    this.nodes.forEach(n => {
        n.resetSelect();
    })

    this.edges.forEach(e => {
        e.resetSelect();
    })
}

//------------------------------------------------------------------------------
UIGraph.prototype.getSelectedNodes = function() {
    return this.nodes.filter(n => {
        return n.is_selected;
    })
}

