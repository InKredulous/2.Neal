// Extend the base Actor class to include derived data logic
class NealActor extends Actor {
  prepareDerivedData() {
    super.prepareDerivedData();

    const actorData = this.system;
    const strength = parseFloat(actorData.attributes?.strength?.value) || 0;

    let attackBonus = 0;
    let damageBonus = 0;
    let weightAllow = 0;
    let maxPress = 0;
    let openDoors = 0;
    let bendBars = 0;
    let encBase = 0;
    let encLight = 0;
    let encMedium = 0;
    let encHeavy = 0;
    let encSevere = 0;

    if (strength < 2) {
      attackBonus = -5;
      damageBonus = -4;
      weightAllow = 1; encLight = 1; encMedium = 2; encHeavy = 2;
      maxPress = 3; openDoors = 1; bendBars = 0; encBase = 1; encSevere = maxPress;
    } else if (strength < 3) {
      attackBonus = -3;
      damageBonus = -2;
      weightAllow = 1; encLight = 2; encMedium = 3; encHeavy = 4;
      maxPress = 5; openDoors = 1; bendBars = 0; encBase = 1; encSevere = maxPress;
    }
    // TODO: Add remaining strength ranges here...

    actorData.attributes.strength.attackBonus = attackBonus;
    actorData.attributes.strength.damageBonus = damageBonus;
    actorData.attributes.strength.weightAllow = weightAllow;
    actorData.attributes.strength.maxPress = maxPress;
    actorData.attributes.strength.openDoors = openDoors;
    actorData.attributes.strength.bendBars = bendBars;
    actorData.attributes.strength.encBase = encBase;
    actorData.attributes.strength.encLight = encLight;
    actorData.attributes.strength.encMedium = encMedium;
    actorData.attributes.strength.encHeavy = encHeavy;
    actorData.attributes.strength.encSevere = encSevere;
  }
}

// Extend the sheet
class CharacterSheet2Neal extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["2neal", "sheet", "actor", "character"],
      template: "systems/2Neal/templates/actors/character-sheet.hbs",
      width: 600,
      height: 400
    });
  }

  getData(options) {
    const context = super.getData(options);
    return context;
  }

  activateListeners(html) {
    super.activateListeners(html);
    // Add listeners here if needed later
  }
}

Hooks.once("init", function () {
  console.log("2.Neal | Initializing custom system");

  CONFIG.Actor.documentClass = NealActor;

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("2neal", CharacterSheet2Neal, {
    types: ["character"],
    makeDefault: true
  });

  console.log("2.Neal | Custom character sheet registered");
});
