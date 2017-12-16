// Should load from server individually (link rather than import all at once)
import baillieuG from '../images/1.svg';
import baillieuLG from '../images/2.svg';
import baillieu1 from '../images/3.svg';
// import erc1 from '../images/4.svg';
// import erc2 from '../images/5.svg';
// import erc3 from '../images/6.svg';
// import erc4 from '../images/7.svg';
// import erc5 from '../images/8.svg';
// import beeG from '../images/9.svg';
// import beeUG from '../images/10.svg';
// import bee1 from '../images/11.svg';

export default {
    "_default": [
        {name: "", filter: []},
    ],
    "Architecture" : [
        {name: "", filter: []},
    ],
    "Baillieu": [
        {name: "Ground", filter: ["G", "GN"], map: baillieuG}, 
        {name: "Lower Ground", filter: ["LG"], map: baillieuLG}, 
        {name: "Level 1", filter: ["1"], map: baillieu1}
    ], 
    "Brownless": [
        {name: "", filter: []},
    ],
    "Burnley": [
        {name: "", filter: []},
    ],
    "ERC": [
        {name: "Level 1", filter: ["1", "101"]}, 
        {name: "Level 2", filter: ["2"]}, 
        {name: "Level 3", filter: ["3"]},
        {name: "Level 4", filter: ["4"]},
        {name: "Level 5", filter: ["5"]}
    ],
    "Giblin Eunson": [
        {name: "Ground", filter: ["G"]}, 
        {name: "Upper Ground", filter: ["UG"]}, 
        {name: "Level 1", filter: ["1"]}
    ],
    "Law": [
        {name: "", filter: []},
    ],
    "Lenton Parr": [
        {name: "", filter: []},
    ],
    "Werribee - Vet Sci": [
        {name: "", filter: []},
    ],
}