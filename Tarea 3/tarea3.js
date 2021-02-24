

const getOrdersByIngredients = ({ type = '', filter = [] }) => sandwichOrders.filter(sandwichOrder => filter.every(i => sandwichOrder[type].includes(i)))

const getOrderById = ({ id }) => {
    let order = sandwichOrders.find(sandwichOrder => sandwichOrder['id'] == id)
    if (typeof order === 'undefined') return `No se encontró la orden con id ${id}`
    let { ordered, protein, bread } = order
    return `La orden fue realizada el ${ordered}, la orden llevo ${protein} y ${bread}`
}

const getOderByIdWithPepinillos = ({ id }) => {
    let order = sandwichOrders.find(sandwichOrder => sandwichOrder['id'] == id)
    if (typeof order === 'undefined') return `No se encontró la orden con id ${id}`
    let { ingredients } = order
    return ingredients.some(e => e == 'pepinillos')
}

const getAllOrdersByDate = ({ dateFilter = '' }) => {
    let totalOrders = sandwichOrders.filter(sandwichOrder => sandwichOrder['ordered'] == dateFilter)
    return `Se encontraron ${totalOrders.length} ordenes para la fecha ${dateFilter}`
}

const getDatesfromOrdersNotBurger = () => {
    let orders = sandwichOrders.filter(sandwichOrder => sandwichOrder['protein'].includes('not burger')
        && sandwichOrder['ingredients'].includes('cebolla caramelizada'))
    let dates = orders.map(({ ordered }) => ordered)
    return dates
}

const breads = ["bagette", "brioche", "pita", "marraqueta", "hallulla"]

const hard = () => {
    const total = {}
    breads.forEach(typeBread => {
        let totalOfBread = sandwichOrders.map(item => item.bread === typeBread).reduce((prev, cur) => prev + cur)
        total[typeBread] = totalOfBread
    })
    return total;
}
