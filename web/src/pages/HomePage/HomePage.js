import { MetaTags } from '@redwoodjs/web'

import LocationsCell from 'src/components/LocationsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <LocationsCell />
    </>
  )
}

export default HomePage
