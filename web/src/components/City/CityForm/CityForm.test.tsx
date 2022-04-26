import { render, screen, waitFor } from '@redwoodjs/testing/web'
import userEvent from '@testing-library/user-event'

import CityForm from './CityForm'

describe('CityForm', () => {
  beforeEach(() => {
    const onSubmit = jest.fn()
    const onSave = jest.fn()
    render(<CityForm onSubmit={onSubmit} onSave={onSave} />)
  })

  it('renders successfully', () => {
    const onSubmit = jest.fn()

    expect(() => {
      render(<CityForm onSubmit={onSubmit} />)
    }).not.toThrow()
  })

  it('does not submit when required fields are empty', async () => {
    const onSubmit = jest.fn()

    const submitButton = screen.getByText('Save')

    await waitFor(() => userEvent.click(submitButton))

    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('does not submit when some required fields are empty', async () => {
    const onSubmit = jest.fn()

    const name = 'Obfelden'

    const nameField = screen.getByLabelText('Name')
    const submitButton = screen.getByText('Save')

    await waitFor(() => userEvent.type(nameField, name))
    await waitFor(() => userEvent.click(submitButton))

    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('submits with the expected, entered data', async () => {
    const onSubmit = jest.fn()

    const name = 'Obfelden'
    const zip = '8912'
    const canton = 'ZH'

    const submitButton = screen.getByText('Save')

    const nameField = screen.getByLabelText('Name')
    const zipField = screen.getByLabelText('Zip')
    const cantonField = screen.getByLabelText('Canton')
    const activeCheckbox = screen.getByLabelText('Active')

    await waitFor(() => userEvent.type(nameField, name))
    await waitFor(() => userEvent.type(zipField, zip))
    await waitFor(() => userEvent.type(cantonField, canton))
    await waitFor(() => userEvent.click(activeCheckbox))
    await waitFor(() =>
      userEvent.click(screen.getByRole('button', { name: 'Save' }))
    )
    //await waitFor(() => submitButton.

    //expect(nameField).toHaveValue('Obfeden')
    //expect(zipField).toHaveValue('1234')
    //expect(activeCheckbox).toBeChecked()
    expect(onSubmit).toHaveBeenCalled()
    expect(onSubmit).toHaveBeenCalledWith(
      { name, zip, canton },
      expect.objectContaining({
        _reactName: 'onSubmit',
        type: 'submit',
      })
    )
  })
})
