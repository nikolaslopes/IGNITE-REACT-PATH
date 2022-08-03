import React from 'react'
import { ProductItem } from './ProductItem'

interface IResults {
  results: Array<{
    id: number
    price: number
    title: string
  }>
}

export function SearchResults({ results }: IResults) {
  return (
    <div>
      {results.map((result) => {
        return <ProductItem key={result.id} product={result} />
      })}
    </div>
  )
}
