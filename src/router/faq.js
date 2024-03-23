const routes = [
    {
        path: '/faqs/',
        children: [
          {
            path: 'customer-service',
            name: 'CustomerService',
            component: () => import('@/components/faqs/CustomerService.vue')
          },
          {
            path: 'account',
            name: 'Account',
            component: () => import('@/components/faqs/AccountPage.vue')
          },
          {
            path: 'order',
            name: 'Order',
            component: () => import('@/components/faqs/OrderPage.vue')
          },
          {
            path: 'payment',
            name: 'Payment',
            component: () => import('@/components/faqs/PaymentPage.vue')
          },
          {
            path: 'delivery',
            name: 'Delivery',
            component: () => import('@/components/faqs/DeliveryPage.vue')
          },
          {
            path: 'returns',
            name: 'Return',
            component: () => import('@/components/faqs/ReturnPage.vue')
          },
          {
            path: 'stock',
            name: 'Stock',
            component: () => import('@/components/faqs/StockPage.vue')
          },
          {
            path: 'care-instructions',
            name: 'CareInstructions',
            component: () => import('@/components/faqs/CareInstructionsPage.vue')
          },
    
        ]
      },
];
export default routes;