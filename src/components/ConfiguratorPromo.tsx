import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Clock, Calculator } from "lucide-react";

const ConfiguratorPromo = () => {
  return (
    <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Settings className="w-8 h-8 text-accent" />
        </div>
        <CardTitle className="text-2xl lg:text-3xl">
          Соберите свой парамотор за 30 секунд
        </CardTitle>
        <CardDescription className="text-lg">
          Выберите двигатель, раму и опции — получите точную стоимость комплекта
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <Settings className="w-12 h-12 text-accent mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Выбор двигателя</h4>
            <p className="text-sm text-muted-foreground">
              MVL, MV1, RS185, MV2, RS206, Raptor 277
            </p>
          </div>
          <div className="text-center">
            <Calculator className="w-12 h-12 text-accent mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Совместимые рамы</h4>
            <p className="text-sm text-muted-foreground">
              Автоматический подбор по двигателю
            </p>
          </div>
          <div className="text-center">
            <Clock className="w-12 h-12 text-accent mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Мгновенный расчет</h4>
            <p className="text-sm text-muted-foreground">
              Точная стоимость с опциями
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="cta" asChild>
            <Link to="/configurator">Открыть конфигуратор</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConfiguratorPromo;