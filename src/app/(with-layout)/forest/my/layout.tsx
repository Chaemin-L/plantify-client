"use client";
import apolloClient from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
