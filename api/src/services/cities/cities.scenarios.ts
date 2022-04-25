import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CityCreateArgs>({
  city: {
    one: { data: { name: 'String', zip: 8333365, canton: 'String' } },
    two: { data: { name: 'String', zip: 5364383, canton: 'String' } },
  },
})

export type StandardScenario = typeof standard
