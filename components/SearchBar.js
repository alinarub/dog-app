import styled from "styled-components";

export default function SearchBar({ handleSearch }) {
  return (
    <StyledForm>
      <StyledSearchField
        type="text"
        id="search"
        name="search"
        required
        minLength="0"
        maxLength="14"
        size="10"
        placeholder="Search for dog breed"
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
