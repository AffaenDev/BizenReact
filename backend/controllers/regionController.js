// Mock regions data
const regions = [
  { 
    id: 1, 
    name: 'USA', 
    subRegions: [
      { id: 101, name: 'New York' },
      { id: 102, name: 'Florida' },
      { id: 103, name: 'New Jersey' },
      { id: 104, name: 'California' },
      { id: 105, name: 'Texas' },
      { id: 106, name: 'Dallas' },
      { id: 107, name: 'San Francisco' },
      { id: 108, name: 'Los Angeles' },
      { id: 109, name: 'Staten Island' }
    ] 
  },
  { 
    id: 2, 
    name: 'Europe', 
    subRegions: [
      { id: 201, name: 'London' },
      { id: 202, name: 'Paris' },
      { id: 203, name: 'Berlin' },
      { id: 204, name: 'Rome' },
      { id: 205, name: 'Madrid' }
    ] 
  },
  { 
    id: 3, 
    name: 'Asia', 
    subRegions: [
      { id: 301, name: 'Tokyo' },
      { id: 302, name: 'Seoul' },
      { id: 303, name: 'Beijing' },
      { id: 304, name: 'Mumbai' },
      { id: 305, name: 'Singapore' }
    ] 
  }
];

exports.getAllRegions = (req, res) => {
  res.json(regions);
};