"use client";
import FundingMain from "./funding-main";

export default async function TokenProvider() {
  const accessToken = localStorage.getItem("access_token");

  return (
    <>
      <FundingMain token={accessToken!} />
    </>
  );
}
