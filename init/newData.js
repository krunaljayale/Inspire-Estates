const sampleListings = [
    {
      title: 'Cozy Beachfront Cottage',
      description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      price: 1500,
      location: 'Malibu',
      country: 'United States',
      geometry: { type: 'Point', coordinates: [-118.7786, 34.0259] }
    },
    {
      title: 'Modern Loft in Downtown',
      description: 'Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      price: 1200,
      location: 'New York City',
      country: 'United States',
      geometry: { type: 'Point', coordinates: [-74.0060, 40.7128] }
    },
    {
      title: 'Mountain Retreat',
      description: 'Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it\'s a perfect place to recharge.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
      },
      price: 1000,
      location: 'Aspen',
      country: 'United States',
      geometry: { type: 'Point', coordinates: [-106.8214, 39.1911] }
    },
    {
      title: 'Historic Villa in Tuscany',
      description: 'Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
      },
      price: 2500,
      location: 'Florence',
      country: 'Italy',
      geometry: { type: 'Point', coordinates: [11.2558, 43.7696] }
    },
    {
      title: 'Secluded Treehouse Getaway',
      description: 'Live among the treetops in this unique treehouse retreat. A true nature lover\'s paradise.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      price: 800,
      location: 'Portland',
      country: 'United States',
      geometry: { type: 'Point', coordinates: [-122.6765, 45.5231] }
    },
    {
      title: 'Beachfront Paradise',
      description: 'Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      price: 2000,
      location: 'Cancun',
      country: 'Mexico',
      geometry: { type: 'Point', coordinates: [-86.8304, 21.1619] }
    },
    {
      title: 'Rustic Cabin by the Lake',
      description: 'Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
      },
      price: 900,
      location: 'Lake Tahoe',
      country: 'United States',
      geometry: { type: 'Point', coordinates: [-120.0324, 39.0968] }
    },
    {
      title: 'Luxury Penthouse with City Views',
      description: 'Indulge in luxury living with panoramic city views from this stunning penthouse apartment.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
      },
      price: 3500,
      location: 'Los Angeles',
      country: 'United States',
      geometry: { type: 'Point', coordinates: [-118.2437, 34.0522] }
    },
    {
      title: 'Ski-In/Ski-Out Chalet',
      description: 'Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
      },
      price: 3000,
      location: 'Verbier',
      country: 'Switzerland',
      geometry: { type: 'Point', coordinates: [7.2280, 46.0774] }
    },
    {
      title: 'Safari Lodge in the Serengeti',
      description: 'Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
      },
      price: 4000,
      location: 'Serengeti National Park',
      country: 'Tanzania',
      geometry: { type: 'Point', coordinates: [34.8888, -2.3333] }
    },
    {
      title: 'Historic Canal House',
      description: 'Stay in a piece of history in this beautifully preserved canal house in Amsterdam\'s iconic district.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      price: 1800,
      location: 'Amsterdam',
      country: 'Netherlands',
      geometry: { type: 'Point', coordinates: [4.8952, 52.3702] }
    },
    {
      title: 'Private Island Retreat',
      description: 'Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
      },
      price: 10000,
      location: 'Fiji',
      country: 'Fiji',
      geometry: { type: 'Point', coordinates: [178.0650, -17.7134] }
    },
    {
      title: 'Charming Cottage in the Cotswolds',
      description: 'Escape to the English countryside in this charming cottage nestled in the picturesque Cotswolds.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      price: 1200,
      location: 'Cotswolds',
      country: 'United Kingdom',
      geometry: { type: 'Point', coordinates: [-1.7847, 51.9287] }
    },
    {
      title: 'Tropical Bungalow with Ocean Views',
      description: 'Relax in a private bungalow overlooking the crystal-clear waters of the Pacific Ocean.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjBidW5nYWJsZXxlbnwwfHwwfHx8&auto=format&fit=crop&w=800&q=60'
      },
      price: 2500,
      location: 'Bora Bora',
      country: 'French Polynesia',
      geometry: { type: 'Point', coordinates: [-151.7421, -16.5004] }
    },
    {
      title: 'Historic Riad in Marrakech',
      description: 'Immerse yourself in Moroccan culture in this beautifully restored historic riad in the heart of Marrakech.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1604126780918-f8e4d17aaf64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJpYWQlMjBiYXRofGVufDB8fDB8fHwxNjA3MTk4OTI1&auto=format&fit=crop&w=800&q=60'
      },
      price: 1800,
      location: 'Marrakech',
      country: 'Morocco',
      geometry: { type: 'Point', coordinates: [-7.5898, 31.6295] }
    },
    {
      title: 'Alpine Chalet with Mountain Views',
      description: 'Wake up to breathtaking views of the Alps in this cozy alpine chalet. Perfect for ski enthusiasts!',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1544421585-00d45fa84c0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWxwaW5lJTIwY2hhbGV0JTIwd2l0aCUyMG1vdW50YWlufGVufDB8fDB8fHwxNjA3MTk5MTgy&auto=format&fit=crop&w=800&q=60'
      },
      price: 2000,
      location: 'Zermatt',
      country: 'Switzerland',
      geometry: { type: 'Point', coordinates: [7.7461, 46.0207] }
    },
    {
      title: 'Lakeside Cabin in the Adirondacks',
      description: 'Escape to nature in this charming lakeside cabin nestled in the scenic Adirondack Mountains.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1517030332220-07f9f3e9c551?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGFkaXJvbmRhc2t8ZW58MHx8MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      price: 1100,
      location: 'Lake Placid',
      country: 'United States',
      geometry: { type: 'Point', coordinates: [-73.9238, 44.2795] }
    },
    {
      title: 'Oceanfront Villa in Bali',
      description: 'Experience luxury living in this stunning oceanfront villa in Bali. Relax and rejuvenate in paradise.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1565468077437-54d3b7273374?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsaSUyMG9jZWFuZnJvbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
      },
      price: 2800,
      location: 'Bali',
      country: 'Indonesia',
      geometry: { type: 'Point', coordinates: [115.1889, -8.3405] }
    },
    {
      title: 'Spectacular Cliffside Villa',
      description: 'Perched on a cliff overlooking the ocean, this villa offers breathtaking views and ultimate privacy.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1506364551487-22d45a36e812?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpZmZzaWRlJTIwY2xhaWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
      },
      price: 3500,
      location: 'Santorini',
      country: 'Greece',
      geometry: { type: 'Point', coordinates: [25.3764, 36.3932] }
    },
    {
      title: 'Ski Chalet in the French Alps',
      description: 'Hit the slopes from this cozy ski chalet in the heart of the French Alps. Perfect for winter sports enthusiasts!',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1494522857307-6ad3fb735a1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2tpJTIwY2hhbGV0fGVufDB8fDB8fHwxNjA3MjAwMjgy&auto=format&fit=crop&w=800&q=60'
      },
      price: 2800,
      location: 'Chamonix',
      country: 'France',
      geometry: { type: 'Point', coordinates: [6.8651, 45.9237] }
    },
    {
      title: 'Historic Townhouse in Boston',
      description: 'Step back in time in this beautifully restored historic townhouse in the heart of Boston.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1575932159546-ae51c9fd3fcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9zdG9ufGVufDB8fDB8fHx8&auto=format&fit=crop&w=800&q=60'
      },
      price: 2200,
      location: 'Boston',
      country: 'United States',
      geometry: { type: 'Point', coordinates: [-71.0589, 42.3601] }
    },
    {
      title: 'Clifftop Retreat in Big Sur',
      description: 'Escape the hustle and bustle in this serene clifftop retreat with panoramic views of the Pacific Ocean.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1498758536662-35ef7e0ebc5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJpZyUyMHN1cnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
      },
      price: 1900,
      location: 'Big Sur',
      country: 'United States',
      geometry: { type: 'Point', coordinates: [-121.7869, 36.2704] }
    },
    {
      title: 'Riverside Cabin in the Smokies',
      description: 'Unwind by the river in this cozy cabin nestled in the Great Smoky Mountains. Perfect for nature lovers!',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1584448570992-2be68858d7ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxvdHN0b25lcyUyMGNhYmlufGVufDB8fDB8fHwxNjA3MjAwMTAw&auto=format&fit=crop&w=800&q=60'
      },
      price: 1000,
      location: 'Gatlinburg',
      country: 'United States',
      geometry: { type: 'Point', coordinates: [-83.5102, 35.7143] }
    },
    {
      title: 'Luxury Villa in the Hamptons',
      description: 'Experience the ultimate luxury in this stunning villa in the exclusive Hamptons. Beach access included!',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1548702769-eb2bc15ab03b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhbXB0b25zfGVufDB8fDB8fHx8&auto=format&fit=crop&w=800&q=60'
      },
      price: 5000,
      location: 'The Hamptons',
      country: 'United States',
      geometry: { type: 'Point', coordinates: [-72.2682, 40.9634] }
    },
    {
      title: 'Seaside Villa in Santorini',
      description: 'Enjoy stunning sunsets from your private terrace in this beautiful seaside villa in Santorini.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1532187863486-74d818162e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FudG9yaW5pfGVufDB8fDB8fHx8&auto=format&fit=crop&w=800&q=60'
      },
      price: 3200,
      location: 'Santorini',
      country: 'Greece',
      geometry: { type: 'Point', coordinates: [25.3764, 36.3932] }
    },
    {
      title: 'Rustic Mountain Lodge',
      description: 'Escape to the mountains in this charming rustic lodge. Enjoy hiking, skiing, and more!',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1490367532201-11c40e2ed401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9kZ2VzfGVufDB8fDB8fHwxNjA3MjAwMTA2&auto=format&fit=crop&w=800&q=60'
      },
      price: 1500,
      location: 'Lake Placid',
      country: 'United States',
      geometry: { type: 'Point', coordinates: [-73.9238, 44.2795] }
    },
    {
      title: 'Charming Cottage in the Lake District',
      description: 'Experience the beauty of the Lake District in this cozy cottage surrounded by stunning landscapes.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1535308774780-a24f075297d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZSUyMGRpc2N0fGVufDB8fDB8fHx8&auto=format&fit=crop&w=800&q=60'
      },
      price: 1300,
      location: 'Lake District',
      country: 'United Kingdom',
      geometry: { type: 'Point', coordinates: [-3.1389, 54.4609] }
    },
    {
      title: 'Modern Loft in the Arts District',
      description: 'Immerse yourself in creativity in this modern loft located in the vibrant Arts District.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1551650018-2e16f2d7f019?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9mdHxlbnwwfHwwfHx8&auto=format&fit=crop&w=800&q=60'
      },
      price: 2000,
      location: 'Los Angeles',
      country: 'United States',
      geometry: { type: 'Point', coordinates: [-118.2437, 34.0522] }
    },
    {
      title: 'Remote Cabin in the Canadian Wilderness',
      description: 'Disconnect from the world in this remote cabin surrounded by pristine wilderness.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1528820021253-e07b4e7467d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhYmluJTIwY2FiaW58ZW58MHx8MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      },
      price: 800,
      location: 'Banff',
      country: 'Canada',
      geometry: { type: 'Point', coordinates: [-115.5624, 51.1784] }
    },
    {
      title: 'Luxury Villa in Mykonos',
      description: 'Indulge in luxury living in this beautiful villa overlooking the Aegean Sea in Mykonos.',
      image: {
        filename: 'listingimage',
        url: 'https://images.unsplash.com/photo-1552280827-d9d982b61582?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXlrb25vc3xlbnwwfHwwfHx8&auto=format&fit=crop&w=800&q=60'
      },
      price: 3000,
      location: 'Mykonos',
      country: 'Greece',
      geometry: { type: 'Point'},
      coordinates:[25.3764, 36.3932] 
    }
  ];

  module.exports = { data: sampleListings };