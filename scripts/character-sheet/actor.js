export class NealActor extends Actor {
prepareDerivedData() {
  super.prepareDerivedData();

  // Only run these methods for PCs
  if (this.type !== "PC") return;

  const system = this.system;
  const attrs = system.attributes ?? {};

  this._prepareStrength(attrs.strength ?? {});
  this._prepareDexterity(attrs.dexterity ?? {});
  this._prepareConstitution(attrs.constitution ?? {});
  this._prepareIntelligence(attrs.intelligence ?? {});
  this._prepareWisdom(attrs.wisdom ?? {});
  this._prepareCharisma(attrs.charisma ?? {});
  this._preparePerception(attrs.perception ?? {});
}


_prepareStrength(attr) {
 const strength = parseFloat(attr.value) || 0;

  let attackBonus = 0;
  let damageBonus = 0;
  let weightAllow = 0;
  let maxPress = 0;
  let openDoors = 0;
  let bendBars = 0;
  let encLight = 0;
  let encMedium = 0;
  let encHeavy = 0;

  if (strength < 2) {
    attackBonus = -5;
    damageBonus = -4;
    weightAllow = 1; encLight = 1; encMedium = 2; encHeavy = 2;
    maxPress = 3; openDoors = 1; bendBars = 0;
  } else if (strength < 3) {
    attackBonus = -3;
    damageBonus = -2;
    weightAllow = 1; encLight = 2; encMedium = 3; encHeavy = 4;
    maxPress = 5; openDoors = 1; bendBars = 0;
  } else if (strength < 4) {
    attackBonus = -3; damageBonus = -1;
    weightAllow = 5; encLight = 6; encMedium = 7; encHeavy = 9;
    maxPress = 10; openDoors = 2; bendBars = 0;
  } else if (strength < 6) {
    attackBonus = -2; damageBonus = -1;
    weightAllow = 10; encLight = 13; encMedium = 16; encHeavy = 19;
    maxPress = 25; openDoors = 3; bendBars = 0;
  } else if (strength < 8) {
    attackBonus = -1; damageBonus = 0;
    weightAllow = 20; encLight = 29; encMedium = 38; encHeavy = 46;
    maxPress = 55; openDoors = 4; bendBars = 0;
  } else if (strength < 10) {
    attackBonus = 0; damageBonus = 0;
    weightAllow = 35; encLight = 50; encMedium = 65; encHeavy = 80;
    maxPress = 90; openDoors = 5; bendBars = 1;
  } else if (strength < 12) {
    attackBonus = 0; damageBonus = 0;
    weightAllow = 40; encLight = 58; encMedium = 76; encHeavy = 96;
    maxPress = 115; openDoors = 6; bendBars = 2;
  } else if (strength < 14) {
    attackBonus = 0; damageBonus = 0;
    weightAllow = 45; encLight = 69; encMedium = 93; encHeavy = 117;
    maxPress = 140; openDoors = 7; bendBars = 4;
  } else if (strength < 16) {
    attackBonus = 0; damageBonus = 0;
    weightAllow = 55; encLight = 86; encMedium = 115; encHeavy = 145;
    maxPress = 170; openDoors = 8; bendBars = 7;
  } else if (strength < 17) {
    attackBonus = 0; damageBonus = 1;
    weightAllow = 70; encLight = 100; encMedium = 130; encHeavy = 160;
    maxPress = 195; openDoors = 9; bendBars = 10;
  } else if (strength < 18) {
    attackBonus = 1; damageBonus = 1;
    weightAllow = 85; encLight = 121; encMedium = 157; encHeavy = 193;
    maxPress = 220; openDoors = 10; bendBars = 13;
  } else if (strength === 18) {
    attackBonus = 1; damageBonus = 2;
    weightAllow = 110; encLight = 149; encMedium = 188; encHeavy = 227;
    maxPress = 255; openDoors = 11; bendBars = 16;
  } else if (strength > 18 && strength <= 18.5) {
    attackBonus = 1; damageBonus = 3;
    weightAllow = 135; encLight = 174; encMedium = 213; encHeavy = 252;
    maxPress = 280; openDoors = 12; bendBars = 20;
  } else if (strength > 18.5 && strength <= 18.75) {
    attackBonus = 2; damageBonus = 3;
    weightAllow = 160; encLight = 199; encMedium = 238; encHeavy = 277;
    maxPress = 305; openDoors = 13; bendBars = 25;
  } else if (strength > 18.75 && strength <= 18.9) {
    attackBonus = 2; damageBonus = 4;
    weightAllow = 185; encLight = 224; encMedium = 263; encHeavy = 302;
    maxPress = 330; openDoors = 14; bendBars = 30;
  } else if (strength > 18.9 && strength <= 18.99) {
    attackBonus = 2; damageBonus = 5;
    weightAllow = 235; encLight = 274; encMedium = 313; encHeavy = 352;
    maxPress = 380; openDoors = 15; bendBars = 35;
  } else if (strength > 18.99 && strength < 19) {
    attackBonus = 3; damageBonus = 6;
    weightAllow = 335; encLight = 374; encMedium = 413; encHeavy = 452;
    maxPress = 480; openDoors = 16; bendBars = 40;
  } else if (strength === 19) {
    attackBonus = 3; damageBonus = 7;
    weightAllow = 485; encLight = 524; encMedium = 563; encHeavy = 601;
    maxPress = 640; openDoors = 16; bendBars = 50;
  } else if (strength === 20) {
    attackBonus = 3; damageBonus = 8;
    weightAllow = 535; encLight = 576; encMedium = 618; encHeavy = 659;
    maxPress = 700; openDoors = 17; bendBars = 60;
  } else if (strength === 21) {
    attackBonus = 4; damageBonus = 9;
    weightAllow = 635; encLight = 679; encMedium = 723; encHeavy = 766;
    maxPress = 810; openDoors = 17; bendBars = 70;
  } else if (strength === 22) {
    attackBonus = 4; damageBonus = 10;
    weightAllow = 785; encLight = 831; encMedium = 877; encHeavy = 924;
    maxPress = 970; openDoors = 18; bendBars = 80;
  } else if (strength === 23) {
    attackBonus = 5; damageBonus = 11;
    weightAllow = 935; encLight = 984; encMedium = 1033; encHeavy = 1081;
    maxPress = 1130; openDoors = 18; bendBars = 90;
  } else if (strength === 24) {
    attackBonus = 6; damageBonus = 12;
    weightAllow = 1235; encLight = 1286; encMedium = 1337; encHeavy = 1389;
    maxPress = 1440; openDoors = 19; bendBars = 95;
  } else if (strength >= 25) {
    attackBonus = 7; damageBonus = 14;
    weightAllow = 1535; encLight = 1589; encMedium = 1643; encHeavy = 1696;
    maxPress = 1750; openDoors = 19; bendBars = 99;
  }

  // Save calculated values to the system
  attr.attackBonus = attackBonus;
  attr.damageBonus = damageBonus;
  attr.weightAllow = weightAllow;
  attr.maxPress = maxPress;
  attr.openDoors = openDoors;
  attr.bendBars = bendBars;
  attr.encBase = weightAllow;
  attr.encLight = encLight;
  attr.encMedium = encMedium;
  attr.encHeavy = encHeavy;
  attr.encSevere = maxPress;
}
_prepareDexterity(attr) {
 const dex = parseFloat(attr.value) || 0;

  let dexAC = 0;
  let attackBonus = 0;

  if (dex < 2) {
    attackBonus = -6;
    dexAC = -5;
  } else if (dex < 3) {
    attackBonus = -4;
    dexAC = -5;
  } else if (dex < 4) {
    attackBonus = -3;
    dexAC = -4;
  } else if (dex < 5) {
    attackBonus = -2;
    dexAC = -3;
  } else if (dex < 6) {
    attackBonus = -1;
    dexAC = -2;
  } else if (dex < 7) {
    attackBonus = 0;
    dexAC = -1;
  } else if (dex < 15) {
    attackBonus = 0;
    dexAC = 0;
  } else if (dex < 16) {
    attackBonus = 0;
    dexAC = 1;
  } else if (dex < 17) {
    attackBonus = 1;
    dexAC = 2;
  } else if (dex < 18) {
    attackBonus = 2;
    dexAC = 3; 
  } else if (dex < 19) { 
    attackBonus = 2;
    dexAC = 4;
  } else if (dex < 21) {
    attackBonus = 3;
    dexAC = 4;
  } else if (dex < 24) {
    attackBonus = 4;
    dexAC = 5;
  } else if (dex >= 24) {
    attackBonus = 5;
    dexAC = 6;
  }

  attr.dexAC = dexAC;
  attr.attackBonus = attackBonus;
}
_prepareConstitution(attr) {
  const con = parseFloat(attr.value) || 0;

  let hpBonus = 0;
  let systemShock = 0;
  let saveBonus = 0;
  let regeneration = "None";

  if (con < 2) {
    hpBonus = -3; systemShock = 25; saveBonus = -2; regeneration = "None";
  } else if (con < 3) {
    hpBonus = -2; systemShock = 30; saveBonus = -1; regeneration = "None";
  } else if (con < 4) {
    hpBonus = -2; systemShock = 35; saveBonus = 0;  regeneration = "None";
  } else if (con < 5) {
    hpBonus = -1; systemShock = 40; saveBonus = 0;  regeneration = "None";
  } else if (con < 6) {
    hpBonus = -1; systemShock = 45; saveBonus = 0;  regeneration = "None";
  } else if (con < 7) {
    hpBonus = -1; systemShock = 50; saveBonus = 0;  regeneration = "None";
  } else if (con < 8) {
    hpBonus = 0;  systemShock = 55; saveBonus = 0;  regeneration = "None";
  } else if (con < 9) {
    hpBonus = 0;  systemShock = 60; saveBonus = 0;  regeneration = "None";
  } else if (con < 10) {
    hpBonus = 0;  systemShock = 65; saveBonus = 0;  regeneration = "None";
  } else if (con < 11) {
    hpBonus = 0;  systemShock = 70; saveBonus = 0;  regeneration = "None";
  } else if (con < 12) {
    hpBonus = 0;  systemShock = 75; saveBonus = 0;  regeneration = "None";
  } else if (con < 13) {
    hpBonus = 0;  systemShock = 80; saveBonus = 0;  regeneration = "None";
  } else if (con < 14) {
    hpBonus = 0;  systemShock = 85; saveBonus = 0;  regeneration = "None";
  } else if (con < 15) {
    hpBonus = 0;  systemShock = 88; saveBonus = 0;  regeneration = "None";
  } else if (con < 16) {
    hpBonus = 1;  systemShock = 90; saveBonus = 0;  regeneration = "None";
  } else if (con < 17) {
    hpBonus = 2;  systemShock = 95; saveBonus = 0;  regeneration = "None";
  } else if (con < 18) {
    hpBonus = 3;  systemShock = 97; saveBonus = 0;  regeneration = "None";
  } else if (con < 19) {
    hpBonus = 4;  systemShock = 99; saveBonus = 0;  regeneration = "None";
  } else if (con < 20) {
    hpBonus = 5;  systemShock = 99; saveBonus = 1;  regeneration = "None";
  } else if (con < 21) {
    hpBonus = 5;  systemShock = 99; saveBonus = 1;  regeneration = "1/6 turns";
  } else if (con < 22) {
    hpBonus = 6;  systemShock = 99; saveBonus = 2;  regeneration = "1/5 turns";
  } else if (con < 23) {
    hpBonus = 6;  systemShock = 99; saveBonus = 2;  regeneration = "1/4 turns";
  } else if (con < 24) {
    hpBonus = 6;  systemShock = 99; saveBonus = 3;  regeneration = "1/3 turns";
  } else if (con < 25) {
    hpBonus = 7;  systemShock = 99; saveBonus = 3;  regeneration = "1/2 turns";
  } else {
    hpBonus = 7;  systemShock = 99; saveBonus = 4;  regeneration = "1/1 turns";
  }

  attr.hpBonus = hpBonus;
  attr.systemShock = systemShock;
  attr.saveBonus = saveBonus;
  attr.regeneration = regeneration;
}
_prepareIntelligence(attr) {
  const int = parseFloat(attr.value) || 0;

  let languagesMax = 0;
  let spellLevelMax = 0;
  let spellLearnChance = 0;
  let spellNumberMax = 0;

  if (int < 2) {
    languagesMax = 0; spellLevelMax = 0; spellLearnChance = 0; spellNumberMax = 0;
  } else if (int < 9) {
    languagesMax = 1; spellLevelMax = 0; spellLearnChance = 0; spellNumberMax = 0;
  } else if (int < 10) {
    languagesMax = 2; spellLevelMax = 4; spellLearnChance = 35; spellNumberMax = 6;
  } else if (int < 11) {
    languagesMax = 2; spellLevelMax = 5; spellLearnChance = 40; spellNumberMax = 7;
  } else if (int < 12) {
    languagesMax = 2; spellLevelMax = 5; spellLearnChance = 45; spellNumberMax = 7;
  } else if (int < 13) {
    languagesMax = 3; spellLevelMax = 6; spellLearnChance = 50; spellNumberMax = 7;
  } else if (int < 14) {
    languagesMax = 3; spellLevelMax = 6; spellLearnChance = 55; spellNumberMax = 9;
  } else if (int < 15) {
    languagesMax = 4; spellLevelMax = 7; spellLearnChance = 60; spellNumberMax = 9;
  } else if (int < 16) {
    languagesMax = 4; spellLevelMax = 7; spellLearnChance = 65; spellNumberMax = 11;
  } else if (int < 17) {
    languagesMax = 5; spellLevelMax = 8; spellLearnChance = 70; spellNumberMax = 11;
  } else if (int < 18) {
    languagesMax = 6; spellLevelMax = 8; spellLearnChance = 75; spellNumberMax = 14;
  } else if (int < 19) {
    languagesMax = 7; spellLevelMax = 9; spellLearnChance = 85; spellNumberMax = 18;
  } else if (int < 20) {
    languagesMax = 8; spellLevelMax = 9; spellLearnChance = 95; spellNumberMax = 99;
  } else if (int < 21) {
    languagesMax = 9; spellLevelMax = 9; spellLearnChance = 96; spellNumberMax = 99;
  } else if (int < 22) {
    languagesMax = 10; spellLevelMax = 9; spellLearnChance = 97; spellNumberMax = 99;
  } else if (int < 23) {
    languagesMax = 11; spellLevelMax = 9; spellLearnChance = 98; spellNumberMax = 99;
  } else if (int < 24) {
    languagesMax = 12; spellLevelMax = 9; spellLearnChance = 99; spellNumberMax = 99;
  } else if (int < 25) {
    languagesMax = 15; spellLevelMax = 9; spellLearnChance = 100; spellNumberMax = 99;
  } else {
    languagesMax = 20; spellLevelMax = 9; spellLearnChance = 100; spellNumberMax = 99;
  }

  attr.languagesMax = languagesMax;
  attr.spellLevelMax = spellLevelMax;
  attr.spellLearnChance = spellLearnChance;
  attr.spellNumberMax = spellNumberMax;
}
_prepareWisdom(attr) {
  const willpower = parseFloat(attr.value) || 0;

  let saveBonus = 0;
  let bonusSpells = "0";
  let spellFailure = 0;

  if (willpower < 2) {
    saveBonus = -6;
    bonusSpells = "0";
    spellFailure = 80;
  } else if (willpower < 3) {
    saveBonus = -4;
    bonusSpells = "0";
    spellFailure = 60;
  } else if (willpower < 4) {
    saveBonus = -3;
    bonusSpells = "0";
    spellFailure = 50;
  } else if (willpower < 5) {
    saveBonus = -2;
    bonusSpells = "0";
    spellFailure = 45;
  } else if (willpower < 6) {
    saveBonus = -1;
    bonusSpells = "0";
    spellFailure = 40;
  } else if (willpower < 7) {
    saveBonus = -1;
    bonusSpells = "0";
    spellFailure = 35;
  } else if (willpower < 8) {
    saveBonus = -1;
    bonusSpells = "0";
    spellFailure = 30;
  } else if (willpower < 9) {
    saveBonus = 0;
    bonusSpells = "0";
    spellFailure = 25;
  } else if (willpower < 10) {
    saveBonus = 0;
    bonusSpells = "0";
    spellFailure = 20;
  } else if (willpower < 11) {
    saveBonus = 0;
    bonusSpells = "0";
    spellFailure = 15;
  } else if (willpower < 12) {
    saveBonus = 0;
    bonusSpells = "0";
    spellFailure = 10;
  } else if (willpower < 13) {
    saveBonus = 0;
    bonusSpells = "0";
    spellFailure = 5;
  } else if (willpower < 14) {
    saveBonus = 0;
    bonusSpells = "1st x1";
    spellFailure = 0;
  } else if (willpower < 15) {
    saveBonus = 0;
    bonusSpells = "1st x2";
    spellFailure = 0;
  } else if (willpower < 16) {
    saveBonus = 1;
    bonusSpells = "1st x2, 2nd x1";
    spellFailure = 0;
  } else if (willpower < 17) {
    saveBonus = 2;
    bonusSpells = "1st x2, 2nd x2";
    spellFailure = 0;
  } else if (willpower < 18) {
    saveBonus = 3;
    bonusSpells = "1st x2, 2nd x2, 3rd x1";
    spellFailure = 0;
  } else if (willpower < 19) {
    saveBonus = 4;
    bonusSpells = "1st x2, 2nd x2, 3rd x1, 4th x1";
    spellFailure = 0;
  } else if (willpower < 20) {
    saveBonus = 4;
    bonusSpells = "1st x3, 2nd x2, 3rd x2, 4th x1";
    spellFailure = 0;
  } else if (willpower < 21) {
    saveBonus = 4;
    bonusSpells = "1st x3, 2nd x3, 3rd x2, 4th x2";
    spellFailure = 0;
  } else if (willpower < 22) {
    saveBonus = 4;
    bonusSpells = "1st x3, 2nd x3, 3rd x3, 4th x2, 5th x1";
    spellFailure = 0;
  } else if (willpower < 23) {
    saveBonus = 4;
    bonusSpells = "1st x3, 2nd x3, 3rd x3, 4th x3, 5th x2";
    spellFailure = 0;
  } else if (willpower < 24) {
    saveBonus = 4;
    bonusSpells = "1st x4, 2nd x3, 3rd x3, 4th x3, 5th x2, 6th x1";
    spellFailure = 0;
  } else if (willpower < 25) {
    saveBonus = 4;
    bonusSpells = "1st x4, 2nd x3, 3rd x3, 4th x3, 5th x3, 6th x2";
    spellFailure = 0;
  } else if (willpower >= 25) {
    saveBonus = 4;
    bonusSpells = "1st x4, 2nd x3, 3rd x3, 4th x3, 5th x3, 6th x3, 7th x1";
    spellFailure = 0;
  }

  attr.saveBonus = saveBonus;
  attr.bonusSpells = bonusSpells;
  attr.spellFailure = spellFailure;
}
_prepareCharisma(attr) {
  const charisma = parseFloat(attr.value) || 0;

  let henchmenMax = 0;
  let loyaltyBase = 0;
  let reactionAdjust = 0;

  if (charisma < 2) {
    henchmenMax = 0;
    loyaltyBase = -8;
    reactionAdjust = -7;
  } else if (charisma < 3) {
    henchmenMax = 1;
    loyaltyBase = -7;
    reactionAdjust = -6;
  } else if (charisma < 4) {
    henchmenMax = 1;
    loyaltyBase = -6;
    reactionAdjust = -5;
  } else if (charisma < 5) {
    henchmenMax = 1;
    loyaltyBase = -5;
    reactionAdjust = -4;
  } else if (charisma < 6) {
    henchmenMax = 2;
    loyaltyBase = -4;
    reactionAdjust = -3;
  } else if (charisma < 7) {
    henchmenMax = 2;
    loyaltyBase = -3;
    reactionAdjust = -2;
  } else if (charisma < 8) {
    henchmenMax = 3;
    loyaltyBase = -2;
    reactionAdjust = -1;
  } else if (charisma < 9) {
    henchmenMax = 3;
    loyaltyBase = -1;
    reactionAdjust = 0;
  } else if (charisma < 12) {
    henchmenMax = 4;
    loyaltyBase = 0;
    reactionAdjust = 0;
  } else if (charisma < 13) {
    henchmenMax = 5;
    loyaltyBase = 0;
    reactionAdjust = 0;
  } else if (charisma < 14) {
    henchmenMax = 5;
    loyaltyBase = 0;
    reactionAdjust = 1;
  } else if (charisma < 15) {
    henchmenMax = 6;
    loyaltyBase = 1;
    reactionAdjust = 2;
  } else if (charisma < 16) {
    henchmenMax = 7;
    loyaltyBase = 3;
    reactionAdjust = 3;
  } else if (charisma < 17) {
    henchmenMax = 8;
    loyaltyBase = 4;
    reactionAdjust = 5;
  } else if (charisma < 18) {
    henchmenMax = 10;
    loyaltyBase = 6;
    reactionAdjust = 6;
  } else if (charisma < 19) {
    henchmenMax = 15;
    loyaltyBase = 8;
    reactionAdjust = 7;
  } else if (charisma < 20) {
    henchmenMax = 20;
    loyaltyBase = 10;
    reactionAdjust = 8;
  } else if (charisma < 21) {
    henchmenMax = 25;
    loyaltyBase = 12;
    reactionAdjust = 9;
  } else if (charisma < 22) {
    henchmenMax = 30;
    loyaltyBase = 14;
    reactionAdjust = 10;
  } else if (charisma < 23) {
    henchmenMax = 35;
    loyaltyBase = 16;
    reactionAdjust = 11;
  } else if (charisma < 24) {
    henchmenMax = 40;
    loyaltyBase = 18;
    reactionAdjust = 12;
  } else if (charisma < 25) {
    henchmenMax = 45;
    loyaltyBase = 20;
    reactionAdjust = 13;
  } else {
    henchmenMax = 50;
    loyaltyBase = 20;
    reactionAdjust = 14;
  }

  attr.henchmenMax = henchmenMax;
  attr.loyaltyBase = loyaltyBase;
  attr.reactionAdjust = reactionAdjust;
}
_preparePerception(attr) {
  const perception = parseFloat(attr.value) || 0;

  let surpriseBonus = 0;
  let illusionImmunity = "None";

  if (perception < 2) {
    surpriseBonus = -6;
    illusionImmunity = "None"
  } else if (perception < 3) {
    surpriseBonus = -4;
    illusionImmunity = "None"
  } else if (perception < 4) {
    surpriseBonus = -3;
    illusionImmunity = "None"
  } else if (perception < 5) {
    surpriseBonus = -2;
    illusionImmunity = "None"
  } else if (perception < 6) {
    surpriseBonus = -1;
    illusionImmunity = "None"
  } else if (perception < 15) {
    surpriseBonus = 0;
    illusionImmunity = "None"
  } else if (perception < 16) {
    surpriseBonus = 0;
    illusionImmunity = "None"
  } else if (perception < 17) {
    surpriseBonus = +1;
    illusionImmunity = "None"
  } else if (perception < 18) {
    surpriseBonus = +2;
    illusionImmunity = "None"
  } else if (perception < 19) {
    surpriseBonus = +2;
    illusionImmunity = "None"
  } else if (perception < 20) {
    surpriseBonus = +3;
    illusionImmunity = "1st Level";
  } else if (perception < 21) {
    surpriseBonus = +3;
    illusionImmunity = "2nd Level";
  } else if (perception < 22) {
    surpriseBonus = +4;
    illusionImmunity = "3rd Level";
  } else if (perception < 23) {
    surpriseBonus = +4;
    illusionImmunity = "4th Level";
  } else if (perception < 24) {
    surpriseBonus = +4;
    illusionImmunity = "5th Level";
  } else if (perception < 25) {
    surpriseBonus = +4;
    illusionImmunity = "6th Level";
  } else {
    surpriseBonus = +5;
    illusionImmunity = "7th Level";
  }

  attr.surpriseBonus = surpriseBonus;
  attr.illusionImmunity = illusionImmunity;
}


}
