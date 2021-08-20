export const paramSingle = (urlParam: string | string[] | undefined) => {
  if (!urlParam) return "";
  if (Array.isArray(urlParam)) return urlParam[0];
  return urlParam;
};
