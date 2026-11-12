import { useRef } from 'react'

// Horizontal touch-swipe detection. Touch events only, so mouse behaviour is unchanged.
export default function useSwipe({ onSwipeLeft, onSwipeRight, threshold = 40 }) {
  const start = useRef(null)

  return {
    onTouchStart: (event) => {
      if (event.touches.length !== 1) {
        start.current = null
        return
      }
      const touch = event.touches[0]
      start.current = { x: touch.clientX, y: touch.clientY }
    },
    onTouchEnd: (event) => {
      if (!start.current) return
      const touch = event.changedTouches[0]
      const dx = touch.clientX - start.current.x
      const dy = touch.clientY - start.current.y
      start.current = null
      if (Math.abs(dx) < threshold || Math.abs(dx) < Math.abs(dy) * 1.5) return
      if (dx < 0) onSwipeLeft?.()
      else onSwipeRight?.()
    },
    onTouchCancel: () => {
      start.current = null
    },
  }
}