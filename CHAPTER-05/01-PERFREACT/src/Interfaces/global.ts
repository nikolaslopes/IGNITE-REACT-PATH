export interface IProduct {
  product: {
    id: number
    price: number
    title: string
  }
}

export interface IProducts {
  products: Array<{
    id: number
    price: number
    title: string
  }>
}