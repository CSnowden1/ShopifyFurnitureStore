import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Category from "~/components/Category";
import CategoryTwo from "~/components/CategoryTwo";
import PromoOne from "~/components/PromoOne";
import PromoTwo from "~/components/PromoTwo";
import Footer from "~/components/Footer";

export function meta() {
    return [
      {title: 'Hydrogen'},
      {description: 'A custom storefront powered by Hydrogen'},
    ];
  }



  
  export default function Index() {
    return (
      <div>
        <Hero /> 
        <Category />
        <CategoryTwo />
        <PromoOne />
        <PromoTwo />
        <Footer />
      </div>
    );
  }
  