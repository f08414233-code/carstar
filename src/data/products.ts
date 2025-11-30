import { Product } from '@/types/product';

export const products: Product[] = [
  // Cars
  {
    id: '1',
    name: '2024 Tesla Model S',
    description: 'High-performance electric luxury sedan with autopilot capabilities and stunning acceleration.',
    price: 89990,
    category: 'cars',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80'
    ],
    inStock: true,
    featured: true,
    specs: {
      'Engine': 'Dual Motor AWD',
      'Range': '405 miles',
      '0-60 mph': '3.1 seconds',
      'Top Speed': '155 mph',
      'Seats': '5'
    }
  },
  {
    id: '2',
    name: '2024 Porsche 911',
    description: 'Iconic sports car delivering thrilling performance and timeless design.',
    price: 106100,
    category: 'cars',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
      'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=800&q=80',
      'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&q=80'
    ],
    inStock: true,
    featured: true,
    specs: {
      'Engine': '3.0L Twin-Turbo Flat-6',
      'Horsepower': '379 hp',
      '0-60 mph': '4.0 seconds',
      'Top Speed': '182 mph',
      'Transmission': '8-Speed PDK'
    }
  },
  {
    id: '3',
    name: '2024 BMW M4',
    description: 'High-performance sports coupe with aggressive styling and track-ready capabilities.',
    price: 74900,
    category: 'cars',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80',
      'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80'
    ],
    inStock: true,
    specs: {
      'Engine': '3.0L Twin-Turbo I6',
      'Horsepower': '473 hp',
      '0-60 mph': '3.8 seconds',
      'Top Speed': '155 mph',
      'Transmission': '6-Speed Manual'
    }
  },
  {
    id: '4',
    name: '2024 Mercedes-Benz E-Class',
    description: 'Elegant luxury sedan combining comfort, technology, and refined performance.',
    price: 61900,
    category: 'cars',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80'
    ],
    inStock: true,
    featured: true,
    specs: {
      'Engine': '2.0L Turbo I4',
      'Horsepower': '255 hp',
      '0-60 mph': '6.0 seconds',
      'Fuel Economy': '23/32 MPG',
      'Seats': '5'
    }
  },
  {
    id: '5',
    name: '2024 Audi Q7',
    description: 'Spacious luxury SUV with advanced technology and refined comfort for the whole family.',
    price: 59800,
    category: 'cars',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
      'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80'
    ],
    inStock: true,
    specs: {
      'Engine': '2.0L Turbo I4',
      'Horsepower': '248 hp',
      '0-60 mph': '6.9 seconds',
      'Seats': '7',
      'Towing': '7,700 lbs'
    }
  },
  {
    id: '6',
    name: '2024 Ford Mustang GT',
    description: 'American muscle car icon with powerful V8 engine and exhilarating performance.',
    price: 44995,
    category: 'cars',
    image: 'https://images.unsplash.com/photo-1584345604476-8ec5f5f5d0c0?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1584345604476-8ec5f5f5d0c0?w=800&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
      'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800&q=80'
    ],
    inStock: true,
    specs: {
      'Engine': '5.0L V8',
      'Horsepower': '480 hp',
      '0-60 mph': '4.2 seconds',
      'Top Speed': '163 mph',
      'Transmission': '10-Speed Automatic'
    }
  },
  // Parts
  {
    id: '7',
    name: 'Performance Brake Kit',
    description: 'High-performance brake system with slotted rotors and ceramic pads for superior stopping power.',
    price: 899,
    category: 'parts',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80'
    ],
    inStock: true,
    featured: true,
    specs: {
      'Material': 'Carbon Ceramic',
      'Rotor Size': '14" Front / 13" Rear',
      'Warranty': '3 Years'
    }
  },
  {
    id: '8',
    name: 'Cold Air Intake System',
    description: 'Increase horsepower and fuel efficiency with this premium cold air intake system.',
    price: 349,
    category: 'parts',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80'
    ],
    inStock: true,
    specs: {
      'HP Gain': '+15-20 HP',
      'Material': 'Aluminum',
      'Filter': 'Reusable Cotton'
    }
  },
  {
    id: '9',
    name: 'LED Headlight Conversion Kit',
    description: 'Upgrade to ultra-bright LED headlights for improved visibility and modern styling.',
    price: 199,
    category: 'parts',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80'
    ],
    inStock: true,
    specs: {
      'Lumens': '12,000 LM',
      'Color Temperature': '6000K White',
      'Lifespan': '50,000 hours'
    }
  },
  {
    id: '10',
    name: 'Performance Exhaust System',
    description: 'Stainless steel cat-back exhaust for enhanced sound and performance.',
    price: 1299,
    category: 'parts',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80'
    ],
    inStock: true,
    specs: {
      'Material': '304 Stainless Steel',
      'HP Gain': '+10-15 HP',
      'Sound Level': 'Aggressive'
    }
  },
  // Accessories
  {
    id: '11',
    name: 'Premium Car Cover',
    description: 'All-weather protection with UV resistance and waterproof construction.',
    price: 149,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1449130015084-2dc4f8e90b08?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1449130015084-2dc4f8e90b08?w=800&q=80'
    ],
    inStock: true,
    specs: {
      'Material': 'Multi-Layer Fabric',
      'Weather Proof': 'Yes',
      'UV Protection': 'Yes'
    }
  },
  {
    id: '12',
    name: 'Dash Cam with Night Vision',
    description: 'High-definition dash camera with 4K recording and parking mode.',
    price: 249,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80'
    ],
    inStock: true,
    featured: true,
    specs: {
      'Resolution': '4K UHD',
      'Storage': '256GB Max',
      'Features': 'Night Vision, GPS, WiFi'
    }
  },
  {
    id: '13',
    name: 'Racing Steering Wheel',
    description: 'Premium leather-wrapped racing steering wheel with quick-release hub.',
    price: 399,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80'
    ],
    inStock: true,
    specs: {
      'Material': 'Genuine Leather',
      'Diameter': '350mm',
      'Hub': 'Quick Release'
    }
  },
  {
    id: '14',
    name: 'Floor Mat Set - All Weather',
    description: 'Heavy-duty rubber floor mats that protect against dirt, mud, and moisture.',
    price: 89,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80'
    ],
    inStock: true,
    specs: {
      'Material': 'Heavy-Duty Rubber',
      'Pieces': '4-Piece Set',
      'Fitment': 'Universal'
    }
  },
  // Maintenance
  {
    id: '15',
    name: 'Synthetic Motor Oil - 5W-30',
    description: 'Premium full synthetic motor oil for maximum engine protection and performance.',
    price: 45,
    category: 'maintenance',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80'
    ],
    inStock: true,
    specs: {
      'Type': 'Full Synthetic',
      'Viscosity': '5W-30',
      'Volume': '5 Quarts'
    }
  },
  {
    id: '16',
    name: 'Oil Filter Premium',
    description: 'High-efficiency oil filter with advanced filtration technology.',
    price: 15,
    category: 'maintenance',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80'
    ],
    inStock: true,
    specs: {
      'Filtration': '99% Efficiency',
      'Compatibility': 'Most Vehicles',
      'Warranty': '1 Year'
    }
  },
  {
    id: '17',
    name: 'Air Filter High Performance',
    description: 'Reusable high-flow air filter for improved engine performance.',
    price: 59,
    category: 'maintenance',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80'
    ],
    inStock: true,
    specs: {
      'Type': 'Reusable Cotton',
      'Airflow': 'High Flow',
      'Warranty': 'Lifetime'
    }
  },
  {
    id: '18',
    name: 'Windshield Wiper Blades',
    description: 'All-season wiper blades with beam design for streak-free performance.',
    price: 29,
    category: 'maintenance',
    image: 'https://images.unsplash.com/photo-1449130015084-2dc4f8e90b08?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1449130015084-2dc4f8e90b08?w=800&q=80'
    ],
    inStock: true,
    specs: {
      'Type': 'Beam Design',
      'Size': 'Universal Fit',
      'Durability': '12 Months'
    }
  }
];
