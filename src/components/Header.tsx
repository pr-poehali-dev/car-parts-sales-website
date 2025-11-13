import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export const Header = () => {
  const [cartCount] = useState(3);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Icon name="Wrench" className="text-accent" size={28} />
              <span className="text-xl font-bold text-primary">АвтоЗапчасти.РФ</span>
            </div>
            
            <nav className="hidden lg:flex gap-6">
              <a href="#catalog" className="text-sm font-medium hover:text-accent transition-colors">Каталог</a>
              <a href="#selection" className="text-sm font-medium hover:text-accent transition-colors">Подбор по авто</a>
              <a href="#delivery" className="text-sm font-medium hover:text-accent transition-colors">Доставка</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Icon name="Search" size={20} />
            </Button>
            
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Icon name="User" size={20} />
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" size={20} />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent">
                  {cartCount}
                </Badge>
              )}
            </Button>

            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  <a href="#catalog" className="text-lg font-medium hover:text-accent transition-colors">Каталог</a>
                  <a href="#selection" className="text-lg font-medium hover:text-accent transition-colors">Подбор по авто</a>
                  <a href="#delivery" className="text-lg font-medium hover:text-accent transition-colors">Доставка</a>
                  <a href="#account" className="text-lg font-medium hover:text-accent transition-colors">Личный кабинет</a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
