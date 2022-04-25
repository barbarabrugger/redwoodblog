import { MetaTags } from '@redwoodjs/web'
import LocationCell from 'src/components/LocationCell'

interface Props {
  id: number
}

const LocationPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Location" description="Location page" />

      <LocationCell id={id} />
    </>
  )
}

export default LocationPage
