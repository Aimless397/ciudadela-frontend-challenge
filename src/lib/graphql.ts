import { CharactersResponse } from '@/interfaces/interfaces'
import { GraphQLClient } from 'graphql-request'

export const request = async (
  query: string,
  variables = {}
): Promise<CharactersResponse> => {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
  const client = new GraphQLClient(endpoint!)

  try {
    const data = await client.request<CharactersResponse>(query, variables)

    return data
  } catch (error) {
    console.log(error)
    throw new Error('Error al realizar la solicitud GraphQL')
  }
}
