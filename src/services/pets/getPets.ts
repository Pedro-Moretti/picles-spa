import { GetPetsRequest, GetPetsResponse } from '../../interfaces/pet'
import httpClient from '../api/httpClient'

export async function getPets(params?: GetPetsRequest): Promise<GetPetsResponse> {
    try {
        const response = await httpClient.get('/pet', { params })
        return response.data

    } catch (error) {
        console.log('ERRO AO BUSCAR PETS', error)
        throw error
    }

}