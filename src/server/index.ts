import { z } from "zod"

import { publicProcedure, router } from "./trpc"

export const appRouter = router({
  helloWorld: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts
    return { message: `Hello ${input}, from trpc` }
  }),
})

export type AppRouter = typeof appRouter
