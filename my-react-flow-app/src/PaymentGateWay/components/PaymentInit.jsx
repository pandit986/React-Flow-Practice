import React from "react";
import styled from "styled-components";
import { Handle, Position } from "reactflow";
import { BsCreditCard } from "react-icons/bs";
// import CustomHandle from "./CustomHandle";

const Card = styled.div`
  border: 1px solid #aa1fff;
  background: white;
  border-radius: 5px;
  overflow: hidden;
`;

const CardHeader = styled.div`
  background-color: #410566;
  color: white;
  padding: 8px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const CardBody = styled.div`
  padding: 16px;
  text-align: center;
`;

const AmountText = styled.div`
  font-size: 1.5rem;
  color: #007bff;
`;

export default function PaymentInit({ data }) {
  return (
    <Card>
      <CardHeader>
        <BsCreditCard style={{ marginRight: "8px" }} /> Payment Initialized
      </CardHeader>
      <CardBody>
        <AmountText>${data.amount}</AmountText>
      </CardBody>
      <Handle type="source" position={Position.Right} />
      {/* source mean start and i used target used */}
    </Card>
  );
}
