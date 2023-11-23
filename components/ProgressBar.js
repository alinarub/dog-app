import styled from "styled-components";

export default function ProgressBar({ step }) {
  return (
    <>
      <Container>
        <Background />
        <Progress step={step} />
      </Container>
      <StyledProgressList>
        {Array.from({ length: 7 }).map((_, i) => (
          <StyledProgressListItem $step={step} $current={i} key={i}>
            {i + 1}
          </StyledProgressListItem>
        ))}
      </StyledProgressList>
    </>
  );
}

const Container = styled.div`
  height: 7px;
  width: var(--mobilewidth);
  position: relative;
  margin: auto;
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 0.5s ease-in-out;
`;

const Background = styled(BaseBox)`
  background: #bebfc5;
  width: 100%;
`;

const Progress = styled(BaseBox)`
  background: var(--accent-color);
  width: ${({ step }) => step * 14.2857}%;
`;

const StyledProgressListItem = styled.li`
  padding: 0 0.3rem;
  border-radius: 8rem;

  background: ${(props) =>
    props.$step === props.$current ? "var(--accent-color)" : "transparent"};
  color: ${(props) =>
    props.$step === props.$current ? "var(--font-color)" : "#bebfc5"};
`;

const StyledProgressList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 0.5rem;
  margin-bottom: 10rem;
  width: var(--mobilewidth);
`;
