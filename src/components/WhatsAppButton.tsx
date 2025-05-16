
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

export default function WhatsAppButton({ 
  phoneNumber, 
  message = "Hello! I'm interested in booking your hall for an event.", 
  className = "" 
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <Button 
      onClick={handleClick}
      className={`bg-green-500 hover:bg-green-600 text-white font-medium flex items-center gap-2 ${className}`}
    >
      <Phone className="h-5 w-5" />
      <span>WhatsApp Us</span>
    </Button>
  );
}
