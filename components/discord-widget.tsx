'use client'

import { useEffect } from 'react'

export function DiscordWidget() {
  useEffect(() => {
    // Load Discord widget script
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3'
    script.async = true
    script.defer = true
    
    script.onload = () => {
      // Initialize the Discord widget
      // Replace with your actual Discord server ID and channel ID
      new (window as any).Crate({
        server: '1234567890123456789', // Your Discord Server ID
        channel: '1234567890123456789', // Your Discord Channel ID
        position: 'bottom-left',
        color: '#1E40AF', // Primary blue color
        glyph: ['https://cdn.jsdelivr.net/npm/@widgetbot/crate@3/dist/assets/discord.svg', '100%'],
        notifications: true,
        indicator: true,
        timeout: 0,
        defer: false,
      })
    }

    document.body.appendChild(script)

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return null
}
