import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Users, Mail, Cake, Pencil, Trash2, Loader2, UserX } from 'lucide-react'

const Employee = () => {

    const [empData, setEmpData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchEmployee = async () => {

        try {
            setLoading(true);
            const response = await axios.get("http://localhost:3000/getemployees")
            console.log(response.data.employees);
            setEmpData(response.data.employees);

        } catch (error) {

            console.log(error)

        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchEmployee();
    }, [])

    return (
        <>
            <div className="max-w-5xl mx-auto mt-10 px-4">

                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                    >
                        <Users size={20} className="text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-lg font-semibold text-white">Employees</h1>
                        <span className="bg-gray-800 border border-gray-700 text-gray-300 text-xs font-medium px-2 py-0.5 rounded-full">
                            {empData.length}
                        </span>
                    </div>
                </div>

                {/* Table card */}
                <div className="overflow-x-auto rounded-2xl border border-gray-800 shadow-2xl bg-gray-900">
                    <table className="w-full text-sm">
                        {/* head */}
                        <thead className="bg-gray-800/60 text-xs uppercase tracking-wide text-gray-400">
                            <tr>
                                <th className="text-left px-5 py-3.5 font-medium">Id</th>
                                <th className="text-left px-5 py-3.5 font-medium">Name</th>
                                <th className="text-left px-5 py-3.5 font-medium">
                                    <div className="flex items-center gap-1.5">
                                        <Mail size={14} /> Email
                                    </div>
                                </th>
                                <th className="text-left px-5 py-3.5 font-medium">
                                    <div className="flex items-center gap-1.5">
                                        <Cake size={14} /> Age
                                    </div>
                                </th>
                                <th className="text-center px-5 py-3.5 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="text-center py-12">
                                        <div className="flex flex-col items-center gap-2 text-gray-500">
                                            <Loader2 size={22} className="animate-spin" />
                                            <span className="text-sm">Loading employees...</span>
                                        </div>
                                    </td>
                                </tr>
                            ) : empData.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="text-center py-12">
                                        <div className="flex flex-col items-center gap-2 text-gray-600">
                                            <UserX size={28} />
                                            <span className="text-sm">No employees found</span>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                empData.map((e, i) => (
                                    <tr key={i} className="hover:bg-gray-800/50 transition-colors">
                                        <td className="px-5 py-3.5 text-gray-500">{i + 1}</td>
                                        <td className="px-5 py-3.5 font-medium text-white">{e.employee_name}</td>
                                        <td className="px-5 py-3.5 text-gray-300">{e.employee_email}</td>
                                        <td className="px-5 py-3.5 text-gray-300">{e.employee_age}</td>
                                        <td className="px-5 py-3.5">
                                            <div className="flex items-center justify-center gap-2 flex-wrap">
                                                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 hover:scale-105 transition-all">
                                                    <Pencil size={13} />
                                                    <span className="hidden sm:inline">Edit</span>
                                                </button>
                                                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-red-500/40 text-red-400 hover:bg-red-500/10 hover:scale-105 transition-all">
                                                    <Trash2 size={13} />
                                                    <span className="hidden sm:inline">Delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Employee;