import { Flex, Grid, Heading } from '@chakra-ui/react'
import { ICountry } from '../../interfaces/global'
import { CityInfo } from '../CityInfo'

export type IContinentTopCities = Pick<ICountry, 'cities'>

export function ContinentTopCities({ cities }: IContinentTopCities) {
  return (
    <Flex
      flexDir="column"
      w="100%"
      maxW={1160}
      mx="auto"
      mt={['8', '10', '14', '20']}
      mb="35px"
      px="16px"
    >
      <Heading fontSize={['2xl', '3xl', '4xl']} fontWeight="medium">
        Cidades +100
      </Heading>

      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gap={['5', '7', '9', '12']}
        mt={['8', '8', '10']}
      >
        {cities.map((country) => (
          <CityInfo
            key={country.id}
            name={country.name}
            capital={country.capital}
            flag={country.flag}
            thumb={country.thumb}
          />
        ))}
      </Grid>
    </Flex>
  )
}
