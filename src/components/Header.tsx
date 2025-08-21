import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: "Главная",
    href: "/"
  }, {
    name: "Двигатели",
    href: "/engines"
  }, {
    name: "Парамоторы",
    href: "/paramotors"
  }, {
    name: "Рамы",
    href: "/frames"
  }, {
    name: "Сервис",
    href: "/service",
    submenu: [{
      name: "Сервис",
      href: "/service"
    }, {
      name: "Конфигуратор запчастей",
      href: "/parts-configurator"
    }]
  }, {
    name: "Доставка и гарантия",
    href: "/shipping-warranty"
  }, {
    name: "Блог",
    href: "/blog"
  }, {
    name: "Конфигуратор",
    href: "/configurator"
  }, {
    name: "Контакты",
    href: "/contacts"
  }];

  const isActive = (href: string) => location.pathname === href;
  const isActiveSubmenu = (submenu: any[]) => submenu.some(item => location.pathname === item.href);
  return <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-subtle">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-bold text-xl text-primary">HEPARAMOTORES</div>
            <span className="hidden sm:block text-sm text-muted-foreground">Engines & Paramotors</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map(item => 
              item.submenu ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className={`flex items-center text-sm font-medium transition-colors hover:text-accent ${isActiveSubmenu(item.submenu) ? "text-accent border-b-2 border-accent" : "text-foreground"}`}>
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="min-w-[200px]">
                    {item.submenu.map(subItem => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link to={subItem.href} className={`w-full ${isActive(subItem.href) ? "text-accent font-medium" : ""}`}>
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors hover:text-accent ${isActive(item.href) ? "text-accent border-b-2 border-accent" : "text-foreground"}`}>
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cta" asChild>
              <Link to="/contacts">Получить предложение</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Открыть меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex items-center justify-between mb-6">
                <div className="font-bold text-lg text-primary">HEPARAMOTORES</div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
               <nav className="flex flex-col space-y-4">
                 {navigation.map(item => 
                   item.submenu ? (
                     <div key={item.name} className="space-y-2">
                       <div className={`text-base font-medium py-2 px-3 rounded-md transition-colors ${isActiveSubmenu(item.submenu) ? "bg-accent/10 text-accent" : "text-foreground"}`}>
                         {item.name}
                       </div>
                       <div className="pl-4 space-y-1">
                         {item.submenu.map(subItem => (
                           <Link key={subItem.name} to={subItem.href} onClick={() => setIsOpen(false)} className={`block text-sm font-medium py-2 px-3 rounded-md transition-colors ${isActive(subItem.href) ? "bg-accent/10 text-accent" : "text-muted-foreground hover:bg-muted"}`}>
                             {subItem.name}
                           </Link>
                         ))}
                       </div>
                     </div>
                   ) : (
                     <Link key={item.name} to={item.href} onClick={() => setIsOpen(false)} className={`text-base font-medium py-2 px-3 rounded-md transition-colors ${isActive(item.href) ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted"}`}>
                       {item.name}
                     </Link>
                   )
                 )}
                
                <div className="pt-4 border-t border-border">
                  <Button variant="cta" className="w-full" asChild>
                    <Link to="/contacts" onClick={() => setIsOpen(false)}>
                      Получить предложение
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>;
};
export default Header;