import { ICountry } from '../../interfaces/global'

export type ICountryMainInfomartion = Pick<
  ICountry,
  'id' | 'name' | 'info' | 'main_image'
>
