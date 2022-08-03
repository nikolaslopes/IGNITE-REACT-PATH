import React from 'react'
import { IProduct } from '../Interface/global'

export function ProductItem({ product }: IProduct) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )
}
