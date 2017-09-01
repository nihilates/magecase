//Default Currency Systems for each supported game format (D&D3.5, D&D4, D&D5, and Pathfinder)
//All unit values are measured by their relation to a single gold piece

//Currency Systems
module.exports.systems = [
  {
    // id: 1,
    system_name: 'D&D Fifth Edition'
  },
  {
    // id: 2,
    system_name: 'Pathfinder'
  }
];

//Currency Units
//References to the ID numbers of the corresponding currency systems
const fifthEditionId = 1;

module.exports.units = [
  //Fifth Edition
  {
    // id: 1,
    unit_name: 'Copper',
    unit_value: 0.01,
    currencySystemId: fifthEditionId
  },
  {
    // id: 2,
    unit_name: 'Silver',
    unit_value: 0.1,
    currencySystemId: fifthEditionId
  },
  {
    // id: 3,
    unit_name: 'Electrum',
    unit_value: 0.5,
    currencySystemId: fifthEditionId
  },
  {
    // id: 4,
    unit_name: 'Gold',
    unit_value: 1,
    currencySystemId: fifthEditionId
  },
  {
    // id: 5,
    unit_name: 'Platinum',
    unit_value: 10,
    currencySystemId: fifthEditionId
  }
];