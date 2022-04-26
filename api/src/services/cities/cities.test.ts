import { cities, city, createCity, updateCity, deleteCity } from './cities'
import type { StandardScenario } from './cities.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('cities', () => {
  scenario('returns all cities', async (scenario: StandardScenario) => {
    const result = await cities()

    expect(result.length).toEqual(Object.keys(scenario.city).length)
  })

  scenario('returns a single city', async (scenario: StandardScenario) => {
    const result = await city({ id: scenario.city.one.id })

    expect(result).toEqual(scenario.city.one)
  })

  scenario('creates a city', async () => {
    const result = await createCity({
      input: { name: 'Bern', zip: 3000, canton: 'BE' },
    })

    expect(result.name).toEqual('Bern')
    expect(result.zip).toEqual(3000)
    expect(result.canton).toEqual('BE')
  })

  scenario('updates a city', async (scenario: StandardScenario) => {
    const original = await city({ id: scenario.city.one.id })
    const result = await updateCity({
      id: original.id,
      input: { name: 'Genf' },
    })

    expect(result.name).toEqual('Genf')
  })

  scenario('deletes a city', async (scenario: StandardScenario) => {
    const original = await deleteCity({ id: scenario.city.one.id })
    const result = await city({ id: original.id })

    expect(result).toEqual(null)
  })
})
