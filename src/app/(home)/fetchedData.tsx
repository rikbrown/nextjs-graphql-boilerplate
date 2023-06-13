"use client"

import { useSuspenseQuery } from "@apollo/client"
import { gql } from "graphql-tag"

export const dynamic = "force-dynamic"

export function FetchedData() {
  const { data } = useSuspenseQuery<any>(gql`
    query ExampleQuery {
      hello
    }
  `)

  const result = data ? data["hello"] : "Loading"

  return <>{result}</>
}
