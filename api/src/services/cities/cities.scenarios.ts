import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CityCreateArgs>({
  city: {
    one: { data: { name: 'Zürich', zip: 8000, canton: 'ZH' } },
    two: { data: { name: 'Siebnen', zip: 8854, canton: 'SZ' } },
  },
})

export type StandardScenario = typeof standard
