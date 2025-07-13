import { NealActor } from "./character-sheet/actor.js";
import { CharacterSheet2Neal } from "./character-sheet/character-sheet.js";
import { ItemSheet2Neal } from "./item/item-sheet.js";

// Compatibility handling for new namespaced API
const BaseActorSheet = foundry?.applications?.sheets?.ActorSheet ?? ActorSheet;
const ActorRegistry = foundry?.documents?.collections?.Actors ?? Actors;
const ItemRegistry = foundry?.documents?.collections?.Items ?? Items;
const BaseItemSheet = foundry?.applications?.sheets?.ItemSheet ?? ItemSheet;

Hooks.once("init", async function () {
  console.log("2.Neal | Initializing system");

  CONFIG.Actor.documentClass = NealActor;

  // Unregister the core sheet and register the custom one using the safe reference
  ActorRegistry.unregisterSheet("core", BaseActorSheet);
  ActorRegistry.registerSheet("2neal", CharacterSheet2Neal, {
    types: ["PC"],
    makeDefault: true
  });
 // Register item sheet
  ItemRegistry.unregisterSheet("core", BaseItemSheet);
  ItemRegistry.registerSheet("2neal", ItemSheet2Neal, {
    label: "2Neal Item Sheet",
    types: ["Armor", "Weapon", "Gear", "Class"],
    makeDefault: true
  })

  
  console.log("2.Neal | Custom character and item sheets registered");
});
