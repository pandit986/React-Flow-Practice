import React from "react";
import styled from "styled-components";
import { BezierEdge, EdgeLabelRenderer, getBezierPath, useReactFlow } from "reactflow";
import { AiOutlineClose } from "react-icons/ai";

const DeleteButton = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  color: red;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  font-size: 16px;
  pointer-events: all; /* Ensure button is clickable */
`;

export default function CustomEdge(props) {
  const { id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } = props;
  const { setEdges } = useReactFlow();

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      <BezierEdge {...props} />
      <EdgeLabelRenderer>
        <DeleteButton
          style={{
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
          }}
          onClick={() => {
            console.log(`Deleting edge: ${id}`);
            setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== id));
          }}
        >
          <AiOutlineClose />
        </DeleteButton>
      </EdgeLabelRenderer>
    </>
  );
}
