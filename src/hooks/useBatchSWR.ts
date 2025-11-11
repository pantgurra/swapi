import { mutate, useSWRConfig, type Key, type SWRResponse } from "swr";
import useSWR from "swr/immutable";
type BatchItem = {
  key: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolve: (data: any) => void;
  reject: (err: unknown) => void;
};

let queue: BatchItem[] = [];
let scheduled = false;

const scheduleFlush = <T>() => {
  if (!scheduled) {
    scheduled = true;
    Promise.resolve().then(flushBatch<T>);
  }
};

const flushBatch = async <T>() => {
  const batch = queue;
  queue = [];
  scheduled = false;
  if (batch.length === 0) return;

  const keys = batch.map((b) => b.key);
  
  try {
    const res = await fetch("/api/batch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        requests: keys.map((url) => ({ method: "GET", url })),
      }),
    });
    const json = await res.json();
    json.responses.forEach((r: { url: string; body: T }, i: number) => {
      const key = keys[i];
      mutate(key, r.body, false);
      batch[i].resolve(r.body);
    });
  } catch (err) {
    batch.forEach((b) => b.reject(err));
  }
};

const useBatchSWR = <T>(key: Key): SWRResponse<T> => {
  const { cache } = useSWRConfig();
  
  const fetcher = (): Promise<T> => {
    const cached = cache.get(key as string);
    if (cached && cached.data !== undefined) {
      return Promise.resolve(cached.data);
    }
    return new Promise<T>((resolve, reject) => {
      queue.push({ key: key as string, resolve, reject });
      scheduleFlush<T>();
    });
  };

  return useSWR<T>(key, fetcher, { revalidateOnFocus: false });
};

export default useBatchSWR;
