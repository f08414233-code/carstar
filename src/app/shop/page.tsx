'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import { ProductCategory } from '@/types/product';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';

const categories: { value: ProductCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Products' },
  { value: 'cars', label: 'Cars' },
  { value: 'parts', label: 'Parts' },
  { value: 'accessories', label: 'Accessories' },
  { value: 'maintenance', label: 'Maintenance' }
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name'>('name');

  const filteredProducts = products.filter(
    product => selectedCategory === 'all' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white dark:bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            AutoHub
          </Link>
          <Link href="/cart">
            <Button variant="outline">
              Cart
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Shop</h1>
          <p className="text-muted-foreground">Browse our collection of cars and automotive products</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-3 py-2 border rounded-md bg-background"
            >
              <option value="name">Name</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map(product => (
            <Link key={product.id} href={`/shop/${product.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                <div className="relative aspect-[4/3] bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.featured && (
                    <Badge className="absolute top-2 right-2">Featured</Badge>
                  )}
                  {!product.inStock && (
                    <Badge variant="destructive" className="absolute top-2 left-2">
                      Out of Stock
                    </Badge>
                  )}
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">
                      ${product.price.toLocaleString()}
                    </span>
                    <Button size="sm">View Details</Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
