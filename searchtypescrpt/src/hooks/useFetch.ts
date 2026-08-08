import { useEffect, useState } from "react";

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string;
};

export function useFetch<T>(url: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const result = (await response.json()) as T;

        setData(result);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError("Unable to load data");
        }
      } finally {
        setLoading(false);
      }
    }

    void fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
