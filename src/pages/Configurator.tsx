import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Settings, CheckCircle2 } from "lucide-react";

const Configurator = () => {
  // Catalog data
  const catalog = {
    engines: [
      {"id":"mvl","name":"MVL","price":0},
      {"id":"mv1","name":"MV1","price":0},
      {"id":"rs185","name":"RS 185","price":0},
      {"id":"mv2","name":"MV2","price":0},
      {"id":"rs206","name":"RS 206","price":0},
      {"id":"raptor277","name":"Raptor 277","price":0}
    ],
    frames: [
      {"id":"es_f1","name":"Icarus (ES)","origin":"ES","price":0},
      {"id":"es_f2","name":"Paralight (ES)","origin":"ES","price":0},
      {"id":"es_f3","name":"Hawk (ES)","origin":"ES","price":0},
      {"id":"ego3","name":"EGO 3 (RU)","origin":"RU","price":0},
      {"id":"skynet3","name":"SKYNET 3 (RU)","origin":"RU","price":0},
      {"id":"skynet4","name":"SKYNET 4 (RU)","price":0}
    ],
    recs: [
      {"engine":"mvl","frames":["es_f1","ego3"]},
      {"engine":"mv1","frames":["es_f1","es_f2","ego3","skynet3"]},
      {"engine":"rs185","frames":["es_f2","ego3","skynet3"]},
      {"engine":"mv2","frames":["es_f2","es_f3","skynet3","skynet4"]},
      {"engine":"rs206","frames":["es_f3","skynet3","skynet4"]},
      {"engine":"raptor277","frames":["es_f3","skynet4"]}
    ],
    extras: [
      {"id":"starter","name":"Электростартер","price":0},
      {"id":"prop_carbon","name":"Винт карбон","price":0},
      {"id":"cage_bag","name":"Сумка для кожуха","price":0}
    ],
    pricing: {
      engines: {"mvl":3500,"mv1":4200,"rs185":5200,"mv2":5600,"rs206":6400,"raptor277":6900},
      frames: {"es_f1":1600,"es_f2":1900,"es_f3":2100,"ego3":1200,"skynet3":1400,"skynet4":1700},
      extras: {"starter":450,"prop_carbon":600,"cage_bag":90},
      currency:"€"
    }
  };

  // States
  const [selEngine, setSelEngine] = useState("");
  const [selFrame, setSelFrame] = useState("");
  const [selExtras, setSelExtras] = useState<string[]>([]);
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    tg: ""
  });

  // Computed values
  const availableFrames = useMemo(() => {
    const map = catalog.recs.find(r => r.engine === selEngine);
    const ids = map ? map.frames : catalog.frames.map(f => f.id);
    return catalog.frames.filter(f => ids.includes(f.id));
  }, [selEngine]);

  const totalPrice = useMemo(() => {
    const P = catalog.pricing;
    if (!selEngine || !selFrame) return 0;
    const base = (P.engines[selEngine as keyof typeof P.engines] || 0) + 
                 (P.frames[selFrame as keyof typeof P.frames] || 0);
    const extras = selExtras.reduce((sum, id) => 
      sum + (P.extras[id as keyof typeof P.extras] || 0), 0);
    return base + extras;
  }, [selEngine, selFrame, selExtras]);

  const handleEngineChange = (value: string) => {
    setSelEngine(value);
    setSelFrame(""); // Reset frame when engine changes
  };

  const handleExtraChange = (extraId: string, checked: boolean) => {
    if (checked) {
      setSelExtras(prev => [...prev, extraId]);
    } else {
      setSelExtras(prev => prev.filter(id => id !== extraId));
    }
  };

  const canOrder = selEngine && selFrame;
  const botUsername = "heparamotores_bot"; // Replace with your actual bot username

  const selectedEngine = catalog.engines.find(e => e.id === selEngine);
  const selectedFrame = catalog.frames.find(f => f.id === selFrame);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Settings className="w-8 h-8 text-accent" />
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Конфигуратор
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Соберите свой парамотор за 30 секунд. Выберите двигатель, раму и опции — 
            получите точную стоимость комплекта.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            {/* Step 1 - Engine */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  Шаг 1. Двигатель
                </CardTitle>
                <CardDescription>
                  Выберите двигатель (по порядку: MVL, MV1, RS 185, MV2, RS 206, Raptor 277)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={selEngine} onValueChange={handleEngineChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите двигатель" />
                  </SelectTrigger>
                  <SelectContent>
                    {catalog.engines.map(engine => (
                      <SelectItem key={engine.id} value={engine.id}>
                        {engine.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Step 2 - Frame */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  Шаг 2. Рама
                </CardTitle>
                <CardDescription>
                  {!selEngine ? "Сначала выберите двигатель" : "Совместимые рамы для выбранного двигателя"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!selEngine ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Settings className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>Выберите двигатель для отображения совместимых рам</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-3">
                    {availableFrames.map(frame => (
                      <div 
                        key={frame.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                          selFrame === frame.id 
                            ? "border-accent bg-accent/10 shadow-md" 
                            : "border-border hover:border-accent/50 hover:bg-muted/50"
                        }`}
                        onClick={() => setSelFrame(frame.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-foreground">{frame.name}</h4>
                            <Badge variant="outline" className="mt-1">
                              {frame.origin}
                            </Badge>
                          </div>
                          {selFrame === frame.id && (
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Step 3 - Extras */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  Шаг 3. Опции
                </CardTitle>
                <CardDescription>
                  Дополнительное оборудование и аксессуары
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {catalog.extras.map(extra => (
                    <div key={extra.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={extra.id}
                        checked={selExtras.includes(extra.id)}
                        onCheckedChange={(checked) => 
                          handleExtraChange(extra.id, checked as boolean)
                        }
                      />
                      <Label htmlFor={extra.id} className="flex-1 cursor-pointer">
                        {extra.name}
                      </Label>
                      <span className="text-sm text-muted-foreground">
                        +{catalog.pricing.extras[extra.id as keyof typeof catalog.pricing.extras]} {catalog.pricing.currency}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step 4 - Summary and Order */}
          <div className="lg:sticky lg:top-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  Итог и заказ
                </CardTitle>
                <CardDescription>
                  Проверьте конфигурацию и оформите заказ
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Configuration Summary */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Двигатель:</span>
                    <span className="font-medium">
                      {selectedEngine?.name || "—"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Рама:</span>
                    <span className="font-medium">
                      {selectedFrame?.name || "—"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Опции:</span>
                    <span className="font-medium text-right">
                      {selExtras.length ? (
                        <div className="space-y-1">
                          {selExtras.map(extraId => {
                            const extra = catalog.extras.find(e => e.id === extraId);
                            return (
                              <div key={extraId} className="text-sm">
                                {extra?.name}
                              </div>
                            );
                          })}
                        </div>
                      ) : "—"}
                    </span>
                  </div>
                </div>

                {/* Total Price */}
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Итого:</span>
                    <span className="text-2xl font-bold text-accent">
                      {totalPrice} {catalog.pricing.currency}
                    </span>
                  </div>
                </div>

                {/* Contact Form (Optional) */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Контактная информация (опционально):</Label>
                  <div className="space-y-2">
                    <Input
                      placeholder="Имя"
                      value={customer.name}
                      onChange={(e) => setCustomer(prev => ({...prev, name: e.target.value}))}
                    />
                    <Input
                      placeholder="Telegram @username"
                      value={customer.tg}
                      onChange={(e) => setCustomer(prev => ({...prev, tg: e.target.value}))}
                    />
                    <Input
                      placeholder="Телефон"
                      value={customer.phone}
                      onChange={(e) => setCustomer(prev => ({...prev, phone: e.target.value}))}
                    />
                  </div>
                </div>

                {/* Order Button */}
                <Button 
                  size="lg" 
                  className="w-full" 
                  disabled={!canOrder}
                  asChild={canOrder ? true : undefined}
                >
                  {canOrder ? (
                    <a 
                      href={`https://t.me/${botUsername}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Оформить в Telegram
                    </a>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Settings className="w-4 h-4" />
                      Выберите двигатель и раму
                    </span>
                  )}
                </Button>

                {canOrder && (
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы перейдете в Telegram для оформления заказа
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="mt-12 text-center bg-muted/30 rounded-lg p-6">
          <p className="text-muted-foreground">
            Оплата в ЕС. Мы организуем содействие в приобретении и поставке. 
            Для РФ — через доверенных лиц.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Configurator;