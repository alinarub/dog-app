import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Accordion({ title, content, id }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <StyledAccordionItem key={id}>
      <StyledQuestion onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>

        {isActive && (
          <StyledIcon
            src="/chevron-up.svg"
            alt="Chevron up arrow"
            width={29}
            height={29}
            blurDataURL="data:..."
          />
        )}
        {!isActive && (
          <StyledIcon
            src="/chevron-down.svg"
            alt="Chevron down arrow"
            width={29}
            height={29}
            blurDataURL="data:..."
          />
        )}
      </StyledQuestion>
      {isActive && <StyledAnswer>{content}</StyledAnswer>}
    </StyledAccordionItem>
  );
}

const StyledAccordionItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: var(--mobilewidth);
  text-align: center;
  margin: 0.7rem;
  padding: 0.4rem;
  min-height: 4.3rem;
  cursor: pointer;
  background-color: var(--soft-background);
  color: var(--font-color);
  border-radius: var(--borderradius-small);
  border: 2px solid var(--soft-background);
  &:hover {
    border: 2px solid var(--primary-color);
  }
`;

const StyledQuestion = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  font-weight: 500;
`;

const StyledAnswer = styled.div`
  margin-top: 2.4rem;
  text-align: left;
  font-size: 0.92rem;
`;

const StyledIcon = styled(Image)`
  margin-left: 0.3rem;
  transition: all 0.25s;
  width: 1.5rem;
  height: 1.5rem;
`;
