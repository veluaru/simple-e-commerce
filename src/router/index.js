import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchResultsView from '../views/SearchResultsView.vue'
import ProductDetailsView from '../views/ProductDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search-results/:search',
      name: 'searchResults',
      component: SearchResultsView
    },
    {
      path: '/product-details/:id',
      name: 'productDetails',
      component: ProductDetailsView
    }
  ]
})

export default router
