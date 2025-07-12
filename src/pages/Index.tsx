import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Фрезерная обработка",
      description:
        "Высокоточная обработка деталей на современных фрезерных станках",
      icon: "Settings",
    },
    {
      title: "Токарная обработка",
      description:
        "Профессиональная токарная обработка металлов различной сложности",
      icon: "RotateCw",
    },
    {
      title: "Лазерная резка",
      description: "Точная лазерная резка металлов с минимальными допусками",
      icon: "Zap",
    },
    {
      title: "Электроэрозионная обработка",
      description: "Обработка сложных профилей и твердых материалов",
      icon: "Bolt",
    },
    {
      title: "Слесарная обработка",
      description: "Ручная доводка и финишная обработка изделий",
      icon: "Wrench",
    },
  ];

  const materials = [
    {
      name: "Сталь",
      description: "Конструкционная и инструментальная сталь",
      properties: "Прочность, износостойкость",
    },
    {
      name: "Алюминий",
      description: "Легкие сплавы для авиации и автомобилестроения",
      properties: "Легкость, коррозионная стойкость",
    },
    {
      name: "Титан",
      description: "Высокопрочные титановые сплавы",
      properties: "Биосовместимость, жаропрочность",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Factory" size={32} className="text-blue-400" />
              <span className="text-xl font-bold text-white">МеталлТех</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Услуги
              </a>
              <a
                href="#materials"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Материалы
              </a>
              <a
                href="#equipment"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Оборудование
              </a>
              <a
                href="#about"
                className="text-slate-300 hover:text-white transition-colors"
              >
                О компании
              </a>
              <a
                href="#contact"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Заказать расчет
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden metal-surface">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute inset-0 opacity-10">
          <img
            src="/img/720f7965-45bf-45d2-959e-ad592a83ae37.jpg"
            alt="Industrial Factory Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-shadow-metal animate-fade-in">
              Прецизионная
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent metal-shine">
                {" "}
                металлообработка
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Современное производство с высокоточным оборудованием. Работаем с
              деталями любой сложности по чертежам заказчика.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              >
                <Icon name="FileText" size={20} className="mr-2" />
                Отправить чертеж
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>

        {/* Metal texture background */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Быстрые сроки
              </h3>
              <p className="text-slate-400">
                Выполнение заказов от 1 дня благодаря современному оборудованию
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Качество ISO
              </h3>
              <p className="text-slate-400">
                Сертифицированная система менеджмента качества
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Опытная команда
              </h3>
              <p className="text-slate-400">15+ лет опыта в металлообработке</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Виды обработки металлов
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Полный спектр услуг металлообработки на современном оборудовании
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group hover:border-blue-500/50"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-600/20 p-3 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                      <Icon
                        name={service.icon}
                        size={24}
                        className="text-blue-400"
                      />
                    </div>
                    <CardTitle className="text-white">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Обрабатываемые материалы
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Работаем с широким спектром металлов и сплавов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-xl border border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {material.name}
                  </h3>
                  <p className="text-slate-400 mb-4">{material.description}</p>
                  <Badge
                    variant="secondary"
                    className="bg-blue-600/20 text-blue-400 border-blue-600/30"
                  >
                    {material.properties}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Современное оборудование
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              15 типов высокоточных станков ведущих мировых производителей
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="Cog" size={24} className="text-blue-400 mr-3" />
                  Фрезерные станки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Рабочий стол:</span>
                    <span className="text-white">1500×800×600 мм</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Точность:</span>
                    <span className="text-white">±0.01 мм</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Количество:</span>
                    <span className="text-white">5 станков</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon
                    name="RotateCw"
                    size={24}
                    className="text-blue-400 mr-3"
                  />
                  Токарные станки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Диаметр обработки:</span>
                    <span className="text-white">до 400 мм</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Длина:</span>
                    <span className="text-white">до 1000 мм</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Количество:</span>
                    <span className="text-white">4 станка</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Готовы начать проект?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Отправьте чертежи или техническое задание для расчета стоимости
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Icon
                  name="Phone"
                  size={24}
                  className="text-blue-400 mx-auto mb-3"
                />
                <h3 className="text-white font-semibold mb-2">Телефон</h3>
                <p className="text-slate-400">+7 (495) 123-45-67</p>
              </div>
              <div className="text-center">
                <Icon
                  name="Mail"
                  size={24}
                  className="text-blue-400 mx-auto mb-3"
                />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-slate-400">info@metaltech.ru</p>
              </div>
              <div className="text-center">
                <Icon
                  name="MapPin"
                  size={24}
                  className="text-blue-400 mx-auto mb-3"
                />
                <h3 className="text-white font-semibold mb-2">Адрес</h3>
                <p className="text-slate-400">
                  г. Москва, ул. Промышленная, 15
                </p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg"
            >
              <Icon name="Send" size={20} className="mr-2" />
              Отправить заявку
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Factory" size={24} className="text-blue-400" />
                <span className="text-lg font-bold text-white">МеталлТех</span>
              </div>
              <p className="text-slate-400 text-sm">
                Прецизионная металлообработка с 2008 года
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Услуги</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Фрезерная обработка</li>
                <li>Токарная обработка</li>
                <li>Лазерная резка</li>
                <li>Слесарные работы</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Материалы</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Сталь</li>
                <li>Алюминий</li>
                <li>Титан</li>
                <li>Нержавеющая сталь</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@metaltech.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 МеталлТех. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
