import Link from "next/link";
import styled from "styled-components";
export default function Button() {
  return <StyledLink href="/quiz-page">Start the quiz!</StyledLink>;
}
const StyledLink = styled(Link)`
  background-color: lightgray;
  color: var(--almostblack);
  text-decoration: none;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid var(--blue);
  border-radius: 3px;
`;
