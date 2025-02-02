"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Send, X } from "lucide-react"

const chatbotResponses = {
  greeting: "Hello! How can I assist you today?",
  appointment: "To book an appointment, please visit our appointments page or call our helpline at +91 9667660773.",
  services:
    "We offer a wide range of healthcare services including telehealth, diagnostics, and hospital care. You can find more information on our services page.",
  membership:
    "HNW.one offers various membership plans with exclusive benefits. Please check our membership page for more details.",
  default:
    "I'm sorry, I couldn't understand your query. Please try rephrasing or contact our customer support for more assistance.",
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([
    { text: chatbotResponses.greeting, sender: "bot" },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }])
      setInput("")

      // Simple keyword-based response
      let botResponse = chatbotResponses.default
      if (input.toLowerCase().includes("appointment")) {
        botResponse = chatbotResponses.appointment
      } else if (input.toLowerCase().includes("service")) {
        botResponse = chatbotResponses.services
      } else if (input.toLowerCase().includes("membership")) {
        botResponse = chatbotResponses.membership
      }

      setTimeout(() => {
        setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }])
      }, 500)
    }
  }

  return (
    <>
      <Button className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg" onClick={() => setIsOpen(true)}>
        <MessageCircle className="h-6 w-6" />
      </Button>
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>HNW.one Assistant</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="h-64 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex w-full gap-2"
            >
              <Input placeholder="Type your message..." value={input} onChange={(e) => setInput(e.target.value)} />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

