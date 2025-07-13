export class CharacterSheet2Neal extends ActorSheet {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ['2neal', 'sheet', 'actor'],
      template: 'systems/2neal/templates/actor/character-sheet.hbs',
      width: 800,
      height: 600,
      tabs: [{ navSelector: '.sheet-tabs', contentSelector: '.sheet-body', initial: 'main' }]
    });
  }

  /** @override */
  async getData(options) {
    const data = await super.getData(options);
    data.system = this.actor.system;
    data.actor = this.actor;
    return data;
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Handle clickable rolls
    html.find('.rollable').on('click', this._onRoll.bind(this));
  }

  /**
   * Handle clicking a rollable element.
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
