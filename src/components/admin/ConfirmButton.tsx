'use client'

import React from 'react'

// Submit button that asks for confirmation before its form's server action runs.
export default function ConfirmButton({ message, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { message: string }) {
  return (
    <button {...props} onClick={(e) => { if (!confirm(message)) e.preventDefault() }}>
      {children}
    </button>
  )
}
