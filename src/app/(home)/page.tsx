import { FetchedData } from "@/app/(home)/fetchedData"

export const dynamic = "force-dynamic"

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-4xl" />
      <FetchedData />
    </main>
  )
}
