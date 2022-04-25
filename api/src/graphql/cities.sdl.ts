export const schema = gql`
  type City {
    id: Int!
    name: String!
    zip: Int!
    canton: String!
  }

  type Query {
    cities: [City!]! @skipAuth
    city(id: Int!): City @skipAuth
  }

  input CreateCityInput {
    name: String!
    zip: Int!
    canton: String!
  }

  input UpdateCityInput {
    name: String
    zip: Int
    canton: String
  }

  type Mutation {
    createCity(input: CreateCityInput!): City! @skipAuth
    updateCity(id: Int!, input: UpdateCityInput!): City! @skipAuth
    deleteCity(id: Int!): City! @skipAuth
  }
`
