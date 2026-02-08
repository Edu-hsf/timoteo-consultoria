import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Target, Users } from 'lucide-react';
import image_cc57eec22d0cf95e8b316ce01a43b669a5f4ca3e from '../../public/business-man-with-customer-discussing-project.jpg'

export function HomePage() {
  const services = [
    {
      icon: Target,
      title: 'Estruturação de Processos',
      description: 'Organize e otimize as operações do seu negócio com processos claros e eficientes.',
    },
    {
      icon: TrendingUp,
      title: 'Precificação Estratégica',
      description: 'Defina preços que reflitam o valor do seu produto e garantam rentabilidade sustentável.',
    },
    {
      icon: Users,
      title: 'Planejamento Estratégico',
      description: 'Crie um plano de crescimento personalizado para alcançar seus objetivos de negócio.',
    },
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      business: 'Boutique Flor de Lis',
      text: 'A consultoria da Timóteo transformou completamente a forma como precificamos nossos produtos. Nosso lucro aumentou 40% em apenas 6 meses!',
      image: 'https://images.unsplash.com/photo-1716039664755-6809bd06579d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMG93bmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwNTQ2NzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'João Santos',
      business: 'Oficina Santos & Cia',
      text: 'Eu não tinha nenhum controle sobre meus processos. Hoje, com a estrutura que a Timóteo me ajudou a criar, economizo 10 horas por semana e consigo focar no crescimento.',
      image: 'https://images.unsplash.com/photo-1753185234794-e3b41b94a352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjB3b3JraW5nfGVufDF8fHx8MTc3MDQ2MDYzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Ana Paula Costa',
      business: 'Confeitaria Doce Encanto',
      text: 'O planejamento estratégico foi essencial para eu entender onde quero chegar. A Timóteo me mostrou que consultoria não é coisa de empresa grande, é para quem quer crescer de verdade.',
      image: 'https://images.unsplash.com/photo-1753161029194-1b95f4d65c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NzA1NDY3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const stats = [
    { number: '150+', label: 'Empresas Atendidas' },
    { number: '4 anos', label: 'No Mercado' },
    { number: '95%', label: 'Satisfação' },
    { number: '2x', label: 'Crescimento Médio' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary/30 to-background py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
                Consultoria Personalizada Para{' '}
                <span className="text-primary">Micro e Pequenos Negócios</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Estruture, precifique e planeje o crescimento da sua empresa com soluções feitas sob medida para a sua realidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Agendar Consulta Gratuita
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/servicos"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Conhecer Serviços
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={image_cc57eec22d0cf95e8b316ce01a43b669a5f4ca3e}
                  alt="Consultoria empresarial personalizada"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6">
              Você não precisa de um curso genérico.
              <br />
              <span className="text-primary">Você precisa de uma solução feita para você.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Cada negócio é único, com desafios específicos e um perfil próprio. Nossa consultoria analisa a SUA realidade e cria um plano personalizado, não um modelo pronto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1758876022295-00ec1f0e39f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwNTQ2NzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Planejamento estratégico personalizado"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="mb-2">Análise Individual</h3>
                  <p className="text-muted-foreground">
                    Mergulhamos no seu negócio, entendendo processos, desafios e oportunidades específicas.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="mb-2">Soluções Práticas</h3>
                  <p className="text-muted-foreground">
                    Implementamos estratégias que funcionam na sua realidade, sem complicação.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="mb-2">Acompanhamento Próximo</h3>
                  <p className="text-muted-foreground">
                    Estamos ao seu lado durante todo o processo, ajustando conforme necessário.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Como Podemos Ajudar</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Serviços focados nos principais desafios de micro e pequenas empresas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
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
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Link
                    to="/servicos"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                  >
                    Saiba mais
                    <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Ver Todos os Serviços
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-lg text-muted-foreground">
              Resultados reais de empreendedores que transformaram seus negócios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 space-y-6"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Agende uma consulta gratuita e descubra como podemos ajudar sua empresa a crescer
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
