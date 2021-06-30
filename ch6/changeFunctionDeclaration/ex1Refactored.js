function circum(radius) {
    return circumfrence(radius)
}
function circumfrence(radius) {
    return 2 * Math.PI * radius;
}

module.exports = circum

/*
`circum` is an overly abbreved name for the function. `circumfrence` is what we mean.

This refactoring can be handy with a published API.
-- one used by code that I'm unable to change myself.

We can mark `circum` as deprecated, and eventually replace it with `circumfrence`.
*/