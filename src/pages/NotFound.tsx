
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory p-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-5xl font-serif text-gold">404</h1>
        <h2 className="text-3xl font-playfair">Page Not Found</h2>
        <p className="text-lg text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          onClick={() => navigate('/')}
          className="bg-gold hover:bg-gold/90"
          size="lg"
        >
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
