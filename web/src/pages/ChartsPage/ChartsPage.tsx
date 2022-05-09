import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ChartsPage = () => {
  return (
    <>
      <MetaTags title="Charts" description="Charts page" />

      <h1>ChartsPage</h1>
      <p>
        Find me in <code>./web/src/pages/ChartsPage/ChartsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>charts</code>, link to me with `
        <Link to={routes.charts()}>Charts</Link>`
      </p>
    </>
  )
}

export default ChartsPage
