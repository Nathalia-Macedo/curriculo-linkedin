import React, { useState, useEffect } from 'react';
import ReactSwipe from 'react-swipe';
import { User, Search, Award, MessageSquare, FileText, BarChart2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../Components/Button';
import 'tailwindcss/tailwind.css';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  let reactSwipe = null;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const modules = [
    {
      title: "Criando a Base Perfeita: Seu Perfil no LinkedIn",
      icon: <User size={24} />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-700">O que é o LinkedIn e por quê ele importa?</h2>
          <p className="text-gray-700">O LinkedIn é a maior rede social profissional do mundo, onde você pode criar um perfil que funciona como um currículo online.</p>
          
          <h3 className="text-xl font-semibold text-blue-600">Por que é importante?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-gray-800">Vitrine profissional:</strong> Mostre suas habilidades e experiências para potenciais empregadores.</li>
            <li><strong className="text-gray-800">Networking:</strong> Conecte-se com profissionais da sua área e expanda sua rede de contatos.</li>
            <li><strong className="text-gray-800">Oportunidades de emprego:</strong> Muitas empresas usam o LinkedIn para encontrar novos talentos.</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-blue-600">Como os recrutadores usam o LinkedIn?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-gray-800">Buscas:</strong> Eles usam palavras-chave para encontrar perfis que se encaixam nas vagas.</li>
            <li><strong className="text-gray-800">Grupos:</strong> Participam de grupos para identificar candidatos com interesses específicos.</li>
            <li><strong className="text-gray-800">Mensagens:</strong> Enviam mensagens diretas para candidatos que os interessam.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-blue-700 mt-8">Criando um perfil completo:</h2>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Foto de perfil</h3>
            <p className="mt-2">A importância de uma foto profissional e dicas para escolher a ideal:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Sorriso: Um sorriso genuíno te deixa mais acessível e simpático.</li>
              <li>Roupa: Vista-se de forma profissional e adequada à sua área de atuação.</li>
              <li>Fundo: Utilize um fundo neutro para que o foco seja em você.</li>
              <li>Qualidade: A foto deve ser nítida e bem iluminada.</li>
              <li>Expressão: Escolha uma expressão que transmita a imagem que você quer passar.</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Cabeçalho (headline)</h3>
            <p className="mt-2">Como criar um cabeçalho que resume sua carreira e atrai a atenção:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Seja claro e conciso: Use palavras-chave relevantes para sua área.</li>
              <li>Destaque seu cargo atual ou objetivo: Seja específico sobre o que você faz ou busca.</li>
              <li>Use verbos de ação: Mostre o que você faz, não apenas o que você é.</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Sobre mim</h3>
            <p className="mt-2">Escrevendo uma descrição concisa e persuasiva que destaque suas qualificações e objetivos:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Seja conciso e objetivo: Use parágrafos curtos e frases simples.</li>
              <li>Comece com um gancho: Capte a atenção do leitor logo no início.</li>
              <li>Destaque suas maiores conquistas: Use números e dados para quantificar seus resultados.</li>
              <li>Demonstre suas habilidades: Mostre o que você pode fazer para ajudar outras pessoas ou empresas.</li>
              <li>Use palavras-chave: Insira as palavras-chave mais relevantes para sua área.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Otimizando Seu Perfil para os Recrutadores",
      icon: <Search size={24} />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-700">Palavras-chave: A Chave para Ser Descoberto</h2>
          <p className="text-gray-700">As palavras-chave são como os termos de busca que os recrutadores utilizam para encontrar candidatos. Ao incorporá-las estrategicamente ao seu perfil, você aumenta significativamente as chances de ser encontrado.</p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Como identificar as palavras-chave relevantes:</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong className="text-gray-800">Análise de vagas:</strong> Pesquise as vagas que te interessam e identifique os termos mais comuns.</li>
              <li><strong className="text-gray-800">Perfil dos concorrentes:</strong> Analise os perfis de profissionais que ocupam cargos semelhantes ao seu.</li>
              <li><strong className="text-gray-800">Ferramentas de pesquisa:</strong> Utilize ferramentas como o LinkedIn Jobs para encontrar sugestões de palavras-chave.</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Incorporando palavras-chave:</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong className="text-gray-800">Título:</strong> Inclua as palavras-chave mais relevantes no seu título.</li>
              <li><strong className="text-gray-800">Resumo:</strong> Distribua as palavras-chave naturalmente ao longo do texto.</li>
              <li><strong className="text-gray-800">Experiência:</strong> Utilize as palavras-chave para descrever suas responsabilidades e conquistas.</li>
              <li><strong className="text-gray-800">Habilidades:</strong> Liste suas habilidades utilizando as palavras-chave.</li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-bold text-blue-700 mt-8">Otimizando Seu Perfil para Busca</h2>
          <p className="text-gray-700">O LinkedIn possui uma ferramenta de busca poderosa que os recrutadores utilizam para encontrar candidatos. Ao otimizar seu perfil, você garante que ele apareça nos primeiros resultados.</p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Utilizando as ferramentas de busca do LinkedIn:</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong className="text-gray-800">Filtros:</strong> Utilize os filtros para refinar sua busca por vagas e empresas.</li>
              <li><strong className="text-gray-800">Booles:</strong> Utilize operadores booleanos (AND, OR, NOT) para criar buscas mais complexas.</li>
              <li><strong className="text-gray-800">Alertas de vagas:</strong> Configure alertas para receber notificações sobre novas vagas que correspondam ao seu perfil.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Construindo sua Marca Pessoal",
      icon: <Award size={24} />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-700">Conteúdo Relevante: Seja a Autoridade na Sua Área</h2>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Compartilhando conhecimento:</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Artigos e posts: Crie conteúdos originais e relevantes para sua área de atuação. Demonstre seu conhecimento e insights sobre temas atuais.</li>
              <li>Curadoria de conteúdo: Compartilhe artigos e publicações de outras fontes que você considera relevantes para sua rede.</li>
              <li>Hashtags: Utilize hashtags relevantes para aumentar o alcance do seu conteúdo e alcançar um público mais específico.</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Participando de discussões:</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Grupos: Participe de grupos relevantes para sua área e contribua com seus conhecimentos.</li>
              <li>Comentários: Responda a posts e comentários de outros membros de forma educada e construtiva.</li>
              <li>Inicie discussões: Proponha temas interessantes para gerar debates e engajamento.</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-blue-700 mt-8">Conectando-se com Pessoas: Ampliando Sua Rede</h2>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Convites personalizados:</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Personalização: Personalize suas mensagens de convite, demonstrando interesse genuíno na pessoa e explicando o motivo da conexão.</li>
              <li>Relevância: Conecte-se com pessoas que atuam na sua área, que trabalham em empresas que você admira ou que possuem interesses em comum.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Atraindo Recrutadores Ativamente",
      icon: <MessageSquare size={24} />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-700">Mensagens Personalizadas: A Arte de Fazer o Primeiro Contato</h2>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Como escrever mensagens personalizadas:</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Pesquise o recrutador: Descubra mais sobre o recrutador e a empresa antes de enviar a mensagem.</li>
              <li>Seja específico: Demonstre interesse em uma vaga específica ou na empresa em geral.</li>
              <li>Destaque seus diferenciais: Explique como suas habilidades e experiências se alinham com as necessidades da empresa.</li>
              <li>Chamada para ação: Incentive o recrutador a agendar uma conversa ou analisar seu perfil com mais detalhes.</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Exemplo de mensagem:</h3>
            <p className="mt-2">
              Prezado(a) [Nome do recrutador],<br /><br />
              Sou [Seu nome], um(a) [Sua profissão] com [Número] anos de experiência em [Sua área]. Vi a vaga de [Nome da vaga] em [Empresa] e fiquei muito interessado(a).<br />
              [Mencione uma habilidade ou experiência específica que te qualifica para a vaga]. Acredito que minhas habilidades em [Habilidade 1] e [Habilidade 2] seriam um grande ativo para a equipe de [Departamento].<br />
              Gostaria de ter a oportunidade de conversar com você sobre como minhas qualificações podem contribuir para o sucesso da [Empresa].<br />
              Obrigado(a) pela sua atenção.<br />
              Atenciosamente, [Seu nome] [Seu LinkedIn]
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Criando um Currículo Visualmente Atraente",
      icon: <FileText size={24} />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-700">Currículo em PDF: A Primeira Impressão Conta</h2>
          <p className="text-gray-700">O currículo em PDF é um formato popular e versátil, permitindo um design mais personalizado e garantindo que o formato seja preservado ao ser enviado para diferentes plataformas.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Por que escolher o PDF?</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Formato universal: É compatível com a maioria dos dispositivos e sistemas operacionais.</li>
              <li>Design personalizado: Permite criar um currículo com um layout único e profissional.</li>
              <li>Proteção do formato: Evita que o formato seja alterado ao ser enviado.</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Utilizando Templates e Ferramentas Online</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Templates: Existem diversos templates disponíveis online, tanto gratuitos quanto pagos, que podem servir como base para o seu currículo.</li>
              <li>Ferramentas online: Plataformas como Canva, Adobe Spark e o próprio Google Docs oferecem ferramentas intuitivas para criar currículos personalizados.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Acompanhamento e Melhoria Contínua",
      icon: <BarChart2 size={24} />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-700">Analisando suas métricas: Desvendando os dados do seu perfil</h2>
          <p className="text-gray-700">As métricas do LinkedIn são ferramentas poderosas que te permitem entender como seu perfil está sendo percebido e como você pode melhorar sua presença na plataforma.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">O que as métricas te dizem:</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Impressões: Quantas vezes seu perfil foi visualizado.</li>
              <li>Cliques: Quantas pessoas clicaram em sua foto de perfil ou em algum item específico do seu perfil.</li>
              <li>Seguidores: Quantas pessoas estão te seguindo e visualizando seu conteúdo.</li>
              <li>Engajamento: Número de curtidas, comentários e compartilhamentos em suas publicações.</li>
              <li>Dados demográficos: Informações sobre quem está visualizando seu perfil (função, setor, localização).</li>
            </ul>
          </div>
        </div>
      )
    },
  ];

  const nextSlide = () => {
    if (reactSwipe) reactSwipe.next();
    setCurrentSlide((prev) => (prev + 1) % modules.length);
  };

  const prevSlide = () => {
    if (reactSwipe) reactSwipe.prev();
    setCurrentSlide((prev) => (prev - 1 + modules.length) % modules.length);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl sm:text-2xl font-bold text-blue-600 md:block hidden">Currículo no LinkedIn</h1>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              {modules.map((module, index) => (
                <button
                  key={index}
                  className={`mx-1 sm:mx-2 p-2 rounded-full ${
                    currentSlide === index ? 'bg-blue-500 text-white' : 'text-blue-500'
                  }`}
                  onClick={() => {
                    if (reactSwipe) reactSwipe.slide(index);
                    setCurrentSlide(index);
                  }}
                >
                  {React.cloneElement(module.icon, { size: 20 })}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 md:pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ReactSwipe
            className="swipe"
            swipeOptions={{ continuous: false }}
            ref={el => (reactSwipe = el)}
          >
            {modules.map((module, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4 sm:p-6 mb-4 md:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-700 flex items-center">
                  <span className="mr-3 text-blue-500 md:inline-block hidden">{React.cloneElement(module.icon, { size: 28 })}</span>
                  {module.title}
                </h2>
                <div className="prose max-w-none text-sm sm:text-base">
                  {module.content}
                </div>
              </div>
            ))}
          </ReactSwipe>
          <div className="flex justify-between mt-4 md:mt-8">
            <Button onClick={prevSlide} variant="outline" className="flex items-center text-sm sm:text-base">
              <ChevronLeft className="mr-2" size={20} /> Anterior
            </Button>
            <Button onClick={nextSlide} variant="outline" className="flex items-center text-sm sm:text-base">
              Próximo <ChevronRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </main>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md z-10">
        <div className="flex justify-around items-center h-16">
          {modules.map((module, index) => (
            <button
              key={index}
              className={`p-2 rounded-full ${
                currentSlide === index ? 'bg-blue-500 text-white' : 'text-blue-500'
              }`}
              onClick={() => {
                if (reactSwipe) reactSwipe.slide(index);
                setCurrentSlide(index);
              }}
            >
              {React.cloneElement(module.icon, { size: 24 })}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default App;

