import axios from "axios";
import { useQuery } from "react-query";

type Word = {
  word: string;
  origin: string;
  meanings: Meaning[];
};

type Meaning = {
  definitions: Definition[];
};

type Definition = {
  definition: string;
};

const useDictionaryDefinition = (searchText: string) => {
  return useQuery(["dictionary_definition", searchText], async () => {
    if (!searchText) return;
    try {
      const { data } = await axios.get<Word[]>(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`
      );
      return data;
    } catch (err) {
      console.log(err.response);
      if (err.response.status === 404) {
        return [];
      }
      throw err;
    }
  });
};

export default useDictionaryDefinition;
