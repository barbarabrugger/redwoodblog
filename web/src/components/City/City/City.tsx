import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_CITY_MUTATION = gql`
  mutation DeleteCityMutation($id: Int!) {
    deleteCity(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const City = ({ city }) => {
  /*const [deleteCity] = useMutation(DELETE_CITY_MUTATION, {
    onCompleted: () => {
      toast.success('City deleted')
      navigate(routes.cities())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete city ' + id + '?')) {
      deleteCity({ variables: { id } })
    }
  }*/

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="order-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
              <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                Id
              </th>
              <td className="px-6 py-4">{city.id}</td>
            </tr>
            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
              <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                Name
              </th>
              <td className="px-6 py-4">{city.name}</td>
            </tr>
            <tr className="order-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
              <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                Zip
              </th>
              <td className="px-6 py-4">{city.zip}</td>
            </tr>
            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
              <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                Canton
              </th>
              <td className="px-6 py-4">{city.canton}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCity({ id: city.id })}
          className="btn btn-red dark:btn-blue"
        >
          Edit
        </Link>
      </nav>
    </>
  )
}

export default City
