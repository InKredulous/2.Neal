export class CharacterSheet2Neal extends foundry.appv1.sheets.ActorSheet {
  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ['2neal', 'sheet', 'actor'],
      template: 'systems/2neal/templates/actor/character-sheet.hbs',
      width: 800,
      height: 600,
      tabs: [{ navSelector: '.sheet-tabs', contentSelector: '.sheet-body', initial: 'main' }]
    });
  }

  /** @override */
  getData() {
    const data = super.getData();
    data.system = this.actor.system; // Makes the system data available in the sheet
    data.actor = this.actor;         // Makes actor reference available
    return data;
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Example: handle a click on a rollable element
    html.find('.rollable').click(this._onRoll.bind(this));
  }

  /**
   * Handle clicking a rollable element.
   * You can expand this later for specific rolls (attacks, saves, etc.).
   */
  async _onRoll(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const rollFormula = element.dataset.roll;
    const label = element.dataset.label || "Roll";

    const roll = await new Roll(rollFormula, this.actor.getRollData()).evaluate({ async: true });
    roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: label
    });
  }
}
