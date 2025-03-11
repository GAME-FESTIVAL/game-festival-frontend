import { format } from 'date-fns'
import { useEffect, useState } from 'react'

export const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState({
    today: format(new Date(), 'yyyy/MM/dd'),
    time: format(new Date(), 'HH:mm:ss'),
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime({
        today: format(new Date(), 'yyyy/MM/dd'),
        time: format(new Date(), 'HH:mm:ss'),
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="getDate">
      <p className="today">{currentTime.today}</p>
      <p className="time">{currentTime.time}</p>
    </div>
  )
}
