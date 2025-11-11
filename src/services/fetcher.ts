const fetcher = async <T>(...args: Parameters<typeof fetch>): Promise<T> => {
  let [input] = args;
  const [, init] = args;
  if (typeof input === "string" && !input.startsWith("http")) {
    input = `${import.meta.env.VITE_BASE_URL}${input}`;
  }

  const res = await fetch(input, init);

  if (!res.ok) {
    const error = await res.json().catch(() => undefined);
    throw new Error(error?.message || res.statusText);
  }

  return await res.json();
};

export default fetcher;
