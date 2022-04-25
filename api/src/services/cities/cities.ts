import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const cities = () => {
  return db.city.findMany()
}

export const city = ({ id }: Prisma.CityWhereUniqueInput) => {
  return db.city.findUnique({
    where: { id },
  })
}

interface CreateCityArgs {
  input: Prisma.CityCreateInput
}

export const createCity = ({ input }: CreateCityArgs) => {
  return db.city.create({
    data: input,
  })
}

interface UpdateCityArgs extends Prisma.CityWhereUniqueInput {
  input: Prisma.CityUpdateInput
}

export const updateCity = ({ id, input }: UpdateCityArgs) => {
  return db.city.update({
    data: input,
    where: { id },
  })
}

export const deleteCity = ({ id }: Prisma.CityWhereUniqueInput) => {
  return db.city.delete({
    where: { id },
  })
}
