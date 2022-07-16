import { Box, color, Flex, Text } from '@chakra-ui/react'

interface IContinentInfo {
  resume: string
  meta: {
    countries_amount: number
    languages_amount: number
    cities_amount: {
      head: number
      total: number
    }
  }
}

export function ContinentInfo({ resume, meta }: IContinentInfo) {
  return (
    <Flex
      width={'100%'}
      maxWidth={'1300px'}
      marginX={'auto'}
      marginTop={['6', '8', '10', '20']}
      alignItems={'center'}
      flexDirection={['column', 'column', 'row']}
    >
      <Text
        width={'100%'}
        maxWidth={['100%', '100%', '600']}
        marginRight={['0', '0', '70px']}
        fontSize={['sm', 'md', 'md', '2xl']}
        textAlign={'justify'}
      >
        {resume}
      </Text>

      <Flex
        w={['100%', '100%', 'auto']}
        flexShrink={0}
        justify="space-between"
        mt={['4', '4', '0']}
      >
        <Flex direction="column" align={['flex-start', 'flex-start', 'center']}>
          <Text
            fontSize={['2xl', '4xl', '4xl', '5xl']}
            fontWeight="semibold"
            color="yellow.900"
          >
            {meta?.countries_amount}
          </Text>
          <Text
            fontSize={['lg', 'lg', 'lg', '2xl']}
            fontWeight={['normal', 'normal', 'semibold']}
            color="gray.800"
            mt={['-4px', '6px', '-12px']}
          >
            países
          </Text>
        </Flex>

        <Flex
          direction="column"
          align={['flex-start', 'flex-start', 'center']}
          ml={['8px', '42px']}
        >
          <Text
            fontSize={['2xl', '4xl', '4xl', '5xl']}
            fontWeight="semibold"
            color="yellow.900"
          >
            {meta?.languages_amount}
          </Text>
          <Text
            fontSize={['lg', 'lg', 'lg', '2xl']}
            fontWeight={['normal', 'normal', 'semibold']}
            color="gray.800"
            mt={['-4px', '6px', '-12px']}
          >
            línguas
          </Text>
        </Flex>

        <Flex
          direction="column"
          align={['flex-start', 'flex-start', 'center']}
          ml={['8px', '42px']}
        >
          <Text
            fontSize={['2xl', '4xl', '4xl', '5xl']}
            fontWeight="semibold"
            color="yellow.900"
          >
            {meta?.cities_amount.head}
          </Text>
          <Text
            fontSize={['lg', 'lg', 'lg', '2xl']}
            fontWeight={['normal', 'normal', 'semibold']}
            color="gray.800"
            mt={['-4px', '6px', '-12px']}
          >
            cidades +100
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
