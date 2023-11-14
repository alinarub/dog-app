import Accordion from "@/components/Accordion";
import Headline from "@/components/Headline";
import styled from "styled-components";
import { useState } from "react";

export default function Faq() {
  return (
    <StyledDiv>
      <Headline>FAQs</Headline>
      <Accordion />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin: 0 1rem;
  margin-top: 8rem;
`;
