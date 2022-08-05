import { ISearchProducts } from '../Interfaces/global'
import { ProductItem } from './ProductItem'
import { List, ListRowRenderer } from 'react-virtualized'

export function SearchProducts({
  products,
  totalPrice,
  onAddProductToWishList,
}: ISearchProducts) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={products[index]}
          onAddProductToWishList={onAddProductToWishList}
        />
      </div>
    )
  }

  return (
    <div>
      <h4>Total price: {totalPrice}</h4>
      <br />

      <List
        height={400}
        rowHeight={70}
        width={900}
        overscanRowCount={5}
        rowCount={products.length}
        rowRenderer={rowRenderer}
      />
    </div>
  )
}

/**
 * ? When useMemo
 * 1. Cálculos pesados
 * 2. Igualdade referencial (quando repassamos aquela informação para um componente filho)
 */
