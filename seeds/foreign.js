const foreign_car_manufacturers = [
    "Toyota",
    "Honda",
    "Nissan",
    "Volkswagen",
    "BMW",
    "Mercedes-Benz",
    "Hyundai",
    "Kia",
    "Subaru",
    "Mazda",
    "Audi",
    "Volvo",
    "Lexus",
    "Mitsubishi",
    "Mini",
    // Add other foreign manufacturers here...
  ];
  
  // Create an array to store the seed data for all foreign manufacturers
  const seedData = [];
  
  // Define a function to generate seed data for a foreign manufacturer
  function generateSeedData(manufacturerName) {
    return {
      manufacturerName,
      enginetype: 2.0, // You can customize this value
      depreciation: 10, // You can customize this value
      msrp: 30000, // You can customize this value
      insurance: 1200, // You can customize this value
      fuel: 25, // You can customize this value
      user_id: 1, // Replace with the appropriate user ID
    };
  }
  
  // Generate seed data for each foreign manufacturer and push it to the seedData array
  foreign_car_manufacturers.forEach((manufacturer) => {
    seedData.push(generateSeedData(manufacturer));
  });
  
  // Now, the seedData array contains seed objects for all foreign manufacturers that export to the US.
  
  // You can use this seed data to insert records into your database using your chosen database management system or ORM (Object-Relational Mapping) tool.
  console.log(seedData)