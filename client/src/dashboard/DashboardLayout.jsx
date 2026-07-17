import React from 'react'
import Sidebar from './Sidebar'
import TopNavbar from './TopNavbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      }}
    >
      {/* Top Navbar */}
      <TopNavbar />

      {/* Sidebar + Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet/>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default DashboardLayout