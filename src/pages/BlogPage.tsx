import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, TrendingUp, Target, DollarSign } from 'lucide-react';

export function BlogPage() {
  const featuredPost = {
    title: 'Por Que Sua Pequena Empresa Precisa de Processos Estruturados',
    excerpt: 'Descubra como a estruturação de processos pode economizar horas do seu dia e aumentar significativamente a qualidade das entregas.',
    category: 'Gestão',
    date: '15 de Janeiro, 2026',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1758876022295-00ec1f0e39f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwNTQ2NzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  };

  const posts = [
    {
      title: 'Como Precificar Seus Produtos Sem Depender da Concorrência',
      excerpt: 'Aprenda a calcular o preço ideal baseado em custos, valor percebido e margem de lucro desejada.',
      category: 'Precificação',
      date: '10 de Janeiro, 2026',
      readTime: '6 min',
      icon: DollarSign,
    },
    {
      title: '5 Sinais de Que Seu Negócio Precisa de Planejamento Estratégico',
      excerpt: 'Identifique se é o momento certo para investir em um planejamento estratégico estruturado.',
      category: 'Estratégia',
      date: '5 de Janeiro, 2026',
      readTime: '5 min',
      icon: Target,
    },
    {
      title: 'Consultoria vs Curso Online: Qual é Melhor Para Seu Negócio?',
      excerpt: 'Entenda as diferenças e descubra qual abordagem se adequa melhor à sua realidade e objetivos.',
      category: 'Consultoria',
      date: '28 de Dezembro, 2025',
      readTime: '7 min',
      icon: TrendingUp,
    },
    {
      title: 'O Erro Mais Comum na Precificação de Pequenos Negócios',
      excerpt: 'Descubra o erro que está fazendo você trabalhar mais e lucrar menos.',
      category: 'Precificação',
      date: '20 de Dezembro, 2025',
      readTime: '5 min',
      icon: DollarSign,
    },
    {
      title: 'Como Reduzir Custos Sem Comprometer a Qualidade',
      excerpt: 'Estratégias práticas para otimizar gastos e aumentar a margem de lucro.',
      category: 'Gestão',
      date: '15 de Dezembro, 2025',
      readTime: '6 min',
      icon: TrendingUp,
    },
    {
      title: 'Indicadores-Chave: O Que Toda Pequena Empresa Deve Acompanhar',
      excerpt: 'Os KPIs essenciais para monitorar a saúde e crescimento do seu negócio.',
      category: 'Estratégia',
      date: '10 de Dezembro, 2025',
      readTime: '8 min',
      icon: Target,
    },
  ];

  const categories = [
    'Todos',
    'Gestão',
    'Precificação',
    'Estratégia',
    'Consultoria',
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6">
              <span className="text-primary">Blog</span> e Recursos
            </h1>
            <p className="text-xl text-muted-foreground">
              Conteúdos educacionais sobre gestão, estratégia e crescimento para micro e pequenas empresas
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-card border border-border rounded-2xl overflow-hidden">
            <div>
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full min-h-[400px] object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                Destaque
              </div>
              <h2 className="text-3xl mb-4">{featuredPost.title}</h2>
              <p className="text-muted-foreground text-lg mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="inline-flex items-center gap-1">
                  <Calendar size={16} />
                  {featuredPost.date}
                </span>
                <span>•</span>
                <span>{featuredPost.readTime} de leitura</span>
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Ler Artigo Completo
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-y border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full transition-colors ${
                  index === 0
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border hover:bg-muted'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const Icon = post.icon;
              return (
                <article
                  key={index}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="p-8">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div className="inline-block px-3 py-1 bg-secondary text-primary rounded-full text-sm mb-4">
                      {post.category}
                    </div>
                    <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <button className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                      Ler mais
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Recursos Gratuitos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Materiais práticos para ajudar você a gerir melhor o seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="text-primary" size={28} />
              </div>
              <h3 className="text-xl mb-3">Planilha de Precificação</h3>
              <p className="text-muted-foreground mb-6">
                Calcule o preço ideal dos seus produtos considerando todos os custos.
              </p>
              <button className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                Baixar Gratuitamente
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="text-xl mb-3">Template de Planejamento</h3>
              <p className="text-muted-foreground mb-6">
                Estruture seu planejamento estratégico com nosso template prático.
              </p>
              <button className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                Baixar Gratuitamente
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-primary" size={28} />
              </div>
              <h3 className="text-xl mb-3">Guia de Processos</h3>
              <p className="text-muted-foreground mb-6">
                E-book completo sobre como estruturar processos no seu negócio.
              </p>
              <button className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                Baixar Gratuitamente
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl mb-4">
              Receba Conteúdos Exclusivos
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Assine nossa newsletter e receba dicas práticas de gestão diretamente no seu e-mail
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-6 py-4 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors font-semibold whitespace-nowrap"
              >
                Assinar Grátis
              </button>
            </form>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Sem spam. Cancele quando quiser.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Precisa de Ajuda Personalizada?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Nossa consultoria pode resolver desafios específicos do seu negócio de forma prática e efetiva
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>
    </div>
  );
}
