// Should load from server individually (link rather than import all at once)
import baillieuG from '../images/1.svg';
import baillieuLG from '../images/2.svg';
import baillieu1 from '../images/3.svg';
// TODO: Below files do not exist yet
// import erc1 from '../images/4.svg';
// import erc2 from '../images/5.svg';
// import erc3 from '../images/6.svg';
// import erc4 from '../images/7.svg';
// import erc5 from '../images/8.svg';
// import beeG from '../images/9.svg';
// import beeUG from '../images/10.svg';
// import bee1 from '../images/11.svg';

/**
 * This object contains information about a specific floor:
 * - The filters accepted eg. Baillieu Ground accepts G and GN
 * - The map file associated
 */
export default {
    "_default": [
        {name: "", filter: [], map: undefined},
    ],
    "Architecture" : [
        {name: "", filter: [], map: undefined},
    ],
    "Baillieu": [
        {name: "Ground", filter: ["G", "GN"], map: baillieuG}, 
        {name: "Lower Ground", filter: ["LG"], map: baillieuLG}, 
        {name: "Level 1", filter: ["1"], map: baillieu1}
    ], 
    "Brownless": [
        {name: "", filter: [], map: undefined},
    ],
    "Burnley": [
        {name: "", filter: [], map: undefined},
    ],
    "ERC": [
        {name: "Level 1", filter: ["1", "101"], map: undefined}, 
        {name: "Level 2", filter: ["2"], map: undefined}, 
        {name: "Level 3", filter: ["3"], map: undefined},
        {name: "Level 4", filter: ["4"], map: undefined},
        {name: "Level 5", filter: ["5"], map: undefined}
    ],
    "Giblin Eunson": [
        {name: "Ground", filter: ["G"], map: undefined}, 
        {name: "Upper Ground", filter: ["UG"], map: undefined}, 
        {name: "Level 1", filter: ["1"], map: undefined}
    ],
    "Law": [
        {name: "", filter: [], map: undefined},
    ],
    "Lenton Parr": [
        {name: "", filter: [], map: undefined},
    ],
    "Werribee - Vet Sci": [
        {name: "", filter: [], map: undefined},
    ],
}