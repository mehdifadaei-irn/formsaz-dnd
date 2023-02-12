import { ReactNode } from 'react'

type SectionProps = {
    title?: string,
    children: ReactNode
}

function SectionH({title = 'defultHead', children}: SectionProps) {
  return (
    <div>
        <h1>{title}</h1>
        <p>{children}</p>
    </div>
  )
}

export default SectionH