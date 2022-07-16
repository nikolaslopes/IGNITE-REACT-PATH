import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react'
import { Item } from './Item'

export function TravelTips() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Grid
      as={'section'}
      templateColumns={{ base: '1fr 1fr', md: 'repeat(5, 1fr)' }}
      gap={{ base: '4', md: '6' }}
      width={'100%'}
      maxWidth={'1300px'}
      marginX={'auto'}
      paddingX={'12'}
      marginTop={{ base: '9', md: '16' }}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <GridItem>
        <Item iconName={'drink'} text={'vida noturna'} />
      </GridItem>
      <GridItem>
        <Item iconName={'beach'} text={'praia'} />
      </GridItem>
      <GridItem>
        <Item iconName={'building'} text={'moderno'} />
      </GridItem>
      <GridItem>
        <Item iconName={'museum'} text={'clássico'} />
      </GridItem>
      <GridItem colSpan={{ base: 2, md: 1 }}>
        <Item iconName={'world'} text={'e mais...'} />
      </GridItem>
    </Grid>
  )
}
