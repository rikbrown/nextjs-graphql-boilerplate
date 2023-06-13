import { FetchedData } from "@/app/(home)/fetchedData"

export default async function Home() {
  return (
    <main className="p-4">
      <h1 className="text-4xl" />
      <FetchedData />
    </main>
  )
}
