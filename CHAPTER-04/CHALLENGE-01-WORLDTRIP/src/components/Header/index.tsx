import { Box, Flex, Icon, Img } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiChevronLeft } from 'react-icons/fi'

export function Header() {
  const { asPath } = useRouter()

  return (
    <Flex as={'header'} width={'100%'} height={['50px', '75px', '100px']}>
      <Flex
        width={'100%'}
        maxWidth={'1300px'}
        marginX={'auto'}
        paddingX={'6'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        {asPath !== '/' && (
          <Link href={'/'}>
            <Icon
              as={FiChevronLeft}
              fontSize={'3xl'}
              color={'gray.800'}
              cursor="pointer"
            />
          </Link>
        )}
        <Flex flex={'1'} justifyContent={'center'}>
          <Img
            width={'auto'}
            height={['1.5rem', '2rem', '3rem']}
            src="/logo.svg"
            alt="Logo World Trip"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
