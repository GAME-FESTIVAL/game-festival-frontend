import { useState, useEffect } from 'react'
import { checkDevice } from '@common/utils'

export const useDevice = () => {
  const [device, setDevice] = useState({
    isMobile: checkDevice.isMobile(),
    isTablet: checkDevice.isTablet(),
    isDesktop: checkDevice.isDesktop(),
  })

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      setDevice({
        isMobile: checkDevice.isMobile(),
        isTablet: checkDevice.isTablet(),
        isDesktop: checkDevice.isDesktop(),
      })
    })

    observer.observe(document.body)

    return () => {
      observer.disconnect()
    }
  }, [])

  return device
}
