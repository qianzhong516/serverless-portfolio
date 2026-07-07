"use client";

import { useEffect } from "react";
import useSWR, { useSWRConfig } from "swr";
import SunriseScene from "./components/SunriseScene";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

const incrementVisits = async (url: string) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: "",
  });
  if (!response.ok) {
    throw new Error("Failed to update data");
  }
  return response.json();
};

const API_URL = process.env.NEXT_PUBLIC_API_DOMAIN
  ? `${process.env.NEXT_PUBLIC_API_DOMAIN}/visits`
  : "https://api.staging.janice-zhong.com/visits";

export default function Home() {
  const { mutate } = useSWRConfig();
  const { data, error, isLoading } = useSWR(API_URL, fetcher);

  useEffect(() => {
    incrementVisits(API_URL).then(() => {
      mutate(API_URL);
    });
  }, []);

  return (
    <>
      <SunriseScene title="Hi, I'm Janice" />

      <p className="total-views">
        Total Views:{" "}
        {isLoading ? (
          <span>loading...</span>
        ) : error ? (
          <span>error</span>
        ) : (
          <span className="font-semibold tabular-nums text-white">
            {data.totalCount}
          </span>
        )}
      </p>
    </>
  );
}
