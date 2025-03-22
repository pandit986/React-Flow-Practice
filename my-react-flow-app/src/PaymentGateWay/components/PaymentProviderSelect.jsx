import React, { useState } from "react";
import styled from "styled-components";
import { BsChevronBarDown } from "react-icons/bs";
import { useReactFlow } from "reactflow";

const PAYMENT_PROVIDERS = [
  { code: "St", name: "Stripe" },
  { code: "Gp", name: "Google Pay" },
  { code: "Ap", name: "Apple Pay" },
  { code: "Pp", name: "Paypal" },
  { code: "Am", name: "Amazon Pay" },
];

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background: #eee;
  border: 1px solid #ccc;
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ccc;
  list-style: none;
  margin: 4px 0 0 0;
  padding: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const DropdownItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

export default function PaymentProviderSelect() {
  const { setNodes } = useReactFlow();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const onProviderClick = ({ name, code }) => {
    const location = Math.random() * 500;
    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: `${prevNodes.length + 1}`,
        data: { name, code },
        type: "PaymentProvider",
        position: { x: location, y: location },
      },
    ]);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        Add Payment Provider <BsChevronBarDown />
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {PAYMENT_PROVIDERS.map((provider) => (
            <DropdownItem key={provider.code} onClick={() => onProviderClick(provider)}>
              {provider.name}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
}
