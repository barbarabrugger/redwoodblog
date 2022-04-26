import { render } from '@redwoodjs/testing/web'

import City from './City'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('City', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<City />)
    }).not.toThrow()
  })
})
