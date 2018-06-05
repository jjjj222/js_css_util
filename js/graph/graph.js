import { Node } from "./node.js";
import { Edge } from "./edge.js";
import { Group } from "./group.js";
//import { d3_min, d3_max } from '../util/array.js';

export { Node, Edge, Group }

//------------------------------------------------------------------------------
//   Graph
//------------------------------------------------------------------------------
export class Graph {
    constructor() {
        this.nodes = [];
        this.edges = [];
        this._groups = [];
        this.id_to_node = {};
        this.id_to_edge = {};
        this.id_to_group = {};
        this.id_to_obj = {};
        this.NodeType = Node;
        this.EdgeType = Edge;
        this.GroupType = Group;
    }

    get bbox() {
        return this.getBBox();
    }
}

//------------------------------------------------------------------------------
Graph.prototype.addNode = function() {
    const new_id = "n" + this.nodes.length;

    const new_node = new this.NodeType(new_id);

    this.nodes.push(new_node);
    this.id_to_node[new_id] = new_node;
    this.id_to_obj[new_id] = new_node;
    return new_node;
}

Graph.prototype.addEdge = function(source_node, target_node) {
    const new_id = "e" + this.edges.length;
    const new_edge = new this.EdgeType(new_id, source_node, target_node);

    source_node.addOutput(new_edge);
    target_node.addInput(new_edge);

    this.edges.push(new_edge);
    this.id_to_edge[new_id] = new_edge;
    this.id_to_obj[new_id] = new_edge;

    return new_edge;
}

Graph.prototype.addGroup = function(GroupType = this.GroupType) {
    const new_id = "g" + this._groups.length;

    const new_group = new GroupType(new_id);

    this._groups.push(new_group);
    this.id_to_group[new_id] = new_group;
    this.id_to_obj[new_id] = new_group;
    return new_group;
}

//------------------------------------------------------------------------------
Graph.prototype.getObjById = function(id) {
    return this.id_to_obj[id];
}

Graph.prototype.getNodeById = function(id) {
    return this.id_to_node[id];
}

Graph.prototype.getEdgeById = function(id) {
    return this.id_to_edge[id];
}

Graph.prototype.getGroupById = function(id) {
    return this.id_to_group[id];
}

