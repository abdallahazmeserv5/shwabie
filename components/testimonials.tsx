import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "أحمد محمد",
    role: "مستثمر عقاري",
    content: "خدمة ممتازة جداً والفريق احترافي وساعدوني في اختيار العقار المناسب",
    avatar: "👨‍💼",
    rating: 5,
  },
  {
    name: "فاطمة أحمد",
    role: "مشتري منزل",
    content: "وجدت منزلي الحلم من خلالهم وكانت العملية سهلة وسريعة جداً",
    avatar: "👩‍💼",
    rating: 5,
  },
  {
    name: "محمود علي",
    role: "بائع عقار",
    content: "الشركة موثوقة وتقدم أفضل الخدمات والأسعار العادلة مضمونة معهم",
    avatar: "👨‍💻",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">ماذا يقول عملاؤنا</h2>
          <p className="text-gray-600">آراء حقيقية من عملاء راضين عن خدماتنا</p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-to-br from-emerald-50 to-white border-emerald-100 hover:shadow-lg transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
