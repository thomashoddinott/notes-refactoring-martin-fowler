
let defaultOwner = { firstName: "Joe", lastName: "Bloggs" };

function getDefaultOwner() { return Object.assign({}, defaultOwner); }
function setDefaultOwner(arg) { defaultOwner = arg; }

module.exports = {
    getDefaultOwner: getDefaultOwner,
    setDefaultOwner: setDefaultOwner,
};