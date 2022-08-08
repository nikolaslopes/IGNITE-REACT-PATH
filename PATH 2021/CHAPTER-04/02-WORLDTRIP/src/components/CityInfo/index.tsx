import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react'
import { ICity } from '../../interfaces/global'
import { IContinentTopCities } from '../ContinentTopCities'

export function CityInfo({ name, capital, thumb, flag }: ICity) {
  return (
    <Flex
      flexDir="column"
      overflow="hidden"
      w="100%"
      maxW={['256px']}
      mx="auto"
    >
      <Img src={thumb} alt="Banner" w="100%" h="173px" borderTopRadius={4} />

      <Flex
        w="100%"
        borderWidth={1}
        borderTopWidth={0}
        borderColor="primary.50"
        borderBottomRadius={4}
        px="24px"
        pt="18px"
        pb="25"
        align="center"
        justify="space-between"
      >
        <Box>
          <Heading
            as="h4"
            fontSize="20px"
            fontWeight="semibold"
            lineHeight="25px"
          >
            {name}
          </Heading>
          <Text
            fontSize="16px"
            fontWeight="medium"
            lineHeight="25px"
            color="gray.500"
            mt="12px"
          >
            {capital}
          </Text>
        </Box>

        <Img
          src={flag}
          alt="Banner"
          w="30px"
          h="30px"
          objectFit="cover"
          borderRadius="50%"
          flexShrink={0}
        />
      </Flex>
    </Flex>
  )
}
