import { MetaTags } from '@redwoodjs/web'
import PhoneNumbersCell from 'src/components/PhoneNumbersCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <PhoneNumbersCell />
    </>
  )
}

export default HomePage
