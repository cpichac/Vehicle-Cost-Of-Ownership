const myButton = document.getElementById('carSearch');
const manufacturerSelect = document.getElementById('manufacturerSelect');
const engineType = document.getElementById('engineType');
const msrp = document.getElementById('msrp');
const cardArea = document.getElementById('results');

function handleClick(event) {
  
  console.log('Button clicked!');
  if (manufacturerSelect === "Ford" && engineType === "Gas" && msrp == 1) {
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
    let depreciation = ((13 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
    


  } else if (manufacturerSelect === "Ford" && engineType === "Electrtic" && msrp == 1){
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
    let depreciation = ((13 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Ford" && engineType === "Hybrid" && msrp == 1){
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
    let depreciation = ((13 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Chrevolet" && engineType === "Gas" && msrp == 1) {
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
    let depreciation = ((13 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Chrevolet" && engineType === "Electrtic" && msrp == 1){
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
    let depreciation = ((13 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Chrevolet" && engineType === "Hybrid" && msrp == 1){
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
    let depreciation = ((13 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Dodge" && engineType === "Gas" && msrp == 1) {
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
    let depreciation = ((13 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 2400 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Dodge" && engineType === "Electrtic" && msrp == 1){
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
    let depreciation = ((13 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 1300 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Dodge" && engineType === "Hybrid" && msrp == 1){
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
    let depreciation = ((13 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Jeep" && engineType === "Gas" && msrp == 1) {
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
    let depreciation = ((11 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 2800 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Jeep" && engineType === "Electrtic" && msrp == 1){
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
    let depreciation = ((11 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 1300 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Jeep" && engineType === "Hybrid" && msrp == 1){
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
    let depreciation = ((11 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Chrysler" && engineType === "Gas" && msrp == 1) {
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
    let depreciation = ((13 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Chrysler" && engineType === "Electrtic" && msrp == 1){
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
    let depreciation = ((13 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Chrysler" && engineType === "Hybrid" && msrp == 1){
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
    let depreciation = ((13 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Cadillac" && engineType === "Gas" && msrp == 1) {
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
    let depreciation = ((14 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 2400 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Cadillac" && engineType === "Electrtic" && msrp == 1){
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
    let depreciation = ((14 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Cadillac" && engineType === "Hybrid" && msrp == 1){
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
    let depreciation = ((14 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Buick" && engineType === "Gas" && msrp == 1) {
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
    let depreciation = ((14 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Buick" && engineType === "Electrtic" && msrp == 1){
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
    let depreciation = ((14 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Buick" && engineType === "Hybrid" && msrp == 1){
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
    let depreciation = ((14 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "GMC" && engineType === "Gas" && msrp == 1) {
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
    let depreciation = ((13 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 2500 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "GMC" && engineType === "Electrtic" && msrp == 1){
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
    let depreciation = ((13 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 1300 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "GMC" && engineType === "Hybrid" && msrp == 1){
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
    let depreciation = ((13 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 450 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Tesla" && engineType === "Gas" && msrp == 1) {
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
    let depreciation = ((10 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Tesla" && engineType === "Electrtic" && msrp == 1){
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
    let depreciation = ((10 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Tesla" && engineType === "Hybrid" && msrp == 1){
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
    let depreciation = ((10 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Ram" && engineType === "Gas" && msrp == 1) {
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
    let depreciation = ((13 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 3500 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Ram" && engineType === "Electrtic" && msrp == 1){
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
    let depreciation = ((13 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 1800 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Ram" && engineType === "Hybrid" && msrp == 1){
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
    let depreciation = ((13 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 550 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Fisker" && engineType === "Gas" && msrp == 1) {
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
    let depreciation = ((15 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Fisker" && engineType === "Electrtic" && msrp == 1){
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
        let depreciation = ((15 * 3) / 100) * msrp;
        let insurance = ((msrp / 50) + 500) * 3;
        let fuel = 1200 * 3;
        let totalCost = depreciation + insurance + fuel;
    
        cardTitle.textContent = "After 3 Years"
        li1.textContent = manufacturerSelect;
        li2.textContent = msrp;
        li3.textContent = depreciation;
        li4.textContent = insurance;
        li5.textContent = engineType;
        li6.textContent = fuel;
        li7.textContent = totalCost;
    
        cardArea.appendChild(card);
        card.appendChild(cardContent);
        cardContent.appendChild(content);
        content.appendChild(listEl);
        listEl.appendChild(li1);
        listEl.appendChild(li2);
        listEl.appendChild(li3);
        listEl.appendChild(li4);
        listEl.appendChild(li5);
        listEl.appendChild(li6);
        listEl.appendChild(li7);
  } else if (manufacturerSelect === "Fisker" && engineType === "Hybrid" && msrp == 1){
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
        let depreciation = ((15 * 3) / 100) * msrp;
        let insurance = ((msrp / 50) + 500) * 3;
        let fuel = 400 * 3;
        let totalCost = depreciation + insurance + fuel;
    
        cardTitle.textContent = "After 3 Years"
        li1.textContent = manufacturerSelect;
        li2.textContent = msrp;
        li3.textContent = depreciation;
        li4.textContent = insurance;
        li5.textContent = engineType;
        li6.textContent = fuel;
        li7.textContent = totalCost;
    
        cardArea.appendChild(card);
        card.appendChild(cardContent);
        cardContent.appendChild(content);
        content.appendChild(listEl);
        listEl.appendChild(li1);
        listEl.appendChild(li2);
        listEl.appendChild(li3);
        listEl.appendChild(li4);
        listEl.appendChild(li5);
        listEl.appendChild(li6);
        listEl.appendChild(li7);
  } else if (manufacturerSelect === "Lucid Motors" && engineType === "Gas" && msrp == 1) {
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
        let depreciation = ((14 * 3) / 100) * msrp;
        let insurance = ((msrp / 50) + 500) * 3;
        let fuel = 2000 * 3;
        let totalCost = depreciation + insurance + fuel;
    
        cardTitle.textContent = "After 3 Years"
        li1.textContent = manufacturerSelect;
        li2.textContent = msrp;
        li3.textContent = depreciation;
        li4.textContent = insurance;
        li5.textContent = engineType;
        li6.textContent = fuel;
        li7.textContent = totalCost;
    
        cardArea.appendChild(card);
        card.appendChild(cardContent);
        cardContent.appendChild(content);
        content.appendChild(listEl);
        listEl.appendChild(li1);
        listEl.appendChild(li2);
        listEl.appendChild(li3);
        listEl.appendChild(li4);
        listEl.appendChild(li5);
        listEl.appendChild(li6);
        listEl.appendChild(li7);
  } else if (manufacturerSelect === "Lucid Motors" && engineType === "Electrtic" && msrp == 1){
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
        let depreciation = ((14 * 3) / 100) * msrp;
        let insurance = ((msrp / 50) + 500) * 3;
        let fuel = 1200 * 3;
        let totalCost = depreciation + insurance + fuel;
    
        cardTitle.textContent = "After 3 Years"
        li1.textContent = manufacturerSelect;
        li2.textContent = msrp;
        li3.textContent = depreciation;
        li4.textContent = insurance;
        li5.textContent = engineType;
        li6.textContent = fuel;
        li7.textContent = totalCost;
    
        cardArea.appendChild(card);
        card.appendChild(cardContent);
        cardContent.appendChild(content);
        content.appendChild(listEl);
        listEl.appendChild(li1);
        listEl.appendChild(li2);
        listEl.appendChild(li3);
        listEl.appendChild(li4);
        listEl.appendChild(li5);
        listEl.appendChild(li6);
        listEl.appendChild(li7);
  } else if (manufacturerSelect === "Lucid Motors" && engineType === "Hybrid" && msrp == 1){
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
    let depreciation = ((14 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
} else if (manufacturerSelect === "Rivian" && engineType === "Gas" && msrp == 1) {
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
    let depreciation = ((12 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 2000 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Rivian" && engineType === "Electrtic" && msrp == 1){
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
    let depreciation = ((12 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 1200 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Rivian" && engineType === "Hybrid" && msrp == 1){
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
    let depreciation = ((12 * 3) / 100) * msrp;
    let insurance = ((msrp / 50) + 500) * 3;
    let fuel = 400 * 3;
    let totalCost = depreciation + insurance + fuel;

    cardTitle.textContent = "After 3 Years"
    li1.textContent = manufacturerSelect;
    li2.textContent = msrp;
    li3.textContent = depreciation;
    li4.textContent = insurance;
    li5.textContent = engineType;
    li6.textContent = fuel;
    li7.textContent = totalCost;

    cardArea.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(content);
    content.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.appendChild(li5);
    listEl.appendChild(li6);
    listEl.appendChild(li7);
  } else if (manufacturerSelect === "Karma Automotive" && engineType === "Gas" && msrp == 1) {
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
      let depreciation = ((15 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 400 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Karma Automotive" && engineType === "Electrtic" && msrp == 1){
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
      let depreciation = ((15 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 400 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Karma Automotive" && engineType === "Hybrid" && msrp == 1){
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
      let depreciation = ((15 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 400 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Toyota" && engineType === "Gas" && msrp == 1) {
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
      let depreciation = ((13 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 2000 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Toyota" && engineType === "Electrtic" && msrp == 1){
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
      let depreciation = ((13 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 1200 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Toyota" && engineType === "Hybrid" && msrp == 1){
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
      let depreciation = ((13 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 400 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Honda" && engineType === "Gas" && msrp == 1) {
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
          let depreciation = ((13 * 3) / 100) * msrp;
          let insurance = ((msrp / 50) + 500) * 3;
          let fuel = 1900 * 3;
          let totalCost = depreciation + insurance + fuel;
      
          cardTitle.textContent = "After 3 Years"
          li1.textContent = manufacturerSelect;
          li2.textContent = msrp;
          li3.textContent = depreciation;
          li4.textContent = insurance;
          li5.textContent = engineType;
          li6.textContent = fuel;
          li7.textContent = totalCost;
      
          cardArea.appendChild(card);
          card.appendChild(cardContent);
          cardContent.appendChild(content);
          content.appendChild(listEl);
          listEl.appendChild(li1);
          listEl.appendChild(li2);
          listEl.appendChild(li3);
          listEl.appendChild(li4);
          listEl.appendChild(li5);
          listEl.appendChild(li6);
          listEl.appendChild(li7);
  } else if (manufacturerSelect === "Honda" && engineType === "Electrtic" && msrp == 1){
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
      let depreciation = ((13 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 1100 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Honda" && engineType === "Hybrid" && msrp == 1){
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
      let depreciation = ((13 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 400 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Nissan" && engineType === "Gas" && msrp == 1) {
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
          let depreciation = ((13 * 3) / 100) * msrp;
          let insurance = ((msrp / 50) + 500) * 3;
          let fuel = 2000 * 3;
          let totalCost = depreciation + insurance + fuel;
      
          cardTitle.textContent = "After 3 Years"
          li1.textContent = manufacturerSelect;
          li2.textContent = msrp;
          li3.textContent = depreciation;
          li4.textContent = insurance;
          li5.textContent = engineType;
          li6.textContent = fuel;
          li7.textContent = totalCost;
      
          cardArea.appendChild(card);
          card.appendChild(cardContent);
          cardContent.appendChild(content);
          content.appendChild(listEl);
          listEl.appendChild(li1);
          listEl.appendChild(li2);
          listEl.appendChild(li3);
          listEl.appendChild(li4);
          listEl.appendChild(li5);
          listEl.appendChild(li6);
          listEl.appendChild(li7);
  } else if (manufacturerSelect === "Nissan" && engineType === "Electrtic" && msrp == 1){
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
      let depreciation = ((13 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 1200 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Nissan" && engineType === "Hybrid" && msrp == 1){
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
      let depreciation = ((13 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 400 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Volkswagen" && engineType === "Gas" && msrp == 1) {
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
      let depreciation = ((14 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 2000 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Volkswagen" && engineType === "Electrtic" && msrp == 1){
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
      let depreciation = ((14 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 1200 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Volkswagen" && engineType === "Hybrid" && msrp == 1){
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
      let depreciation = ((14 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 400 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "BMW" && engineType === "Gas" && msrp == 1) {
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
          let depreciation = ((14 * 3) / 100) * msrp;
          let insurance = ((msrp / 50) + 500) * 3;
          let fuel = 2500 * 3;
          let totalCost = depreciation + insurance + fuel;
      
          cardTitle.textContent = "After 3 Years"
          li1.textContent = manufacturerSelect;
          li2.textContent = msrp;
          li3.textContent = depreciation;
          li4.textContent = insurance;
          li5.textContent = engineType;
          li6.textContent = fuel;
          li7.textContent = totalCost;
      
          cardArea.appendChild(card);
          card.appendChild(cardContent);
          cardContent.appendChild(content);
          content.appendChild(listEl);
          listEl.appendChild(li1);
          listEl.appendChild(li2);
          listEl.appendChild(li3);
          listEl.appendChild(li4);
          listEl.appendChild(li5);
          listEl.appendChild(li6);
          listEl.appendChild(li7);
  } else if (manufacturerSelect === "BMW" && engineType === "Electrtic" && msrp == 1){
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
      let depreciation = ((14 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 1300 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "BMW" && engineType === "Hybrid" && msrp == 1){
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
      let depreciation = ((14 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 400 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Mercedes-Benz" && engineType === "Gas" && msrp == 1) {
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
          let depreciation = ((14 * 3) / 100) * msrp;
          let insurance = ((msrp / 50) + 500) * 3;
          let fuel = 2500 * 3;
          let totalCost = depreciation + insurance + fuel;
      
          cardTitle.textContent = "After 3 Years"
          li1.textContent = manufacturerSelect;
          li2.textContent = msrp;
          li3.textContent = depreciation;
          li4.textContent = insurance;
          li5.textContent = engineType;
          li6.textContent = fuel;
          li7.textContent = totalCost;
      
          cardArea.appendChild(card);
          card.appendChild(cardContent);
          cardContent.appendChild(content);
          content.appendChild(listEl);
          listEl.appendChild(li1);
          listEl.appendChild(li2);
          listEl.appendChild(li3);
          listEl.appendChild(li4);
          listEl.appendChild(li5);
          listEl.appendChild(li6);
          listEl.appendChild(li7);
  } else if (manufacturerSelect === "Mercedes-Benz" && engineType === "Electrtic" && msrp == 1){
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
      let depreciation = ((14 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 1300 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Mercedes-Benz" && engineType === "Hybrid" && msrp == 1){
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
      let depreciation = ((14 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 400 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Hyundai" && engineType === "Gas" && msrp == 1) {
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
          let depreciation = ((14 * 3) / 100) * msrp;
          let insurance = ((msrp / 50) + 500) * 3;
          let fuel = 2000 * 3;
          let totalCost = depreciation + insurance + fuel;
      
          cardTitle.textContent = "After 3 Years"
          li1.textContent = manufacturerSelect;
          li2.textContent = msrp;
          li3.textContent = depreciation;
          li4.textContent = insurance;
          li5.textContent = engineType;
          li6.textContent = fuel;
          li7.textContent = totalCost;
      
          cardArea.appendChild(card);
          card.appendChild(cardContent);
          cardContent.appendChild(content);
          content.appendChild(listEl);
          listEl.appendChild(li1);
          listEl.appendChild(li2);
          listEl.appendChild(li3);
          listEl.appendChild(li4);
          listEl.appendChild(li5);
          listEl.appendChild(li6);
          listEl.appendChild(li7);
  } else if (manufacturerSelect === "Hyundai" && engineType === "Electrtic" && msrp == 1){
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
      let depreciation = ((14 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 1200 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Hyundai" && engineType === "Hybrid" && msrp == 1){
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
      let depreciation = ((14 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 400 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Kia" && engineType === "Gas" && msrp == 1) {
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
          let depreciation = ((14 * 3) / 100) * msrp;
          let insurance = ((msrp / 50) + 500) * 3;
          let fuel = 2000 * 3;
          let totalCost = depreciation + insurance + fuel;
      
          cardTitle.textContent = "After 3 Years"
          li1.textContent = manufacturerSelect;
          li2.textContent = msrp;
          li3.textContent = depreciation;
          li4.textContent = insurance;
          li5.textContent = engineType;
          li6.textContent = fuel;
          li7.textContent = totalCost;
      
          cardArea.appendChild(card);
          card.appendChild(cardContent);
          cardContent.appendChild(content);
          content.appendChild(listEl);
          listEl.appendChild(li1);
          listEl.appendChild(li2);
          listEl.appendChild(li3);
          listEl.appendChild(li4);
          listEl.appendChild(li5);
          listEl.appendChild(li6);
          listEl.appendChild(li7);
  } else if (manufacturerSelect === "Kia" && engineType === "Electrtic" && msrp == 1){
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
      let depreciation = ((14 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 1200 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Kia" && engineType === "Hybrid" && msrp == 1){
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
      let depreciation = ((14 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 400 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Subaru" && engineType === "Gas" && msrp == 1) {
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
      let depreciation = ((13 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 2000 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Subaru" && engineType === "Electrtic" && msrp == 1){
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
      let depreciation = ((13 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 1200 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Subaru" && engineType === "Hybrid" && msrp == 1){
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
      let depreciation = ((13 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 400 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Mazda" && engineType === "Gas" && msrp == 1) {
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
          let depreciation = ((13 * 3) / 100) * msrp;
          let insurance = ((msrp / 50) + 500) * 3;
          let fuel = 2000 * 3;
          let totalCost = depreciation + insurance + fuel;
      
          cardTitle.textContent = "After 3 Years"
          li1.textContent = manufacturerSelect;
          li2.textContent = msrp;
          li3.textContent = depreciation;
          li4.textContent = insurance;
          li5.textContent = engineType;
          li6.textContent = fuel;
          li7.textContent = totalCost;
      
          cardArea.appendChild(card);
          card.appendChild(cardContent);
          cardContent.appendChild(content);
          content.appendChild(listEl);
          listEl.appendChild(li1);
          listEl.appendChild(li2);
          listEl.appendChild(li3);
          listEl.appendChild(li4);
          listEl.appendChild(li5);
          listEl.appendChild(li6);
          listEl.appendChild(li7);
  } else if (manufacturerSelect === "Mazda" && engineType === "Electrtic" && msrp == 1){
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
      let depreciation = ((13 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 1200 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Mazda" && engineType === "Hybrid" && msrp == 1){
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
      let depreciation = ((13 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 400 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Audi" && engineType === "Gas" && msrp == 1) {
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
      let depreciation = ((14 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 2500 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Audi" && engineType === "Electrtic" && msrp == 1){
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
      let depreciation = ((14 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 1300 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Audi" && engineType === "Hybrid" && msrp == 1){
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
          let depreciation = ((14 * 3) / 100) * msrp;
          let insurance = ((msrp / 50) + 500) * 3;
          let fuel = 400 * 3;
          let totalCost = depreciation + insurance + fuel;
      
          cardTitle.textContent = "After 3 Years"
          li1.textContent = manufacturerSelect;
          li2.textContent = msrp;
          li3.textContent = depreciation;
          li4.textContent = insurance;
          li5.textContent = engineType;
          li6.textContent = fuel;
          li7.textContent = totalCost;
      
          cardArea.appendChild(card);
          card.appendChild(cardContent);
          cardContent.appendChild(content);
          content.appendChild(listEl);
          listEl.appendChild(li1);
          listEl.appendChild(li2);
          listEl.appendChild(li3);
          listEl.appendChild(li4);
          listEl.appendChild(li5);
          listEl.appendChild(li6);
          listEl.appendChild(li7);
  } else if (manufacturerSelect === "Volvo" && engineType === "Gas" && msrp == 1) {
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
          let depreciation = ((14 * 3) / 100) * msrp;
          let insurance = ((msrp / 50) + 500) * 3;
          let fuel = 2200 * 3;
          let totalCost = depreciation + insurance + fuel;
      
          cardTitle.textContent = "After 3 Years"
          li1.textContent = manufacturerSelect;
          li2.textContent = msrp;
          li3.textContent = depreciation;
          li4.textContent = insurance;
          li5.textContent = engineType;
          li6.textContent = fuel;
          li7.textContent = totalCost;
      
          cardArea.appendChild(card);
          card.appendChild(cardContent);
          cardContent.appendChild(content);
          content.appendChild(listEl);
          listEl.appendChild(li1);
          listEl.appendChild(li2);
          listEl.appendChild(li3);
          listEl.appendChild(li4);
          listEl.appendChild(li5);
          listEl.appendChild(li6);
          listEl.appendChild(li7);
  } else if (manufacturerSelect === "Volvo" && engineType === "Electrtic" && msrp == 1){
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
          let depreciation = ((14 * 3) / 100) * msrp;
          let insurance = ((msrp / 50) + 500) * 3;
          let fuel = 1300 * 3;
          let totalCost = depreciation + insurance + fuel;
      
          cardTitle.textContent = "After 3 Years"
          li1.textContent = manufacturerSelect;
          li2.textContent = msrp;
          li3.textContent = depreciation;
          li4.textContent = insurance;
          li5.textContent = engineType;
          li6.textContent = fuel;
          li7.textContent = totalCost;
      
          cardArea.appendChild(card);
          card.appendChild(cardContent);
          cardContent.appendChild(content);
          content.appendChild(listEl);
          listEl.appendChild(li1);
          listEl.appendChild(li2);
          listEl.appendChild(li3);
          listEl.appendChild(li4);
          listEl.appendChild(li5);
          listEl.appendChild(li6);
          listEl.appendChild(li7);
  } else if (manufacturerSelect === "Volvo" && engineType === "Hybrid" && msrp == 1){
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
          let depreciation = ((14 * 3) / 100) * msrp;
          let insurance = ((msrp / 50) + 500) * 3;
          let fuel = 400 * 3;
          let totalCost = depreciation + insurance + fuel;
      
          cardTitle.textContent = "After 3 Years"
          li1.textContent = manufacturerSelect;
          li2.textContent = msrp;
          li3.textContent = depreciation;
          li4.textContent = insurance;
          li5.textContent = engineType;
          li6.textContent = fuel;
          li7.textContent = totalCost;
      
          cardArea.appendChild(card);
          card.appendChild(cardContent);
          cardContent.appendChild(content);
          content.appendChild(listEl);
          listEl.appendChild(li1);
          listEl.appendChild(li2);
          listEl.appendChild(li3);
          listEl.appendChild(li4);
          listEl.appendChild(li5);
          listEl.appendChild(li6);
          listEl.appendChild(li7);
  } else if (manufacturerSelect === "Lexus" && engineType === "Gas" && msrp == 1) {
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
      let depreciation = ((12 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 2400 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Lexus" && engineType === "Electrtic" && msrp == 1){
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
      let depreciation = ((12 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 1300 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Lexus" && engineType === "Hybrid" && msrp == 1){
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
      let depreciation = ((12 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 400 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Mitsubishi" && engineType === "Gas" && msrp == 1) {
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
      let depreciation = ((13 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 2000 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Mitsubishi" && engineType === "Electrtic" && msrp == 1){
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
      let depreciation = ((13 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 1200 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Mitsubishi" && engineType === "Hybrid" && msrp == 1){
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
      let depreciation = ((13 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 400 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Mini" && engineType === "Gas" && msrp == 1) {
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
      let depreciation = ((13 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 1800 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Mini" && engineType === "Electrtic" && msrp == 1){
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
      let depreciation = ((13 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 1100 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Mini" && engineType === "Hybrid" && msrp == 1){
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
      let depreciation = ((13 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 400 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Lincoln" && engineType === "Gas" && msrp == 1) {
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
      let depreciation = ((14 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 2900 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
      content.appendChild(listEl);
      listEl.appendChild(li1);
      listEl.appendChild(li2);
      listEl.appendChild(li3);
      listEl.appendChild(li4);
      listEl.appendChild(li5);
      listEl.appendChild(li6);
      listEl.appendChild(li7);
  } else if (manufacturerSelect === "Lincoln" && engineType === "Electrtic" && msrp == 1){
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
        let depreciation = ((14 * 3) / 100) * msrp;
        let insurance = ((msrp / 50) + 500) * 3;
        let fuel = 1350 * 3;
        let totalCost = depreciation + insurance + fuel;
    
        cardTitle.textContent = "After 3 Years"
        li1.textContent = manufacturerSelect;
        li2.textContent = msrp;
        li3.textContent = depreciation;
        li4.textContent = insurance;
        li5.textContent = engineType;
        li6.textContent = fuel;
        li7.textContent = totalCost;
    
        cardArea.appendChild(card);
        card.appendChild(cardContent);
        cardContent.appendChild(content);
        content.appendChild(listEl);
        listEl.appendChild(li1);
        listEl.appendChild(li2);
        listEl.appendChild(li3);
        listEl.appendChild(li4);
        listEl.appendChild(li5);
        listEl.appendChild(li6);
        listEl.appendChild(li7);
  } else if (manufacturerSelect === "Lincoln" && engineType === "Hybrid" && msrp == 1){
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
      let depreciation = ((14 * 3) / 100) * msrp;
      let insurance = ((msrp / 50) + 500) * 3;
      let fuel = 500 * 3;
      let totalCost = depreciation + insurance + fuel;
  
      cardTitle.textContent = "After 3 Years"
      li1.textContent = manufacturerSelect;
      li2.textContent = msrp;
      li3.textContent = depreciation;
      li4.textContent = insurance;
      li5.textContent = engineType;
      li6.textContent = fuel;
      li7.textContent = totalCost;
  
      cardArea.appendChild(card);
      card.appendChild(cardContent);
      cardContent.appendChild(content);
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