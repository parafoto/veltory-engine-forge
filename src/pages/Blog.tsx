import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Calendar, User, ArrowRight, Wrench, Zap, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const categories = ["Все статьи", "Обслуживание", "Эксплуатация", "Установка", "Диагностика"];
  
  const articles = [
    {
      id: 1,
      title: "Правильная обкатка нового двигателя H&E",
      excerpt: "Подробная инструкция по обкатке двигателей MVL, MV1, MV2 для максимального ресурса и надёжности.",
      category: "Эксплуатация",
      date: "15 января 2025",
      author: "Инженер-диагност",
      readTime: "7 мин",
      image: "Обкатка двигателя",
      icon: Zap
    },
    {
      id: 2,
      title: "Топливные смеси: как выбрать правильное соотношение",
      excerpt: "Сравнение синтетических и минеральных масел, оптимальные пропорции для разных режимов эксплуатации.",
      category: "Эксплуатация", 
      date: "12 января 2025",
      author: "Механик-слесарь",
      readTime: "5 мин",
      image: "Топливные смеси",
      icon: Wrench
    },
    {
      id: 3,
      title: "Вибродиагностика: когда двигатель «говорит» о проблемах",
      excerpt: "Как по характеру вибраций определить износ подшипников, дисбаланс винта и другие неисправности.",
      category: "Диагностика",
      date: "8 января 2025", 
      author: "Инженер-диагност",
      readTime: "10 мин",
      image: "Вибродиагностика",
      icon: Settings
    },
    {
      id: 4,
      title: "Подбор пропеллера: 2 или 3 лопасти?",
      excerpt: "Влияние количества лопастей на тягу, шум, вибрации и расход топлива. Рекомендации по диаметру.",
      category: "Установка",
      date: "5 января 2025",
      author: "Специалист по продажам", 
      readTime: "6 мин",
      image: "Подбор пропеллера",
      icon: Settings
    },
    {
      id: 5,
      title: "Совместимость с российскими рамами: таблица переходников",
      excerpt: "Полная таблица совместимости двигателей H&E с рамами Спорт, Парма, Fresh Breeze и другими.",
      category: "Установка",
      date: "2 января 2025",
      author: "Механик-слесарь",
      readTime: "4 мин", 
      image: "Совместимость рам",
      icon: Wrench
    },
    {
      id: 6,
      title: "Регламент ТО-2: что включает обслуживание на 100 часов",
      excerpt: "Детальный чек-лист технического обслуживания, необходимые запчасти и инструменты.",
      category: "Обслуживание",
      date: "28 декабря 2024",
      author: "Инженер-диагност",
      readTime: "8 мин",
      image: "Регламент ТО-2", 
      icon: Settings
    }
  ];

  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Техническая база знаний
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Практические советы по эксплуатации, обслуживанию и ремонту двигателей H&E 
            от наших инженеров и механиков.
          </p>
        </div>

        {/* Search and Categories */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Поиск по статьям..."
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Badge 
                  key={index}
                  variant={index === 0 ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Article */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Рекомендуем к прочтению</h2>
          <Card className="hover:shadow-large transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="w-full h-64 lg:h-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">{featuredArticle.image}</span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary">{featuredArticle.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredArticle.author}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {featuredArticle.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {featuredArticle.readTime} чтения
                  </span>
                  <Button variant="cta" className="group">
                    Читать статью
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Articles Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Все статьи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-large transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="w-full h-40 bg-muted rounded-md mb-4 flex items-center justify-center">
                    <article.icon className="w-8 h-8 text-muted-foreground" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  
                  <CardTitle className="text-lg group-hover:text-accent transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                  
                  <CardDescription className="line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="bg-gradient-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Получайте новые статьи первыми
          </h2>
          <p className="text-primary-foreground/90 mb-6">
            Подпишитесь на наши обновления — будем присылать только самые важные 
            технические материалы, без спама.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Введите ваш email"
              className="bg-primary-foreground text-primary border-0"
            />
            <Button variant="cta" className="bg-accent hover:bg-accent/90 whitespace-nowrap">
              Подписаться
            </Button>
          </div>
        </section>

        {/* FAQ Hint */}
        <section className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Не нашли ответ на свой вопрос?
          </h3>
          <p className="text-muted-foreground mb-6">
            Свяжитесь с нашими специалистами для получения персональной консультации
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contacts">Задать вопрос</Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Blog;