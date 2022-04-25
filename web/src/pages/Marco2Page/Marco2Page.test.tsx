import { render } from '@redwoodjs/testing/web'

import Marco2Page from './Marco2Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Marco2Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Marco2Page />)
    }).not.toThrow()
  })
})
