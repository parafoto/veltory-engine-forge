import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Truck, Shield, CreditCard, MapPin, AlertTriangle, CheckCircle } from "lucide-react";

const ShippingWarranty = () => {
  const shippingOptions = [
    {
      method: "СДЭК",
      description: "Доставка в пункты выдачи и курьером",
      timing: "2-5 дней по России",
      cost: "от 300 ₽",
      insurance: "До 300 000 ₽"
    },
    {
      method: "ПЭК", 
      description: "Транспортная компания",
      timing: "3-7 дней по России",
      cost: "от 500 ₽",
      insurance: "До 500 000 ₽"
    },
    {
      method: "Самовывоз",
      description: "Забрать со склада в Москве",
      timing: "В любое время",
      cost: "Бесплатно",
      insurance: "Не требуется"
    }
  ];

  const paymentMethods = [
    {
      method: "Банковская карта",
      description: "Visa, MasterCard, МИР",
      fee: "Без комиссии",
      receipt: "Онлайн-чек"
    },
    {
      method: "Банковский перевод",
      description: "Для юридических лиц",
      fee: "Без комиссии",
      receipt: "Счёт-фактура"
    },
    {
      method: "Наличные",
      description: "При самовывозе",
      fee: "Без комиссии", 
      receipt: "Кассовый чек"
    }
  ];

  const warrantyTerms = [
    {
      title: "Гарантийный срок",
      content: "12 месяцев с момента продажи при соблюдении регламента эксплуатации",
      icon: Shield
    },
    {
      title: "Что покрывается",
      content: "Заводские дефекты, преждевременный износ деталей в пределах нормы, неисправности системы зажигания",
      icon: CheckCircle
    },
    {
      title: "Что не покрывается",
      content: "Перегрев двигателя, работа на бедной смеси, механические повреждения, несоблюдение ТО",
      icon: AlertTriangle
    }
  ];

  const regions = [
    { region: "Москва и МО", time: "1-2 дня", cost: "от 200 ₽" },
    { region: "Санкт-Петербург", time: "2-3 дня", cost: "от 300 ₽" },
    { region: "Центральный ФО", time: "2-4 дня", cost: "от 400 ₽" },
    { region: "Северо-Запад", time: "3-5 дней", cost: "от 500 ₽" },
    { region: "Сибирь", time: "4-7 дней", cost: "от 600 ₽" },
    { region: "Дальний Восток", time: "5-10 дней", cost: "от 800 ₽" }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Доставка и гарантия
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Быстрая доставка по России, удобные способы оплаты и надёжная гарантия 
            на все двигатели H&E.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Shipping Section */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Truck className="w-8 h-8 text-accent" />
              Доставка
            </h2>

            <div className="space-y-6 mb-8">
              {shippingOptions.map((option, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{option.method}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Сроки:</span>
                        <div className="font-medium text-foreground">{option.timing}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Стоимость:</span>
                        <div className="font-medium text-accent">{option.cost}</div>
                      </div>
                      <div className="col-span-2">
                        <span className="text-muted-foreground">Страхование:</span>
                        <div className="font-medium text-foreground">{option.insurance}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Regional Delivery */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  Доставка по регионам
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {regions.map((region, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="text-foreground">{region.region}</span>
                      <div className="text-right text-sm">
                        <div className="text-muted-foreground">{region.time}</div>
                        <div className="text-accent font-medium">{region.cost}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Payment & Warranty Section */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <CreditCard className="w-8 h-8 text-accent" />
              Оплата
            </h2>

            <div className="space-y-6 mb-8">
              {paymentMethods.map((method, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{method.method}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm">
                      <div>
                        <span className="text-muted-foreground">Комиссия:</span>
                        <span className="ml-2 text-foreground">{method.fee}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Документы:</span>
                        <span className="ml-2 text-foreground">{method.receipt}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-accent/10 rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">Важно знать:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Оплата в рублях с выдачей документов РФ</li>
                <li>• Цены в евро указаны справочно</li>
                <li>• НДС включён в стоимость товаров</li>
                <li>• Предоплата 100% для физических лиц</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Warranty Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
            <Shield className="w-8 h-8 text-success" />
            Гарантийные обязательства
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {warrantyTerms.map((term, index) => (
              <Card key={index} className="hover:shadow-medium transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3">
                    <term.icon className={`w-6 h-6 ${
                      term.icon === CheckCircle ? 'text-success' : 
                      term.icon === AlertTriangle ? 'text-warning' : 
                      'text-accent'
                    }`} />
                    {term.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {term.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Warranty Process */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Порядок гарантийного обслуживания</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Badge variant="secondary" className="shrink-0 mt-0.5">1</Badge>
                  <div>
                    <h4 className="font-medium text-foreground">Обращение</h4>
                    <p className="text-sm text-muted-foreground">
                      Свяжитесь с нами по телефону или email, опишите проблему
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-start gap-4">
                  <Badge variant="secondary" className="shrink-0 mt-0.5">2</Badge>
                  <div>
                    <h4 className="font-medium text-foreground">Диагностика</h4>
                    <p className="text-sm text-muted-foreground">
                      Доставьте двигатель в сервисный центр или отправьте по почте
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-start gap-4">
                  <Badge variant="secondary" className="shrink-0 mt-0.5">3</Badge>
                  <div>
                    <h4 className="font-medium text-foreground">Заключение</h4>
                    <p className="text-sm text-muted-foreground">
                      В течение 3 рабочих дней определяем гарантийность случая
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-start gap-4">
                  <Badge variant="secondary" className="shrink-0 mt-0.5">4</Badge>
                  <div>
                    <h4 className="font-medium text-foreground">Ремонт или замена</h4>
                    <p className="text-sm text-muted-foreground">
                      Бесплатный ремонт или замена при гарантийном случае
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Info */}
        <section className="bg-gradient-primary text-primary-foreground rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Остались вопросы?
          </h3>
          <p className="text-primary-foreground/90 mb-6">
            Свяжитесь с нами для уточнения условий доставки и гарантии
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-primary-foreground/90">
            <div>📞 +7 (xxx) xxx-xx-xx</div>
            <div>📧 info@veltory.ru</div>
            <div>🕒 Пн-Пт: 9:00-18:00</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShippingWarranty;