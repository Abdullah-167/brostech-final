import Solution from "@/Components/Solution";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <div className="mt-3">
      <Head>
        <title>Solutions</title>
      </Head>
      <Solution />
    </div>
  );
};

export default index;
