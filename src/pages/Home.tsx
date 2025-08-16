import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LeadForm from "@/components/LeadForm";
import { CheckCircle, Zap, Settings, Shield, Users, ArrowRight } from "lucide-react";

const Home = () => {
  const engineModels = [
    {
      name: "MVL",
      description: "Легкий двигатель для начинающих",
      weight: "6.8 кг",
      thrust: "70 Н",
      link: "/engines/mvl"
    },
    {
      name: "MV1",
      description: "Универсальный двигатель",
      weight: "7.2 кг",
      thrust: "80 Н",
      link: "/engines/mv1"
    },
    {
      name: "MV2",
      description: "Мощный двигатель для опытных пилотов",
      weight: "7.8 кг",
      thrust: "90 Н",
      link: "/engines/mv2"
    },
    {
      name: "RS206",
      description: "Профессиональный двигатель",
      weight: "8.1 кг",
      thrust: "95 Н",
      link: "/engines/rs206"
    },
    {
      name: "Raptor 277",
      description: "Топовая модель с максимальной тягой",
      weight: "8.5 кг",
      thrust: "105 Н",
      link: "/engines/raptor-277"
    }
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Оптимальная тяга/вес",
      description: "Лучшее соотношение мощности к массе в классе"
    },
    {
      icon: Settings,
      title: "Низкая вибрация",
      description: "Сбалансированные двигатели для комфортных полётов"
    },
    {
      icon: Shield,
      title: "Высокий ресурс",
      description: "До 300 часов при соблюдении регламента ТО"
    },
    {
      icon: Users,
      title: "Сервис в РФ",
      description: "Диагностика, ТО и ремонт в Москве"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Заявка",
      description: "Оставляете контакты и требования"
    },
    {
      number: "02", 
      title: "Подбор и счёт",
      description: "Подбираем двигатель, готовим предложение"
    },
    {
      number: "03",
      title: "Поставка/установка",
      description: "Доставляем или устанавливаем на раму"
    },
    {
      number: "04",
      title: "Гарантия/ТО",
      description: "Гарантийное и сервисное обслуживание"
    }
  ];

  const faqItems = [
    {
      question: "Как происходит запуск двигателя?",
      answer: "Все двигатели H&E имеют ручной стартер. Электростартер доступен как опция для большинства моделей."
    },
    {
      question: "Какой регламент технического обслуживания?",
      answer: "ТО-1 каждые 25 часов, ТО-2 каждые 100 часов. Детальный регламент предоставляется с каждым двигателем."
    },
    {
      question: "Какая гарантия на двигатели?",
      answer: "12 месяцев с момента продажи при соблюдении регламента эксплуатации и использовании рекомендованных ГСМ."
    },
    {
      question: "Совместимы ли двигатели с российскими рамами?",
      answer: "Да, у нас есть переходники для установки на популярные рамы: Спорт, Парма, Fresh Breeze и другие."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-background/20 text-primary-foreground border-primary-foreground/20">
              Официальный дилер H&E в России
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Двигатели H&E для парамоторов
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              MVL, MV1, MV2, RS206, Raptor 277. Поставка, установка на рамы, сервис и ЗИП в РФ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/engines">Подобрать двигатель</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/contacts">Получить предложение</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Engine Models */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Линейка двигателей
            </h2>
            <p className="text-xl text-muted-foreground">
              Подберем двигатель под ваш вес, крыло и стиль полётов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {engineModels.map((engine) => (
              <Card key={engine.name} className="hover:shadow-large transition-all duration-300 group cursor-pointer">
                <Link to={engine.link}>
                  <CardHeader className="pb-4">
                    <div className="w-full h-32 bg-muted rounded-md mb-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Фото {engine.name}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      {engine.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {engine.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Масса:</span>
                        <span className="font-medium">{engine.weight}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Тяга:</span>
                        <span className="font-medium">{engine.thrust}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-accent text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Преимущества двигателей H&E
            </h2>
            <p className="text-xl text-muted-foreground">
              Почему выбирают наши двигатели
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <advantage.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Как мы работаем
            </h2>
            <p className="text-xl text-muted-foreground">
              Простой процесс от заявки до полёта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center text-cta-foreground font-bold text-xl">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border transform -translate-x-1/2 -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Частые вопросы
              </h2>
              <p className="text-xl text-muted-foreground">
                Ответы на основные вопросы о двигателях H&E
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqItems.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 shrink-0" />
                      {item.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed pl-8">
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Получить предложение
              </h2>
              <p className="text-xl text-muted-foreground">
                Подберем двигатель под ваш вес, крыло и манеру полёта. 
                Цифры характеристик подтверждаем паспортами поставки.
              </p>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;