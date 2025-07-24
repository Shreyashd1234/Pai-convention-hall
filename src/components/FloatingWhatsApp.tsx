import whatsappIcon from "@/assets/icon whatsapp.png";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/9591699558?text=Hello!%20I%20need%20quick%20assistance%20regarding%20Pai%20Convention%20Hall."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      style={{ fontSize: 32 }}
      aria-label="Chat on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-14 h-14" />
    </a>
  );
}
