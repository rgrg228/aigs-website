type Bucket = {
  hits: { ts: number }[];
};

const store = new Map<string, Bucket>();

export type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
};

export function rateLimit(
  key: string,
  {
    windowMs,
    max,
  }: { windowMs: number; max: number },
): RateLimitResult {
  const now = Date.now();
  const bucket = store.get(key) ?? { hits: [] };
  bucket.hits = bucket.hits.filter((h) => now - h.ts < windowMs);

  if (bucket.hits.length >= max) {
    const oldest = bucket.hits[0].ts;
    const retry = Math.ceil((windowMs - (now - oldest)) / 1000);
    store.set(key, bucket);
    return { allowed: false, remaining: 0, retryAfterSeconds: retry };
  }

  bucket.hits.push({ ts: now });
  store.set(key, bucket);

  if (store.size > 5000) {
    for (const [k, v] of store) {
      if (v.hits.every((h) => now - h.ts >= windowMs)) store.delete(k);
    }
  }

  return {
    allowed: true,
    remaining: Math.max(0, max - bucket.hits.length),
    retryAfterSeconds: 0,
  };
}
