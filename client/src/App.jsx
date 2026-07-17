import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardLayout from './dashboard/DashboardLayout'
import AppLayout from './AppLayout'
import AddEmployee from './dashboard/admin/AddEmployee'
import Login from './dashboard/Login'
import Employee from './dashboard/admin/Employee'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="addemployee" element={<AddEmployee />} />
            <Route path="employees" element={<Employee />} />
            {/* <Route path="attendence" element={<attendence />} /> */}
          </Route>

          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App