import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CarSelector } from "@/components/CarSelector";
import { ProductCatalog } from "@/components/ProductCatalog";
import { DeliveryInfo } from "@/components/DeliveryInfo";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CarSelector />
        <ProductCatalog />
        <DeliveryInfo />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;