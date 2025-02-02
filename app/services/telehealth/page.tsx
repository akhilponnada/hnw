"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { EventList } from "@/components/event-list"
import { OnlineDoctors } from "@/components/online-doctors"
import { PhoneIcon as WhatsApp, Phone } from "lucide-react"

export default function TelehealthPage() {
  const [jitsiApi, setJitsiApi] = useState<any>(null)

  useEffect(() => {
    // Load the Jitsi Meet API library
    const script = document.createElement("script")
    script.src = "https://meet.jit.si/external_api.js"
    script.async = true
    script.onload = initJitsiMeet
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const initJitsiMeet = () => {
    const domain = "meet.jit.si"
    const options = {
      roomName: "HNWTelehealthConsultation",
      width: "100%",
      height: 500,
      parentNode: document.getElementById("jitsi-container"),
      interfaceConfigOverwrite: {
        TOOLBAR_BUTTONS: [
          "microphone",
          "camera",
          "closedcaptions",
          "desktop",
          "fullscreen",
          "fodeviceselection",
          "hangup",
          "profile",
          "chat",
          "recording",
          "etherpad",
          "sharedvideo",
          "settings",
          "raisehand",
          "videoquality",
          "filmstrip",
          "feedback",
          "stats",
          "shortcuts",
          "tileview",
          "videobackgroundblur",
          "download",
          "help",
          "mute-everyone",
        ],
      },
    }

    // @ts-ignore
    const api = new JitsiMeetExternalAPI(domain, options)
    setJitsiApi(api)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Telehealth Services</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div id="jitsi-container" className="w-full aspect-video mb-8 rounded-lg overflow-hidden"></div>
          <p className="text-lg mb-6">
            Our telehealth services provide 24/7 access to healthcare professionals through secure video consultations.
            Get expert medical advice, prescriptions, and follow-ups from the comfort of your home.
          </p>
          <div className="mb-6">
            <OnlineDoctors />
          </div>
          <Button asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Learn More About Telehealth</h2>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/tN1X4QoEGfM"
                title="Learn About Telehealth"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>Sign in to your HNW.one account</li>
                <li>Choose a specialist or general practitioner</li>
                <li>Select an available time slot</li>
                <li>Join the video call at the scheduled time</li>
                <li>Receive follow-up instructions and prescriptions if needed</li>
              </ol>
            </CardContent>
          </Card>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <WhatsApp className="mr-2 h-5 w-5 text-green-500" />
                  <span>WhatsApp: +91 9667660773</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-blue-500" />
                  <span>24/7 Customer Care: 1800-123-4567</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>24/7 availability</li>
                <li>Board-certified doctors and specialists</li>
                <li>Secure and confidential platform</li>
                <li>Prescription services</li>
                <li>Integration with your health records</li>
              </ul>
            </CardContent>
          </Card>
          <EventList />
        </div>
      </div>
    </div>
  )
}

