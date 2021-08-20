import { CircularProgress, TextField } from "@material-ui/core";
import { useState } from "react";
import useDictionaryDefinition from "./useDictionaryDefinition";

const DictionarySearch = () => {
  const [searchText, setSearchText] = useState("");

  const { isError, isLoading, data = [] } = useDictionaryDefinition(searchText);

  return (
    <>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          setSearchText(e.target.elements.searchtext.value);
        }}
      >
        <TextField label="Search" name="searchtext" id="search" />
      </form>
      {isLoading && <CircularProgress data-testid="loading-spinner" />}
      {isError && "Something went wrong!"}
      {searchText &&
        !isLoading &&
        !isError &&
        !data.length &&
        "No results found!"}
      <ul>
        {data[0]?.meanings[0]?.definitions.map(({ definition }, i) => (
          <li key={i}>{definition}</li>
        ))}
      </ul>
    </>
  );
};

export default DictionarySearch;
