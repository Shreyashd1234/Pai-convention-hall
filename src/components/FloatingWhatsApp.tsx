import whatsappIcon from "@/assets/icon whatsapp.png";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918431157922?text=Hello!%20I%20need%20quick%20assistance%20regarding%20Pai%20Convention%20Hall."
      target="_blank"
      rel="noopener noreferrer"
      className="sticky-whatsapp bg-[#25D366] hover:bg-[#20BD5C] text-white flex items-center justify-center shadow-xl rounded-full animate-pulse-slow w-16 h-16"
      style={{ fontSize: 32 }}
      aria-label="Chat on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-14 h-14" />
    </a>
  );
}
