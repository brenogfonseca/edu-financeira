import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Users,
  Target,
  Lightbulb,
  Award,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Lead Researcher",
      specialization: "Computational Mathematics",
      initials: "SC",
      description:
        "Ph.D. in Applied Mathematics with 15+ years of research experience in algorithmic optimization.",
    },
    {
      name: "Prof. Michael Rodriguez",
      role: "Principal Investigator",
      specialization: "Statistical Analysis",
      initials: "MR",
      description:
        "Professor of Statistics, expert in mathematical modeling and data analysis methodologies.",
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Scientist",
      specialization: "Numerical Methods",
      initials: "EW",
      description:
        "Specialist in numerical computation and precision mathematical algorithms.",
    },
    {
      name: "Dr. James Kim",
      role: "Data Analyst",
      specialization: "Machine Learning",
      initials: "JK",
      description:
        "Expert in applying machine learning techniques to complex mathematical problems.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description:
        "We strive for mathematical accuracy and computational precision in all our research endeavors.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pioneering new methodologies and approaches to solve complex mathematical challenges.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Fostering a collaborative environment where diverse perspectives drive breakthrough discoveries.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Maintaining the highest standards of academic rigor and research quality in all our work.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Sobre Nossa Equipe
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Ensinando Boas Práticas
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {" "}
                Financeiras
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A educação financeira é fundamnetal para garantir uma vida
              tranquila na terceira idade. Aprender a gerencia melhor suas
              finanças permite tomar decisões mais seguras e evitar problemas
              com dívidas.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                luctus malesuada metus, id consequat sapien tempus sed. Sed
                auctor augue sit amet sodales hendrerit. Aenean malesuada
                gravida varius. Integer suscipit elit et congue lobortis. Nullam
                sodales erat eu euismod tincidunt. Pellentesque eu nunc rhoncus,
                ornare nisi non, imperdiet metus. Etiam posuere porttitor
                varius.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Morbi ultrices placerat ornare. Curabitur elementum venenatis
                eros, et posuere tellus lobortis sit amet. Nulla id est porta,
                hendrerit neque at, elementum diam. Pellentesque lectus lectus,
                dapibus eu dui nec.
              </p>
            </div>
            <Card className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20 border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Impacto da Pesquisa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">
                    Workshops Realizados
                  </span>
                  <span className="text-2xl font-bold text-blue-600">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">
                    Idosos Participantes
                  </span>
                  <span className="text-2xl font-bold text-blue-600">
                    1,200+
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">
                    Projetos Realizados
                  </span>
                  <span className="text-2xl font-bold text-blue-600">30+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Awards</span>
                  <span className="text-2xl font-bold text-blue-600">8</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our research methodology and
              collaborative approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900/20 rounded-xl mx-auto">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dedicated researchers and mathematicians working together to
              advance the field.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarFallback className="text-2xl bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {member.role}
                  </Badge>
                  <p className="text-sm font-medium text-blue-600 mt-2">
                    {member.specialization}
                  </p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed mb-4">
                    {member.description}
                  </CardDescription>
                  <div className="flex justify-center space-x-2">
                    <div className="p-2 hover:bg-muted rounded-full cursor-pointer transition-colors">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="p-2 hover:bg-muted rounded-full cursor-pointer transition-colors">
                      <Github className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="p-2 hover:bg-muted rounded-full cursor-pointer transition-colors">
                      <Linkedin className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in Collaboration?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We welcome partnerships with researchers, institutions, and
            organizations who share our passion for advancing mathematical
            science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white max-w-sm">
              <CardContent className="pt-6">
                <Mail className="h-8 w-8 mx-auto mb-4 text-blue-200" />
                <p className="font-medium">Email Us</p>
                <p className="text-blue-100 text-sm">
                  research@mathproject.edu
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
