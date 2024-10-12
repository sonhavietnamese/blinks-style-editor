import dynamic from 'next/dynamic'

const Exp = dynamic(() => import('./exp'), { ssr: false })

export default function Page() {
  return (
    <div>
      <Exp />
    </div>
  )
}
