import { useMemo } from 'react'
import { IProducts } from '../Interfaces/global'
import { ProductItem } from './ProductItem'

export function SearchProducts({
  products,
  totalPrice,
  onAddToWishList,
}: IProducts) {
  return (
    <div>
      <h4>Total price: {totalPrice} R$</h4>
      <br />
      {products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishList={onAddToWishList}
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
