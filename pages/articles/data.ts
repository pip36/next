type Lookup<T> = { [key: string]: T };

type Article = {
  id: string;
  name: string;
};

type ArticleLookup = Lookup<Article>;

const articlesLookup: ArticleLookup = {
  "1": {
    id: "1",
    name: "How to make a dynamic page.",
  },
  "2": {
    id: "2",
    name: "Why not?",
  },
};

export const getArticle = (id: string): Article | null =>
  articlesLookup[id] || null;

export const getArticles = ({ name = "" }: Partial<Article>) =>
  Object.values(articlesLookup).filter((x) =>
    x.name.toLowerCase().startsWith(name.toLowerCase())
  );
