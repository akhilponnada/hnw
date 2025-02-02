"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import Image from "next/image"

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSocialLogin = async (provider: GoogleAuthProvider | FacebookAuthProvider | OAuthProvider) => {
    try {
      setError(null)
      await signInWithPopup(auth, provider)
      router.push("/dashboard")
    } catch (error) {
      console.error("Error during social login:", error)
      setError("Failed to login. Please try again.")
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070&h=1380"
          alt="Healthcare professionals"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center px-6">
            Welcome to HNW.one
            <br />
            Your Global Health & Wealth Partner
          </h1>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="flex flex-col items-center mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/footer%20logo-DkHo9nEwont0XstN7CqZlajutfV5fK.png"
                alt="HNW.one Logo"
                width={80}
                height={80}
                className="mb-4"
              />
            </div>
            <CardTitle>Login to HNW.one</CardTitle>
            <CardDescription>Access your account with one click</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-4">
              <Button onClick={() => handleSocialLogin(new GoogleAuthProvider())} className="w-full">
                <FaGoogle className="mr-2" /> Continue with Google
              </Button>
              <Button onClick={() => handleSocialLogin(new OAuthProvider("apple.com"))} className="w-full">
                <FaApple className="mr-2" /> Continue with Apple
              </Button>
              <Button onClick={() => handleSocialLogin(new FacebookAuthProvider())} className="w-full">
                <FaFacebook className="mr-2" /> Continue with Facebook
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 text-center">
            <p className="text-sm text-gray-600">By continuing, you agree to our Terms of Service and Privacy Policy</p>
            <p className="text-sm">
              Don't have an account?{" "}
              <a href="/auth/signup" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

