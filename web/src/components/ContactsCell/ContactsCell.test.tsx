import { render } from '@redwoodjs/testing/web'

import ContactsCell from './ContactsCell'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ContactsCell', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContactsCell />)
    }).not.toThrow()
  })
})
