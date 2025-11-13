import { SearchBar } from './SearchBar';
import Icon from '@/components/ui/icon';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/90 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Оригинальные запчасти для вашего автомобиля
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Быстрый подбор по VIN-коду, артикулу или названию. Гарантия качества и доставка по всей России.
          </p>

          <SearchBar />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-white/10 p-4 rounded-full">
                <Icon name="Shield" size={32} />
              </div>
              <h4 className="font-semibold">Гарантия качества</h4>
              <p className="text-sm text-white/80">100% оригинальные запчасти</p>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="bg-white/10 p-4 rounded-full">
                <Icon name="Truck" size={32} />
              </div>
              <h4 className="font-semibold">Быстрая доставка</h4>
              <p className="text-sm text-white/80">По всей России от 1 дня</p>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="bg-white/10 p-4 rounded-full">
                <Icon name="Headphones" size={32} />
              </div>
              <h4 className="font-semibold">Поддержка 24/7</h4>
              <p className="text-sm text-white/80">Консультация специалистов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};