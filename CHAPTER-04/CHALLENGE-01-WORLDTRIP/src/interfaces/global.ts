export interface ICity {
  id?: number
  name: string
  capital: string
  thumb: string
  flag: string
}

export interface ICountry {
  id: number
  name: string
  info?: string
  resume: string
  main_image?: string
  secondary_image: string
  meta?: {
    countries_amount: number
    languages_amount: number
    cities_amount: {
      head: number
      total: number
    }
  }
  cities: Array<ICity>
}

export interface IContinents {
  continents: Array<ICountry>
}
