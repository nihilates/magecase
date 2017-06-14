//D&D 5e Mounts and Animal assets
const type = {
  mount: 4,
  pet: 5
};

module.exports.assets = [
  {
    asset_name: 'Camel',
    typeId: type.mount,
    value: 50,
    properties: 'Speed: 50 ft.',
    description: '480 lb. carrying capacity'
  },
  {
    asset_name: 'Donkey/Mule',
    typeId: type.mount,
    value: 8,
    properties: 'Speed: 40 ft.',
    description: '420 lb. carrying capacity'
  },
  {
    asset_name: 'Elephant',
    typeId: type.mount,
    value: 200,
    properties: 'Speed: 40 ft.',
    description: '1,320 lb. carrying capacity'
  },
  {
    asset_name: 'Horse, draft',
    typeId: type.mount,
    value: 50,
    properties: 'Speed: 40 ft.',
    description: '540 lb. carrying capacity'
  },
  {
    asset_name: 'Horse, riding',
    typeId: type.mount,
    value: 75,
    properties: 'Speed: 60 ft.',
    description: '480 lb. carrying capacity'
  },
  {
    asset_name: 'Mastiff',
    typeId: type.pet,
    value: 25,
    properties: 'Speed: 40 ft.',
    description: '195 lb. carrying capacity'
  },
  {
    asset_name: 'Pony',
    typeId: type.mount,
    value: 30,
    properties: 'Speed: 40 ft.',
    description: '255 lb. carrying capacity'
  },
  {
    asset_name: 'Warhorse',
    typeId: type.mount,
    value: 400,
    properties: 'Speed: 60 ft.',
    description: '540 lb. carrying capacity'
  },
];