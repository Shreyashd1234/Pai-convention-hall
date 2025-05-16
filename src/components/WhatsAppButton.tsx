
import { WhatsApp } from "lucide-react";
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
      className={`bg-[#25D366] hover:bg-[#20BD5C] text-white font-medium flex items-center gap-2 shadow-lg pulse-animation ${className}`}
    >
      <WhatsApp className="h-5 w-5" />
      <span>WhatsApp Us</span>
    </Button>
  );
}
