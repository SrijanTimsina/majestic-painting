"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Play, X } from "lucide-react";

const categories = ["All", "Interior", "Exterior", "Commercial"];

const galleryItems = [
  {
    type: "image",
    src: "/gallery/interior/1.jpeg",
    alt: "Interior Painting 1",
    category: "Interior",
  },
  {
    type: "image",
    src: "/gallery/exterior/1.jpeg",
    alt: "Exterior Painting 1",
    category: "Exterior",
  },
  {
    type: "image",
    src: "/gallery/commercial/1.jpeg",
    alt: "Commercial Painting 1",
    category: "Commercial",
  },
  {
    type: "video",
    src: "/gallery/interior/video.mp4",
    alt: "Interior Painting Video",
    category: "Interior",
  },
  {
    type: "image",
    src: "/gallery/exterior/2.jpeg",
    alt: "Exterior Painting 2",
    category: "Exterior",
  },
  {
    type: "image",
    src: "/gallery/interior/2.jpeg",
    alt: "Interior Painting 2",
    category: "Interior",
  },
  {
    type: "image",
    src: "/gallery/exterior/3.jpeg",
    alt: "Exterior Painting 3",
    category: "Exterior",
  },
  {
    type: "image",
    src: "/gallery/interior/3.jpeg",
    alt: "Interior Painting 3",
    category: "Interior",
  },
  {
    type: "video",
    src: "/gallery/exterior/video.mp4",
    alt: "Exterior Painting Video",
    category: "Exterior",
  },
  {
    type: "image",
    src: "/gallery/exterior/4.jpeg",
    alt: "Exterior Painting 4",
    category: "Exterior",
  },
  {
    type: "image",
    src: "/gallery/interior/4.jpeg",
    alt: "Interior Painting 4",
    category: "Interior",
  },
  {
    type: "image",
    src: "/gallery/commercial/2.jpeg",
    alt: "Commercial Painting 2",
    category: "Commercial",
  },
  {
    type: "image",
    src: "/gallery/exterior/5.jpeg",
    alt: "Exterior Painting 5",
    category: "Exterior",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<
    (typeof galleryItems)[0] | null
  >(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredItems = useMemo(() => {
    return activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleItemClick = (item: (typeof galleryItems)[0]) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Our Gallery</h1>

      {/* Category filter buttons */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setActiveCategory(category)}
            variant={activeCategory === category ? "default" : "outline"}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.map((item, index) => (
          <Card
            key={index}
            className="group cursor-pointer overflow-hidden hover:shadow-2xl"
            onClick={() => handleItemClick(item)}
          >
            <CardContent className="relative p-0">
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover"
                />
              ) : (
                <div className="relative">
                  <video
                    src={item.src}
                    controls
                    className="h-64 w-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Dialog for larger view */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-full max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedItem?.alt}</DialogTitle>
            <DialogDescription>{selectedItem?.category}</DialogDescription>
          </DialogHeader>
          <div className="relative aspect-video">
            {selectedItem?.type === "image" ? (
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                fill
                className="object-contain"
              />
            ) : (
              <video src={selectedItem?.src} controls className="h-full w-full">
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <Button
            className="absolute right-2 top-2"
            variant="ghost"
            size="icon"
            onClick={() => setIsDialogOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
