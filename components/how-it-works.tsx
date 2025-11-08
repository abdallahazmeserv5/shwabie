import { Card } from "@/components/ui/card";
import { ArrowUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "ملء بيانات سريع",
    description:
      "قطاع حيوي يجمع بين الاستثمار المربح وتوفير العوامل الآمنة، ويشمل أنواعاً متعددة كالعقارات السكنية والتجارية مع تحديد الأسعار والإجراءات المعتمدة",
  },
  {
    number: "02",
    title: "اختيار العقار",
    description:
      "قطاع حيوي يجمع بين الاستثمار المربح وتوفير العوامل الآمنة، ويشمل أنواعاً متعددة كالعقارات السكنية مع تحديد الأسعار والإجراءات المعتمدة",
    highlighted: true,
  },
  {
    number: "03",
    title: "معاينة العقار",
    description:
      "قطاع حيوي يجمع بين الاستثمار المربح وتوفير العوامل الآمنة ويشمل أنواعاً متعددة كالعقارات السكنية والتجارية مع تحديد الأسعار والإجراءات المعتمدة",
  },
];

const stats = [
  { label: "نسبة الشفوي", value: "7,265", change: "+11.01%" },
  { label: "عدد الزيارات اليوم", value: "3,671", change: "-0.03%" },
  { label: "عملية بيع وشراء", value: "156", change: "+15.03%" },
  { label: "عملية تحويل يومية", value: "2,318", change: "+0.06%" },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-linear-to-br from-[#12B674] to-[#134732] text-white">
      <div className="  mx-auto px-4 sm:px-6 lg:px-8 container p-4 ">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-bold mb-4 max-w-[444px]">
            طريقة عملنا سهلة وعملية
          </h2>
          <p className="text-white max-w-[866px] mx-auto">
            تشمل العقارات الأراضي والتحسينات التي تُبنى عليها، مثل المنازل
            والمباني التجارية وغيرها. هناك أيضًا تصنيفات مختلفة للعقارات مثل
            المساكن المتصلة، والفيوفية، والبحرية (تخضع للأسعار)، حسب سِكناها.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card
              key={index}
              className={`p-6 text-center backdrop-blur transition ${
                step.highlighted
                  ? "bg-white text-emerald-800 border border-white"
                  : "bg-white/20 border-white/30"
              }`}
            >
              <div
                className={`text-4xl font-bold mb-4 ${
                  step.highlighted ? "text-emerald-800" : "text-white/50"
                }`}
              >
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p
                className={
                  step.highlighted ? "text-emerald-700" : "text-emerald-100"
                }
              >
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/10 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm text-emerald-100 mt-1">{stat.label}</p>
              <p className="text-xs text-green-400 flex items-center justify-center mt-1">
                <ArrowUp className="w-3 h-3 mr-1" />
                {stat.change}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
