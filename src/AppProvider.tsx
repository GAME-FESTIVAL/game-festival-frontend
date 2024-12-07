import { Suspense, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ErrorBoundary fallback={<div>이용에 불편을 드려 죄송합니다.</div>}>
          <Suspense fallback={<div>로딩중...</div>}>{children}</Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
