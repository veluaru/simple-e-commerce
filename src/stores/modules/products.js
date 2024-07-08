import { defineStore } from 'pinia';
import axios from 'axios';

const apiUrl = "https://api.escuelajs.co/api/v1";

const useProductsStore = defineStore('products', {

  state: () => ({
    products: [],
    productDetails: {},
    productById: {},
  }),
  actions: {

    async getProducts(params) {
      try {
        const response = await axios.get(`${apiUrl}/products`, { params });
        this.products = response.data;
        return response.data;
      } catch (err) {
        this.products = [];
        console.error('Error', err);
        return err;
      }
    },

    async getProductById({id}) {
      try {
        console.log(id);
        const response = await axios.get(`${apiUrl}/products/${id}`);
        this.productById = response.data;
        return response.data;
      } catch (err) {
        this.productById = {};
        console.error('Error', err);
        return err;
      }
    },

    async postProduct(body) {
      try {
        const response = await axios.post(`${apiUrl}/products/`, body);
        this.productById = response;
        return response;
      } catch (err) {
        this.productById = {};
        console.error('Error', err);
        return err;
      }
    },
  },

});

export default useProductsStore;