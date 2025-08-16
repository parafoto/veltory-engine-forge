import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = 2025;

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="font-bold text-xl mb-4">VELTORY</div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Официальный дилер двигателей H&E в России. 
              Поставка, установка, сервис и ЗИП для парамоторных двигателей 
              MVL, MV1, MV2, RS206, Raptor 277.
            </p>
            
            {/* Company Details */}
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <div>ООО "Ваша компания"</div>
              <div>ИНН: 1234567890</div>
              <div>ОГРН: 1234567890123</div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/engines" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Двигатели
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Сервис и ЗИП
                </Link>
              </li>
              <li>
                <Link to="/shipping-warranty" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Доставка и гарантия
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div>+7 (xxx) xxx-xx-xx</div>
              <div>info@veltory.ru</div>
              <div className="text-xs leading-relaxed">
                г. Москва, ул. Промышленная, д. 1
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-primary-foreground/70">
            <div className="mb-4 sm:mb-0">
              © {currentYear} VELTORY. H&E — товарный знак их правообладателей. 
              Использование — номинативное.
            </div>
            <div className="flex space-x-4">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Политика ПДн
              </Link>
              <Link to="/offer" className="hover:text-primary-foreground transition-colors">
                Публичная оферта
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;