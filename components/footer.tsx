import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">ح</span>
              </div>
              <span className="font-bold text-white">دار الشوون</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              منصة عقارية موثوقة تساعدك في البحث والاستثمار العقاري بأمان وسهولة
            </p>
            <div className="flex gap-4 pt-4">
              {["f", "t", "in"].map((social) => (
                <button key={social} className="w-8 h-8 bg-gray-800 rounded hover:bg-emerald-600 transition" />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  عن الشركة
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  العقارات
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  المدونة
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">الدعم</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  شروط الاستخدام
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">تواصل معنا</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                <span>+966 XX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                <span>info@daralshooun.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
            <p>© 2025 دار الشوون للعقارات. جميع الحقوق محفوظة</p>
            <div className="flex gap-6 md:justify-end">
              <a href="#" className="hover:text-emerald-400 transition">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-emerald-400 transition">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
