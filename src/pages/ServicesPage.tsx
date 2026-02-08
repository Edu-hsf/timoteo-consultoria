import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Target, Users, DollarSign, BarChart3, Lightbulb } from 'lucide-react';

export function ServicesPage() {
  const mainServices = [
    {
      icon: Target,
      title: 'Estruturação de Processos Organizacionais',
      description: 'Organize e otimize todas as operações do seu negócio com processos claros, documentados e eficientes.',
      benefits: [
        'Mapeamento completo de processos atuais',
        'Identificação de gargalos e desperdícios',
        'Criação de fluxos otimizados e documentados',
        'Treinamento da equipe nos novos processos',
        'Redução de retrabalho e custos operacionais',
      ],
      results: [
        'Economia de até 10 horas semanais',
        'Redução de 30% em erros operacionais',
        'Maior previsibilidade e controle',
      ],
      image: 'https://images.unsplash.com/photo-1758876022295-00ec1f0e39f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwNTQ2NzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: DollarSign,
      title: 'Precificação Estratégica',
      description: 'Defina preços que reflitam o verdadeiro valor do seu produto ou serviço e garantam rentabilidade sustentável.',
      benefits: [
        'Análise detalhada de custos e despesas',
        'Estudo de mercado e posicionamento competitivo',
        'Definição de margem de lucro adequada',
        'Estratégias de precificação por segmento',
        'Ferramentas práticas para gestão de preços',
      ],
      results: [
        'Aumento médio de 40% na margem de lucro',
        'Melhor posicionamento de mercado',
        'Decisões de preço mais assertivas',
      ],
      image: 'https://images.unsplash.com/photo-1753185234794-e3b41b94a352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjB3b3JraW5nfGVufDF8fHx8MTc3MDQ2MDYzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Users,
      title: 'Planejamento Estratégico',
      description: 'Crie um plano de crescimento claro, personalizado e alcançável para os próximos 1 a 3 anos.',
      benefits: [
        'Definição de missão, visão e valores',
        'Análise SWOT personalizada',
        'Estabelecimento de metas SMART',
        'Plano de ação detalhado e cronogramado',
        'Indicadores de desempenho (KPIs)',
      ],
      results: [
        'Crescimento médio de 2x no faturamento',
        'Clareza sobre direção e prioridades',
        'Decisões mais estratégicas e informadas',
      ],
      image: 'https://img.freepik.com/fotos-gratis/conceito-de-estrategia-de-negocios-de-jogos-de-xadrez_53876-14820.jpg',
    },
  ];

  const additionalServices = [
    {
      icon: BarChart3,
      title: 'Gestão Financeira',
      description: 'Controle e análise financeira para tomada de decisão mais assertiva.',
    },
    {
      icon: TrendingUp,
      title: 'Análise de Mercado',
      description: 'Estudo de concorrência e identificação de oportunidades.',
    },
    {
      icon: Lightbulb,
      title: 'Inovação e Melhoria',
      description: 'Identificação de oportunidades de inovação e otimização.',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Consulta Inicial Gratuita',
      description: 'Conversamos sobre seu negócio, desafios e objetivos para entender como podemos ajudar.',
    },
    {
      step: '2',
      title: 'Proposta Personalizada',
      description: 'Elaboramos uma proposta sob medida com escopo, cronograma e investimento.',
    },
    {
      step: '3',
      title: 'Diagnóstico Profundo',
      description: 'Analisamos seu negócio em detalhes para identificar oportunidades e desafios.',
    },
    {
      step: '4',
      title: 'Plano de Ação',
      description: 'Desenvolvemos estratégias e soluções personalizadas para seu contexto.',
    },
    {
      step: '5',
      title: 'Implementação',
      description: 'Acompanhamos de perto a execução das mudanças e ajustes necessários.',
    },
    {
      step: '6',
      title: 'Acompanhamento',
      description: 'Monitoramos resultados e fazemos ajustes para garantir sucesso contínuo.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6">
              Serviços de <span className="text-primary">Consultoria</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Soluções personalizadas para estruturar, precificar e planejar o crescimento do seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`space-y-6 ${isEven ? '' : 'md:order-2'}`}>
                  <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h2 className="text-3xl md:text-4xl">{service.title}</h2>
                  <p className="text-lg text-muted-foreground">{service.description}</p>
                  
                  <div>
                    <h3 className="text-xl mb-4">O que está incluído:</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Resultados Esperados:</h4>
                    <ul className="space-y-2">
                      {service.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contato"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Solicitar Orçamento
                    <ArrowRight size={18} />
                  </Link>
                </div>

                <div className={isEven ? '' : 'md:order-1'}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[500px] object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Serviços Complementares</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Podemos ajudar com outras necessidades específicas do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Como Funciona</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um processo estruturado para garantir os melhores resultados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative bg-card border border-border rounded-xl p-8"
              >
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Perguntas Frequentes</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl mb-3">Por que consultoria e não um curso online?</h3>
              <p className="text-muted-foreground">
                Cursos oferecem conhecimento genérico, enquanto consultoria oferece soluções personalizadas para SEU negócio específico. Analisamos sua realidade, seus desafios e criamos um plano sob medida, além de acompanhar a implementação.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl mb-3">Quanto tempo dura um projeto de consultoria?</h3>
              <p className="text-muted-foreground">
                Depende do serviço. Projetos de precificação podem levar de 2 a 4 semanas, enquanto estruturação de processos ou planejamento estratégico podem durar de 2 a 4 meses. Tudo é adaptado à sua disponibilidade e necessidade.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl mb-3">Qual o investimento necessário?</h3>
              <p className="text-muted-foreground">
                O investimento varia conforme o escopo e complexidade do projeto. Após a consulta inicial gratuita, apresentamos uma proposta transparente e personalizada. Nosso foco é gerar resultados que justifiquem amplamente o investimento.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl mb-3">Meu negócio é muito pequeno, a consultoria funciona para mim?</h3>
              <p className="text-muted-foreground">
                Sim! Nossa especialidade são justamente micro e pequenas empresas. Conhecemos os desafios desse segmento e adaptamos nossas soluções para a realidade de negócios menores, sem burocracia desnecessária.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Agende uma consulta gratuita e descubra qual serviço é ideal para o seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors"
            >
              Agendar Consulta Gratuita
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
