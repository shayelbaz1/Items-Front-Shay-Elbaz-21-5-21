import itemService from '../services/itemService.js'

export default {
    strict: true,
    state: {
        coin:"usd",
        isLoading: false,
        items: [],
        products: [],
        ratio: 0,
        filterBy: {
            txt: '',
            page: 1,
            limit: 3
        },
        rates:[],
    },
    getters: {
        coinSymbol(state){
            switch (state.coin) {
                case 'usd':
                    return "$";
                case 'ils':
                    return "₪"
                case 'eur':
                    return "€"
                default:
                    return "";
            }
        },
        coin(state){
            return state.coin;
        },
        items(state) {
            return state.items;
        },
        isLoading(state) {
            return state.isLoading;
        },
        products(state) {
            return state.products;
        },
        rates(state){
            return state.rates;
        },
        ratio(state){
            return state.ratio;
        }
    },
    mutations: {
        setCoin(state,{coin}){
            state.coin = coin
        },
        setIsLoading(state, { isLoading }) {
            state.isLoading = isLoading
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy
        },
        setItems(state, { items }) {
            state.items = items
        },
        addItem(state, { savedItem }) {
            state.items.unshift(savedItem)
        },
        deleteItem(state, { itemId }) {
            const idx = state.items.findIndex((curr) => curr._id === itemId)
            state.items.splice(idx, 1)
        },
        updateItem(state, { savedItem }) {
            const itemId = savedItem._id
            const idx = state.items.findIndex((curr) => curr._id === itemId)
            state.items.splice(idx, 1, savedItem)
        },
        setProducts(state, { products }) {
            state.products = products
        },
        setRates(state, { rates }) {
            state.rates = rates;
        },
        setRatio(state,{rates}){
            const {USD} = rates;
            state.ratio = state.coin==='usd'?1:rates[state.coin.toUpperCase()]/USD;
        }
    },
    actions: {
        async loadRates({ commit }) {
            let rates = await itemService.loadRates()
            commit({ type: 'setRates', rates: rates.rates })
            commit({ type: 'setRatio', rates: rates.rates })
            return rates
        },
        async loadProducts({ commit }) {
            commit({ type: 'setIsLoading', isLoading: true })
            let products = await itemService.loadProducts()
            commit({ type: 'setProducts', products })
            commit({ type: 'setIsLoading', isLoading: false })
            return products
        },
        async loadItems({ commit, state }) {
            commit({ type: 'setIsLoading', isLoading: true })
            let items = await itemService.loadItems(state.filterBy)
            commit({ type: 'setItems', items })
            commit({ type: 'setIsLoading', isLoading: false })
            return items
        },
        async saveItem({ commit }, { item }) {
            const type = (item._id) ? 'updateItem' : 'addItem';
            if (!item._id) item.createdAt = new Date(Date.now());
            let savedItem = await itemService.saveItem(item)
            commit({ type, savedItem })
            return savedItem;
        },
        async deleteItem({ commit }, { itemId }) {
            await itemService.deleteItem(itemId)
            commit({ type: 'deleteItem', itemId })
        },
    }

}
