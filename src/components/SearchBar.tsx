import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const suggestions = [
  { id: 1, type: 'article', text: 'Масляный фильтр OF-4501', category: 'Двигатель' },
  { id: 2, type: 'article', text: 'Тормозные колодки BP-2890', category: 'Тормоза' },
  { id: 3, type: 'name', text: 'Амортизатор передний', category: 'Подвеска' },
  { id: 4, type: 'brand', text: 'Bosch - Масляные фильтры', category: 'Бренд' },
  { id: 5, type: 'name', text: 'Воздушный фильтр', category: 'Двигатель' },
];

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = suggestions.filter(s => 
        s.text.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [query]);

  const handleSearch = () => {
    console.log('Searching for:', query);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Input
            placeholder="Найти по названию, артикулу или VIN-коду..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query.length > 0 && setShowSuggestions(true)}
            className="pr-10 h-12 text-base"
          />
          <Icon 
            name="Search" 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" 
            size={20} 
          />
        </div>
        <Button 
          onClick={handleSearch}
          className="bg-accent hover:bg-accent/90 h-12 px-6"
        >
          Найти
        </Button>
      </div>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <Card className="absolute top-full mt-2 w-full z-50 shadow-lg animate-fade-in">
          <div className="p-2">
            {filteredSuggestions.map((suggestion) => (
              <button
                key={suggestion.id}
                onClick={() => {
                  setQuery(suggestion.text);
                  setShowSuggestions(false);
                }}
                className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors flex items-center gap-3"
              >
                <Icon 
                  name={suggestion.type === 'article' ? 'Hash' : suggestion.type === 'brand' ? 'Award' : 'Package'} 
                  size={18} 
                  className="text-accent"
                />
                <div className="flex-1">
                  <p className="font-medium">{suggestion.text}</p>
                  <p className="text-xs text-muted-foreground">{suggestion.category}</p>
                </div>
              </button>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};
