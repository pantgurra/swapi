import express, { Request, Response } from "express";
const app = express();
const PORT = 4000;

app.use(express.json());

const cache = new Map<string, { data: unknown; timestamp: number }>();
const CACHE_TTL = 1000 * 60 * 30;

interface BatchRequestItem {
  method: string;
  url: string;
  body?: unknown;
}

app.post("/api/batch", async (req: Request, res: Response) => {
  const { requests } = req.body as { requests: BatchRequestItem[] };
  if (!Array.isArray(requests)) {
    return res.status(400).json({ error: "requests must be an array" });
  }
  try {
    const responses = await Promise.all(
      requests.map(async (r) => {
        const cacheKey = `${r.method}:${r.url}`;
        const cached = cache.get(cacheKey);
        if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
          return { url: r.url, body: cached.data, cached: true };
        }
        const options: RequestInit = {
          method: r.method,
          headers: { "Content-Type": "application/json" },
        };
        if (r.body) options.body = JSON.stringify(r.body);
        const response = await fetch(r.url, options);
        const data = await response.json();
        cache.set(cacheKey, { data, timestamp: Date.now() });
        return { url: r.url, body: data };
      })
    );
    res.json({ responses });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Batch request failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Batch proxy running at http://localhost:${PORT}`);
});
