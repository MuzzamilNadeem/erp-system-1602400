import React, { useState } from 'react'
import {
  LayoutGrid,
  Users,
  UserPlus,
  Wallet,
  CalendarCheck,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)

  const linkClass = ({ isActive }) => `
    flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
    transition-all duration-200 w-full
    ${isActive
      ? 'bg-white/15 text-white shadow-inner'
      : 'text-white/60 hover:text-white hover:bg-white/8'}
  `

  return (
    <aside
      className={`
        h-screen flex flex-col transition-all duration-300
        ${collapsed ? 'w-16' : 'w-56'}
      `}
      style={{
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRight: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '4px 0 24px rgba(0, 0, 0, 0.15)',
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-white border-opacity-10">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
          style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
        >
          E
        </div>
        {!collapsed && (
          <span className="text-white font-semibold text-sm tracking-wide">
            ERP Suite
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto text-white text-opacity-50 hover:text-opacity-100 transition-opacity"
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 py-4 flex flex-col gap-1 px-2 overflow-y-auto">

    

        <NavLink to="employees" className={linkClass} title={collapsed ? 'Employees' : undefined}>
          <Users size={18} className="flex-shrink-0" />
          {!collapsed && <span className="truncate">Employees</span>}
        </NavLink>

        <NavLink to="addemployee" className={linkClass} title={collapsed ? 'Add Employee' : undefined}>
          <UserPlus size={18} className="flex-shrink-0" />
          {!collapsed && <span className="truncate">Add Employee</span>}
        </NavLink>

        <NavLink to="attendance" className={linkClass} title={collapsed ? 'Attendance' : undefined}>
          <CalendarCheck size={18} className="flex-shrink-0" />
          {!collapsed && <span className="truncate">Attendance</span>}
        </NavLink>

        <NavLink to="payroll" className={linkClass} title={collapsed ? 'Payroll' : undefined}>
          <Wallet size={18} className="flex-shrink-0" />
          {!collapsed && <span className="truncate">Payroll</span>}
        </NavLink>

        <NavLink to="settings" className={linkClass} title={collapsed ? 'Settings' : undefined}>
          <Settings size={18} className="flex-shrink-0" />
          {!collapsed && <span className="truncate">Settings</span>}
        </NavLink>

      </nav>

      {/* User Profile */}
      <div
        className="mx-2 mb-4 p-3 rounded-xl flex items-center gap-3"
        style={{
          background: 'rgba(255, 255, 255, 0.06)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}
        >
          A
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <p className="text-white text-xs font-semibold truncate">Admin User</p>
            <p className="text-white text-opacity-40 text-xs truncate">admin@erp.com</p>
          </div>
        )}
      </div>
    </aside>
  )
}

export default Sidebar