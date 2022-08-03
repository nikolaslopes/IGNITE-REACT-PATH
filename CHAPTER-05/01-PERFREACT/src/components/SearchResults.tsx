import React from 'react'
import { IProducts } from '../Interface/global'
import { ProductItem } from './ProductItem'

export function SearchResults({ products }: IProducts) {
  return (
    <div>
      {products.map(({ product }) => {
        return <ProductItem key={product.id} product={product} />
      })}
    </div>
  )
}
