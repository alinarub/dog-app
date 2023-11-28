import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { faqData } from "@/lib/faqData";

export default function Accordion() {
  const [accordionData, setAccordionData] = useState(faqData);

  function handleToggle(id, e) {
    e.preventDefault();
    setAccordionData((accordionItems) => {
      const info = accordionItems.find((info) => info.id === id);
      return accordionItems.map((info) => {
        if (info.id === id) return { ...info, isOpen: !info.isOpen };
        else return { ...info, isOpen: false };
      });
    });
  }
  if (!accordionData) return null;

  return accordionData.map(({ id, title, content, links, isOpen }) => (
    <StyledDetails key={id} open={isOpen}>
      <StyledSummary onClick={(e) => handleToggle(id, e)}>
        {title}

        <StyledIcon
          src={isOpen ? "/chevron-up.svg" : "/chevron-down.svg"}
          alt={isOpen ? "Chevron up arrow" : "Chevron down arrow"}
          width={29}
          height={29}
          blurDataURL="data:..."
        />
      </StyledSummary>

      <StyledAnswer>
        {content}
        {links.map((link) => (
          <span key={link.id}>
            <br />
            <StyledSimpleLink key={link.id} href={link.url}>
              {" "}
              {link.name}
            </StyledSimpleLink>
          </span>
        ))}
      </StyledAnswer>
    </StyledDetails>
  ));
}
const StyledDetails = styled.details`
  max-width: var(--mobilewidth);
  text-align: center;
  margin: 0.7rem var(--basicmargin);
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
  &::-webkit-details-marker {
    display: none;
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
