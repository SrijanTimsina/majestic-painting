"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallButton() {
  const handleCall = () => {
    window.location.href = "tel:+61415894507";
  };

  return (
    <Button
      className="fixed bottom-6 right-6 rounded-full p-6 shadow-lg"
      onClick={handleCall}
      size="lg"
    >
      <Phone className="h-8 w-8" />
      <span className="sr-only">Call us</span>
    </Button>
  );
}
