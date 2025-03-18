import React from "react";
import styled from "styled-components";
import { FaFlag } from "react-icons/fa"; 
import { Handle, Position } from "reactflow";

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background: #e2e8f0;
  border: 2px solid #bbbdbf;
  padding: 8px;
  gap: 8px;
  width: 155px;
`;

const CountryFlag = styled.div`
  font-size: 2em;
  line-height: 2em;
`;

const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CountryName = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const Currency = styled.span`
  font-size: 10px;
  color: #555;
`;

export default function PaymentCountry({ data }) {
  const { currency, country, countryCode } = data;
  
  return (
    <Container>
      <CountryFlag>
        <FaFlag /> {/* Replace with a proper flag library if needed */}
      </CountryFlag>
      <CountryInfo>
        <CountryName>{country}</CountryName>
        <Currency>{currency}</Currency>
      </CountryInfo>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </Container>
  );
}