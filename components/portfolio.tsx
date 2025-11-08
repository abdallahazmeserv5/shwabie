import { Card } from "@/components/ui/card"

const portfolioItems = [
  {
    title: "تصميم عصري وفاخر",
    location: "حي الياسمين",
    image: "🏠",
  },
  {
    title: "منزل عائلي دافئ",
    location: "حي النخيل",
    image: "🏡",
  },
  {
    title: "شقة سكنية حديثة",
    location: "برج الشمس",
    image: "🏢",
  },
  {
    title: "فيلا فاخرة بحديقة",
    location: "حي النجمة",
    image: "👑",
  },
]

export default function Portfolio() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">معالجات مختارة</h2>
          <p className="text-gray-600">اطلع على بعض من أجمل المشاريع التي أنجزناها</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition border-0">
              <div className="relative h-64 bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center overflow-hidden group cursor-pointer">
                <span className="text-7xl group-hover:scale-110 transition duration-300">{item.image}</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.location}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`w-3 h-3 rounded-full transition ${page === 1 ? "bg-emerald-600" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
