import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { ProductCard } from './ProductCard';
import { ProductFilters } from './ProductFilters';

const categories = [
  { id: 'engine', name: 'Двигатель', icon: 'Cog' },
  { id: 'brake', name: 'Тормозная система', icon: 'Disc' },
  { id: 'suspension', name: 'Подвеска', icon: 'Settings' },
  { id: 'electric', name: 'Электрика', icon: 'Zap' },
];

const products = [
  { 
    id: 1, 
    name: 'Масляный фильтр Bosch 0451103336', 
    category: 'engine', 
    price: 450,
    oldPrice: 550,
    stock: 'В наличии', 
    article: 'OF-4501',
    brand: 'Bosch',
    image: 'https://cdn.poehali.dev/projects/406ba4c2-4e3b-46a5-a719-6330098fcef0/files/edbcc390-b9b3-427a-85da-225542388839.jpg',
    manufacturer: 'Bosch (Германия)',
    warranty: '12 месяцев',
    delivery: 'Сегодня при заказе до 14:00',
    analogs: [
      { name: 'Mann W 712/75', price: 480, brand: 'Mann' },
      { name: 'Mahle OC 384', price: 520, brand: 'Mahle' },
    ]
  },
  { 
    id: 2, 
    name: 'Воздушный фильтр Mann C 27 011', 
    category: 'engine', 
    price: 680, 
    stock: 'В наличии', 
    article: 'AF-6802',
    brand: 'Mann',
    image: 'https://cdn.poehali.dev/projects/406ba4c2-4e3b-46a5-a719-6330098fcef0/files/edbcc390-b9b3-427a-85da-225542388839.jpg',
    manufacturer: 'Mann+Hummel (Германия)',
    warranty: '12 месяцев',
    delivery: 'Завтра',
    analogs: [
      { name: 'Bosch F 026 400 201', price: 710, brand: 'Bosch' },
    ]
  },
  { 
    id: 3, 
    name: 'Тормозные колодки ATE 13.0460-7245.2', 
    category: 'brake', 
    price: 2890,
    oldPrice: 3200,
    stock: 'Под заказ', 
    article: 'BP-2890',
    brand: 'ATE',
    image: 'https://cdn.poehali.dev/projects/406ba4c2-4e3b-46a5-a719-6330098fcef0/files/f6639d41-0143-44cf-9e5f-316f0b1f5ed5.jpg',
    manufacturer: 'ATE (Германия)',
    warranty: '24 месяца',
    delivery: '2-3 дня',
    analogs: [
      { name: 'Brembo P 85 073', price: 3100, brand: 'Brembo' },
      { name: 'Ferodo FDB1780', price: 2750, brand: 'Ferodo' },
    ]
  },
  { 
    id: 4, 
    name: 'Тормозной диск Brembo 09.9772.11', 
    category: 'brake', 
    price: 3200, 
    stock: 'В наличии', 
    article: 'BD-3200',
    brand: 'Brembo',
    image: 'https://cdn.poehali.dev/projects/406ba4c2-4e3b-46a5-a719-6330098fcef0/files/f6639d41-0143-44cf-9e5f-316f0b1f5ed5.jpg',
    manufacturer: 'Brembo (Италия)',
    warranty: '24 месяца',
    delivery: 'Сегодня',
    analogs: []
  },
  { 
    id: 5, 
    name: 'Амортизатор передний Sachs 310 634', 
    category: 'suspension', 
    price: 4500, 
    stock: 'В наличии', 
    article: 'SA-4500',
    brand: 'Sachs',
    image: 'https://cdn.poehali.dev/projects/406ba4c2-4e3b-46a5-a719-6330098fcef0/files/718f41c6-300a-4e61-89a7-e492790523b0.jpg',
    manufacturer: 'ZF Sachs (Германия)',
    warranty: '24 месяца',
    delivery: 'Сегодня',
    analogs: [
      { name: 'Monroe G7410', price: 4200, brand: 'Monroe' },
    ]
  },
  { 
    id: 6, 
    name: 'Стойка стабилизатора Lemforder 30 267 01', 
    category: 'suspension', 
    price: 890, 
    stock: 'В наличии', 
    article: 'SS-0890',
    brand: 'Lemforder',
    image: 'https://cdn.poehali.dev/projects/406ba4c2-4e3b-46a5-a719-6330098fcef0/files/718f41c6-300a-4e61-89a7-e492790523b0.jpg',
    manufacturer: 'Lemförder (Германия)',
    warranty: '12 месяцев',
    delivery: 'Завтра',
    analogs: []
  },
];

export const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('engine');
  const [comparing, setComparing] = useState<number[]>([]);

  const filteredProducts = products.filter(p => p.category === selectedCategory);

  const handleCompare = (id: number) => {
    setComparing(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="catalog" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Каталог запчастей</h2>
          <p className="text-muted-foreground">Профессиональный подбор оригинальных запчастей</p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {categories.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id} className="flex items-center gap-2">
                <Icon name={cat.icon as any} size={18} />
                <span className="hidden sm:inline">{cat.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <div className="flex gap-6">
                <aside className="hidden lg:block w-72 flex-shrink-0">
                  <ProductFilters />
                </aside>

                <div className="flex-1">
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-sm text-muted-foreground">
                      Найдено товаров: <span className="font-semibold">{filteredProducts.length}</span>
                    </p>
                    
                    <div className="flex gap-2">
                      {comparing.length > 0 && (
                        <Badge variant="outline" className="gap-2">
                          <Icon name="GitCompare" size={14} />
                          К сравнению: {comparing.length}
                        </Badge>
                      )}
                      
                      <Sheet>
                        <SheetTrigger asChild className="lg:hidden">
                          <Button variant="outline" size="sm">
                            <Icon name="SlidersHorizontal" size={16} className="mr-2" />
                            Фильтры
                          </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-80 overflow-y-auto">
                          <ProductFilters />
                        </SheetContent>
                      </Sheet>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onCompare={handleCompare}
                        isComparing={comparing.includes(product.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};