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
    <Card className="bg-card border border-border/80 shadow-xl">
      <CardHeader className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 py-2 shadow-sm mx-auto">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Image
              src="/logo.png" // pastikan file ada di folder public
              alt="Logo CredBar"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="font-bold text-xl leading-none font-[family-name:var(--font-poppins)]">CredBar</span>
        </div>
        <CardTitle className="text-2xl font-semibold text-foreground font-[family-name:var(--font-poppins)]">
          Selamat datang kembali
        </CardTitle>
        <CardDescription className="text-muted-foreground">Masuk ke akun Anda untuk melanjutkan</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">
              Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 pl-10"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground font-medium">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 pl-10 pr-10"
                disabled={isLoading}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
                aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Eye className="h-5 w-5 text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-input text-primary focus:ring-primary" />
              <span className="text-sm text-muted-foreground">Ingat saya</span>
            </label>
            <Button variant="link" className="text-sm text-primary p-0 h-auto font-normal">
              Lupa Password?
            </Button>
          </div>

          <Button
            type="submit"
            variant="default"
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base"
            disabled={isLoading}
          >
            {isLoading ? "Memproses..." : "Login"}
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-sm text-muted-foreground">Atau login dengan</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Google Button (kept themed) */}
          <div className="mt-3">
            <Button
              type="button"
              variant="default"
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-sm ring-1 ring-primary/30"
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
          <span className="text-sm text-muted-foreground">Belum punya akun? </span>
          <Link href="/register" className="text-sm text-primary hover:text-primary/80 font-semibold">
            Daftar sekarang
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
