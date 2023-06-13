"use client"

import { useSuspenseQuery } from "@apollo/client"
import { gql } from "graphql-tag"
import { Suspense } from "react"

export function FetchedData() {
  const { data } = useSuspenseQuery<any>(gql`
    query ExampleQuery {
      hello
    }
  `)

  return <Suspense fallback={<>Loading</>}>{data.hello}</Suspense>
}
