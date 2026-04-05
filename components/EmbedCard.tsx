export default function EmbedCard({ url, type }: { url: string; type: "linkedin" | "instagram" }) {
  // Parse Instagram URL to add /embed if it doesn't have it
  const getEmbedUrl = () => {
    if (type === "instagram") {
      const baseUrl = url.split("?")[0];
      return baseUrl.endsWith("/") ? `${baseUrl}embed` : `${baseUrl}/embed`;
    }
    if (type === "linkedin") {
      // Extract activity ID from the share URL
      const match = url.match(/activity-([0-9]+)/);
      if (match && match[1]) {
        return `https://www.linkedin.com/embed/feed/update/urn:li:activity:${match[1]}`;
      }
      return url; // fallback if it's already an embed URL
    }
    return url;
  };

  return (
    <div className="shrink-0 w-[300px] md:w-[350px] h-[400px] md:h-[450px] bg-white rounded-xl shadow-sm border border-charcoal/10 overflow-hidden relative group snap-start">
      <iframe
        src={getEmbedUrl()}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling={type === "linkedin" ? "auto" : "no"}
        allowFullScreen
        title={`${type} embed`}
        className="absolute inset-0 bg-white"
        loading="lazy"
      />
    </div>
  );
}
