import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Star } from "lucide-react";
import LeadForm from "@/components/LeadForm";

const Paramotors = () => {
  const paramoторSets = [
    {
      id: "mvl-set",
      name: "Комплект MVL",
      description: "Идеальный выбор для начинающих пилотов. Легкий и надежный комплект с двигателем MVL.",
      engine: "MVL",
      weight: "от 22 кг",
      thrust: "до 180 Н",
      frameOptions: ["Алюминий", "Нержавеющая сталь"],
      propellerOptions: ["2-лопастной", "3-лопастной"],
      features: [
        "Простота управления",
        "Минимальный вес комплекта",
        "Экономичный расход топлива",
        "Надежная конструкция"
      ]
    },
    {
      id: "mv1-set", 
      name: "Комплект MV1",
      description: "Универсальный комплект для регулярных полетов. Оптимальное соотношение мощности и веса.",
      engine: "MV1",
      weight: "от 24 кг",
      thrust: "до 220 Н",
      frameOptions: ["Алюминий", "Нержавеющая сталь", "Титан"],
      propellerOptions: ["2-лопастной", "3-лопастной"],
      features: [
        "Увеличенная мощность",
        "Система электростарта",
        "Улучшенное охлаждение",
        "Возможность установки подогрева"
      ]
    },
    {
      id: "mv2-set",
      name: "Комплект MV2", 
      description: "Мощный комплект для опытных пилотов. Высокие летные характеристики и надежность.",
      engine: "MV2",
      weight: "от 26 кг",
      thrust: "до 250 Н", 
      frameOptions: ["Алюминий", "Нержавеющая сталь", "Титан"],
      propellerOptions: ["2-лопастной", "3-лопастной"],
      features: [
        "Высокая мощность",
        "Профессиональные настройки",
        "Система автоматического обогащения",
        "Расширенные возможности настройки"
      ]
    },
    {
      id: "rs-set",
      name: "Комплект RS206/RS185",
      description: "Профессиональные комплекты с двигателями RS серии для требовательных пилотов.",
      engine: "RS206/RS185",
      weight: "от 25 кг",
      thrust: "до 280 Н",
      frameOptions: ["Алюминий", "Нержавеющая сталь", "Титан"],
      propellerOptions: ["2-лопастной", "3-лопастной"],
      features: [
        "Максимальная надежность",
        "Увеличенный ресурс",
        "Профессиональный уровень",
        "Возможность тонкой настройки"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Breadcrumbs */}
      <div className="bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-foreground">Парамоторы</span>
          </nav>
        </div>
      </div>

      {/* Back button */}
      <div className="container mx-auto px-4 pt-6">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/" className="mb-6 inline-flex">
            <ArrowLeft className="mr-2 h-4 w-4" />
            На главную
          </Link>
        </Button>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Парамоторы H&E
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Полные комплекты парамоторов от официального дилера H&E в России. 
            Выберите оптимальную конфигурацию для ваших задач.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="#selection">Выбрать комплект</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="#consultation">Консультация</Link>
            </Button>
          </div>
        </div>

        {/* Paramotor Sets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" id="selection">
          {paramoторSets.map((set) => (
            <Card key={set.id} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{set.engine}</Badge>
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                </div>
                <CardTitle className="text-xl">{set.name}</CardTitle>
                <CardDescription className="text-base">{set.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Вес комплекта:</span>
                    <p className="font-semibold">{set.weight}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Тяга:</span>
                    <p className="font-semibold">{set.thrust}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Материалы рамы:</p>
                  <div className="flex flex-wrap gap-1">
                    {set.frameOptions.map((option) => (
                      <Badge key={option} variant="outline" className="text-xs">
                        {option}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Пропеллеры:</p>
                  <div className="flex flex-wrap gap-1">
                    {set.propellerOptions.map((option) => (
                      <Badge key={option} variant="outline" className="text-xs">
                        {option}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Ключевые особенности:</p>
                  <ul className="space-y-1">
                    {set.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full" asChild>
                  <Link to={`/engines/${set.engine.toLowerCase().replace('/', '-')}`}>
                    Подробнее о двигателе
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* How to Choose Section */}
        <div className="bg-card rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Как выбрать комплект</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Определите задачи</h3>
              <p className="text-sm text-muted-foreground">
                Обучение, прогулочные полеты или спорт - выберите двигатель под ваши цели
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Выберите материал рамы</h3>
              <p className="text-sm text-muted-foreground">
                Алюминий для экономии, нержавейка для баланса, титан для минимального веса
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Согласуйте комплектацию</h3>
              <p className="text-sm text-muted-foreground">
                Подберем оптимальный пропеллер и дополнительное оборудование
              </p>
            </div>
          </div>
        </div>

        {/* Consultation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" id="consultation">
          <div>
            <h2 className="text-2xl font-bold mb-6">Согласовать комплектацию</h2>
            <p className="text-muted-foreground mb-6">
              Оставьте заявку, и наши специалисты помогут подобрать оптимальный комплект 
              парамотора под ваши задачи и бюджет.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span>Бесплатная консультация по выбору</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span>Расчет точной стоимости комплекта</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span>Помощь в сборке и настройке</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span>Официальная гарантия H&E</span>
              </div>
            </div>
          </div>
          <div>
            <LeadForm className="sticky top-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paramotors;