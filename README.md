# color-care 💅🏼

###### Ecommerce, newsletter & a blog.

### Getting Started

Install
```
npm i
```

Run the development server
```
npm run dev
```

### API Routes

This application utilizes the following [API Routes](https://nextjs.org/docs/api-routes/introduction) which are being deployed as [serverless functions](https://vercel.com/docs/concepts/functions/introduction):

`/api/checkout-session/cart`

- Uses Stripe's API to create and handle a [Stripe Checkout](https://stripe.com/docs/payments/checkout) session.

`/api/newsletter/subscribe`

- Communicates with Mailchimp's [Marketing API](https://mailchimp.com/developer/marketing/guides/quick-start/) to allow subscribing to the newsletter.
