import { ReactNode } from 'react'
export interface ITransactionsProvider {
  children: ReactNode
}
export interface ITransactions {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

export type ITransactionInput = Omit<ITransactions, 'id' | 'createdAt'>

export interface ITransactionsContext {
  transactions: ITransactions[]
  createTransaction: (transaction: ITransactionInput) => Promise<void>
}
