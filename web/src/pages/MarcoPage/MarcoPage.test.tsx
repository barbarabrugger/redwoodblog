import { render } from '@redwoodjs/testing/web'

import MarcoPage from './MarcoPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MarcoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MarcoPage />)
    }).not.toThrow()
  })
})
