import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const brands = ['Bosch', 'Mann', 'Mahle', 'Filtron', 'Champion', 'Denso'];
const manufacturers = ['Оригинал', 'Аналог OEM', 'Aftermarket'];
const countries = ['Германия', 'Япония', 'США', 'Корея', 'Китай'];

export const ProductFilters = () => {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [inStock, setInStock] = useState(false);

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const resetFilters = () => {
    setPriceRange([0, 10000]);
    setSelectedBrands([]);
    setInStock(false);
  };

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Icon name="SlidersHorizontal" size={20} />
            Фильтры
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={resetFilters}>
            Сбросить
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" defaultValue={['price', 'brands', 'stock']} className="w-full">
          <AccordionItem value="price">
            <AccordionTrigger className="text-sm font-semibold">
              Цена
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={10000}
                  step={100}
                  className="w-full"
                />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">от {priceRange[0]} ₽</span>
                  <span className="text-muted-foreground">до {priceRange[1]} ₽</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="stock">
            <AccordionTrigger className="text-sm font-semibold">
              Наличие
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="instock" 
                    checked={inStock}
                    onCheckedChange={(checked) => setInStock(checked as boolean)}
                  />
                  <Label htmlFor="instock" className="text-sm cursor-pointer">
                    Только в наличии
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="brands">
            <AccordionTrigger className="text-sm font-semibold">
              Бренд
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2 max-h-48 overflow-y-auto">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      id={brand}
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={() => handleBrandToggle(brand)}
                    />
                    <Label htmlFor={brand} className="text-sm cursor-pointer">
                      {brand}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="type">
            <AccordionTrigger className="text-sm font-semibold">
              Тип производителя
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                {manufacturers.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox id={type} />
                    <Label htmlFor={type} className="text-sm cursor-pointer">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="country">
            <AccordionTrigger className="text-sm font-semibold">
              Страна производства
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                {countries.map((country) => (
                  <div key={country} className="flex items-center space-x-2">
                    <Checkbox id={country} />
                    <Label htmlFor={country} className="text-sm cursor-pointer">
                      {country}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-6 pt-6 border-t">
          <Button className="w-full bg-accent hover:bg-accent/90">
            Применить фильтры
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
