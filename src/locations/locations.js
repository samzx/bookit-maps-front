import baillieu from "./locations-baillieu";
import erc from "./locations-erc";
import bee from "./locations-bee";

/**
 * Combines locations from other libraries into one object to import
 */
const locations = Object.assign(baillieu, erc, bee);

export default locations;

