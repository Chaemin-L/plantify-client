"use client";
import { useGetCash } from "@/hooks/api/useGetCash";
import apolloClient from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client/react";
import Image from "next/image";
import ForestMain from "./forest-main";

export default function Page() {
  const { data } = useGetCash();

  return (
    <ApolloProvider client={apolloClient}>
      <div className="flex items-center justify-end py-2 gap-2">
        <Image
          width={16}
          height={16}
          src="/icons/tree-coin.svg"
          alt="트리코인"
          className="w-4 h-4"
        />
        <span className="text-white ">{data?.cashBalance}</span>
      </div>
      <ForestMain />
    </ApolloProvider>
  );
}
