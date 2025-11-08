import { Card } from "@/components/ui/card"

const stats = [
  {
    label: "متخصصة العقارات",
    value: "7,245",
    icon: "👨‍💼",
  },
  {
    label: "عقارات متاحة",
    value: "3,821",
    icon: "🏘️",
  },
  {
    label: "سنوات الخبرة",
    value: "12",
    icon: "⭐",
  },
  {
    label: "معدل الرضا",
    value: "98%",
    icon: "😊",
  },
]

export default function Statistics() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-8 text-center border-emerald-200 hover:shadow-lg transition bg-gradient-to-b from-emerald-50 to-white"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
              <p className="text-4xl font-bold text-emerald-600">{stat.value}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
