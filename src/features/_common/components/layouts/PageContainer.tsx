import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

type Props = {
  children: ReactNode
}

export const PageContainer = ({ children }: Props) => {
  const location = useLocation()
  const pathname = location.pathname

  const pathClass =
    pathname === '/' ? 'home_page' : pathname.replace(/\//g, '') + '_page'

  return (
    <main className={`page_container ${pathClass}`}>
      <div className="inner">{children}</div>
    </main>
  )
}
