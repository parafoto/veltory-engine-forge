import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  ShoppingCart, 
  Package, 
  Settings, 
  Zap, 
  Wrench, 
  Filter,
  Plus,
  Minus,
  Send,
  Trash2,
  Image as ImageIcon
} from "lucide-react";
import { toast } from "sonner";

interface SparePart {
  id: string;
  name: string;
  article: string;
  price: number;
  category: string;
  engineModels: string[];
  image?: string;
  inStock: boolean;
  description?: string;
}

interface CartItem extends SparePart {
  quantity: number;
}

const PartsConfigurator = () => {
  const [selectedEngine, setSelectedEngine] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const engines = [
    { id: "mvl", name: "MVL" },
    { id: "mv1", name: "MV1" },
    { id: "mv2", name: "MV2" },
    { id: "rs206", name: "RS206" },
    { id: "raptor-277", name: "Raptor 277" }
  ];

  const categories = [
    { id: "all", name: "Все категории", icon: Package },
    { id: "piston", name: "Поршневая группа", icon: Settings },
    { id: "exhaust", name: "Система выхлопа", icon: Wrench },
    { id: "gearbox", name: "Редуктор", icon: Settings },
    { id: "electronics", name: "Электроника", icon: Zap },
    { id: "consumables", name: "Расходники", icon: Package }
  ];

  // Моковые данные запчастей
  const spareParts: SparePart[] = [
    {
      id: "1",
      name: "Поршень в сборе",
      article: "MVL-PST-001",
      price: 15000,
      category: "piston",
      engineModels: ["mvl"],
      inStock: true,
      description: "Поршень с кольцами и пальцем для двигателя MVL"
    },
    {
      id: "2", 
      name: "Цилиндр",
      article: "MVL-CYL-001",
      price: 25000,
      category: "piston",
      engineModels: ["mvl"],
      inStock: false,
      description: "Цилиндр двигателя MVL с никасиловым покрытием"
    },
    {
      id: "3",
      name: "Глушитель в сборе",
      article: "MV1-EXH-001", 
      price: 8500,
      category: "exhaust",
      engineModels: ["mv1", "mv2"],
      inStock: true,
      description: "Глушитель с креплениями для двигателей MV1/MV2"
    },
    {
      id: "4",
      name: "Приводной ремень",
      article: "UNI-BLT-001",
      price: 2800,
      category: "consumables", 
      engineModels: ["mvl", "mv1", "mv2", "rs206", "raptor-277"],
      inStock: true,
      description: "Универсальный приводной ремень для всех моделей"
    },
    {
      id: "5",
      name: "Воздушный фильтр",
      article: "UNI-FLT-001",
      price: 1200,
      category: "consumables",
      engineModels: ["mvl", "mv1", "mv2", "rs206", "raptor-277"],
      inStock: true,
      description: "Воздушный фильтр поролоновый"
    },
    {
      id: "6",
      name: "CDI блок",
      article: "RS206-CDI-001",
      price: 12000,
      category: "electronics",
      engineModels: ["rs206"],
      inStock: true,
      description: "Электронный блок зажигания CDI"
    },
    {
      id: "7",
      name: "Редуктор в сборе",
      article: "RAP-GBX-001", 
      price: 45000,
      category: "gearbox",
      engineModels: ["raptor-277"],
      inStock: false,
      description: "Редуктор с передаточным числом 2.68:1"
    },
    {
      id: "8",
      name: "Свеча зажигания NGK BR8ES",
      article: "UNI-SPK-001",
      price: 800,
      category: "consumables",
      engineModels: ["mvl", "mv1", "mv2", "rs206", "raptor-277"],
      inStock: true,
      description: "Свеча зажигания NGK BR8ES"
    }
  ];

  const filteredParts = spareParts.filter(part => {
    const engineMatch = !selectedEngine || part.engineModels.includes(selectedEngine);
    const categoryMatch = selectedCategory === "all" || part.category === selectedCategory;
    return engineMatch && categoryMatch;
  });

  const addToCart = (part: SparePart) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === part.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === part.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...part, quantity: 1 }];
    });
    toast.success(`${part.name} добавлен в заказ`);
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(id);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
    toast.success("Товар удален из заказа");
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleSubmitOrder = () => {
    if (cart.length === 0) {
      toast.error("Корзина пуста");
      return;
    }
    
    // Здесь будет логика отправки заявки
    toast.success("Заявка отправлена! Мы свяжемся с вами в течение часа.");
    setCart([]);
    setIsCartOpen(false);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Конфигуратор запчастей
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Подберите необходимые запчасти для вашего двигателя. 
            Все детали оригинальные с гарантией качества.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Фильтры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Engine Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Модель двигателя</Label>
                  <Select value={selectedEngine} onValueChange={setSelectedEngine}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите двигатель" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Все двигатели</SelectItem>
                      {engines.map(engine => (
                        <SelectItem key={engine.id} value={engine.id}>
                          {engine.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Category Tabs */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Категория</Label>
                  <Tabs value={selectedCategory} onValueChange={setSelectedCategory} orientation="vertical">
                    <TabsList className="grid w-full grid-cols-1 h-auto bg-transparent p-0">
                      {categories.map(category => (
                        <TabsTrigger 
                          key={category.id} 
                          value={category.id}
                          className="justify-start gap-2 data-[state=active]:bg-accent/10 data-[state=active]:text-accent"
                        >
                          <category.icon className="w-4 h-4" />
                          <span className="text-xs">{category.name}</span>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </div>

                {/* Cart Summary */}
                <Separator />
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">Корзина</Label>
                    <Badge variant="secondary">{getTotalItems()} шт.</Badge>
                  </div>
                  <div className="text-lg font-semibold text-accent">
                    {getTotalPrice().toLocaleString()} ₽
                  </div>
                  <Button 
                    variant="cta" 
                    className="w-full" 
                    onClick={() => setIsCartOpen(true)}
                    disabled={cart.length === 0}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Оформить заказ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Parts Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredParts.map(part => (
                <Card key={part.id} className="hover:shadow-large transition-all duration-300">
                  <CardHeader>
                    <div className="w-full h-32 bg-muted/30 rounded-lg flex items-center justify-center mb-4">
                      <ImageIcon className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">{part.name}</CardTitle>
                    <CardDescription>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Артикул: {part.article}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant={part.inStock ? "default" : "secondary"}>
                            {part.inStock ? "В наличии" : "Под заказ"}
                          </Badge>
                          <Badge variant="outline">
                            {part.engineModels.map(model => 
                              engines.find(e => e.id === model)?.name
                            ).join(", ")}
                          </Badge>
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {part.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-accent">
                          {part.price.toLocaleString()} ₽
                        </span>
                        <Button 
                          onClick={() => addToCart(part)}
                          disabled={!part.inStock}
                          variant="outline"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Добавить
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredParts.length === 0 && (
              <div className="text-center py-12">
                <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Запчасти не найдены
                </h3>
                <p className="text-muted-foreground">
                  Попробуйте изменить фильтры или выберите другую модель двигателя
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Cart Modal/Sidebar */}
        {isCartOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
            <div className="w-full max-w-md bg-background h-full overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Корзина заказа</h2>
                  <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
                    ✕
                  </Button>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Корзина пуста</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Cart Items */}
                    <div className="space-y-4">
                      {cart.map(item => (
                        <Card key={item.id}>
                          <CardContent className="p-4">
                            <div className="space-y-3">
                              <div className="flex justify-between items-start">
                                <div className="flex-1">
                                  <h4 className="font-medium text-sm">{item.name}</h4>
                                  <p className="text-xs text-muted-foreground">{item.article}</p>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <Trash2 className="w-3 h-3" />
                                </Button>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-6 w-6"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  >
                                    <Minus className="w-3 h-3" />
                                  </Button>
                                  <span className="text-sm w-8 text-center">{item.quantity}</span>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-6 w-6"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  >
                                    <Plus className="w-3 h-3" />
                                  </Button>
                                </div>
                                <span className="font-medium text-accent">
                                  {(item.price * item.quantity).toLocaleString()} ₽
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* Order Summary */}
                    <Card>
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span>Количество позиций:</span>
                            <span>{cart.length}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Общее количество:</span>
                            <span>{getTotalItems()} шт.</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between font-bold text-lg">
                            <span>Итого:</span>
                            <span className="text-accent">{getTotalPrice().toLocaleString()} ₽</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Contact Form */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Контактные данные</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <Label htmlFor="firstName" className="text-sm">Имя</Label>
                            <Input id="firstName" placeholder="Ваше имя" />
                          </div>
                          <div>
                            <Label htmlFor="phone" className="text-sm">Телефон</Label>
                            <Input id="phone" placeholder="+7 (999) 999-99-99" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-sm">Email</Label>
                          <Input id="email" type="email" placeholder="example@email.ru" />
                        </div>
                        <div>
                          <Label htmlFor="comment" className="text-sm">Комментарий</Label>
                          <Textarea 
                            id="comment" 
                            placeholder="Дополнительная информация к заказу"
                            rows={3}
                          />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Submit Button */}
                    <Button 
                      variant="cta" 
                      size="lg" 
                      className="w-full"
                      onClick={handleSubmitOrder}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Отправить заявку
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Наш менеджер свяжется с вами в течение часа для подтверждения заказа
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartsConfigurator;