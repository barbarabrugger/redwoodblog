import City from './City'

const CITY = {
  id: 20,
  name: 'Basel',
  zip: 1234,
  canton: 'BS',
}

export const generated = () => {
  return <City key={CITY.id} city={CITY} />
}

export default { title: 'Components/City' }
