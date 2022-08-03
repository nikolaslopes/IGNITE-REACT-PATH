import React from 'react'

interface IProductItem {
  product: {
    id: number
    price: number
    title: string
  }
}

export function ProductItem({ product }: IProductItem) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )
}
