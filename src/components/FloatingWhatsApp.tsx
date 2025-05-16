
import { WhatsApp } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

export default function FloatingWhatsApp() {
  return (
    <div className="sticky-whatsapp">
      <WhatsAppButton
        phoneNumber="918431157922"
        className="shadow-xl rounded-full animate-pulse-slow"
      />
    </div>
  );
}
