import { MetaTags } from '@redwoodjs/web'
import ContactsCell from 'src/components/ContactsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <ContactsCell />
    </>
  )
}

export default HomePage
