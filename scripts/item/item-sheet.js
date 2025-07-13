export class ItemSheet2Neal extends ItemSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["2neal", "sheet", "item"],
      template: "systems/2Neal/templates/item/item-sheet.hbs",
      width: 500,
      height: 400,
    });
  }

  async getData(options) {
    const context = await super.getData(options);
    context.system = this.item.system;
    context.item = this.item;
    return context;
  }

  activateListeners(html) {
    super.activateListeners(html);
    // Add item-specific interaction logic here
  }
}
