import type { GetServerSidePropsContext } from "next";

type FetchSSRParams = {
  ctx: GetServerSidePropsContext;
  endpoint: string;
  cache?: string;
};

export async function fetchSSR<T>({
  ctx,
  endpoint,
  cache = "public, s-maxage=10, stale-while-revalidate=59",
}: FetchSSRParams): Promise<T | null> {
  try {
    const res = await fetch(`${process.env.URL}${endpoint}`);

    if (!res.ok) return null;

    ctx.res.setHeader("Cache-Control", cache);

    return await res.json();
  } catch (error) {
    return null;
  }
}
