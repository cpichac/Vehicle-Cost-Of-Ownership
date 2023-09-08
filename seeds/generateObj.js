const usa_car_manufacturers = [
    "Ford",
    "Chevrolet",
    "Dodge",
    "Jeep",
    "Chrysler",
    "Cadillac",
    "Buick",
    "GMC",
    "Tesla",
    "Ram",
    "Lincoln",
    "Fisker",
    "Lucid Motors",
    "Rivian",
    "Karma Automotive",
  ];
  
  // Create an array to store the seed data for all manufacturers
  const seedData = [];
  
  // Define a function to generate seed data for a manufacturer
  function generateSeedData(manufacturerName) {
    return {
      "manufacturerName": manufacturerName,
      "enginetype": null, // You can customize this value
      "depreciation": 10, // You can customize this value percentage
      "msrp": null, // You can customize this value
      "insurance": 1200, // You can customize this value percentage
      "fuel": 25, // You can customize this value
      "user_id": null, // Replace with the appropriate user ID
    };
  }
  
  // Generate seed data for each manufacturer and push it to the seedData array
  usa_car_manufacturers.forEach((manufacturer) => {
    seedData.push(generateSeedData(manufacturer));
  });
  
  console.log(seedData)
  // Now, the seedData array contains seed objects for all manufacturers.
  
  // You can use this seed data to insert records into your database using your chosen database management system or ORM (Object-Relational Mapping) tool.
  