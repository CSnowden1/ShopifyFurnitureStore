import {useLoaderData} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';








export default function ProductSection() {

    return (
      <div className="product-column">
        <div className="product-row">
          <section className="product-section">
            <h2 className="section-title"></h2>
            <div className="product-cards">
            
            </div>
          </section>
        </div>
      </div>
    );
  }


  const COLLECTIONS_QUERY = `#graphql
  query Lenins{
    collections(first: 4, query: "collection_type:Lenins") {
      nodes {
        id
        title
        handle
      }
    }
  }
`;


  

