import { NealActor } from "./character-sheet/actor.js";
import { CharacterSheet2Neal } from "./character-sheet/character-sheet.js";

Hooks.once("init", async function () {
  console.log("2.Neal | Initializing system");

  // Register the custom Actor class
  CONFIG.Actor.documentClass = NealActor;

  // Unregister default sheet and register our custom sheet
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("2neal", CharacterSheet2Neal, {
    types: ["PC"], // This must match your template.json actor type
    makeDefault: true
  });

  console.log("2.Neal | Custom actor and character sheet registered");
});
