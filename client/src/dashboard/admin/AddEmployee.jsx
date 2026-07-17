import React, { useState } from 'react'
import axios from 'axios'
import { UserPlus, User, Mail, Calendar, Loader2 } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'

const AddEmployee = () => {

  const [empName, setEmpName] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empAge, setEmpAge] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/addemployee", {
        empName, empEmail, empAge
      });

      console.log(response);

      setEmpName("");
      setEmpEmail("");
      setEmpAge("");
      toast.success("Employee added successfully!");
    }
    catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Something went wrong. Please try again.");
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: { background: '#1f2937', color: '#fff', border: '1px solid #374151' }
        }}
      />

      <form onSubmit={handleSubmission} className="w-full max-w-md">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-8">

          {/* Header */}
          <div className="flex items-center gap-3 mb-1">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
            >
              <UserPlus size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Add Employee</h2>
              <p className="text-xs text-gray-400">Fill in the details to register a new employee</p>
            </div>
          </div>

          <div className="h-px bg-gray-800 my-6" />

          {/* Employee Name */}
          <div className="mb-4">
            <label className="text-xs font-medium text-gray-400 mb-1.5 flex items-center gap-1.5">
              <User size={13} />
              Employee Name
            </label>
            <input
              type="text"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              placeholder="e.g. John Carter"
              value={empName}
              onChange={(e) => setEmpName(e.target.value)}
              required
            />
          </div>

          {/* Employee Email */}
          <div className="mb-4">
            <label className="text-xs font-medium text-gray-400 mb-1.5 flex items-center gap-1.5">
              <Mail size={13} />
              Employee Email
            </label>
            <input
              type="email"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              placeholder="e.g. john@company.com"
              value={empEmail}
              onChange={(e) => setEmpEmail(e.target.value)}
              required
            />
          </div>

          {/* Employee Age */}
          <div className="mb-6">
            <label className="text-xs font-medium text-gray-400 mb-1.5 flex items-center gap-1.5">
              <Calendar size={13} />
              Employee Age
            </label>
            <input
              type="number"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              placeholder="e.g. 24"
              value={empAge}
              onChange={(e) => setEmpAge(e.target.value)}
              required
              min="18"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full text-white font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:hover:scale-100"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Adding Employee...
              </>
            ) : (
              <>
                <UserPlus size={16} />
                Add Employee
              </>
            )}
          </button>

        </div>
      </form>
    </div>
  )
}

export default AddEmployee