import { Heart, Target, Users, Award } from 'lucide-react';
import timoteoImage from '../../public/Captura de Tela (15).png';

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Humanização',
      description: 'Acreditamos em relações baseadas em confiança, empatia e proximidade com cada cliente.',
    },
    {
      icon: Target,
      title: 'Personalização',
      description: 'Cada negócio é único e merece soluções desenhadas especificamente para sua realidade.',
    },
    {
      icon: Users,
      title: 'Parceria',
      description: 'Não somos apenas consultores, somos parceiros no crescimento do seu negócio.',
    },
    {
      icon: Award,
      title: 'Resultados Práticos',
      description: 'Focamos em implementações reais que geram resultados tangíveis e mensuráveis.',
    },
  ];

  const methodology = [
    {
      number: '01',
      title: 'Diagnóstico',
      description: 'Mergulhamos no seu negócio para entender processos, desafios e oportunidades de forma profunda e personalizada.',
    },
    {
      number: '02',
      title: 'Estratégia',
      description: 'Desenvolvemos um plano customizado alinhado à sua realidade, objetivos e recursos disponíveis.',
    },
    {
      number: '03',
      title: 'Implementação',
      description: 'Acompanhamos de perto a execução, garantindo que as mudanças sejam aplicadas de forma prática e eficaz.',
    },
    {
      number: '04',
      title: 'Evolução',
      description: 'Monitoramos resultados e ajustamos a estratégia conforme necessário, garantindo crescimento sustentável.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6">
              Sobre a <span className="text-primary">Timóteo</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Consultoria empresarial humanizada e personalizada para micro e pequenos negócios que querem crescer de verdade
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={timoteoImage}
                alt="Fundadora da Timóteo"
                className="w-full h-[500px] object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl">Nossa História</h2>
              <p className="text-muted-foreground text-lg">
                A Timóteo nasceu em 2020 da percepção de que micro e pequenos empreendedores enfrentam desafios únicos que cursos genéricos e frameworks prontos não conseguem resolver.
              </p>
              <p className="text-muted-foreground text-lg">
                Fundada com o propósito de democratizar o acesso à consultoria empresarial de qualidade, nossa missão é oferecer soluções personalizadas e humanizadas para negócios que querem estruturar seus processos, precificar adequadamente e planejar seu crescimento.
              </p>
              <p className="text-muted-foreground text-lg">
                Desde então, já ajudamos mais de 150 empresas a transformarem suas operações, aumentarem sua rentabilidade e conquistarem crescimento sustentável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl">Nossa Missão</h2>
              <p className="text-muted-foreground text-lg">
                Capacitar micro e pequenos empreendedores através de consultoria personalizada que transforma desafios em oportunidades de crescimento.
              </p>
              <p className="text-muted-foreground text-lg">
                Acreditamos que todo negócio, independente do tamanho, merece ter acesso a soluções profissionais e estratégicas que respeitem sua realidade e potencializem seus resultados.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl">Nossa Visão</h2>
              <p className="text-muted-foreground text-lg">
                Ser referência em consultoria empresarial humanizada, reconhecida pela capacidade de gerar transformações reais e duradouras em micro e pequenos negócios.
              </p>
              <p className="text-muted-foreground text-lg">
                Queremos construir um ecossistema onde empreendedores tenham as ferramentas e o suporte necessários para prosperar de forma sustentável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Nossos Valores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam cada projeto e relacionamento que construímos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Nossa Metodologia</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um processo estruturado e personalizado para garantir resultados reais
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {methodology.map((step, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 space-y-4"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl">Por Que Escolher a Timóteo?</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="mb-2">Experiência Focada</h4>
                    <p className="text-muted-foreground">
                      Especializados em micro e pequenas empresas, conhecemos profundamente os desafios desse segmento.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="mb-2">Abordagem Prática</h4>
                    <p className="text-muted-foreground">
                      Soluções implementáveis e adaptadas à realidade do seu negócio, sem teoria excessiva.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="mb-2">Acompanhamento Próximo</h4>
                    <p className="text-muted-foreground">
                      Estamos com você em cada etapa, garantindo que as mudanças sejam efetivas.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="mb-2">Resultados Mensuráveis</h4>
                    <p className="text-muted-foreground">
                      Trabalhamos com métricas claras para acompanhar o impacto da consultoria.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbGxhYm9yYXRpb24lMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzA1NDY3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipe colaborando"
                className="w-full h-[500px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
