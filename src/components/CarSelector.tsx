import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const carBrands = ['Toyota', 'BMW', 'Mercedes-Benz', 'Volkswagen', 'Audi', 'Ford', 'Honda', 'Nissan'];
const models = ['Camry', 'Corolla', 'RAV4', 'Land Cruiser'];
const years = ['2024', '2023', '2022', '2021', '2020', '2019', '2018'];

export const CarSelector = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const handleSearch = () => {
    console.log('Searching:', { brand, model, year });
  };

  return (
    <section id="selection" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Подбор запчастей по автомобилю</h2>
          <p className="text-muted-foreground">Выберите марку, модель и год выпуска вашего автомобиля</p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Car" className="text-accent" size={24} />
              Выберите параметры автомобиля
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Марка</label>
                <Select value={brand} onValueChange={setBrand}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите марку" />
                  </SelectTrigger>
                  <SelectContent>
                    {carBrands.map((b) => (
                      <SelectItem key={b} value={b}>{b}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Модель</label>
                <Select value={model} onValueChange={setModel} disabled={!brand}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите модель" />
                  </SelectTrigger>
                  <SelectContent>
                    {models.map((m) => (
                      <SelectItem key={m} value={m}>{m}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Год</label>
                <Select value={year} onValueChange={setYear} disabled={!model}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите год" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((y) => (
                      <SelectItem key={y} value={y}>{y}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              onClick={handleSearch}
              disabled={!brand || !model || !year}
              className="w-full bg-accent hover:bg-accent/90"
              size="lg"
            >
              <Icon name="Search" size={20} className="mr-2" />
              Показать подходящие запчасти
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
