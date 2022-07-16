import { Api } from '../../services/api'

export const fetchContinents = async () => {
  const request = await Api.get('continents')

  return request.data
}
