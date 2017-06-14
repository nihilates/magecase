//Default Currency System from Dungeons & Dragons 5th Edition
//All unit values are measured by their relation to a single gold piece

const currencyId = 1; //the default ID number for the corresponding entry on the CurrencySystems table

module.exports.units = [
  {
    unit_name: 'Copper',
    unit_value: 0.01,
    currencyId: currencyId
  },
  {
    unit_name: 'Silver',
    unit_value: 0.1,
    currencyId: currencyId
  },
  {
    unit_name: 'Electrum',
    unit_value: 0.5,
    currencyId: currencyId
  },
  {
    unit_name: 'Gold',
    unit_value: 1,
    currencyId: currencyId
  },
  {
    unit_name: 'Platinum',
    unit_value: 10,
    currencyId: currencyId
  }
];