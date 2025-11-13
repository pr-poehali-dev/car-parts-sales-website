import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Здравствуйте! Чем могу помочь?', sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    setMessages([...messages, { id: Date.now(), text: inputValue, sender: 'user' }]);
    setInputValue('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: 'Спасибо за ваш вопрос! Наш специалист свяжется с вами в ближайшее время.', 
        sender: 'bot' 
      }]);
    }, 1000);
  };

  return (
    <>
      {isOpen && (
        <Card className="fixed bottom-24 right-4 w-[350px] shadow-2xl z-50 animate-fade-in">
          <CardHeader className="bg-primary text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Icon name="Headphones" size={20} />
                Онлайн-консультант
              </CardTitle>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[300px] p-4">
              <div className="space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.sender === 'user'
                          ? 'bg-accent text-white'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 border-t flex gap-2">
              <Input
                placeholder="Введите сообщение..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <Button onClick={handleSend} size="icon" className="bg-accent hover:bg-accent/90">
                <Icon name="Send" size={18} />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg bg-accent hover:bg-accent/90 z-50"
      >
        <Icon name={isOpen ? 'X' : 'MessageCircle'} size={24} />
      </Button>
    </>
  );
};
