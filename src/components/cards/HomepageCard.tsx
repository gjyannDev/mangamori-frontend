import type { HomePageCard } from "@/types/card.types";

export default function HomepageCard({
  icon: Icon,
  title,
  description,
}: HomePageCard) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Icon className="w-[96px] h-[96px]" />
      <div className="flex flex-col gap-2 items-center">
        <h2 className="font-playfair font-bold text-2xl">{title}</h2>
        <p className="font-intern text-md max-w-sm text-center">{description}</p>
      </div>
    </div>
  );
}
