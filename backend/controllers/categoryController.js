// Mock categories data
const categories = [
  { id: 1, name: 'Bicycles', icon: 'bicycle' },
  { id: 2, name: 'Antiques', icon: 'lamp' },
  { id: 3, name: 'Construction Tools', icon: 'tools' },
  { id: 4, name: 'Hardware Items', icon: 'hardware' },
  { id: 5, name: 'Motorcycles', icon: 'motorcycle' },
  { id: 6, name: 'Electronics', icon: 'computer' },
  { id: 7, name: 'Furniture', icon: 'chair' },
  { id: 8, name: 'Clothing', icon: 'tshirt' },
  { id: 9, name: 'Books', icon: 'book' },
  { id: 10, name: 'Sports Equipment', icon: 'basketball' }
];

exports.getAllCategories = (req, res) => {
  res.json(categories);
};