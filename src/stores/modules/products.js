import { defineStore } from 'pinia';
import api from '../clients/axios';

const apiUrl = "https://api.escuelajs.co/api/v1/";

const useProductsStore = defineStore('products', {

  state: () => ({
    products: [],
    productDetails: {}
  }),
  actions: {

    async geProducts(params) {
      try {
        const response = await api.get(`${apiUrl}`, { params });
        this.products = response;
        return response;
      } catch (err) {
        this.products = [];
        console.error('Error', err);
        return err;
      }
    },

  },

});

export default useProductsStore;