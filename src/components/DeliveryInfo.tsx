import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const deliveryOptions = [
  {
    icon: 'Truck',
    title: 'Курьерская доставка',
    description: 'По Москве и области — от 300 ₽',
    time: '1-2 дня',
  },
  {
    icon: 'Package',
    title: 'Пункты выдачи',
    description: 'Более 5000 пунктов по России',
    time: '2-5 дней',
  },
  {
    icon: 'MapPin',
    title: 'Самовывоз',
    description: 'Бесплатно из наших магазинов',
    time: 'В день заказа',
  },
  {
    icon: 'Plane',
    title: 'Экспресс-доставка',
    description: 'В любой город России',
    time: '1-3 дня',
  },
];

const paymentMethods = [
  { icon: 'CreditCard', name: 'Банковские карты' },
  { icon: 'Wallet', name: 'Наличные' },
  { icon: 'Building', name: 'Безналичный расчет' },
  { icon: 'Smartphone', name: 'Электронные кошельки' },
];

export const DeliveryInfo = () => {
  return (
    <section id="delivery" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Доставка и оплата</h2>
          <p className="text-muted-foreground">Выберите удобный для вас способ получения заказа</p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Способы доставки</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon name={option.icon as any} className="text-accent" size={32} />
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                  <div className="flex items-center justify-center gap-2 text-accent font-semibold">
                    <Icon name="Clock" size={16} />
                    <span>{option.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Способы оплаты</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow">
                <Icon name={method.icon as any} className="mx-auto mb-2 text-accent" size={32} />
                <p className="text-sm font-medium">{method.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
