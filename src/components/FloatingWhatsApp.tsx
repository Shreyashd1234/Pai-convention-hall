import { MessageSquare } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

export default function FloatingWhatsApp() {
  return (
    <div className="sticky-whatsapp">
      <WhatsAppButton
        phoneNumber="918431157922"
        message="Hello! I need quick assistance regarding Pai Convention Hall."
        className="shadow-xl rounded-full animate-pulse-slow"
      />
    </div>
  );
}
