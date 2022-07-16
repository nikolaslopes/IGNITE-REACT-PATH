import { Box, Flex, Heading } from '@chakra-ui/react'
import { IContinentBanner } from './types'

export function ContinentBanner({ main_image, name }: IContinentBanner) {
  return (
    <Flex
      as={'section'}
      width={'100%'}
      height={['150px', '200px', '250px', '500px']}
      backgroundImage={`url(${main_image})`}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'cover'}
    >
      <Box width={'100%'} height={'100%'} backgroundColor={'blur.900'}>
        <Flex
          width={'100%'}
          maxWidth={'1300px'}
          height={'100%'}
          alignItems={'center'}
          justifyContent={'center'}
          marginX={'auto'}
        >
          <Heading
            fontSize={['28px', '4xl', '5xl']}
            fontWeight={'600'}
            color={'gray.200'}
          >
            {name}
          </Heading>
        </Flex>
      </Box>
    </Flex>
  )
}
