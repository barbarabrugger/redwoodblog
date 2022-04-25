import { Link, routes } from '@redwoodjs/router'

import { City } from 'types/graphql'

interface Props {
  city: City
}

const City = ({ city }: Props) => {
  return (
    <>
      <header>
        <h2>
          <Link to={routes.city({ id: city.id })}>{city.name}</Link>
        </h2>
      </header>
    </>
  )
}

export default City
