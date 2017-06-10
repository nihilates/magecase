//USER DATA SCHEMA

let userTable = {
  userID: Number, //Automatically generated
  username: String, //username chosen at registration
  password: String, //password chosen at registration
  email: String, //email associated with the user
  //premiumAcc: Boolean, //optional paid account status
  userIcon: String, //path to user icon image
  charCount: Number, //count the number of created character instances. Possibly limit based on account type
  gameCount: Number //count the number of created game instances. Possibly limit based on account type
}

let gamesTable = { //a game is a network of characters who inventories are synchronized, and controlled by the game creator
  gameID: Number, //Automatically generated
  user: Number, //Foreign-Key reference to userTable; this userID will be the gamemaster in control of the game
  gameName: String, //the given name of a game created by a user
  isStrict: Boolean, //is the 'Strict Mode' option enabled for this game?
  currSystem: Number //Foreign-Key reference to currencySystemTable
}

let characterTable = { //users can create a character who will have an instance
  charID: Number, //Automatically generated
  user: Number, //Foreign-Key reference to userTable; the user who created this character
  charName: String, //the chosen name of a given character
  currency: Number, //Foreign-Key reference to currencySystemTable; deliniates the currency type used by this character
  game: Number //Foreign-Key reference to gamesTable; if the characer is not enrolled in a game, this will be null
}

//ITEM & CURRENCY SCHEMA

let currencySystemTable = { //an example currency system is astralDiamond/platinum/gold/silver/copper. Users can create custom version of this.
  systemID: Number, //Automatically generated
  systemName: String, //name of a given currency system
  isCustom: Boolean, //if the system is custom built or standard
  user: Number //Foreign-Key reference to userTable; for the purpose of users tracking their own custom systems
}

let currencyUnitTable = { //each unit of currency (such as "silver" is a unit of the above example currency) and its value
  unitID: Number, //Automatically generated
  currSystem: Number, //Foreign-Key reference to currencySystemTable
  unitName: String, //name of a given currency unit
  unitValue: Number//, //value of a given currency unit; possibly a decimal to differentiate subvalue (10 silver = 1 gold)
  //unitWeight: Number //optional currency unit weight. Possible toggle option
}

let itemTypeTable = { //each physical item will belong to a type. This will allow better filtering as well as unique shop generation
  typeID: Number, //Automatically generated
  typeName: String //name of a given item type, such as "weapon" or "consumable"
}

let itemSubtypeTable = {
  subID: Number, //Automatically generated
  subName: String, //name of the subtype
  mainType: Number, //Foreign-Key reference to itemTypeTable
  icon: String //Path to item icon image
}

let itemTable = { //the details around a given item entry
  itemID: Number, //Automatically generated
  isCustom: Boolean, //if the item was created as a custom item, it must be logged as such
  user: Number, //Foreign-Key reference to userTable
  itemName: String, //name of a given item
  type: Number, //Foreign-Key reference to itemTypeTable
  subType: String, //optional subtype for an item. Example: (type = weapon) && (subType = one-handed sword)
  itemValue: Number, //the average market value of a given item
  itemWeight: Number, //the weight of a given item
  description: String, //the description of an item
  diceType: Number, //if the item uses dice, this is the number of sides to that dice. Otherwise, null
  diceCount: Number //if the item uses dice, this is how many are inolved when the item is used. Otherwise, null
}

let assetTypeTable = { //each asset will have an associated type
  typeID: Number, //Automatically generated
  typeName: String //name of a given asset, such as "real estate" or "vehicle"
}

let assetTable = { //things that are either too big or too abstract for a given character to carry, but nevertheless own
  assetID: Number, //Automatically generated
  assetName: String, //name of a given asset
  assetType: Number, //Foreign-Key reference to assetTypeTable
  assetValue: Number, //the value of a given asset
}

let inventoryTable = { //this is the table that unites a character with the items assigned to their inventory
  inventoryID: Number, //Automatically generated
  char: Number, //Foreign-Key reference to characterTable
  entryType: String, //type identifier for a given inventory entry, such as "currency", "item" or "asset"
  entry: Number, //Foreign-Key reference to currencyUnitTable, itemTable, or assetTable
  entryCount: Number //how many instances of a given entry does the character have, such as gold pieces or arrows
}

//SHOPS SCHEMA

let shopTypesTable = { //shops belong to different types, such as "Weapons", "Alchemy". Users may also define their own type of shop
  typeID: Number, //Automatically generated
  isCustom: Boolean, //track whether or not a shop type is a custom entry
  user: Number, //Foreign-Key reference to userTable; associated with the user who created this custom shop. Otherwise, null
  typeName: String //name of a given shop type
}

let shopsTable = { //collection of shops which GMs can customize and players can purchase from
  shopID: Number, //Automatically generated
  user: Number, //Foreign-Key reference to the userTable, assigned to the userID that created the game instance
  game: Number, //Foreign-Key reference to the gamesTable, tracking the game instance this has been assigned to
  shopName: String, //name of a given shop, such as "Biff Meatwagon's Cutlery Shoppe"
  shopType: Number //type of a given shop
}

let shopInventoryTable = {
  shopInvID: Number,//Automatically generated
  shop: Number, //Foreign-Key reference to the shopsTable
  currSystem: Number, //Foreign-Key reference to currencySystem table
  entry: Number, //Foreign-Key reference to currencyUnitTable, itemTable
  entryCount: Number //how many instances of a given entry does the shop have in stock, such as gold pieces or arrows.
}