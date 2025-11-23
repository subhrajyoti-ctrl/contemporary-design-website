'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

export function WhatsAppFAB() {
  const [isExpanded, setIsExpanded] = useState(false)
  const whatsappNumber = '+919876543210' // Replace with actual number
  const message = encodeURIComponent('Hi! I would like to inquire about your services.')

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="mb-4 bg-white rounded-lg shadow-2xl border-2 border-primary p-4 w-72 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Contemporary Solutions</h3>
              <p className="text-sm text-muted-foreground">Typically replies instantly</p>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Hello! How can we help you today? Click below to start a WhatsApp conversation.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            Start Chat
          </button>
        </div>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        aria-label="WhatsApp Chat"
      >
        {isExpanded ? (
          <X className="h-7 w-7" />
        ) : (
          <MessageCircle className="h-7 w-7" />
        )}
      </button>
    </div>
  )
}
