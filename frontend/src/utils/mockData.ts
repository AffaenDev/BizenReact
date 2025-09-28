// Mock data for videos
export const mockVideos = [
  {
    id: 1,
    title: 'Toyota Camry 2022 - Excellent Condition',
    thumbnail: 'https://via.placeholder.com/300x200/3b82f6/ffffff?text=Toyota+Camry',
    gif: 'https://via.placeholder.com/300x200/3b82f6/ffffff?text=Toyota+Camry+GIF',
    publisher: 'CarDealer123',
    price: 25000,
    location: 'San Francisco, CA',
    category: 'carSales',
    region: 'usa',
    abstract: 'Like new Toyota Camry with low mileage and all service records.'
  },
  {
    id: 2,
    title: 'Ford F-150 Truck - Perfect for Work',
    thumbnail: 'https://via.placeholder.com/300x200/f59e0b/ffffff?text=Ford+F150',
    gif: 'https://via.placeholder.com/300x200/f59e0b/ffffff?text=Ford+F150+GIF',
    publisher: 'TruckSeller',
    price: 35000,
    location: 'Dallas, TX',
    category: 'truckSales',
    region: 'usa',
    abstract: 'Powerful Ford F-150 with towing package and bed liner.'
  },
  {
    id: 3,
    title: 'Luxury Apartment in Manhattan',
    thumbnail: 'https://via.placeholder.com/300x200/10b981/ffffff?text=Luxury+Apartment',
    gif: 'https://via.placeholder.com/300x200/10b981/ffffff?text=Luxury+Apartment+GIF',
    publisher: 'NYCRealEstate',
    price: 1200000,
    location: 'New York, NY',
    category: 'apartmentsSale',
    region: 'usa',
    abstract: 'Stunning 2-bedroom apartment with views of Central Park.'
  },
  {
    id: 4,
    title: 'Modern Studio for Rent in Berlin',
    thumbnail: 'https://via.placeholder.com/300x200/6366f1/ffffff?text=Berlin+Studio',
    gif: 'https://via.placeholder.com/300x200/6366f1/ffffff?text=Berlin+Studio+GIF',
    publisher: 'EuropeHomes',
    price: 1200,
    location: 'Berlin, Germany',
    category: 'apartmentsRent',
    region: 'europe',
    abstract: 'Fully furnished studio in the heart of Berlin.'
  },
  {
    id: 5,
    title: 'Room for Rent in Shared House',
    thumbnail: 'https://via.placeholder.com/300x200/ec4899/ffffff?text=Shared+Room',
    gif: 'https://via.placeholder.com/300x200/ec4899/ffffff?text=Shared+Room+GIF',
    publisher: 'RoomFinder',
    price: 800,
    location: 'London, UK',
    category: 'roomRent',
    region: 'europe',
    abstract: 'Private room in a friendly shared house with all utilities included.'
  },
  {
    id: 6,
    title: 'Antique Wooden Dining Table',
    thumbnail: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Dining+Table',
    gif: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Dining+Table+GIF',
    publisher: 'VintageFurniture',
    price: 1500,
    location: 'Paris, France',
    category: 'furniture',
    region: 'europe',
    abstract: 'Beautiful 19th century wooden dining table with 6 chairs.'
  },
  {
    id: 7,
    title: 'Honda Civic 2021 - Low Mileage',
    thumbnail: 'https://via.placeholder.com/300x200/ef4444/ffffff?text=Honda+Civic',
    gif: 'https://via.placeholder.com/300x200/ef4444/ffffff?text=Honda+Civic+GIF',
    publisher: 'JapanAutoImports',
    price: 22000,
    location: 'Tokyo, Japan',
    category: 'carSales',
    region: 'asia',
    abstract: 'Fuel-efficient Honda Civic with advanced safety features.'
  },
  {
    id: 8,
    title: 'Luxury Condo for Sale in Singapore',
    thumbnail: 'https://via.placeholder.com/300x200/14b8a6/ffffff?text=Singapore+Condo',
    gif: 'https://via.placeholder.com/300x200/14b8a6/ffffff?text=Singapore+Condo+GIF',
    publisher: 'AsiaProperties',
    price: 1500000,
    location: 'Singapore',
    category: 'apartmentsSale',
    region: 'asia',
    abstract: 'High-floor luxury condo with panoramic city views.'
  },
  {
    id: 9,
    title: 'Modern Sofa - Almost New',
    thumbnail: 'https://via.placeholder.com/300x200/f97316/ffffff?text=Modern+Sofa',
    gif: 'https://via.placeholder.com/300x200/f97316/ffffff?text=Modern+Sofa+GIF',
    publisher: 'FurnitureDeals',
    price: 800,
    location: 'Miami, FL',
    category: 'furniture',
    region: 'usa',
    abstract: 'Contemporary sofa in excellent condition, barely used.'
  },
  {
    id: 10,
    title: 'Isuzu Commercial Truck',
    thumbnail: 'https://via.placeholder.com/300x200/a855f7/ffffff?text=Isuzu+Truck',
    gif: 'https://via.placeholder.com/300x200/a855f7/ffffff?text=Isuzu+Truck+GIF',
    publisher: 'CommercialVehicles',
    price: 45000,
    location: 'Seoul, South Korea',
    category: 'truckSales',
    region: 'asia',
    abstract: 'Reliable commercial truck perfect for delivery business.'
  },
  {
    id: 11,
    title: 'Cozy Apartment for Rent in Barcelona',
    thumbnail: 'https://via.placeholder.com/300x200/06b6d4/ffffff?text=Barcelona+Apt',
    gif: 'https://via.placeholder.com/300x200/06b6d4/ffffff?text=Barcelona+Apt+GIF',
    publisher: 'SpainRentals',
    price: 1100,
    location: 'Barcelona, Spain',
    category: 'apartmentsRent',
    region: 'europe',
    abstract: 'Charming apartment in the Gothic Quarter of Barcelona.'
  },
  {
    id: 12,
    title: 'Room in Student House - Near University',
    thumbnail: 'https://via.placeholder.com/300x200/84cc16/ffffff?text=Student+Room',
    gif: 'https://via.placeholder.com/300x200/84cc16/ffffff?text=Student+Room+GIF',
    publisher: 'StudentHousing',
    price: 600,
    location: 'Boston, MA',
    category: 'roomRent',
    region: 'usa',
    abstract: 'Affordable room in a house shared with other students.'
  }
];

// Mock user data
export const mockUsers = [
  {
    id: 1,
    username: 'user1',
    email: 'user1@example.com',
    password: 'password123', // In a real app, this would be hashed
    avatar: 'https://via.placeholder.com/100/3b82f6/ffffff?text=U1'
  },
  {
    id: 2,
    username: 'user2',
    email: 'user2@example.com',
    password: 'password123',
    avatar: 'https://via.placeholder.com/100/f59e0b/ffffff?text=U2'
  }
];