import type { Cache } from "swr";

export const localStorageProvider = ({
  allowedPrefixes = [],
}: {
  allowedPrefixes?: string[];
} = {allowedPrefixes: []}) => {
  const map = new Map(JSON.parse(localStorage.getItem("app-cache") || "[]"));

  window.addEventListener("beforeunload", () => {
    const appCache = JSON.stringify(
      Array.from(map.entries()).filter(
        ([key]) =>
          allowedPrefixes?.length === 0 ||
          allowedPrefixes?.some((allowedPrefix) =>
            (key as string).startsWith(allowedPrefix)
          )
      )
    );
    localStorage.setItem("app-cache", appCache);
  });

  return map as Cache;
};
