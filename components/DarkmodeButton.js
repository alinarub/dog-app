import useTheme from "@/contexts/theme";
import styled, { keyframes, css } from "styled-components";
import { useState } from "react";

export default function DarkmodeButton() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const [isToggled, setToggled] = useState(false);

  const onChangeToDark = (event) => {
    const darkModeStatus = event.currentTarget.checked;
    setToggled(!isToggled);
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <>
      <ToggleContainer>
        <ToggleBorder>
          <Toggle $isToggled={isToggled}>
            <StyledInput
              type="checkbox"
              value=""
              checked={themeMode === "dark"}
              className=""
              onChange={onChangeToDark}
            />
          </Toggle>
        </ToggleBorder>
      </ToggleContainer>
    </>
  );
}

const ToggleContainer = styled.div`
  border: none;
  width: 3.5rem;
  height: 2.2rem;
  display: flex;
  align-self: end;
  border-radius: 70px;
  padding: 2px;
  box-shadow: 5px 5px 5px var(--secondary-color) inset, 0.5px 0.5px 50px yellow;
  transition: background-color 0.5s, box-shadow 0.5s;
`;

const ToggleBorder = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  border-radius: 70px;
  margin: auto;
  display: flex;
  transition: background-color 0.5s, box-shadow 0.5s;
`;

const roll = keyframes`
  100% {
    transform: translateX(1rem) rotate(360deg);
  }
`;

const rollback = keyframes`
  0% {
    transform: translateX(1rem) rotate(360deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
`;

const rollAnimation = css`
  animation: ${roll} 0.5s forwards;
`;

const rollbackAnimation = css`
  animation: ${rollback} 0.5s forwards;
`;

const Toggle = styled.div`
  margin: auto;
  margin-left: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ $isToggled }) =>
    $isToggled ? `var(--accent-color)` : `var(--primary-color)`};

  box-shadow: ${({ $isToggled }) =>
    $isToggled
      ? `0px 0px 0px var(--accent-color), 0px 0px 0px var(--accent-color), 0px 0px 0px var(--accent-color) inset,  0px 0px 00px var(--accent-color) inset`
      : `0px 0px 0px var(--primary-color),
    0px 0px 0px var(--primary-color),
    4px -5px 1px var(--accent-color) inset,
    0px 0px 0px var(--primary-color) inset`};
  border-radius: 50%;
  transition: box-shadow 1s;
  cursor: pointer;

  ${(props) => (props.$isToggled ? rollAnimation : rollbackAnimation)};
`;

const StyledInput = styled.input`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  z-index: 3;
`;
