import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Engines = () => {
  const engines = [
    {
      id: "mvl",
      name: "MVL",
      tagline: "Идеален для начинающих пилотов",
      description: "Легкий и надежный двигатель для первых полетов и обучения",
      weight: "6.8 кг",
      thrust: "70 Н",
      propeller: "1100-1200 мм",
      features: ["Простота обслуживания", "Экономичный расход", "Надежный запуск"]
    },
    {
      id: "mv1", 
      name: "MV1",
      tagline: "Универсальный выбор",
      description: "Оптимальное сочетание мощности и веса для большинства задач",
      weight: "7.2 кг",
      thrust: "80 Н", 
      propeller: "1150-1250 мм",
      features: ["Универсальность", "Проверенная надежность", "Отличная тяга"]
    },
    {
      id: "mv2",
      name: "MV2", 
      tagline: "Для опытных пилотов",
      description: "Мощный двигатель для активных полетов и сложных условий",
      weight: "7.8 кг",
      thrust: "90 Н",
      propeller: "1200-1300 мм", 
      features: ["Высокая мощность", "Отличная динамика", "Устойчивость к нагрузкам"]
    },
    {
      id: "rs206",
      name: "RS206",
      tagline: "Профессиональный уровень", 
      description: "Двигатель для профессиональных задач и коммерческих полетов",
      weight: "8.1 кг",
      thrust: "95 Н",
      propeller: "1250-1350 мм",
      features: ["Профессиональный уровень", "Высокий ресурс", "Стабильная работа"]
    },
    {
      id: "raptor-277",
      name: "Raptor 277",
      tagline: "Максимальная производительность",
      description: "Топовая модель с максимальной тягой для экстремальных полетов", 
      weight: "8.5 кг",
      thrust: "105 Н",
      propeller: "1300-1400 мм",
      features: ["Максимальная тяга", "Премиум качество", "Высокие обороты"]
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Двигатели H&E
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Подбор двигателя под массу пилота, крыло и раму. 
            Все цифры подтверждаем паспортами на партию.
          </p>
        </div>

        {/* Engine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {engines.map((engine) => (
            <Card key={engine.id} className="hover:shadow-large transition-all duration-300 group">
              <CardHeader>
                <div className="w-full h-48 bg-muted rounded-md mb-6 flex items-center justify-center">
                  <span className="text-muted-foreground">Фото {engine.name}</span>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl group-hover:text-accent transition-colors mb-2">
                      {engine.name}
                    </CardTitle>
                    <CardDescription className="text-accent font-medium mb-3">
                      {engine.tagline}
                    </CardDescription>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {engine.description}
                </p>
              </CardHeader>

              <CardContent>
                {/* Specifications */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-foreground">{engine.weight}</div>
                    <div className="text-sm text-muted-foreground">Масса</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-foreground">{engine.thrust}</div>
                    <div className="text-sm text-muted-foreground">Тяга</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-foreground">{engine.propeller}</div>
                    <div className="text-sm text-muted-foreground">Винт</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Ключевые особенности:</h4>
                  <ul className="space-y-2">
                    {engine.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button variant="cta" className="w-full" asChild>
                  <Link to={`/engines/${engine.id}`} className="flex items-center justify-center gap-2">
                    Подробнее о {engine.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-muted/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Нужна консультация по выбору?
          </h3>
          <p className="text-muted-foreground mb-6">
            Поможем подобрать оптимальный двигатель под ваш вес, опыт и задачи полётов
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/contacts">Получить консультацию</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Engines;