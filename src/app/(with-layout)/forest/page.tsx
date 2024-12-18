"use client";
import apolloClient from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client/react";
import ForestMain from "./forest-main";

export default function Page() {
  return (
    <ApolloProvider client={apolloClient}>
      <ForestMain />
    </ApolloProvider>
  );
}
