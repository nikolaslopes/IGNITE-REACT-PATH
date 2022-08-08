import { Heading, Text, VStack } from '@chakra-ui/react'

export function TextBox() {
  return (
    <VStack
      width={'100%'}
      maxWidth={{ sm: '524px', md: '720px' }}
      alignItems={'flex-start'}
      justifyContent={'center'}
      spacing={'4'}
    >
      <Heading
        color={'gray.100'}
        fontWeight={'400'}
        fontSize={{
          base: '2xl',
          sm: '4xl',
          md: '5xl',
          lg: '5xl',
          xl: '6xl',
        }}
      >
        5 Continentes, infinitas possibilidades.
      </Heading>
      <Text
        color={'gray.200'}
        fontSize={{
          base: '0.8rem',
          sm: '0.9rem',
          md: '1rem',
          lg: '1.2rem',
          xl: '1.2rem',
        }}
      >
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
    </VStack>
  )
}
