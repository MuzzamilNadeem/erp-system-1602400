import React, { useState } from 'react'
import { Search, Bell } from 'lucide-react'

const TopNavbar = () => {
  const [search, setSearch] = useState('')
  const [notifOpen, setNotifOpen] = useState(false)

  const notifications = [
    { id: 1, text: 'New order #4521 received', time: '2m ago', dot: '#6366f1' },
    { id: 2, text: 'Inventory alert: SKU-882 low stock', time: '15m ago', dot: '#f59e0b' },
    { id: 3, text: 'Monthly report is ready', time: '1h ago', dot: '#10b981' },
  ]

  return (
    <header
      className="w-full flex items-center justify-between px-6 py-3 relative z-10"
      style={{
        background: 'rgba(255, 255, 255, 0.07)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Page Title */}
      <div>
        <h1 className="text-white font-semibold text-base leading-tight">Dashboard</h1>
        <p className="text-white text-opacity-40 text-xs mt-0.5">Welcome back, Admin</p>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-xs mx-8">
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-xl"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          <Search size={16} className="text-white text-opacity-40 flex-shrink-0" strokeWidth={2} />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search orders, products..."
            className="bg-transparent text-white text-sm placeholder-white outline-none w-full"
            style={{ '--tw-placeholder-opacity': 0.3 }}
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2">
        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-opacity-60 hover:text-opacity-100 transition-all relative"
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Bell size={18} strokeWidth={2} />
            <span
              className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
              style={{ background: '#ef4444', boxShadow: '0 0 6px #ef4444' }}
            />
          </button>

          {/* Dropdown */}
          {notifOpen && (
            <div
              className="absolute right-0 top-12 w-72 rounded-2xl p-3 flex flex-col gap-2"
              style={{
                background: 'rgba(20, 20, 40, 0.85)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              <p className="text-white text-xs font-semibold px-1 mb-1">Notifications</p>
              {notifications.map(n => (
                <div
                  key={n.id}
                  className="flex items-start gap-3 p-2.5 rounded-xl cursor-pointer hover:bg-white hover:bg-opacity-5 transition-colors"
                >
                  <span
                    className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: n.dot, boxShadow: `0 0 6px ${n.dot}` }}
                  />
                  <div>
                    <p className="text-white text-xs leading-snug">{n.text}</p>
                    <p className="text-white text-opacity-30 text-xs mt-0.5">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Avatar */}
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            boxShadow: '0 0 14px rgba(99,102,241,0.4)',
          }}
        >
          A
        </div>
      </div>
    </header>
  )
}

export default TopNavbar