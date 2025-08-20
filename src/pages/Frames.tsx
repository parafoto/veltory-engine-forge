import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Wrench, Shield, Zap } from "lucide-react";
import LeadForm from "@/components/LeadForm";

const Frames = () => {
  const frameTypes = [
    {
      id: "aluminum",
      name: "Алюминиевые рамы",
      material: "Сплав 6061-T6",
      description: "Оптимальное соотношение цены, веса и прочности. Подходят для большинства задач.",
      weight: "от 8 кг",
      durability: "Высокая",
      price: "Доступная",
      icon: <Shield className="h-6 w-6" />,
      features: [
        "Устойчивость к коррозии",
        "Простота ремонта",
        "Доступная стоимость",
        "Проверенная надежность",
        "Широкая совместимость"
      ],
      compatibility: ["MVL", "MV1", "MV2", "RS206"],
      pros: [
        "Лучшее соотношение цена/качество",
        "Легкость обработки и ремонта",
        "Хорошие антикоррозионные свойства"
      ]
    },
    {
      id: "steel",
      name: "Рамы из нержавеющей стали",
      material: "Сталь 316L",
      description: "Максимальная прочность и долговечность. Идеальны для интенсивного использования.",
      weight: "от 10 кг",
      durability: "Максимальная",
      price: "Средняя",
      icon: <Wrench className="h-6 w-6" />,
      features: [
        "Максимальная прочность",
        "Устойчивость к износу",
        "Долгий срок службы",
        "Стойкость к деформации",
        "Профессиональное качество"
      ],
      compatibility: ["MV1", "MV2", "RS206", "Raptor 277"],
      pros: [
        "Исключительная прочность",
        "Долговечность конструкции",
        "Устойчивость к агрессивной среде"
      ]
    },
    {
      id: "titanium",
      name: "Титановые рамы",
      material: "Титан Grade 2",
      description: "Минимальный вес при максимальной прочности. Для профессионалов и энтузиастов.",
      weight: "от 6 кг",
      durability: "Максимальная",
      price: "Премиум",
      icon: <Zap className="h-6 w-6" />,
      features: [
        "Минимальный вес",
        "Максимальная прочность",
        "Коррозионная стойкость",
        "Биосовместимость",
        "Эксклюзивность"
      ],
      compatibility: ["MV2", "RS206", "Raptor 277"],
      pros: [
        "Наименьший вес в категории",
        "Превосходная прочность",
        "Устойчивость к любым условиям"
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
            <span className="text-foreground">Рамы</span>
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
            Рамы для парамоторов
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Качественные рамы для двигателей H&E. Полная совместимость, 
            профессиональная установка и гарантия качества.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="#frames">Выбрать раму</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="#installation">Услуги установки</Link>
            </Button>
          </div>
        </div>

        {/* Frame Types Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16" id="frames">
          {frameTypes.map((frame) => (
            <Card key={frame.id} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {frame.icon}
                </div>
                <CardTitle className="text-xl">{frame.name}</CardTitle>
                <CardDescription>{frame.material}</CardDescription>
                <p className="text-sm text-muted-foreground mt-2">{frame.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="text-center">
                    <span className="text-muted-foreground block">Вес</span>
                    <Badge variant="outline" className="text-xs">{frame.weight}</Badge>
                  </div>
                  <div className="text-center">
                    <span className="text-muted-foreground block">Прочность</span>
                    <Badge variant="outline" className="text-xs">{frame.durability}</Badge>
                  </div>
                  <div className="text-center">
                    <span className="text-muted-foreground block">Цена</span>
                    <Badge variant="outline" className="text-xs">{frame.price}</Badge>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Совместимость:</p>
                  <div className="flex flex-wrap gap-1">
                    {frame.compatibility.map((engine) => (
                      <Badge key={engine} variant="secondary" className="text-xs">
                        {engine}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Особенности:</p>
                  <ul className="space-y-1">
                    {frame.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Преимущества:</p>
                  <ul className="space-y-1">
                    {frame.pros.map((pro, index) => (
                      <li key={index} className="text-xs text-muted-foreground">
                        • {pro}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter>
                <Button variant="outline" className="w-full">
                  Узнать стоимость
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Compatibility and Installation Section */}
        <div className="bg-card rounded-xl p-8 mb-16" id="installation">
          <h2 className="text-2xl font-bold text-center mb-8">Совместимость и установка</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Совместимость с двигателями</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="font-medium">MVL</span>
                  <Badge variant="secondary">Алюминий</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="font-medium">MV1, MV2</span>
                  <div className="flex gap-1">
                    <Badge variant="secondary">Алюминий</Badge>
                    <Badge variant="secondary">Сталь</Badge>
                    <Badge variant="secondary">Титан</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="font-medium">RS206</span>
                  <div className="flex gap-1">
                    <Badge variant="secondary">Сталь</Badge>
                    <Badge variant="secondary">Титан</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="font-medium">Raptor 277</span>
                  <div className="flex gap-1">
                    <Badge variant="secondary">Сталь</Badge>
                    <Badge variant="secondary">Титан</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Услуги установки</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Профессиональная сборка</p>
                    <p className="text-sm text-muted-foreground">
                      Установка и настройка всех компонентов согласно регламенту H&E
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Настройка и тестирование</p>
                    <p className="text-sm text-muted-foreground">
                      Проверка всех систем и настройка оптимальных параметров
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Гарантия на работы</p>
                    <p className="text-sm text-muted-foreground">
                      12 месяцев гарантии на качество сборки и установки
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Обучение эксплуатации</p>
                    <p className="text-sm text-muted-foreground">
                      Подробный инструктаж по эксплуатации и обслуживанию
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-6">Согласовать установку</h2>
            <p className="text-muted-foreground mb-6">
              Оставьте заявку для консультации по выбору рамы и расчета стоимости установки. 
              Наши специалисты помогут подобрать оптимальное решение.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span>Бесплатная консультация по выбору</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span>Расчет полной стоимости с установкой</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span>Сроки изготовления и поставки</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span>Официальная гарантия на все работы</span>
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

export default Frames;