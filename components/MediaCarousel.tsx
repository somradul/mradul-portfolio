import EmbedCard from "./EmbedCard";

export type MediaItem = {
  type: "linkedin" | "instagram";
  url: string;
};

export default function MediaCarousel({ items }: { items: MediaItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-8 pt-6 border-t border-charcoal/10">

      
      <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">
        {items.map((item, index) => (
          <EmbedCard key={index} type={item.type} url={item.url} />
        ))}
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
