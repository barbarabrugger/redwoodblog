import type { CitiesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query CitiesQuery {
    cities {
      id
      name
      canton
      zip
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ cities }: CellSuccessProps<CitiesQuery>) => {
  return (
    <>
      <header>
        <strong>Cities</strong>
      </header>
      <ul>
        {cities.map((city) => (
          <>
            <li key={city.id}>
              <Link to={routes.location({ id: city.id })}>
                <h2>{city.zip}</h2> <h2>{city.name}</h2> <h2>{city.canton}</h2>
              </Link>
            </li>
          </>
        ))}
      </ul>
    </>
  )
}
