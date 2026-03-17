const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Cleanup old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, WINDOW_MS);

export function checkRateLimit(identifier: string): {
  success: boolean;
  remaining: number;
  resetIn: number;
} {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  if (!entry || now > entry.resetTime) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + WINDOW_MS,
    });
    return {
      success: true,
      remaining: MAX_REQUESTS - 1,
      resetIn: WINDOW_MS,
    };
  }

  if (entry.count >= MAX_REQUESTS) {
    return {
      success: false,
      remaining: 0,
      resetIn: entry.resetTime - now,
    };
  }

  entry.count++;
  return {
    success: true,
    remaining: MAX_REQUESTS - entry.count,
    resetIn: entry.resetTime - now,
  };
}

