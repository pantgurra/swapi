export const getIdFromUrl = (url: string) =>
  url
    .split("/")
    .filter((p) => p.trim() !== "" && !isNaN(Number(p)))
    .pop();

export const getUrlFromId = (
  resource: "people" | "films",
  id: string | number
) => `${import.meta.env.VITE_BASE_URL}${resource}/${id}/`;
