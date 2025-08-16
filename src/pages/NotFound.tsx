import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-32 h-32 mx-auto mb-8 bg-muted rounded-full flex items-center justify-center">
            <Search className="w-16 h-16 text-muted-foreground" />
          </div>
          
          <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Страница не найдена
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            К сожалению, запрашиваемая страница не существует. 
            Возможно, она была перемещена или удалена.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                На главную
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/engines">Каталог двигателей</Link>
            </Button>
          </div>
          
          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <h3 className="font-semibold text-foreground mb-4">Популярные разделы:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <Link to="/engines" className="text-accent hover:underline">Двигатели H&E</Link>
              <Link to="/service" className="text-accent hover:underline">Сервис и ЗИП</Link>
              <Link to="/shipping-warranty" className="text-accent hover:underline">Доставка</Link>
              <Link to="/contacts" className="text-accent hover:underline">Контакты</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
