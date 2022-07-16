import { Box, Flex, Heading, useBreakpointValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Banner } from '../components/Banner'
import { ContinentsSlider } from '../components/ContinentSlider'
import { TravelTips } from '../components/TravelTips'

const Home: NextPage = () => {
  return (
    <Flex flexDirection={'column'}>
      <Head>
        <title>worldtrip | Home</title>
      </Head>
      <Banner />
      <TravelTips />

      <Box
        borderWidth={'1px'}
        borderStyle={'solid'}
        borderColor={'gray.900'}
        width={{ base: '10', md: '16' }}
        marginY={'12'}
        alignSelf={'center'}
      />

      <Heading
        fontWeight={'500'}
        textAlign={'center'}
        fontSize={['xl', '2xl', '4xl']}
        marginBottom={['5', '14']}
        color={'gray.900'}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <Flex paddingBottom={'16'}>
        <ContinentsSlider />
      </Flex>
    </Flex>
  )
}

export default Home
