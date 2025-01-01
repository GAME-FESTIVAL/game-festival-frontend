/* 
    import { useDevice } from '@common/hooks'
    const { isDesktop } = useDevice()

    <img
        src={isDesktop ? IDInputIconPC : IDInputIconMO}
        alt="아이콘"
        key={isDesktop ? 'desktop' : 'mobile'}
        />
*/

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
