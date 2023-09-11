const myButton = document.getElementById('carSearch');
const manufacturerSelect = document.getElementById('manufacturerSelect');
const engineType = document.getElementById('engineType');
const msrp = document.getElementById('msrp');
const cardArea = document.getElementById('search');


// let manufacturers = {
//   Toyota: { depreciation: 5 }
// }
function handleClick(event) {

  console.log('Button clicked!');
  // console.log(manufacturerSelect.value);
  // console.log(engineType.value);
  // console.log(msrp.value);
  if (manufacturerSelect.value === "Ford" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value;
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", "card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);



  } else if (manufacturerSelect.value === "Ford" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");;
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Ford" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Chrevolet" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Chrevolet" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Chrevolet" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Dodge" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Dodge" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1300 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Dodge" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Jeep" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((11 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2800 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Jeep" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((11 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1300 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Jeep" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((11 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Chrysler" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Chrysler" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Chrysler" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Cadillac" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Cadillac" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Cadillac" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Buick" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Buick" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Buick" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;
    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "GMC" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2500 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "GMC" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1300 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "GMC" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 450 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Tesla" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((10 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Tesla" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((10 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Tesla" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((10 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Ram" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 3500 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Ram" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1800 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Ram" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 550 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Fisker" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((15 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Fisker" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((15 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Fisker" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((15 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Lucid Motors" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Lucid Motors" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Lucid Motors" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Rivian" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((12 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Rivian" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((12 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Rivian" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((12 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;


    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Karma Automotive" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((15 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Karma Automotive" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((15 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Karma Automotive" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((15 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Toyota" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Toyota" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Toyota" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Honda" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1900 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Honda" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1100 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Honda" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Nissan" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Nissan" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Nissan" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Volkswagen" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Volkswagen" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Volkswagen" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "BMW" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2500 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "BMW" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1300 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "BMW" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Mercedes-Benz" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2500 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Mercedes-Benz" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1300 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Mercedes-Benz" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Hyundai" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Hyundai" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Hyundai" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Kia" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Kia" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Kia" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Subaru" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Subaru" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Subaru" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Mazda" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Mazda" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Mazda" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Audi" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2500 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Audi" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1300 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Audi" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Volvo" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2200 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Volvo" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1300 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Volvo" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Lexus" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((12 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Lexus" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((12 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1300 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Lexus" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((12 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Mitsubishi" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Mitsubishi" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Mitsubishi" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Mini" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1800 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Mini" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1100 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Mini" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((13 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Lincoln" && engineType.value === "Gas" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 2900 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Lincoln" && engineType.value === "Electric" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 1350 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect.value === "Lincoln" && engineType.value === "Hybrid" && msrp.value) {
    // Create ordered list element
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let content = document.createElement("div");
    let cardTitle = document.createElement("h2")
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let depreciation = ((14 * 3) / 100) * msrp.value
    let insurance = ((msrp.value / 50) + 500) * 3;
    let fuel = 500 * 3;
    let totalCost = depreciation + insurance + fuel;

    card.setAttribute("class", " card leftRightMargin");
    cardContent.setAttribute("class", "card-content");
    content.setAttribute("class", "content");
    listEl.setAttribute("class", "list")

    cardTitle.textContent = "After 3 Years"
    li1.textContent = "Manufacturer: " + manufacturerSelect.value;
    li2.textContent = "MSRP: " + msrp.value;
    li3.textContent = "Depreciated Amount: " + depreciation;
    li4.textContent = "Insurance Cost: " + insurance;
    li5.textContent = "Engine Type: " + engineType.value;
    li6.textContent = "Fuel Cost: " + fuel;
    li7.textContent = "Total Cost: " + totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(cardTitle);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else {
    console.log("unsuccesful")
  }
  // Your code to handle the event goes here

  // You can access event properties, e.g., event.target, event.clientX, event.clientY, etc.
}

myButton.addEventListener('click', handleClick);