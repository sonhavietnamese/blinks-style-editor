'use client'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import '@dialectlabs/blinks/index.css'
import { useState, useEffect } from 'react'
import { Action, ActionsRegistry, useAction } from '@dialectlabs/blinks'
import { useActionSolanaWalletAdapter } from '@dialectlabs/blinks/hooks/solana'
import { Blink } from '@/rnd/blinks/src/ui'

export default function Exp() {
  return (
    <main>
      <WalletMultiButton />

      <div className='max-w-md'>
        <Blink stylePreset='default' />
      </div>
    </main>
  )
}
