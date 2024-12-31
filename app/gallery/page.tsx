'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

// Define categories and gallery items
const categories = ['All', 'Interior', 'Exterior', 'Commercial', 'Industrial']

const galleryItems = [
  { id: 1, category: 'Interior', src: '/placeholder.svg', alt: 'Interior Painting 1' },
  { id: 2, category: 'Exterior', src: '/placeholder.svg', alt: 'Exterior Painting 1' },
  { id: 3, category: 'Commercial', src: '/placeholder.svg', alt: 'Commercial Painting 1' },
  { id: 4, category: 'Industrial', src: '/placeholder.svg', alt: 'Industrial Painting 1' },
  { id: 5, category: 'Interior', src: '/placeholder.svg', alt: 'Interior Painting 2' },
  { id: 6, category: 'Exterior', src: '/placeholder.svg', alt: 'Exterior Painting 2' },
  { id: 7, category: 'Commercial', src: '/placeholder.svg', alt: 'Commercial Painting 2' },
  { id: 8, category: 'Industrial', src: '/placeholder.svg', alt: 'Industrial Painting 2' },
  // Add more items as needed
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Gallery</h1>
      
      {/* Category filter buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={item.src}
              alt={item.alt}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.alt}</h3>
              <p className="text-muted-foreground">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

