import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    stock: string;
    article: string;
    brand: string;
    image: string;
    manufacturer: string;
    warranty: string;
    delivery: string;
    analogs?: { name: string; price: number; brand: string }[];
  };
  onCompare?: (id: number) => void;
  isComparing?: boolean;
}

export const ProductCard = ({ product, onCompare, isComparing }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="hover:shadow-xl transition-all duration-300 group">
      <CardHeader className="space-y-2">
        <div className="flex justify-between items-start">
          <Badge 
            variant={product.stock === 'В наличии' ? 'default' : 'secondary'}
            className={product.stock === 'В наличии' ? 'bg-green-500' : ''}
          >
            {product.stock}
          </Badge>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Icon 
                name="Heart" 
                size={18} 
                className={isFavorite ? 'fill-red-500 text-red-500' : ''} 
              />
            </Button>
            {onCompare && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => onCompare(product.id)}
              >
                <Icon 
                  name="GitCompare" 
                  size={18} 
                  className={isComparing ? 'text-accent' : ''} 
                />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <Dialog>
          <DialogTrigger asChild>
            <div className="cursor-pointer">
              <div className="aspect-square bg-white rounded-lg flex items-center justify-center mb-3 p-4 group-hover:scale-105 transition-transform">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{product.name}</DialogTitle>
            </DialogHeader>
            
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="space-y-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full rounded-lg"
                />
                <div className="grid grid-cols-3 gap-2">
                  <img src={product.image} alt="" className="w-full aspect-square object-cover rounded border" />
                  <img src={product.image} alt="" className="w-full aspect-square object-cover rounded border opacity-50" />
                  <img src={product.image} alt="" className="w-full aspect-square object-cover rounded border opacity-50" />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Артикул: {product.article}</p>
                  <p className="text-sm text-muted-foreground">Бренд: {product.brand}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-3">
                    {product.oldPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        {product.oldPrice} ₽
                      </span>
                    )}
                    <span className="text-3xl font-bold text-accent">{product.price} ₽</span>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    <Icon name="TrendingDown" size={14} className="mr-1" />
                    Выгодная цена
                  </Badge>
                </div>

                <div className="space-y-2 pt-2 border-t">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Building2" size={16} className="text-muted-foreground" />
                    <span>Производитель: {product.manufacturer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Shield" size={16} className="text-muted-foreground" />
                    <span>Гарантия: {product.warranty}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Truck" size={16} className="text-muted-foreground" />
                    <span>Доставка: {product.delivery}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button className="flex-1 bg-accent hover:bg-accent/90" size="lg">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                  <Button variant="outline" size="lg">Купить в 1 клик</Button>
                </div>

                {product.analogs && product.analogs.length > 0 && (
                  <Tabs defaultValue="analogs" className="mt-6">
                    <TabsList className="w-full">
                      <TabsTrigger value="analogs" className="flex-1">
                        Аналоги ({product.analogs.length})
                      </TabsTrigger>
                      <TabsTrigger value="specs" className="flex-1">
                        Характеристики
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="analogs" className="space-y-2 mt-4">
                      {product.analogs.map((analog, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 border rounded-lg hover:bg-muted/50">
                          <div>
                            <p className="font-medium">{analog.name}</p>
                            <p className="text-sm text-muted-foreground">{analog.brand}</p>
                          </div>
                          <span className="font-bold text-accent">{analog.price} ₽</span>
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="specs" className="mt-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Артикул</span>
                          <span className="font-medium">{product.article}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Производитель</span>
                          <span className="font-medium">{product.manufacturer}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Гарантия</span>
                          <span className="font-medium">{product.warranty}</span>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <div>
          <h3 className="font-semibold text-base mb-1 line-clamp-2 min-h-[3rem]">{product.name}</h3>
          <p className="text-xs text-muted-foreground">Арт: {product.article}</p>
          <p className="text-xs text-muted-foreground">Бренд: {product.brand}</p>
        </div>

        <div className="flex items-baseline gap-2">
          {product.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.oldPrice} ₽
            </span>
          )}
          <span className="text-2xl font-bold text-accent">{product.price} ₽</span>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button className="flex-1 bg-accent hover:bg-accent/90">
          <Icon name="ShoppingCart" size={18} className="mr-2" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};
