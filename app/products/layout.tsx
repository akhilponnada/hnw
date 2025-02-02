import { ProductSidebar } from "@/components/product-sidebar"

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">{children}</div>
        <div className="lg:w-1/3">
          <ProductSidebar />
        </div>
      </div>
    </div>
  )
}

