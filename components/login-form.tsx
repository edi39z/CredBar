/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import Image from "next/image"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    if (!email || !password) {
      setError("Email dan password harus diisi")
      setIsLoading(false)
      return
    }

    if (!email.includes("@")) {
      setError("Format email tidak valid")
      setIsLoading(false)
      return
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (email === "admin@example.com" && password === "password") {
        window.location.href = "/dashboard"
      } else if (email === "user@example.com" && password === "password") {
        window.location.href = "/dashboard"
      } else {
        setError("Email atau password salah")
      }
    } catch (err) {
      setError("Terjadi kesalahan saat login")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="bg-white/10 backdrop-blur-xl border border-white/100 text-white shadow-2xl">
      <CardHeader className="text-center space-y-3">
        {/* brand pill */}
        <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 border border-white/20 mx-auto">
          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
            <Image src="/logo.png" alt="Logo CredBar" width={32} height={32} className="object-contain" />
          </div>
          <span className="font-bold text-xl leading-none font-[family-name:var(--font-poppins)]">CredBar</span>
        </div>

        {/* title */}
        <CardTitle className="text-2xl font-semibold font-[family-name:var(--font-poppins)]">
          Masuk ke Akun Anda
        </CardTitle>
        <CardDescription className="text-white/80">Masuk untuk melanjutkan</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <Alert
              className="bg-[#FF6B6B]/20 border border-[#FF6B6B]/40 text-white backdrop-blur-md shadow-lg
               flex items-center gap-2 rounded-xl transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#FF6B6B"
                className="w-6 h-6 drop-shadow-[0_0_8px_rgba(255,107,107,0.7)] flex-shrink-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 5c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z" />
              </svg>
              <AlertDescription className="text-white font-medium tracking-wide drop-shadow-[0_0_3px_rgba(255,255,255,0.4)]">
                {error}
              </AlertDescription>
            </Alert>
          )}



          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white font-medium">
              Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
              <Input
                id="email"
                type="email"
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 pl-10 bg-white/15 backdrop-blur-md text-white placeholder:text-white/60
        border border-white/25 rounded-xl 
        focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:border-transparent 
        transition-all duration-300 hover:bg-white/20"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white font-medium">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 pl-10 pr-10 bg-white/15 backdrop-blur-md text-white placeholder:text-white/60
        border border-white/25 rounded-xl 
        focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:border-transparent 
        transition-all duration-300 hover:bg-white/20"
                disabled={isLoading}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className={`absolute right-3 top-1/2 -translate-y-1/2 p-0 w-8 h-8 rounded-full transition-all duration-200
        ${isLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "bg-transparent hover:bg-white/10 active:scale-95"
                  }`}
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
                aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
              >
                {showPassword ? (
                  <Eye className="h-5 w-5 text-white/80" />
                ) : (
                  <EyeOff className="h-5 w-5 text-white/80" />
                )}
              </Button>
            </div>
          </div>


          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-input text-primary focus:ring-primary" />
              <span className="text-sm text-white/80">Ingat saya</span>
            </label>
            <Button
              variant="link"
              className="text-sm text-white p-0 h-auto font-normal underline decoration-white/60 hover:decoration-white"
            >
              Lupa Password?
            </Button>
          </div>

          <Button
            type="submit"
            variant="glass"
            className="w-full h-12 font-semibold text-base"
            disabled={isLoading}
          >
            {isLoading ? "Memproses..." : "Login"}
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-white/30" />
            <span className="text-sm text-white/80">Atau login dengan</span>
            <div className="h-px flex-1 bg-white/30" />
          </div>

          {/* Google Button (kept themed) */}
          <div className="mt-3">
            <Button
              type="button"
              variant="glass-outline"
              size="lg"
              className="w-full mt-4"
              disabled={isLoading}
              aria-label="Masuk dengan Google"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Masuk dengan Google
            </Button>

          </div>
        </form>
      </CardContent>

      <CardFooter className="justify-center">
        <div className="text-center">
          <span className="text-sm text-white/80">Belum punya akun? </span>
          <Link
            href="/register"
            className="text-sm font-semibold text-white/90 underline decoration-white/50 underline-offset-4
        transition-all duration-300 ease-in-out
        hover:text-white hover:decoration-white
        hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]
        active:scale-95"
          >
            Daftar sekarang
          </Link>
        </div>
      </CardFooter>

    </Card>
  )
}
