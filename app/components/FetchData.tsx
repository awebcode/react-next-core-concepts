import { baseUrl } from "@/util/base_url";
import React from "react";
import Card from "./Card";
import Heading from "./Heading";
const fetchData = async () => {
    const res = await fetch(`${baseUrl}/api/user`, {
      cache:"no-cache"
  });
  const data = await res.json();
  return data;
};
const FetchData = async ({ data, setData }: any) => {
  const x: any = await fetchData();
    console.log("xxx")
  return (
    <div className="container mx-auto">
      <Heading title="Fetch Users" />
      <Card data={x?.users} />
    </div>
  );
};

export default FetchData;
