import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const categories = [
  { id: 'engine', name: 'Двигатель', icon: 'Cog' },
  { id: 'brake', name: 'Тормозная система', icon: 'Disc' },
  { id: 'suspension', name: 'Подвеска', icon: 'Settings' },
  { id: 'electric', name: 'Электрика', icon: 'Zap' },
];

const products = [
  { id: 1, name: 'Масляный фильтр', category: 'engine', price: 450, stock: 'В наличии', article: 'OF-4501' },
  { id: 2, name: 'Воздушный фильтр', category: 'engine', price: 680, stock: 'В наличии', article: 'AF-6802' },
  { id: 3, name: 'Тормозные колодки', category: 'brake', price: 2890, stock: 'Под заказ', article: 'BP-2890' },
  { id: 4, name: 'Тормозной диск', category: 'brake', price: 3200, stock: 'В наличии', article: 'BD-3200' },
  { id: 5, name: 'Амортизатор передний', category: 'suspension', price: 4500, stock: 'В наличии', article: 'SA-4500' },
  { id: 6, name: 'Стойка стабилизатора', category: 'suspension', price: 890, stock: 'В наличии', article: 'SS-0890' },
];

export const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('engine');

  const filteredProducts = products.filter(p => p.category === selectedCategory);

  return (
    <section id="catalog" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Каталог запчастей</h2>
          <p className="text-muted-foreground">Выберите категорию для просмотра товаров</p>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <Badge variant={product.stock === 'В наличии' ? 'default' : 'secondary'}>
                          {product.stock}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Артикул: {product.article}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4">
                        <Icon name="Package" size={64} className="text-muted-foreground" />
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-accent">{product.price} ₽</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button className="flex-1 bg-accent hover:bg-accent/90">
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        В корзину
                      </Button>
                      <Button variant="outline" size="icon">
                        <Icon name="Heart" size={18} />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
