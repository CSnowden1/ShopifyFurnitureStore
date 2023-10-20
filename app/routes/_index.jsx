import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Category from "~/components/Category";
import CategoryTwo from "~/components/CategoryTwo";
import PromoOne from "~/components/LivingRoomPromo";
import PromoTwo from "~/components/KitchenPromo";
import DinningroomPromo from "~/components/KitchenTwo";
import KitchenAppl from "~/components/KitchenAppl";
import BedroomPromo from "~/components/BedroomPromo";
import BedroomPromoTwo from "~/components/BedroomPromoTwo";
import BlogSection from "~/components/BlogSection";
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
        <DinningroomPromo />
        <KitchenAppl />
        <BedroomPromo />
        <BedroomPromoTwo />
        <BlogSection />
        <Footer />
      </div>
    );
  }
  