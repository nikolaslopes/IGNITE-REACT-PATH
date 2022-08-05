import { useMemo } from 'react'
import { ISearchProducts } from '../Interfaces/global'
import { ProductItem } from './ProductItem'

export function SearchProducts({
  products,
  totalPrice,
  onAddProductToWishList: onAddToWishList,
}: ISearchProducts) {
  return (
    <div>
      <h4>Total price: {totalPrice}</h4>
      <br />
      {products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddProductToWishList={onAddToWishList}
          />
        )
      })}
    </div>
  )
}

/**
 * ? When useMemo
 * 1. Cálculos pesados
 * 2. Igualdade referencial (quando repassamos aquela informação para um componente filho)
 */
