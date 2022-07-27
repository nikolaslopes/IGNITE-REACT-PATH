import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { ImageBox } from './ImageBox'
import { TextBox } from './TextBox'

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as={'section'}
      width={'100%'}
      height={['163px', '245px', '335px']}
      bgImage={'/background.svg'}
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
    >
      <Flex
        width={'100%'}
        maxWidth={'1300px'}
        marginX={'auto'}
        paddingX={'6'}
        paddingY={'14'}
        justifyContent={'space-between'}
      >
        <TextBox />
        {isWideVersion && <ImageBox />}
      </Flex>
    </Flex>
  )
}
