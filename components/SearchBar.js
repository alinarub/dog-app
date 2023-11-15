import styled from "styled-components";

export default function SearchBar() {
  function handleSearch(event) {
    if (!fuse) {
      return;
    }
    const searchPattern = event.target.value;
    const searchResult = fuse.search(searchPattern).slice(0, 10);
    // .slice(0, 10) will ensure there will never be more than 10 results

    setResults(searchResult.map((result) => result.item.name));
  }
  return (
    <StyledForm>
      <StyledSearchField
        type="text"
        id="sarch"
        name="search"
        required
        minlength="0"
        maxlength="14"
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
  margin-top: 8rem;
`;

const StyledSearchField = styled.input`
  min-width: var(--mobilewidth);
  border: 2px solid var(--accent-color);
  padding: 0.9rem 2rem;
  border-radius: var(--borderradius-medium);
`;
