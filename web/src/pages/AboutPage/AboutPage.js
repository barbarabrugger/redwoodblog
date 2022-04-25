import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <p>
        This site was created to demonstrate the mastery of Redwood: Look on my
        works, ye mighty, an
        <Link to={routes.home()}>Return home</Link>d despair!
      </p>
    </>
  )
}

export default AboutPage
