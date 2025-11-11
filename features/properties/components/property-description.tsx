import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Property } from "../types";

export default function PropertyDescription({
  property,
}: {
  property: Property;
}) {
  return (
    <Card className="mt-6 gap-3">
      <CardHeader>
        <CardTitle className="text-xl font-bold  ">تفاصيل العقار</CardTitle>
      </CardHeader>

      <Separator />

      <CardContent className=" ">
        <p className="text-[#4D5461] text-sm ">{property.description}</p>
      </CardContent>
    </Card>
  );
}
