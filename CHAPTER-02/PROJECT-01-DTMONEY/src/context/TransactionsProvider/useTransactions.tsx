import { useContext } from 'react'
import { TransactionsContext } from '.'

export function useTransactions() {
  return useContext(TransactionsContext)
}
