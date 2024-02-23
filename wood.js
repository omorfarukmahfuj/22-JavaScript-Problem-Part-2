function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairTotalQuantity = chairQuantity * perChairWood;
  const tableTotalQuantity = tableQuantity * perTableWood;
  const bedTotalQuantity = bedQuantity * perBedWood;

  const totalWood = chairTotalQuantity + tableTotalQuantity + bedTotalQuantity;
  return totalWood;
}

console.log(woodQuantity(2, 1, 1));