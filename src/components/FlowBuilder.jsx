import React, { useState, useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  MiniMap, 
} from "reactflow";
import "reactflow/dist/style.css";
import { SourceNode, DestinationNode } from './CustomNode';

const nodeTypes = {
  source: SourceNode,
  destination: DestinationNode,
};

const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 0 },
    data: { label: "Source 1" },
    type: "source",
  },
  {
    id: "2",
    position: { x: 100, y: 100 },
    data: { label: "Source 2" },
    type: "source",
  },
  {
    id: "3",
    position: { x: 1000, y: 50 },
    data: { label: "Destination 1" },
    type: "destination",
  },
];

const initialEdges = [
  { id: "1-2", source: "1", target: "2" },
];

const FlowBuilder = () => {
  const [nodeId, setNodeId] = useState(initialNodes.length + 1);
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onEdgeClick = useCallback(
    (event, edge) => {
      event.stopPropagation();
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    },
    []
  );

  const onConnect = useCallback(
    (params) => {
      // const sourceNode = nodes.find((node) => node.id === params.source);
      // const targetNode = nodes.find((node) => node.id === params.target);

      // if (sourceNode.type !== targetNode.type) {
        setEdges((eds) => addEdge(params, eds));
      // } else {
      //   alert("Cannot connect two sources or two destinations");
      // }
    },
    [nodes]
  );

  const addNode = (type) => {
    const existingNodesOfType = nodes.filter(node => node.type === type);
    const yOffset = existingNodesOfType.length; 
    const newNode = {
      id: nodeId.toString(),
      position: { x: type === 'source' ? 100 : 1000, y: type==="source" ? yOffset*100 : (yOffset *80) + 50 },
      data: { label: `${type.charAt(0).toUpperCase() + type.slice(1)} ${existingNodesOfType.length + 1}` },
      type
    };
    setNodes((nds) => [...nds, newNode]);
    setNodeId(nodeId + 1);
  };

  const nodeColor = (node) => {
    if(node.type === "source") return "#48bb78";
    return "rgb(59 130 246)";
  };

  return (
    <div className="h-[85vh] w-[100vw] box-border">
      <div className="mt-3 text-center">
      <h1 className="text-3xl mb-5 font-semibold">Pipleline Builder</h1>
        <button
          onClick={() => addNode("source")}
          className="mr-10 px-4 py-2 bg-green-500 text-white rounded"
        >
          Add Source
        </button>
        <button
          onClick={() => addNode("destination")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Destination
        </button>
      </div>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onConnect={onConnect}
        onEdgesChange={onEdgesChange}
        onEdgeClick={onEdgeClick}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap nodeColor={nodeColor} zoomable pannable/>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowBuilder;
