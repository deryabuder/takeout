import axios from 'axios'

export const getSellerData = function () {
  return axios.get('/api/seller')
}

export const getGoodsData = function () {
  return axios.get('/api/goods')
}

export const getRatingsData = function () {
  return axios.get('/api/ratings')
}
