import React, { FC } from 'react'
import { Toaster } from 'react-hot-toast'
import ClientOnly from '@/components/ClientOnly'
import PreviewModal from '@/components/preview-modal'

interface ProvidersProps {
  children : React.ReactNode
}

const Providers : FC<ProvidersProps> = ({children}) => {
  return (
    <>
      <ClientOnly>
        <Toaster />
        <PreviewModal />
      </ClientOnly>
      {children}
    </>
  )
}

export default Providers