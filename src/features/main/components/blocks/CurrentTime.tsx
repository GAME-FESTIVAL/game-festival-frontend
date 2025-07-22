import { format } from 'date-fns'
import { useEffect, useState } from 'react'

export const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date()
    return {
      today: format(now, 'yyyy/MM/dd'),
      time: format(now, 'HH:mm:ss'),
      fullDateTime: format(now, "yyyy-MM-dd'T'HH:mm:ss"),
    }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      setCurrentTime({
        today: format(now, 'yyyy/MM/dd'),
        time: format(now, 'HH:mm:ss'),
        fullDateTime: format(now, "yyyy-MM-dd'T'HH:mm:ss"),
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <time
      className="hero-getDate"
      dateTime={currentTime.fullDateTime}
      aria-label={`오늘은 ${currentTime.today}, 현재 시각은 ${currentTime.time}입니다`}
    >
      <span className="today">{currentTime.today}</span>
      <span className="time">{currentTime.time}</span>
    </time>
  )
}
