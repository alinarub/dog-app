import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Accordion({ accordionData }) {
  const [openIndex, setOpenIndex] = useState(0);
  // Logic
  function handleToggle(e, index) {
    e.preventDefault();
    setOpenIndex(index);
  }
  return accordionData.map(({ id, title, content, links }) => (
    <StyledDetails
      key={id}
      open={id === openIndex}
      onClick={(e) => handleToggle(e, id)}
    >
      <StyledSummary>
        {title}

        {id === openIndex && (
          <StyledIcon
            src="/chevron-up.svg"
            alt="Chevron up arrow"
            width={29}
            height={29}
            blurDataURL="data:..."
          />
        )}
        {id != openIndex && (
          <StyledIcon
            src="/chevron-down.svg"
            alt="Chevron down arrow"
            width={29}
            height={29}
            blurDataURL="data:..."
          />
        )}
      </StyledSummary>

      <StyledAnswer>
        {content}
        {links &&
          links.map((link) => (
            <>
              <br />
              <StyledSimpleLink key={link.id} href={link.url}>
                {" "}
                {link.name}
              </StyledSimpleLink>
            </>
          ))}
      </StyledAnswer>
    </StyledDetails>
  ));
}
const StyledDetails = styled.details`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  max-width: var(--mobilewidth);
  text-align: center;
  margin: 0.7rem;
  padding: 0.4rem 0.7rem;
  min-height: 4.3rem;

  background-color: var(--soft-background);
  color: var(--font-color);
  border-radius: var(--borderradius-small);
`;

const StyledSummary = styled.summary`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  font-weight: 500;
  &:hover {
    text-decoration: 2px var(--accent-color) underline;
    text-underline-offset: 0.4rem;
  }
  &:active {
    color: var(--accent-color);
  }
  padding: 0.5rem;
`;

const StyledAnswer = styled.p`
  border-top: 2px solid var(--background-color);
  margin-top: 0.8rem;
  padding: 1rem 0;
  text-align: left;
  font-size: 0.92rem;
`;

const StyledIcon = styled(Image)`
  margin-left: 0.3rem;
  transition: all 0.25s;
  width: 1.5rem;
  height: 1.5rem;
`;
const StyledSimpleLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color);
  border-bottom: 2px solid var(--accent-color);
  &:hover {
    border-bottom: 2px solid var(--primary-color);
  }
`;
