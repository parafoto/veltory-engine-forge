import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface LeadFormProps {
  className?: string;
}

const LeadForm = ({ className = "" }: LeadFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    model: "",
    comment: "",
    agreeToProcessing: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToProcessing) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласие на обработку персональных данных",
        variant: "destructive",
      });
      return;
    }

    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Ошибка",
        description: "Заполните обязательные поля",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в течение 15 минут",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        model: "",
        comment: "",
        agreeToProcessing: false,
      });
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте еще раз или свяжитесь с нами по телефону",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const engineModels = [
    "MVL",
    "MV1",
    "MV2", 
    "RS206",
    "RS185",
    "Raptor 277",
    "Не определился"
  ];

  return (
    <div className={`bg-card p-6 rounded-lg shadow-medium border border-border ${className}`}>
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Получить предложение
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Оставьте контакты — подберем двигатель и подготовим предложение за 15 минут
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">
              Имя <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ваше имя"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="phone">
              Телефон <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+7 (xxx) xxx-xx-xx"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
            required
          />
        </div>

        <div>
          <Label htmlFor="model">Интересующая модель</Label>
          <Select onValueChange={(value) => setFormData({ ...formData, model: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Выберите модель двигателя" />
            </SelectTrigger>
            <SelectContent>
              {engineModels.map((model) => (
                <SelectItem key={model} value={model}>
                  {model}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="comment">Комментарий</Label>
          <Textarea
            id="comment"
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            placeholder="Расскажите о своих требованиях, рамах, опыте полётов..."
            rows={3}
          />
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="agree"
            checked={formData.agreeToProcessing}
            onCheckedChange={(checked) => 
              setFormData({ ...formData, agreeToProcessing: checked as boolean })
            }
          />
          <Label htmlFor="agree" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
            Согласен на обработку{" "}
            <a href="/privacy" className="text-accent hover:underline">
              персональных данных
            </a>{" "}
            <span className="text-destructive">*</span>
          </Label>
        </div>

        <Button 
          type="submit" 
          variant="cta" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Отправляем..." : "Получить предложение"}
        </Button>
      </form>
    </div>
  );
};

export default LeadForm;