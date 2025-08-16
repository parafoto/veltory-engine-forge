import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, Wrench } from "lucide-react";
import LeadForm from "@/components/LeadForm";

const Contacts = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Телефон",
      primary: "+7 (xxx) xxx-xx-xx",
      secondary: "Звоните в рабочее время",
      description: "Консультации, заказы, техническая поддержка"
    },
    {
      icon: MessageCircle,
      title: "Telegram / WhatsApp",
      primary: "+7 (xxx) xxx-xx-xx", 
      secondary: "Быстрые ответы 24/7",
      description: "Оперативная связь по любым вопросам"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@veltory.ru",
      secondary: "service@veltory.ru",
      description: "Подробные консультации, техническая документация"
    }
  ];

  const officeInfo = {
    address: "г. Москва, ул. Промышленная, д. 1, стр. 5",
    workingHours: {
      weekdays: "Понедельник - Пятница: 9:00 - 18:00",
      saturday: "Суббота: 10:00 - 16:00", 
      sunday: "Воскресенье: выходной"
    },
    services: [
      "Склад готовых двигателей",
      "Мастерская и диагностика",
      "Демонстрационный зал",
      "Консультации специалистов"
    ]
  };

  const departments = [
    {
      icon: Users,
      title: "Отдел продаж",
      contact: "sales@veltory.ru",
      phone: "+7 (xxx) xxx-xx-xx",
      description: "Подбор двигателей, коммерческие предложения, оптовые продажи"
    },
    {
      icon: Wrench,  
      title: "Сервисный центр",
      contact: "service@veltory.ru",
      phone: "+7 (xxx) xxx-xx-xx",
      description: "Диагностика, ремонт, ТО, запчасти и расходники"
    },
    {
      icon: MessageCircle,
      title: "Техническая поддержка", 
      contact: "support@veltory.ru",
      phone: "+7 (xxx) xxx-xx-xx",
      description: "Консультации по эксплуатации, установке, совместимости"
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Контакты
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Свяжитесь с нами удобным способом. Отвечаем быстро, 
            консультируем профессионально, решаем любые вопросы.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Methods */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Способы связи
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {contactMethods.map((method, index) => (
                <Card key={index} className="hover:shadow-large transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <method.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-4">
                      <div className="font-semibold text-foreground mb-1">
                        {method.primary}
                      </div>
                      {method.secondary && (
                        <div className="text-sm text-muted-foreground">
                          {method.secondary}
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Departments */}
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Специализированные отделы
            </h3>
            <div className="space-y-4 mb-12">
              {departments.map((dept, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <dept.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{dept.title}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <span className="text-sm text-accent font-medium">{dept.contact}</span>
                          <span className="text-sm text-muted-foreground">{dept.phone}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {dept.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Office Location */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-accent" />
                  Офис и мастерская в Москве
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Адрес:</h4>
                    <p className="text-muted-foreground mb-4">
                      {officeInfo.address}
                    </p>
                    
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Время работы:
                    </h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div>{officeInfo.workingHours.weekdays}</div>
                      <div>{officeInfo.workingHours.saturday}</div>
                      <div>{officeInfo.workingHours.sunday}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Что у нас есть:</h4>
                    <ul className="space-y-2">
                      {officeInfo.services.map((service, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 shrink-0"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <span>Интерактивная карта</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <LeadForm className="sticky top-4" />
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Приезжайте к нам в гости!
          </h2>
          <p className="text-primary-foreground/90 mb-6 leading-relaxed">
            Посмотрите на двигатели вживую, получите консультацию специалистов, 
            оцените качество нашего сервиса. Предварительная запись не обязательна.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="bg-accent hover:bg-accent/90">
              Записаться на визит
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Позвонить сейчас
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacts;