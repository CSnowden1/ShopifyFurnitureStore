import { useLoaderData } from '@remix-run/react';

export async function loader({ context }) {
  const data = await context.storefront.query(COLLECTIONS_QUERY);
  console.log('GraphQL Data:', data);
  return data;
}

export default function LeninCollection() {
  const { collection } = useLoaderData();
  console.log('Loader Data:', collection);

  if (!collectionByHandle) {
    return <div>Loading...</div>;
  }

  const { title, products } = collection;

  if (!products || !products.edges) {
    console.error('No products or edges found in the data:', collection);
    return <div>No products found</div>;
  }

  console.log('Rendering with products:', products.edges);

  return (
    <div className="product-column">
      <div className="product-row">
        <section className="product-section">
          <h2 className="section-title">{title}</h2>
          <div className="product-cards">
            {products.edges.map(({ node }) => (
              <div className="product-card" key={node.id}>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

const COLLECTIONS_QUERY = `
query LeninCollections {
  collection (handle: "Lenins") {
    title
    products(first: 4) {
      edges {
        node {
          title
          id
          images(first: 1) {
            edges {
              node {
                originalSrc
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
