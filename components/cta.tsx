import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl font-bold">لم تجد حلمك بعد؟</h2>
            <p className="text-emerald-100 text-lg leading-relaxed">
              تواصل معنا الآن وسيساعدك فريقنا المتخصص في إيجاد العقار الذي يناسبك تماماً
            </p>
            <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 rounded-full font-semibold">
              تواصل معنا
            </Button>
          </div>

          {/* Illustration */}
          <div className="flex justify-center">
            <div className="w-full h-64 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl flex items-center justify-center">
              <span className="text-8xl">🏢</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
