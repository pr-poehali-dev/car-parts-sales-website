import Icon from '@/components/ui/icon';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Wrench" size={24} />
              <span className="text-xl font-bold">АвтоЗапчасти.РФ</span>
            </div>
            <p className="text-white/80 text-sm">
              Надежный поставщик оригинальных автозапчастей с доставкой по всей России
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">Двигатель</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Тормозная система</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Подвеска</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Электрика</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">О компании</a></li>
              <li><a href="#delivery" className="hover:text-accent transition-colors">Доставка</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Оплата</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Гарантии</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+78001234567" className="hover:text-accent transition-colors">
                  8 (800) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@avtozapchasti.rf" className="hover:text-accent transition-colors">
                  info@avtozapchasti.rf
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Автомобильная, 15</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2024 АвтоЗапчасти.РФ. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-accent transition-colors">
              <Icon name="Facebook" size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-accent transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-accent transition-colors">
              <Icon name="Youtube" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
