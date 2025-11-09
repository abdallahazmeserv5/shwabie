import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PropertyDescription() {
  return (
    <Card className="mt-6 gap-3">
      <CardHeader>
        <CardTitle className="text-xl font-bold  ">تفاصيل العقار</CardTitle>
      </CardHeader>

      <Separator />

      <CardContent className=" ">
        <p className="text-[#4D5461] text-sm ">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ
          طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا
          يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من
          برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل
          إفتراضي كنموذج عن النص، وإذا قمت بإدخال
        </p>
      </CardContent>
    </Card>
  );
}
