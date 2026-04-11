'use client'

import { Button } from '@/components/ui/button'

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold text-destructive">
        Something went wrong
      </h2>
      <p className="text-muted-foreground">{error?.message}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}

export default ErrorPage
