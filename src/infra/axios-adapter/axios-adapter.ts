import axios, { AxiosResponse } from 'axios'
import { HttpGetClient, HttpGetParams, HttpResponse } from '../../data/protocols'

export class AxiosAdapter implements HttpGetClient<any> {
  async get (data: HttpGetParams): Promise<HttpResponse<any>> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.get(data.url)
    } catch (error) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}