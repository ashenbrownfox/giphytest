import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <div className="container">
        <p className="text-muted text-center">
          Giphy copyright &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
