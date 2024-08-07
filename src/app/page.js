"use client";
import Front from "@/components/specific/Front";
import Body from "@/components/specific/Body";
import Loading from "./loading";
import { Suspense, useEffect, useState } from "react";
import fetch from "../util/fetch";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return <Loading />;
  }

  console.log("fetch: ", data);
  return (
    <main className="appContainer">
      <Front userData={data[0]} />
      <Body userData={data[0]} />
    </main>
  );
}
