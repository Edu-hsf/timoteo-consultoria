import { Link } from 'react-router-dom';
import { TrendingUp, Clock, ArrowRight } from 'lucide-react';

export function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Boutique Flor de Lis: Reestruturação de Precificação',
      client: 'Maria Silva',
      industry: 'Varejo de Moda',
      challenge: 'Maria tinha uma boutique com bom movimento, mas sentia que trabalhava muito e o lucro não refletia o esforço. Não tinha clareza sobre seus custos reais e precificava os produtos "no achismo", baseando-se apenas na concorrência.',
      solution: 'Realizamos um mapeamento completo de custos fixos e variáveis, analisamos o posicionamento de mercado e desenvolvemos uma estratégia de precificação baseada em valor, segmentando produtos por categoria e margem ideal.',
      results: [
        'Aumento de 42% na margem de lucro líquida',
        'Redução de 25% em produtos com baixa rentabilidade',
        'Clareza total sobre quais produtos são mais lucrativos',
        'Recuperação do investimento em apenas 3 meses',
      ],
      duration: '6 semanas',
      testimonial: 'Antes eu precificava copiando a concorrência. Hoje sei exatamente quanto preciso cobrar para ter lucro real. Foi transformador!',
      image: 'https://img.freepik.com/fotos-gratis/pessoa-fazendo-compras-no-mercado-de-segunda-mao_23-2149353685.jpg',
    },
    {
      title: 'Oficina Santos & Cia: Estruturação de Processos',
      client: 'João Santos',
      industry: 'Serviços Automotivos',
      challenge: 'A oficina tinha demanda alta, mas João vivia apagando incêndios. Não havia processos definidos, prazos eram constantemente estourados, e os funcionários não sabiam quem fazia o quê. Isso gerava retrabalho, atrasos e clientes insatisfeitos.',
      solution: 'Mapeamos todos os processos operacionais, da entrada do cliente até a entrega do veículo. Criamos fluxos padronizados, checklists, divisão clara de responsabilidades e implementamos ferramentas simples de controle.',
      results: [
        'Redução de 35% no tempo de execução dos serviços',
        'Economia de 10 horas semanais em gestão',
        'Diminuição de 80% em retrabalhos',
        'Aumento de 45% na satisfação dos clientes (NPS)',
      ],
      duration: '3 meses',
      testimonial: 'Hoje minha oficina funciona sem precisar que eu esteja em tudo. Ganhei minha vida de volta e os resultados melhoraram muito.',
      image: 'https://img.freepik.com/fotos-gratis/mecanico-de-automoveis-verificando-oleo-no-motor-do-carro-enquanto-trabalhava-na-oficina-de-reparacao-de-automoveis_637285-4299.jpg',
    },
    {
      title: 'Confeitaria Doce Encanto: Planejamento Estratégico',
      client: 'Ana Paula Costa',
      industry: 'Alimentação',
      challenge: 'Ana tinha uma confeitaria artesanal com produtos excelentes, mas não sabia para onde crescer. Queria expandir mas tinha medo de tomar decisões erradas. Faltava clareza sobre objetivos, público-alvo e estratégia de crescimento.',
      solution: 'Desenvolvemos um planejamento estratégico de 3 anos, definindo missão, visão, valores, análise de mercado, definição de personas, metas SMART e plano de ação detalhado com indicadores de acompanhamento.',
      results: [
        'Crescimento de 120% no faturamento em 12 meses',
        'Abertura de um segundo ponto de venda',
        'Definição clara de nicho e posicionamento premium',
        'Lançamento bem-sucedido de 3 novas linhas de produtos',
      ],
      duration: '2 meses para criação + 10 meses de acompanhamento',
      testimonial: 'O planejamento me deu segurança para investir e crescer. Eu sabia onde queria chegar, mas não sabia o caminho. A Timóteo me mostrou.',
      image: 'https://img.freepik.com/fotos-gratis/um-confeiteiro-de-uniforme-decora-o-bolo_1157-33239.jpg',
    },
  ];

  const metrics = [
    {
      icon: TrendingUp,
      value: '40%',
      label: 'Aumento Médio de Lucro',
    },
    {
      icon: Clock,
      value: '10h',
      label: 'Economia Semanal de Tempo',
    },
    {
      icon: TrendingUp,
      value: '2x',
      label: 'Crescimento Médio',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6">
              Casos de <span className="text-primary">Sucesso</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Histórias reais de transformação e crescimento de empresas que confiaram na Timóteo
            </p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="mx-auto mb-4" size={48} />
                  <div className="text-4xl md:text-5xl font-bold mb-2">{metric.value}</div>
                  <div className="text-primary-foreground/80">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {caseStudies.map((study, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="border border-border rounded-2xl overflow-hidden bg-card">
                <div className={`grid md:grid-cols-2 gap-0`}>
                  <div className={`${isEven ? '' : 'md:order-2'}`}>
                    <img
                      src={study.image}
                      alt={study.client}
                      className="w-full h-full min-h-[400px] object-cover"
                    />
                  </div>

                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${isEven ? '' : 'md:order-1'}`}>
                    <div className="mb-6">
                      <div className="inline-block px-3 py-1 bg-secondary text-primary rounded-full text-sm mb-4">
                        {study.industry}
                      </div>
                      <h2 className="text-3xl mb-4">{study.title}</h2>
                      <div className="flex items-center gap-2 text-muted-foreground mb-6">
                        <Clock size={16} />
                        <span className="text-sm">{study.duration}</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-2">Desafio</h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Solução</h3>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Resultados</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <TrendingUp className="text-primary flex-shrink-0 mt-1" size={16} />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                        <p className="text-muted-foreground italic mb-2">"{study.testimonial}"</p>
                        <p className="font-semibold">— {study.client}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6">
              Resultados Consistentes e Mensuráveis
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nossos clientes não apenas recebem consultoria, eles obtêm transformações reais e duradouras em seus negócios. Cada projeto é acompanhado com métricas claras e resultados tangíveis.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">Taxa de Satisfação</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <p className="text-muted-foreground">Empresas Atendidas</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                <p className="text-muted-foreground">Retornam para Novos Projetos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Sua História de Sucesso Pode Ser a Próxima
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Agende uma consulta gratuita e descubra como podemos transformar o seu negócio
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
