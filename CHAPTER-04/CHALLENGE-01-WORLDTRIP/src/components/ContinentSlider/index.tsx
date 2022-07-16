import Link from 'next/link'
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react'
import SwiperCore, { A11y, Autoplay, Navigation, Pagination } from 'swiper'
import { Flex, Heading, Text, useToast, VStack } from '@chakra-ui/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useEffect, useState } from 'react'
import { fetchContinents } from './services'
import { ICountryMainInfomartion } from './types'

SwiperCore.use([A11y, Autoplay, Navigation, Pagination])

export function ContinentsSlider() {
  const toast = useToast()
  const [countries, setCountries] = useState<Array<ICountryMainInfomartion>>([])

  const getCountries = async () => {
    try {
      const response = await fetchContinents()

      setCountries(response)
      return response
    } catch {
      {
        toast({
          title: 'Falha ao carregar dados',
          position: 'top-right',
          isClosable: true,
          colorScheme: 'red.500',
        })
      }
    }
  }

  useEffect(() => {
    getCountries()
  }, [])

  return (
    <>
      <Flex
        width={'100%'}
        maxWidth={'1300px'}
        marginX={'auto'}
        height={['250px', '350px', '450px']}
      >
        <SwiperReact
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 5000 }}
          navigation
          pagination={{ clickable: true }}
          a11y={{
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
          }}
        >
          {countries.map((country) => (
            <SwiperSlide key={country.id}>
              <Link href={`continents/${country.id}`}>
                <Flex
                  width={'100%'}
                  height={'100%'}
                  backgroundImage={`url(${country.main_image})`}
                  backgroundRepeat={'no-repeat'}
                  backgroundPosition={'center'}
                  backgroundSize={'cover'}
                  cursor={'pointer'}
                >
                  <Flex
                    width={'100%'}
                    height={'100%'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    backgroundColor={'blur.900'}
                  >
                    <VStack spacing={4}>
                      <Heading
                        color={'gray.100'}
                        fontWeight={'700'}
                        fontSize={['2xl', '3xl', '5xl']}
                      >
                        {country.name}
                      </Heading>
                      <Text
                        color={'gray.200'}
                        fontWeight={'700'}
                        fontSize={['sm', 'xl', '2xl']}
                      >
                        {country.info}
                      </Text>
                    </VStack>
                  </Flex>
                </Flex>
              </Link>
            </SwiperSlide>
          ))}
        </SwiperReact>
      </Flex>
    </>
  )
}
