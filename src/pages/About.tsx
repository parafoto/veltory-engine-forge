import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Wrench, Globe, Award, Target, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Инженер-диагност",
      role: "Техническая поддержка",
      experience: "15+ лет в авиации",
      languages: "RU, EN"
    },
    {
      name: "Механик-слесарь",
      role: "Ремонт и обслуживание", 
      experience: "10+ лет с парамоторами",
      languages: "RU"
    },
    {
      name: "Специалист по продажам",
      role: "Консультации и подбор",
      experience: "8+ лет в продажах",
      languages: "RU, EN, ES"
    }
  ];

  const capabilities = [
    {
      icon: Wrench,
      title: "Техническая экспертиза",
      description: "Глубокие знания конструкции и особенностей двигателей H&E"
    },
    {
      icon: Globe,
      title: "Международные связи",  
      description: "Прямое сотрудничество с производителем, оперативные поставки"
    },
    {
      icon: Users,
      title: "Персональный подход",
      description: "Индивидуальный подбор под ваш вес, крыло и стиль полётов"
    },
    {
      icon: Award,
      title: "Сертифицированный сервис",
      description: "Авторизованный сервисный центр с оригинальными запчастями"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Точность",
      description: "Все характеристики подтверждаем паспортами партии, никаких приблизительных цифр"
    },
    {
      icon: Zap,
      title: "Оперативность", 
      description: "Быстрое реагирование на запросы, минимальные сроки поставки и ремонта"
    },
    {
      icon: Shield,
      title: "Надёжность",
      description: "Работаем только с проверенными поставщиками, даём реальные гарантии"
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            О компании HEPARAMOTORES
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Мы — инженерный дилер H&E в России. Не просто продаём двигатели, 
            а обеспечиваем полный цикл технической поддержки парамоторной авиации.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16">
          <div className="bg-gradient-hero text-primary-foreground rounded-lg p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-4xl mx-auto">
              Делать парамоторинг в России доступнее и безопаснее через 
              качественную технику, профессиональный сервис и инженерную поддержку 
              на всех этапах — от выбора до капремонта.
            </p>
          </div>
        </section>

        {/* Capabilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Наши компетенции
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center hover:shadow-large transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <capability.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Принципы работы
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-medium transition-all">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <value.icon className="w-6 h-6 text-accent" />
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Команда специалистов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-center">{member.name}</CardTitle>
                  <CardDescription className="text-center">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Опыт:</span>
                      <div className="font-medium text-foreground">{member.experience}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Языки:</span>
                      <div className="font-medium text-foreground">{member.languages}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Infrastructure */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Мастерская и склад
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  В нашем распоряжении полностью оснащённая мастерская в Москве 
                  с современным диагностическим оборудованием, стендами для испытаний 
                  и складом оригинальных запчастей.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    Компьютерная диагностика двигателей
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    Испытательный стенд для проверки тяги
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    Склад запчастей с оборотом 30 дней
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    Техническая библиотека и документация
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Фото мастерской</span>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-3">
                <Award className="w-6 h-6 text-accent" />
                Статус и сертификация
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Официальный статус</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Авторизованный дилер H&E в России</li>
                    <li>• Сертифицированный сервисный центр</li>
                    <li>• Член ассоциации парамоторной авиации</li>
                    <li>• Партнёр ведущих производителей рам</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Документооборот</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Все документы в соответствии с законодательством РФ</li>
                    <li>• Таможенное оформление и сертификация</li>
                    <li>• Полный пакет гарантийных обязательств</li>
                    <li>• Техническая поддержка на русском языке</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Готовы к сотрудничеству
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации по выбору двигателя, 
            обслуживанию или любым техническим вопросам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/engines">Каталог двигателей</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;