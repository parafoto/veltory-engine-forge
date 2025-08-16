import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LeadForm from "@/components/LeadForm";
import { Settings, Wrench, Package, Clock, CheckCircle } from "lucide-react";

const Service = () => {
  const services = [
    {
      icon: Settings,
      title: "Диагностика и ремонт",
      description: "Полная диагностика, устранение неисправностей, капитальный ремонт",
      features: ["Компьютерная диагностика", "Замена изношенных деталей", "Проверка компрессии", "Настройка карбюратора"],
      price: "от 3 000 ₽"
    },
    {
      icon: Clock,
      title: "Техническое обслуживание",
      description: "Регламентное ТО согласно рекомендациями производителя",
      features: ["ТО-1 (25 часов)", "ТО-2 (100 часов)", "Замена расходников", "Проверка крепежа"],
      price: "от 2 500 ₽"
    },
    {
      icon: Package,
      title: "Склад запчастей",
      description: "Оригинальные запчасти H&E всегда в наличии",
      features: ["Приводные ремни", "Воздушные фильтры", "Свечи зажигания", "Прокладки и уплотнения"],
      price: "по прайсу"
    }
  ];

  const sparePartsCategories = [
    {
      category: "Расходные материалы",
      items: [
        { name: "Приводной ремень", price: "от 2 800 ₽", availability: "В наличии" },
        { name: "Воздушный фильтр", price: "от 1 200 ₽", availability: "В наличии" },
        { name: "Свеча зажигания NGK BR8ES", price: "от 800 ₽", availability: "В наличии" },
        { name: "Масло для редуктора", price: "от 1 500 ₽", availability: "В наличии" }
      ]
    },
    {
      category: "Запчасти двигателя",
      items: [
        { name: "Поршневая группа", price: "от 15 000 ₽", availability: "Под заказ" },
        { name: "Цилиндр в сборе", price: "от 25 000 ₽", availability: "Под заказ" },
        { name: "Картер двигателя", price: "от 30 000 ₽", availability: "Под заказ" },
        { name: "Коленвал", price: "от 20 000 ₽", availability: "Под заказ" }
      ]
    },
    {
      category: "Система охлаждения",
      items: [
        { name: "Крыльчатка вентилятора", price: "от 3 500 ₽", availability: "В наличии" },
        { name: "Кожух охлаждения", price: "от 5 000 ₽", availability: "Под заказ" },
        { name: "Дефлекторы", price: "от 1 800 ₽", availability: "В наличии" }
      ]
    }
  ];

  const maintenanceSchedule = [
    {
      interval: "Каждые 5 часов",
      tasks: ["Проверка уровня масла в редукторе", "Визуальный осмотр крепежа", "Проверка натяжения ремня"]
    },
    {
      interval: "Каждые 25 часов (ТО-1)",
      tasks: ["Замена свечи зажигания", "Чистка воздушного фильтра", "Проверка компрессии", "Проверка карбюратора"]
    },
    {
      interval: "Каждые 100 часов (ТО-2)",
      tasks: ["Замена приводного ремня", "Замена воздушного фильтра", "Замена масла в редукторе", "Проверка всех систем"]
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Сервис и запчасти
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Полный цикл сервисного обслуживания двигателей H&E в России. 
            Диагностика, ремонт, ТО и оригинальные запчасти.
          </p>
        </div>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-large transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-success mr-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-accent">{service.price}</span>
                    <Button variant="outline" size="sm">Заказать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Maintenance Schedule */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Регламент технического обслуживания
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {maintenanceSchedule.map((schedule, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-accent">{schedule.interval}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {schedule.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 shrink-0"></div>
                        {task}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Spare Parts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Запчасти и расходники
          </h2>
          <div className="space-y-8">
            {sparePartsCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Wrench className="w-5 h-5 text-accent" />
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.items.map((item, idx) => (
                    <Card key={idx} className="hover:shadow-medium transition-all">
                      <CardContent className="p-4">
                        <h4 className="font-medium text-foreground mb-2">{item.name}</h4>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-accent font-semibold">{item.price}</span>
                          <Badge variant={item.availability === "В наличии" ? "default" : "secondary"}>
                            {item.availability}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Form */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Заявка на сервис
              </h2>
              <p className="text-muted-foreground">
                Опишите проблему или выберите необходимую услугу — 
                подготовим предложение с точными сроками и стоимостью
              </p>
            </div>
            <LeadForm />
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-muted/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Сервисный центр в Москве
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-muted-foreground">
            <div>
              <strong className="text-foreground">Адрес:</strong><br />
              г. Москва, ул. Промышленная, д. 1
            </div>
            <div>
              <strong className="text-foreground">Время работы:</strong><br />
              Пн-Пт: 9:00-18:00<br />
              Сб: 10:00-16:00
            </div>
            <div>
              <strong className="text-foreground">Контакты:</strong><br />
              +7 (xxx) xxx-xx-xx<br />
              service@heparamotores.ru
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Service;