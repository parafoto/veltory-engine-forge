import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, FileText, User, Lock } from "lucide-react";

const Privacy = () => {
  const currentDate = "15 января 2025";
  const companyName = "ООО \"Ваша компания\"";
  const inn = "1234567890";
  const address = "г. Москва, ул. Промышленная, д. 1";
  const email = "info@heparamotores.ru";
  const phone = "+7 (xxx) xxx-xx-xx";

  const sections = [
    {
      title: "1. Общие положения",
      content: [
        `Настоящая Политика обработки персональных данных (далее — Политика) действует в отношении всей информации, которую ${companyName} (далее — Оператор) может получить о пользователе во время использования им сайта heparamotores.ru.`,
        "Использование сайта означает безоговорочное согласие пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации.",
        "В случае несогласия с условиями Политики пользователь должен прекратить использование сайта."
      ]
    },
    {
      title: "2. Цели обработки персональных данных",
      content: [
        "Персональные данные пользователей обрабатываются в следующих целях:",
        "• Предоставление услуг по продаже двигателей и комплектующих;",
        "• Консультирование по техническим вопросам;",
        "• Организация сервисного обслуживания;",
        "• Выполнение договорных обязательств;",
        "• Информирование о новых товарах и услугах;",
        "• Исполнение требований законодательства РФ."
      ]
    },
    {
      title: "3. Состав обрабатываемых персональных данных",
      content: [
        "Оператор обрабатывает следующие категории персональных данных:",
        "• Фамилия, имя, отчество;",
        "• Контактный телефон;",
        "• Адрес электронной почты;",
        "• Адрес доставки товаров;",
        "• Информация о предпочтениях и интересах;",
        "• Техническая информация о посещении сайта (IP-адрес, cookies)."
      ]
    },
    {
      title: "4. Правовые основания обработки",
      content: [
        "Обработка персональных данных осуществляется на основании:",
        "• Согласия субъекта персональных данных (ст. 6 Федерального закона №152-ФЗ);",
        "• Исполнения договора, стороной которого является субъект персональных данных;",
        "• Осуществления законной деятельности оператора."
      ]
    },
    {
      title: "5. Способы обработки и хранения",
      content: [
        "Обработка персональных данных производится с использованием средств автоматизации и без использования таких средств.",
        "Персональные данные хранятся на серверах, расположенных на территории Российской Федерации.",
        "Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного доступа, уничтожения, изменения, блокирования, копирования, предоставления, распространения."
      ]
    },
    {
      title: "6. Передача персональных данных третьим лицам",
      content: [
        "Персональные данные могут быть переданы третьим лицам только в случаях:",
        "• Получения согласия субъекта персональных данных;",
        "• Исполнения договорных обязательств (службы доставки, банки);",
        "• Исполнения требований законодательства РФ.",
        "Оператор не передаёт персональные данные третьим лицам для их собственных маркетинговых целей без согласия субъекта."
      ]
    },
    {
      title: "7. Права субъекта персональных данных",
      content: [
        "Субъект персональных данных имеет право:",
        "• Получать информацию об обработке своих персональных данных;",
        "• Требовать уточнения, блокирования или уничтожения неточных или незаконно обработанных данных;",
        "• Отзывать согласие на обработку персональных данных;",
        "• Обжаловать действия оператора в надзорном органе или суде.",
        `Для реализации указанных прав следует обращаться по адресу: ${email} или ${phone}.`
      ]
    },
    {
      title: "8. Сроки обработки",
      content: [
        "Персональные данные обрабатываются в течение срока, необходимого для достижения целей обработки.",
        "По достижении целей обработки или при отзыве согласия персональные данные подлежат уничтожению, если иное не предусмотрено законом.",
        "Данные для исполнения договорных обязательств хранятся в течение срока исковой давности."
      ]
    },
    {
      title: "9. Использование cookies",
      content: [
        "Сайт использует файлы cookies для улучшения пользовательского опыта.",
        "Пользователь может настроить свой браузер для отказа от cookies, однако это может ограничить функциональность сайта.",
        "Информация, собираемая с помощью cookies, не содержит персональных данных и используется только для технических целей."
      ]
    },
    {
      title: "10. Изменения в Политике",
      content: [
        "Оператор оставляет за собой право вносить изменения в настоящую Политику.",
        "Новая редакция Политики вступает в силу с момента размещения на сайте.",
        "Пользователи уведомляются об изменениях через электронную почту или уведомления на сайте."
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
            <Shield className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Политика обработки персональных данных
          </h1>
          <p className="text-muted-foreground">
            Действует с {currentDate}
          </p>
        </div>

        {/* Company Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-accent" />
              Оператор персональных данных
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
                <span className="text-muted-foreground">Адрес:</span>
                <div className="font-medium text-foreground">{address}</div>
              </div>
              <div>
                <span className="text-muted-foreground">Контакты:</span>
                <div className="font-medium text-foreground">{email}, {phone}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{section.title}</CardTitle>
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

        {/* Contact Info */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <User className="w-5 h-5 text-accent" />
              Контактная информация
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              По всем вопросам, связанным с обработкой персональных данных, 
              вы можете обратиться к нам следующими способами:
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">Email:</span>
                <a href={`mailto:${email}`} className="text-accent hover:underline">
                  {email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">Телефон:</span>
                <a href={`tel:${phone}`} className="text-accent hover:underline">
                  {phone}
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Последнее обновление: {currentDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;