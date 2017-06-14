//All default item types and subtypes

//Item Main Types
module.exports.main = [
  { type_name: 'Equipment' }, //itemTypeId = 1
  { type_name: 'Consumable' }, //itemTypeId = 2
  { type_name: 'Ammunition'} //itemTypeId = 3
];

//Item Sub Types
module.exports.sub = [
  {
    //id: 1,
    sub_name: 'Simple Melee Weapon',
    itemTypeId: 1 // Equipment
  },
  {
    //id: 2,
    sub_name: 'Simple Ranged Weapon',
    itemTypeId: 1 // Equipment
  },
  {
    //id: 3,
    sub_name: 'Martial Melee Weapon',
    itemTypeId: 1 // Equipment
  },
  {
    //id: 4,
    sub_name: 'Martial Ranged Weapon',
    itemTypeId: 1 // Equipment
  },
  {
    //id: 5,
    sub_name: 'Light Armor',
    itemTypeId: 1 // Equipment
  },
  {
    //id: 6,
    sub_name: 'Medium Armor',
    itemTypeId: 1 // Equipment
  },
  {
    //id: 7,
    sub_name: 'Heavy Armor',
    itemTypeId: 1 // Equipment
  },
  {
    //id: 8,
    sub_name: 'Shield',
    itemTypeId: 1 // Equipment
  },
  {
    //id: 9,
    sub_name: 'Potion',
    itemTypeId: 2 // Consumable
  },
  {
    //id: 10,
    sub_name: 'Scroll',
    itemTypeId: 2 // Consumable
  },
  {
    //id: 11,
    sub_name: 'Arrow',
    itemTypeId: 3 // Ammunition
  },
  {
    //id: 12,
    sub_name: 'Dart',
    itemTypeId: 3 // Ammunition
  },
];