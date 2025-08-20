import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import LeadForm from "@/components/LeadForm";
import { ArrowLeft, CheckCircle, Settings, Shield, Wrench } from "lucide-react";

interface EngineDetailProps {
  model: string;
}

const EngineDetail = ({ model }: EngineDetailProps) => {
  const engineData: Record<string, any> = {
    mvl: {
      name: "MVL",
      tagline: "Идеальный выбор для начинающих пилотов",
      description: "Двигатель MVL создан специально для пилотов, делающих первые шаги в парамоторинге. Легкий, надежный и простой в обслуживании.",
      image: "Фото MVL",
      specifications: {
        "Сухая масса": "6.8 кг",
        "Диаметр пропеллера": "1100-1200 мм", 
        "Ориентировочная тяга": "70 Н",
        "Рекомендуемая смесь": "1:50 (синтетика)",
        "Свеча зажигания": "NGK BR8ES",
        "Момент затяжки свечи": "25-30 Н·м"
      },
      features: [
        "Простота запуска и обслуживания",
        "Экономичный расход топлива",
        "Надежная работа на всех режимах",
        "Минимальные вибрации", 
        "Компактные размеры",
        "Доступная цена обслуживания"
      ],
      compatibility: [
        "Алюминиевые рамы: Fly Products, Fresh Breeze",
        "Нержавеющие рамы: Спорт, Парма",
        "Титановые рамы: по согласованию",
        "Тип редуктора: прямой привод",
        "Крепление: стандартные точки"
      ],
      maintenance: {
        schedule: "ТО-1 каждые 25 часов, ТО-2 каждые 100 часов",
        warranty: "12 месяцев",
        coverage: "Заводские дефекты, износ в пределах нормы",
        exclusions: "Перегрев, бедная смесь, механические повреждения"
      }
    },
    mv1: {
      name: "MV1", 
      tagline: "Универсальный двигатель для большинства задач",
      description: "MV1 — это золотая середина в линейке H&E. Оптимальное сочетание мощности, веса и надежности для пилотов с любым уровнем опыта.",
      specifications: {
        "Сухая масса": "7.2 кг",
        "Диаметр пропеллера": "1150-1250 мм",
        "Ориентировочная тяга": "80 Н", 
        "Рекомендуемая смесь": "1:50 (синтетика)",
        "Свеча зажигания": "NGK BR8ES",
        "Момент затяжки свечи": "25-30 Н·м"
      },
      features: [
        "Универсальность применения",
        "Проверенная надежность",
        "Отличное соотношение тяга/вес",
        "Устойчивая работа на всех оборотах",
        "Простое техобслуживание",
        "Широкий выбор пропеллеров"
      ]
    },
    mv2: {
      name: "MV2",
      tagline: "Мощный двигатель для опытных пилотов", 
      description: "MV2 предназначен для пилотов, которым нужна дополнительная мощность для активных полетов, работы с тяжелыми крыльями или в сложных условиях.",
      specifications: {
        "Сухая масса": "7.8 кг",
        "Диаметр пропеллера": "1200-1300 мм",
        "Ориентировочная тяга": "90 Н",
        "Рекомендуемая смесь": "1:50 (синтетика)", 
        "Свеча зажигания": "NGK BR8ES",
        "Момент затяжки свечи": "25-30 Н·м"
      },
      features: [
        "Высокая мощность и динамика",
        "Отличная тяга на всех режимах",
        "Устойчивость к высоким нагрузкам",
        "Быстрый набор оборотов",
        "Подходит для акробатических полетов",
        "Работа с тяжелыми крыльями"
      ]
    },
    rs206: {
      name: "RS206",
      tagline: "Профессиональный двигатель для серьезных задач",
      description: "RS206 создан для профессионального использования: коммерческие полеты, инструкторская работа, длительные маршруты.",
      specifications: {
        "Сухая масса": "8.1 кг",
        "Диаметр пропеллера": "1250-1350 мм",
        "Ориентировочная тяга": "95 Н",
        "Рекомендуемая смесь": "1:50 (синтетика)",
        "Свеча зажигания": "NGK BR8ES", 
        "Момент затяжки свечи": "25-30 Н·м"
      },
      features: [
        "Профессиональный уровень надежности",
        "Высокий моторесурс",
        "Стабильная работа в любых условиях",
        "Минимальное время обслуживания",
        "Подходит для коммерческого использования",
        "Расширенная гарантия"
      ]
    },
    "raptor-277": {
      name: "Raptor 277",
      tagline: "Максимальная производительность в линейке",
      description: "Raptor 277 — топовая модель с максимальной тягой для экстремальных полетов, акробатики и работы в горных условиях.",
      specifications: {
        "Сухая масса": "8.5 кг",
        "Диаметр пропеллера": "1300-1400 мм",
        "Ориентировочная тяга": "105 Н",
        "Рекомендуемая смесь": "1:50 (синтетика)",
        "Свеча зажигания": "NGK BR8ES",
        "Момент затяжки свечи": "25-30 Н·м"
      },
      features: [
        "Максимальная тяга в линейке", 
        "Премиальное качество изготовления",
        "Высокие рабочие обороты",
        "Подходит для экстремальных условий",
        "Быстрый отклик на газ",
        "Эксклюзивное обслуживание"
      ],
      compatibility: [
        "Рамы из алюминиевого сплава 6061-T6",
        "Рамы из нержавеющей стали 316L",
        "Титановые рамы (Grade 2)",
        "Стандартное крепление H&E",
        "Совместимость с электростартером",
        "Поддержка системы подогрева карбюратора"
      ],
      maintenance: {
        schedule: "Регламентное ТО каждые 25 моточасов или 6 месяцев",
        warranty: "Гарантия 12 месяцев с даты продажи",
        coverage: "Полное покрытие заводских дефектов, исключая износ расходных материалов и повреждения от неправильной эксплуатации"
      }
    }
  };

  const engine = engineData[model];

  if (!engine) {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Двигатель не найден
          </h1>
          <Button asChild>
            <Link to="/engines">Вернуться к каталогу</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/engines" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Назад к каталогу
            </Link>
          </Button>
          
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-accent">Главная</Link>
            <span className="mx-2">/</span>
            <Link to="/engines" className="hover:text-accent">Двигатели</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{engine.name}</span>
          </nav>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">H&E {engine.name}</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {engine.name}
              </h1>
              <p className="text-xl text-accent font-medium mb-6">
                {engine.tagline}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {engine.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg">
                  Получить счёт в ₽ / €
                </Button>
                <Button variant="outline" size="lg">
                  Согласовать установку
                </Button>
              </div>
            </div>
            
            <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground text-lg">{engine.image || `Фото ${engine.name}`}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-success" />
                Ключевые особенности
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {engine.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Specifications */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Settings className="w-6 h-6 text-accent" />
                Технические характеристики
              </h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                  {Object.entries(engine.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="text-muted-foreground">{key}:</span>
                      <span className="font-medium text-foreground">{String(value)}</span>
                    </div>
                  ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Compatibility */}
            {engine.compatibility && (
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Wrench className="w-6 h-6 text-accent" />
                  Совместимость и установка
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {engine.compatibility.map((item: string, index: number) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            )}

            {/* Maintenance & Warranty */}
            {engine.maintenance && (
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-success" />
                  Сервис и гарантия
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Регламент ТО</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{engine.maintenance.schedule}</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Гарантия</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-2">
                        <strong>Срок:</strong> {engine.maintenance.warranty}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Покрывается:</strong> {engine.maintenance.coverage}
                      </p>
                      <Separator className="my-3" />
                      <p className="text-muted-foreground text-sm">
                        <strong>Не покрывается:</strong> {engine.maintenance.exclusions}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <LeadForm />
            
            {/* Quick Specs */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Краткие характеристики</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Масса:</span>
                    <span className="font-medium">{engine.specifications["Сухая масса"]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Тяга:</span>
                    <span className="font-medium">{engine.specifications["Ориентировочная тяга"]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Винт:</span>
                    <span className="font-medium">{engine.specifications["Диаметр пропеллера"]}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Models */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Другие модели</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(engineData)
                    .filter(([key]) => key !== model)
                    .slice(0, 3)
                    .map(([key, data]) => (
                      <Link
                        key={key}
                        to={`/engines/${key}`}
                        className="block p-2 rounded-md hover:bg-muted transition-colors"
                      >
                        <div className="font-medium text-foreground">{data.name}</div>
                        <div className="text-sm text-muted-foreground">{data.specifications["Сухая масса"]} • {data.specifications["Ориентировочная тяга"]}</div>
                      </Link>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineDetail;