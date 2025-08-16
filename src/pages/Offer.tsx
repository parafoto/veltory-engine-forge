import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Gavel, ShoppingCart, Truck } from "lucide-react";

const Offer = () => {
  const currentDate = "15 января 2025";
  const companyName = "ООО \"Ваша компания\"";
  const inn = "1234567890";
  const ogrn = "1234567890123";
  const address = "г. Москва, ул. Промышленная, д. 1";
  const email = "info@heparamotores.ru";
  const phone = "+7 (xxx) xxx-xx-xx";

  const sections = [
    {
      title: "1. Общие положения",
      icon: FileText,
      content: [
        `Настоящая публичная оферта (далее — Оферта) является официальным предложением ${companyName} (далее — Продавец) заключить договор купли-продажи товаров, представленных на сайте heparamotores.ru (далее — Сайт).`,
        "Оферта вступает в силу с момента размещения на Сайте и действует до момента её отзыва Продавцом.",
        "Акцепт (принятие) данной оферты осуществляется путём оформления заказа на Сайте или направления заявки любым доступным способом."
      ]
    },
    {
      title: "2. Предмет договора",
      icon: ShoppingCart,
      content: [
        "Продавец обязуется передать в собственность Покупателя товар, а Покупатель обязуется принять товар и уплатить за него цену.",
        "Товары представлены на Сайте в виде каталога с описанием основных потребительских свойств.",
        "Все товары сертифицированы и соответствуют требованиям технических регламентов РФ.",
        "Продавец оставляет за собой право изменять цены и характеристики товаров без предварительного уведомления."
      ]
    },
    {
      title: "3. Оформление и исполнение заказа",
      icon: Gavel,
      content: [
        "Заказ может быть оформлен через форму на Сайте, по телефону или электронной почте.",
        "После получения заказа Продавец связывается с Покупателем для подтверждения заказа и уточнения деталей.",
        "Договор считается заключённым с момента подтверждения заказа Продавцом.",
        "В случае отсутствия товара Продавец уведомляет об этом Покупателя в течение 3 рабочих дней."
      ]
    },
    {
      title: "4. Цены и оплата",
      icon: FileText,
      content: [
        "Цены на товары указаны в рублях РФ с учётом НДС.",
        "Цены в евро носят справочный характер и пересчитываются по курсу ЦБ РФ на дату оплаты.",
        "Оплата производится в следующем порядке:",
        "• Физические лица — 100% предоплата;",
        "• Юридические лица — по договорённости, возможна отсрочка платежа.",
        "Способы оплаты: банковские карты, банковский перевод, наличные при самовывозе."
      ]
    },
    {
      title: "5. Доставка",
      icon: Truck,
      content: [
        "Доставка осуществляется по территории Российской Федерации.",
        "Способы доставки: курьерская служба, транспортные компании, самовывоз.",
        "Сроки доставки зависят от региона и выбранного способа доставки.",
        "Риск случайной гибели товара переходит к Покупателю с момента передачи товара.",
        "Продавец не несёт ответственности за задержки, произошедшие по вине транспортных компаний."
      ]
    },
    {
      title: "6. Качество и гарантии",
      icon: FileText,
      content: [
        "Продавец гарантирует соответствие товаров их описанию и заявленным характеристикам.",
        "Гарантийный срок составляет 12 месяцев с момента передачи товара, если иное не указано в описании.",
        "Гарантия распространяется на заводские дефекты при соблюдении правил эксплуатации.",
        "Гарантия не распространяется на расходные материалы и механические повреждения."
      ]
    },
    {
      title: "7. Возврат и обмен",
      icon: Gavel,
      content: [
        "Покупатель вправе отказаться от товара в течение 7 дней с момента получения согласно ст. 26.1 Закона РФ «О защите прав потребителей».",
        "Возврат возможен при условии сохранения товарного вида, потребительских свойств и комплектности.",
        "Возврат денежных средств осуществляется в течение 10 банковских дней с момента получения возвращённого товара.",
        "Расходы по возврату товара несёт Покупатель, за исключением случаев брака или пересорта."
      ]
    },
    {
      title: "8. Ответственность сторон",
      icon: FileText,
      content: [
        "Стороны несут ответственность за неисполнение обязательств в соответствии с законодательством РФ.",
        "Продавец не несёт ответственности за:",
        "• Убытки, возникшие в результате неправильной эксплуатации товара;",
        "• Последствия несоблюдения инструкций по эксплуатации;",
        "• Задержки в доставке по вине третьих лиц.",
        "Общая ответственность Продавца ограничивается стоимостью товара."
      ]
    },
    {
      title: "9. Персональные данные",
      icon: FileText,
      content: [
        "Оформляя заказ, Покупатель даёт согласие на обработку персональных данных в соответствии с Политикой конфиденциальности.",
        "Персональные данные используются исключительно для исполнения договора купли-продажи.",
        "Продавец обязуется не передавать персональные данные третьим лицам, за исключением случаев, предусмотренных законом."
      ]
    },
    {
      title: "10. Заключительные положения",
      icon: Gavel,
      content: [
        "К отношениям между Продавцом и Покупателем применяется законодательство Российской Федерации.",
        "Все споры разрешаются путём переговоров, а при недостижении соглашения — в суде по месту нахождения Продавца.",
        "Настоящая Оферта может быть изменена Продавцом в одностороннем порядке с уведомлением на Сайте.",
        "В случае изменения Оферты новые условия распространяются только на договоры, заключённые после внесения изменений."
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Navigation */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              На главную
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
            <FileText className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Публичная оферта
          </h1>
          <p className="text-muted-foreground">
            Договор купли-продажи товаров дистанционным способом
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Действует с {currentDate}
          </p>
        </div>

        {/* Company Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-accent" />
              Реквизиты продавца
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Наименование:</span>
                <div className="font-medium text-foreground">{companyName}</div>
              </div>
              <div>
                <span className="text-muted-foreground">ИНН:</span>
                <div className="font-medium text-foreground">{inn}</div>
              </div>
              <div>
                <span className="text-muted-foreground">ОГРН:</span>
                <div className="font-medium text-foreground">{ogrn}</div>
              </div>
              <div>
                <span className="text-muted-foreground">Адрес:</span>
                <div className="font-medium text-foreground">{address}</div>
              </div>
              <div>
                <span className="text-muted-foreground">Email:</span>
                <div className="font-medium text-foreground">{email}</div>
              </div>
              <div>
                <span className="text-muted-foreground">Телефон:</span>
                <div className="font-medium text-foreground">{phone}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Offer Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <section.icon className="w-5 h-5 text-accent" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Acceptance */}
        <Card className="mt-12 bg-accent/5">
          <CardHeader>
            <CardTitle className="text-xl text-center">
              Акцепт оферты
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Оформление заказа на сайте или направление заявки любым способом 
              означает ваше согласие с условиями данной публичной оферты 
              и заключение договора купли-продажи.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/engines">Перейти к каталогу</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Дата публикации: {currentDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;