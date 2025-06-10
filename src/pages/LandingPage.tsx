import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Download,
  Users,
  ArrowRight,
  NotebookText,
  HousePlug,
  HandCoins,
  PiggyBank,
} from "lucide-react";

const LandingPage = () => {
  const features = [
    {
      icon: NotebookText,
      title: "Anote Seus Gastos",
      description:
        "Tenha controle de onde seu dinheiro está indo. Use um caderno ou uma planilha simples.",
    },
    {
      icon: HousePlug,
      title: "Separe o essencial do que pode esperar",
      description:
        "Dê prioridade para contas importantes como luz, água, medicamentos e alimentação.",
    },
    {
      icon: HandCoins,
      title: "Evite dívidas desnecessárias",
      description:
        "Antes de parcelar ou pegar empréstimos, avalie se realmente precisa e se pode pagar.",
    },
    {
      icon: PiggyBank,
      title: "Guarde um pouquinho todo mês",
      description:
        "Mesmo valores pequenos ajudam a criar uma reserva para emergências e imprevistos.",
    },
  ];

  const stats = [
    { value: "50+", label: "Workshops Realizados" },
    { value: "1000+", label: "Idosos Participantes" },
    { value: "25+", label: "Contribuintes" },
    { value: "5", label: "Anos de Projeto" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
              <Badge variant="secondary" className="mb-4">
                Educação Financeira para Idosos
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Educação Financeira
                </span>
                <br />
                Para Idosos
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Manter o controle sobre o próprio dinheiro é uma habilidade
                essencial em qualquer fase da vida, e isso se torna ainda mais
                relevante ao alcançar a terceira idade. Uma das principais
                razões para manter o controle sobre o dinheiro é a autonomia e
                independência que ele proporciona.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  asChild
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link to="/about">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/downloads">
                    <Download className="mr-2 h-4 w-4" />
                    Materiais de Apoio
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-teal-500 rounded-3xl rotate-6 opacity-20" />
                <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl">
                      Resumo do Projeto
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2"
                      >
                        <span className="text-muted-foreground">
                          {stat.label}
                        </span>
                        <span className="text-2xl font-bold text-blue-600">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Passos para um melhor controle
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {" "}
                Financeiro
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dicas simples para organizar seu dinheiro e viver com mais
              tranquilidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900/20 rounded-xl group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Conheça Nossa Equipe
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Conheça os membros do nosso projeto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/about">
                <Users className="mr-2 h-4 w-4" />
                Conheça a Equipe
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className=" border-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link to="/downloads">
                <BookOpen className="mr-2 h-4 w-4" />
                Materiais de Apoio
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
