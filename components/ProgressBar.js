import styled from "styled-components";

export default function ProgressBar({ step }) {
  return (
    <>
      <StyledContainer>
        <StyledBackground />
        <StyledProgress step={step} />
      </StyledContainer>
      <StyledProgressList>
        {Array.from({ length: 7 }).map((_, i) => (
          <StyledProgressListItem key={i}>
            <StyledPoints $step={step} $current={i}>
              {i + 1}
            </StyledPoints>
          </StyledProgressListItem>
        ))}
      </StyledProgressList>
    </>
  );
}

const StyledContainer = styled.div`
  height: 0.7rem;
  width: calc(var(--mobilewidth) + 0.6rem);
  position: relative;
  margin: auto;
`;

const StyledBaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 8rem;
  transition: width 0.5s ease-in-out;
`;

const StyledBackground = styled(StyledBaseBox)`
  background: var(--soft-background);
  width: 100%;
`;

const StyledProgress = styled(StyledBaseBox)`
  background: var(--accent-color);
  width: ${({ step }) => step * 16.667}%;
`;

const StyledProgressListItem = styled.li`
  border-radius: 50%;
  position: relative;
`;

const StyledProgressList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 0.5rem;
  margin-bottom: 4rem;
  width: var(--mobilewidth);
`;
const StyledPoints = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-left: -0.7rem;
  padding: 0.4rem;
  height: 1.3rem;
  width: 1.3rem;
  border-radius: 100%;
  background: ${(props) =>
    props.$step === props.$current ? "var(--accent-color)" : "transparent"};
  color: ${(props) =>
    props.$step === props.$current ? "var(--primary-color)" : "#bebfc5"};
  font-size: small;
`;
