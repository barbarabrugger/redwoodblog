import type { FindCityQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import City from '../City/City'

export const QUERY = gql`
  query FindCityQuery($id: Int!) {
    city(id: $id) {
      id
      name
      zip
      canton
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ city }: CellSuccessProps<FindCityQuery>) => {
  return <City key={city.id} city={city} />
}
