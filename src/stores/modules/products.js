import { defineStore } from 'pinia';
import axios from 'axios';

const apiUrl = "https://fakestoreapi.com";

const useProductsStore = defineStore('products', {

  state: () => ({
    products: [],
    productDetails: {},
    productById: {},
    cartList: []
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

    getIndexFromCartList(id) {
      for (let i = 0; i < this.cartList.length; i++) {
        if(this.cartList[i].id === id) {
          return i;
        }
      }
      return -1;
    },

    addProductToCart(product) {
      let productIndex = this.getIndexFromCartList(product.id);
      if(productIndex !== -1) {
        this.cartList[productIndex].quantity += 1;
        return
      }
      let newProduct = product;
      newProduct.quantity = 1;
      this.cartList.push(newProduct);
    },

    removeProductfromCart(product) {
      let productIndex = this.getIndexFromCartList(product.id);
      if(this.cartList[productIndex].quantity > 1) {
        this.cartList[productIndex].quantity -= 1;
        return
      }
      this.cartList.splice(productIndex, 1);
    }
  },

});

export default useProductsStore;