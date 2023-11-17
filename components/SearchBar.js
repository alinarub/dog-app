import styled from "styled-components";

export default function SearchBar({ handleSearch, dogsLength }) {
  return (
    <StyledForm>
      <StyledLabel htmlFor="search">
        Search from our {dogsLength} dogs{" "}
      </StyledLabel>
      <StyledSearchField
        type="text"
        id="search"
        name="search"
        required
        minLength="0"
        maxLength="14"
        size="10"
        placeholder={`Search from our ${dogsLength} dogs`}
        onChange={handleSearch}
      />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`;

const StyledLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const StyledSearchField = styled.input`
  min-width: var(--mobilewidth);
  border: 2px solid var(--accent-color);
  padding: 0.9rem 2rem;
  border-radius: var(--borderradius-medium);
  &:focus {
    border: 2px solid var(--primary-color);
    outline: 0;
  }
`;
