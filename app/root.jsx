import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';


// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Styles
import appStyles from './styles/app.css';
import headerStyles from '../app/styles/header.css'
import heroStyles from '../app/styles/hero.css'
import categoryStyles from '../app/styles/category.css'
import categoryTwoStyles from '../app/styles/categoryTwo.css'
import promoOneStyles from '../app/styles/promoOne.css'
import productSectionStyles from '../app/styles/productSection.css'
import promoTwoStyles from '../app/styles/promoTwo.css'
import footerStyles from '../app/styles/footer.css'


import favicon from '../public/favicon.svg';
import {useNonce} from '@shopify/hydrogen';

// This is important to avoid re-fetching root queries on sub-navigations
export const shouldRevalidate = ({formMethod, currentUrl, nextUrl}) => {
  // revalidate when a mutation is performed e.g add to cart, login...
  if (formMethod && formMethod !== 'GET') {
    return true;
  }

  // revalidate when manually revalidating via useRevalidator
  if (currentUrl.toString() === nextUrl.toString()) {
    return true;
  }

  return false;
};

export const links = () => {
  return [
    {rel: 'stylesheet', href: appStyles},
    {rel: 'stylesheet', href: headerStyles},
    {rel: 'stylesheet', href: heroStyles},
    {rel: 'stylesheet', href: categoryStyles},
    {rel: 'stylesheet', href: categoryTwoStyles},
    {rel: 'stylesheet', href: promoOneStyles},
    {rel: 'stylesheet', href: productSectionStyles},
    {rel: 'stylesheet', href: promoTwoStyles},
    {rel: 'stylesheet', href: footerStyles},


    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {rel: 'icon', type: 'image/svg+xml', href: favicon},
  ];
};




export async function loader({context}) {
  const layout = await context.storefront.query(LAYOUT_QUERY);
  return {layout};
}

export default function App() {
  const nonce = useNonce();
  const data = useLoaderData();

  const {name} = data.layout.shop;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
        <LiveReload nonce={nonce} />
      </body>
      <Footer />
    </html>
  );
}

const LAYOUT_QUERY = `#graphql
  query layout {
    shop {
      name
      description
    }
  }
`;
