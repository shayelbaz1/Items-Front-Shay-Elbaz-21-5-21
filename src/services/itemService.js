import HttpService from './HttpService.js'
import Axios from 'axios';

export default {
  loadItems,
  saveItem,
  deleteItem,
  loadProducts,
  loadRates
}

// CRUD
// CREATE READ UPDATE DELETE

async function loadRates() {
  let rates = localStorage.getItem('rates');
  console.log('itemsService: loadRates:', JSON.parse(rates))
  if (rates) return JSON.parse(rates)

  rates = await Axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=18f16b5d04de23e4ac25941ce55bb8a7&symbols=USD,ILS,EUR&format=1`)
  localStorage.setItem('rates', JSON.stringify(rates.data))
  console.log('itemsService: loadProducts:', rates.data)
  return rates
}

async function loadProducts() {
  let products = localStorage.getItem('products');
  console.log('itemsService: loadProducts:', JSON.parse(products))
  if (products) return JSON.parse(products)

  products = await Axios.get(`https://fakestoreapi.com/products`)
  localStorage.setItem('products', JSON.stringify(products.data))
  console.log('itemsService: loadProducts:', products.data)
  return products
}

async function loadItems(filterBy) {
  const query = `?txt=${filterBy.txt}&page=${filterBy.page}&limit=${filterBy.limit}`
  const items = await HttpService.get(`items/${query}`)
  console.log('itemsService: loadItems:', items)
  return items
}

function saveItem(item) {
  console.log('itemsService: saveItem:', item)
  return item._id ? _update(item) : _add(item)
}

function _add(item) {
  return HttpService.post('items/', item)
}

function _update(item) {
  return HttpService.put(`items/${item._id}`, item)
}

function deleteItem(itemId) {
  console.log('itemsService: deleteItem:')
  return HttpService.delete(`items/${itemId}`)
}
