// Mock data for development and testing

// Mock videos data
exports.videos = [
  {
    id: 1,
    title: "Bicycles — San Francisco (California) #6",
    description: "Collection of vintage bicycles for sale. All in working condition with original parts.",
    thumbnailUrl: "/uploads/bicycles-sf-thumbnail.jpg",
    gifUrl: "/uploads/bicycles-sf.gif",
    videoUrl: "/uploads/bicycles-sf.mp4",
    price: 299.99,
    publisher: "CycleLover415",
    publisherId: 101,
    publishDate: "2023-10-15T14:30:00Z",
    location: "USA, California, San Francisco",
    category: "Bicycles",
    views: 1245,
    likes: 87
  },
  {
    id: 2,
    title: "Antiques — Staten Island (New York) #8",
    description: "Rare antique collection from the 1920s. Family heirlooms in excellent condition.",
    thumbnailUrl: "/uploads/antiques-ny-thumbnail.jpg",
    gifUrl: "/uploads/antiques-ny.gif",
    videoUrl: "/uploads/antiques-ny.mp4",
    price: 1200.00,
    publisher: "VintageCollector",
    publisherId: 102,
    publishDate: "2023-10-12T09:15:00Z",
    location: "USA, New York, Staten Island",
    category: "Antiques",
    views: 2341,
    likes: 156
  },
  {
    id: 3,
    title: "Construction Tools — Dallas (Texas) #11",
    description: "Professional-grade construction tools. Barely used, selling due to retirement.",
    thumbnailUrl: "/uploads/tools-dallas-thumbnail.jpg",
    gifUrl: "/uploads/tools-dallas.gif",
    videoUrl: "/uploads/tools-dallas.mp4",
    price: 850.50,
    publisher: "BuilderTX",
    publisherId: 103,
    publishDate: "2023-10-10T16:45:00Z",
    location: "USA, Texas, Dallas",
    category: "Construction Tools",
    views: 1876,
    likes: 92
  },
  {
    id: 4,
    title: "Hardware Items — Los Angeles (California) #13",
    description: "Assorted hardware items for home improvement. All new in box.",
    thumbnailUrl: "/uploads/hardware-la-thumbnail.jpg",
    gifUrl: "/uploads/hardware-la.gif",
    videoUrl: "/uploads/hardware-la.mp4",
    price: 125.75,
    publisher: "DIYMaster",
    publisherId: 104,
    publishDate: "2023-10-08T11:20:00Z",
    location: "USA, California, Los Angeles",
    category: "Hardware Items",
    views: 945,
    likes: 43
  },
  {
    id: 5,
    title: "Motorcycles — San Francisco (California) #18",
    description: "Custom Harley Davidson with low mileage. Garage kept and well maintained.",
    thumbnailUrl: "/uploads/motorcycle-sf-thumbnail.jpg",
    gifUrl: "/uploads/motorcycle-sf.gif",
    videoUrl: "/uploads/motorcycle-sf.mp4",
    price: 15000.00,
    publisher: "BikerDude",
    publisherId: 105,
    publishDate: "2023-10-05T15:10:00Z",
    location: "USA, California, San Francisco",
    category: "Motorcycles",
    views: 3542,
    likes: 278
  },
  {
    id: 6,
    title: "Motorcycles — New Jersey (Statewide) #12",
    description: "Collection of vintage motorcycles from the 70s and 80s. All in running condition.",
    thumbnailUrl: "/uploads/motorcycle-nj-thumbnail.jpg",
    gifUrl: "/uploads/motorcycle-nj.gif",
    videoUrl: "/uploads/motorcycle-nj.mp4",
    price: 8500.00,
    publisher: "ClassicRider",
    publisherId: 106,
    publishDate: "2023-10-03T13:25:00Z",
    location: "USA, New Jersey",
    category: "Motorcycles",
    views: 2156,
    likes: 134
  }
];

// Mock users data
exports.users = [
  {
    id: 101,
    name: "John Smith",
    email: "john@example.com",
    password: "hashed_password_here",
    profilePicture: "/uploads/users/john.jpg",
    joinDate: "2023-01-15T00:00:00Z",
    videos: [1]
  },
  {
    id: 102,
    name: "Emily Johnson",
    email: "emily@example.com",
    password: "hashed_password_here",
    profilePicture: "/uploads/users/emily.jpg",
    joinDate: "2023-02-20T00:00:00Z",
    videos: [2]
  },
  {
    id: 103,
    name: "Michael Brown",
    email: "michael@example.com",
    password: "hashed_password_here",
    profilePicture: "/uploads/users/michael.jpg",
    joinDate: "2023-03-10T00:00:00Z",
    videos: [3]
  },
  {
    id: 104,
    name: "Sarah Davis",
    email: "sarah@example.com",
    password: "hashed_password_here",
    profilePicture: "/uploads/users/sarah.jpg",
    joinDate: "2023-04-05T00:00:00Z",
    videos: [4]
  },
  {
    id: 105,
    name: "David Wilson",
    email: "david@example.com",
    password: "hashed_password_here",
    profilePicture: "/uploads/users/david.jpg",
    joinDate: "2023-05-12T00:00:00Z",
    videos: [5]
  },
  {
    id: 106,
    name: "Jessica Martinez",
    email: "jessica@example.com",
    password: "hashed_password_here",
    profilePicture: "/uploads/users/jessica.jpg",
    joinDate: "2023-06-18T00:00:00Z",
    videos: [6]
  }
];