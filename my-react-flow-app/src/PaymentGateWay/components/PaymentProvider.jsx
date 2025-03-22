import React from "react";
import styled from "styled-components";
import { Handle, Position, useReactFlow } from "reactflow";
// import CustomHandle from "./CustomHandle";

const PAYMENT_PROVIDER_IMAGE_MAP = {
  St: "https://cdn.worldvectorlogo.com/logos/stripe-2.svg",
  Ap: "https://cdn.worldvectorlogo.com/logos/apple-14.svg",
  Gp: "https://cdn.worldvectorlogo.com/logos/google-g-2015.svg",
  Pp: "https://avatars.githubusercontent.com/u/476675?s=280&v=4",
  Am: "https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
};

export default function PaymentProvider({ data, id }) {
  const { setNodes } = useReactFlow();

  return (
    <Container>
      <IconWrapper>
        <StyledImage src={PAYMENT_PROVIDER_IMAGE_MAP[data.code]} alt={data.name} />
      </IconWrapper>
      <NameText>{data.name}</NameText>
      <DeleteButton onClick={() => setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id))}>
        X
      </DeleteButton>
      <Handle type="target" position={Position.Left} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 8px 12px;
  gap: 8px;
  width: 140px;
  border-radius: 24px;
  border: 2px solid #5e5eff;
`;

const IconWrapper = styled.div`
  height: 16px;
  width: 16px;
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
`;

const NameText = styled.p`
  font-size: small;
  flex-grow: 1;
`;

const DeleteButton = styled.button`
  background: transparent;
  color: red;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;