import Link from "next/link";
import ImageFallback from "./image-fallback";

export default function Logo() {
  return (
    <Link href={"/"}>
      <ImageFallback
        alt="Logo of shwaipi for renting"
        src={"/header/shwaibi-logo.webp"}
        width={160}
        height={100}
        className="object-contain w-20 md:w-40 md:h-25"
      />
    </Link>
  );
}
