"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, PaintRoller } from "lucide-react";

interface StatProps {
  value: number;
  label: string;
  duration: number;
  icon: React.ReactNode;
}

function AnimatedStat({ value, label, duration, icon }: StatProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const countingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (inView) {
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      countingRef.current = setInterval(() => {
        if (current < value) {
          current += increment;
          setCount(Math.min(Math.round(current), value));
        } else {
          clearInterval(countingRef.current as NodeJS.Timeout);
        }
      }, duration / steps);
    }
    return () => {
      if (countingRef.current) clearInterval(countingRef.current);
    };
  }, [inView, value, duration]);

  return (
    <Card
      ref={ref}
      className="text-center transition-shadow duration-300 hover:shadow-lg"
    >
      <CardContent className="pt-6">
        <div className="mb-4 text-primary">{icon}</div>
        <div className="mb-2 text-4xl font-bold">{count}</div>
        <div className="text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
}

export function AnimatedStats() {
  return (
    <section className="border-b bg-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Impact</h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          <AnimatedStat
            value={18000}
            label="Projects Completed"
            duration={900}
            icon={<PaintRoller className="mx-auto h-12 w-12" />}
          />
          <AnimatedStat
            value={14000}
            label="Customers Served"
            duration={900}
            icon={<Users className="mx-auto h-12 w-12" />}
          />
        </div>
      </div>
    </section>
  );
}
