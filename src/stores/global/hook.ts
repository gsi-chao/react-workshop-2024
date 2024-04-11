'use client';

import { useContext } from 'react'
import GlobalContext from './context'

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export default useGlobalContext
