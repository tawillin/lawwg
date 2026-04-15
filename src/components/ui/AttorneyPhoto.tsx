import Image from "next/image";
import type { Attorney } from "@/data/attorneys";

type AttorneyPhotoProps = {
  attorney: Attorney;
  size: string;
  className?: string;
};

export default function AttorneyPhoto({ attorney, size, className = "" }: AttorneyPhotoProps) {
  if (attorney.image) {
    return (
      <div className={`${size} rounded-full overflow-hidden relative flex-shrink-0 ${className}`}>
        <Image
          src={attorney.image}
          alt={attorney.name}
          fill
          className="object-cover object-[center_20%]"
          sizes="(max-width: 768px) 112px, 112px"
        />
      </div>
    );
  }

  return (
    <div className={`${size} rounded-full bg-navy-800 border-2 border-gold-500/40 flex items-center justify-center flex-shrink-0 ${className}`}>
      <span className="font-serif text-gold-400" style={{ fontSize: "40%" }}>
        {attorney.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
      </span>
    </div>
  );
}
