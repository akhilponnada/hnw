import Image from "next/image"

type AdBannerProps = {
  currentRoute: string
}

const gradients = {
  "/": "from-blue-500 to-purple-600",
  "/about": "from-green-500 to-teal-600",
  "/products": "from-red-500 to-pink-600",
  "/services": "from-yellow-500 to-orange-600",
  "/membership": "from-indigo-500 to-blue-600",
  "/events": "from-purple-500 to-pink-600",
  "/gallery": "from-teal-500 to-cyan-600",
  "/contact": "from-gray-500 to-slate-600",
}

export function AdBanner({ currentRoute }: AdBannerProps) {
  const gradient = gradients[currentRoute as keyof typeof gradients] || gradients["/"]

  return (
    <div className="bg-dark-blue w-full max-w-[1230px] h-[96px] mx-auto overflow-hidden flex items-center justify-center relative z-30 -mb-2.5">
      <div className={`w-[1230px] h-[96px] bg-gradient-to-r ${gradient} flex items-center justify-between px-8 py-4`}>
        <div className="text-white">
          <h2 className="text-4xl font-bold">20% OFF</h2>
          <p className="text-2xl">on Healthcare Services</p>
        </div>
        <div className="h-[96px] w-[400px] relative">
          <Image
            src="https://images.unsplash.com/photo-1626337920103-ae64b9c688e4?auto=format&fit=crop&q=80&w=400&h=96"
            alt="20% OFF on Healthcare Services"
            width={400}
            height={96}
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </div>
  )
}

