import { Flex } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Params } from 'next/dist/server/router'
import Head from 'next/head'
import { ContinentBanner } from '../../components/ContinentBanner'
import { ContinentInfo } from '../../components/ContinentInfo'
import { ContinentTopCities } from '../../components/ContinentTopCities'
import { ICity, ICountry } from '../../interfaces/global'
import { Api } from '../../services/api'

export interface CountryPros {
  country: {
    name: string
    secondary_image: string
    resume: string
    cities: Array<ICity>
    meta: {
      countries_amount: number
      languages_amount: number
      cities_amount: {
        head: number
        total: number
      }
    }
  }
}

export default function Continent({ country }: CountryPros) {
  console.log(country)

  return (
    <Flex flexDirection={'column'}>
      <Head>
        <title>worldtrip | {country.name}</title>
      </Head>

      <ContinentBanner
        name={country.name}
        main_image={country.secondary_image}
      />

      <ContinentInfo resume={country.resume} meta={country.meta} />

      <ContinentTopCities cities={country.cities} />
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: 'blocking',
    paths: [],
  }
}

export const getStaticProps: GetStaticProps<any> = async ({
  params,
}: Params) => {
  const { id } = params

  const { data } = await Api.get<ICountry>(`/continents/${id}`)

  console.log(data)

  const country = {
    name: data.name,
    secondary_image: data.secondary_image,
    resume: data.resume,
    cities: data.cities,
    meta: data.meta,
  }

  return {
    props: {
      country,
    },
  }
}
