const { Order, Priority } = require('./refactored')

const orders = [new Order({ priority: "normal" }), new Order({ priority: "high" }), new Order({ priority: "rush" })];
const highPriorityCount = orders.filter(o => o.priority.higherThan(new Priority("high"))).length;

describe('rushPriorityCount', () => {
    test('has 1 order', () => {
        expect(highPriorityCount).toEqual(1);
    });
});