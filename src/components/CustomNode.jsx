import React from "react";
import { Handle, Position } from "reactflow";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const SourceNode = ({ data }) => {
  return (
    <div className="p-1 bg-green-200 border-2 border-green-500 rounded">
      <div className="flex felx-row items-center gap-5">
        <div>
          <FaArrowRight />
        </div>
        <div className="text-large font-semibold">{data.label}</div>
      </div>

      <div className="text-xs">Source</div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

const DestinationNode = ({ data }) => {
  return (
    <div className="p-1 bg-blue-200 border-2 border-blue-500 rounded relative">
      <div className="flex felx-row items-center gap-5">
        <div className="text-large font-semibold">{data.label}</div>
        <div>
          <FaArrowLeft />
        </div>
      </div>

      <div className="text-xs text-right">Destination</div>
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export { SourceNode, DestinationNode };
