import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  const links = ['Privacy Policy', 'Terms of Use', 'Support', 'Docs']

  return (
    <footer
      className="w-full flex items-center justify-between px-6 py-3"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Left: Brand */}
      <div className="flex items-center gap-2">
        <div
          className="w-5 h-5 rounded-md flex items-center justify-center text-white text-xs font-bold"
          style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
        >
          E
        </div>
        <span className="text-white text-opacity-30 text-xs">
          © {year} ERP Suite. All rights reserved.
        </span>
      </div>

      {/* Center: Status */}
      <div className="flex items-center gap-2">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: '#10b981', boxShadow: '0 0 6px #10b981' }}
        />
        <span className="text-white text-opacity-30 text-xs">All systems operational</span>
      </div>

      {/* Right: Links */}
      <div className="flex items-center gap-4">
        {links.map(link => (
          <a
            key={link}
            href="#"
            className="text-white text-opacity-30 hover:text-opacity-70 text-xs transition-opacity"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer