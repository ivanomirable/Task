import { useState } from "react"


export const useToggle = (defaultValue = false) => {
    const [isVisible, setIsVisible] = useState(defaultValue)
  
    const open = () => {
      setIsVisible(true)
    }
  
    const close = () => {
      setIsVisible(false)
    }
  
    const toggle = () => {
      setIsVisible((prev) => !prev)
    }
  
    return {
      isVisible,
      open,
      close,
      toggle,
    }
  }