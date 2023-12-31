"use client"

import { ApolloClient, ApolloLink, HttpLink, SuspenseCache } from "@apollo/client"
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr"

if (!process.env.VERCEL_URL) {
  throw new Error("Missing VERCEL_URL")
}
const endpoint = `${process.env.VERCEL_URL.includes("localhost") ? "http" : "https"}://${process.env.VERCEL_URL}`

function makeClient() {
  const httpLink = new HttpLink({
    // https://studio.apollographql.com/public/spacex-l4uc6p/
    uri: `${endpoint}/graphql`,
  })

  return new ApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  })
}

function makeSuspenseCache() {
  return new SuspenseCache()
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient} makeSuspenseCache={makeSuspenseCache}>
      {children}
    </ApolloNextAppProvider>
  )
}
