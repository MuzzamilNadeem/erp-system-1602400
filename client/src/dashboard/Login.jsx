import React, { useState } from 'react'
import { Mail, Lock, Eye, EyeOff, LogIn, Loader2 } from 'lucide-react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)


    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await axios.post("http://localhost:3000/login", {
                email, password
            }
            );

            console.log(response);
            toast.success("Login successful!")

        } catch (error) {

            console.log(error)
            toast.error(error.response?.data?.message || "Login failed. Please try again.")

        } finally {
            setLoading(false)
        }

    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-950 px-4'>

            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: '#1f2937',
                        color: '#fff',
                        border: '1px solid #374151'
                    }
                }}
            />

            <div className='w-full max-w-[380px] bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-8'>

                <div className='text-center mb-8'>
                    <h1 className='text-2xl font-semibold text-white'>Welcome Back</h1>
                    <p className='text-sm text-gray-400 mt-1'>Login to continue to your account</p>
                </div>

                <form onSubmit={handleLogin}>
                    {/* Email */}
                    <div className='relative mb-4'>
                        <Mail className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' size={18} />
                        <input
                            type="email"
                            name="email"
                            value={email}
                            className='w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
                            placeholder='Email'
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div className='relative mb-2'>
                        <Lock className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' size={18} />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            className='w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-10 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
                            placeholder='Password'
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors'
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    <div className='text-right mb-5'>
                        <a href="#" className='text-xs text-blue-400 hover:underline'>Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition disabled:opacity-70 disabled:cursor-not-allowed'
                    >
                        {loading ? <Loader2 size={18} className="animate-spin" /> : <LogIn size={18} />}
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className='text-center text-sm text-gray-400 mt-6'>
                    Don't have an account? <a href="#" className='text-blue-400 hover:underline'>Sign up</a>
                </p>
            </div>
        </div>
    )
}

export default Login;