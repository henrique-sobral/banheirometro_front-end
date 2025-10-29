import '../style/style.css'
import '../style/home.css'
import Header from '../header/Header';
import CardHome from '../components/CardHome';

type Post = {
  id: number;
  nome: string;
  imagem?: string;
  avaliacoes?: any;
  caracteristicas?: any;
  descricao?: string;
};

// Generate 8 repeated cards based on a base post so the UI shows multiple cards.
const basePost = {
  nome: 'Banheiro Estação Central',
  imagem: '',
  avaliacoes: { classificacaoGeral: 4, funcionalidade: 4, papelHigienico: 3, higiene: 4 },
  caracteristicas: { acessibilidade: 'sim', sabonete: 'sim', portaFuncional: 'sim', iluminacao: 'sim' },
  descricao: 'Banheiro bem iluminado e limpo, com manutenção frequente. Equipe de atendimento eficiente e rápido acesso. Ideal para uso durante o dia todo.'
};

const extraPosts: Post[] = [
  {
    id: 9,
    nome: 'Banheiro Shopping Central',
    imagem: '',
    avaliacoes: { classificacaoGeral: 5, funcionalidade: 5, papelHigienico: 5, higiene: 5 },
    caracteristicas: { acessibilidade: 'sim', sabonete: 'sim', portaFuncional: 'sim', iluminacao: 'sim' },
    descricao: 'Excelente estrutura com limpeza constante. Equipe dedicada 24h, fraldário amplo e bem equipado. Sanitários PCD, trocador infantil e área family-friendly. Materiais de higiene sempre disponíveis.'
  },
  {
    id: 10,
    nome: 'Banheiro Rua das Flores',
    imagem: '',
    avaliacoes: { classificacaoGeral: 3, funcionalidade: 3, papelHigienico: 2, higiene: 3 },
    caracteristicas: { acessibilidade: 'nao', sabonete: 'sim', portaFuncional: 'nao', iluminacao: 'sim' },
    descricao: 'Estado de conservação regular com limpeza básica diária. Porta com fechadura danificada, sem acesso PCD. Sabonete e papel disponíveis, mas qualidade pode melhorar. Melhor horário de uso: manhã.'
  },
  {
    id: 11,
    nome: 'Banheiro Parque Anhangabaú',
    imagem: '',
    avaliacoes: { classificacaoGeral: 1, funcionalidade: 1, papelHigienico: 0, higiene: 1 },
    caracteristicas: { acessibilidade: 'nao', sabonete: 'nao', portaFuncional: 'nao', iluminacao: 'nao' },
    descricao: 'Condições precárias de uso. Iluminação deficiente, porta quebrada e sem itens básicos de higiene. Manutenção urgente necessária. Não recomendado para uso noturno. Busque alternativas próximas.'
  },
  {
    id: 12,
    nome: 'Banheiro Terminal Leste',
    imagem: '',
    avaliacoes: { classificacaoGeral: 4, funcionalidade: 4, papelHigienico: 4, higiene: 4 },
    caracteristicas: { acessibilidade: 'sim', sabonete: 'nao', portaFuncional: 'sim', iluminacao: 'sim' },
    descricao: 'Manutenção regular e boas condições gerais. Acessível para PCD, iluminação adequada e limpeza frequente. Papel higiênico sempre disponível. Observação: reabastecimento de sabonete pode ser irregular.'
  }
];

const morePosts: Post[] = [
  {
    id: 13,
    nome: 'Banheiro Avenida Brasil',
    imagem: '',
    avaliacoes: { classificacaoGeral: 3, funcionalidade: 3, papelHigienico: 3, higiene: 3 },
    caracteristicas: { acessibilidade: 'sim', sabonete: 'nao', portaFuncional: 'sim', iluminacao: 'sim' },
    descricao: 'Manutenção regular com limpeza diária. Acessível para PCD, boa iluminação mas sem sabonete. Melhor opção para paradas rápidas durante o dia. Limpeza mais intensa pela manhã. Recomendado para uso breve.'
  },
  {
    id: 14,
    nome: 'Banheiro Vila Nova',
    imagem: '',
    avaliacoes: { classificacaoGeral: 2, funcionalidade: 2, papelHigienico: 1, higiene: 2 },
    caracteristicas: { acessibilidade: 'nao', sabonete: 'nao', portaFuncional: 'nao', iluminacao: 'nao' },
    descricao: 'Condições abaixo do ideal. Limpeza esporádica, itens de higiene frequentemente em falta. Iluminação precária e portas com problemas. Sem acesso PCD. Recomenda-se buscar alternativas próximas quando possível.'
  },
  {
    id: 15,
    nome: 'Banheiro Estação Velha',
    imagem: '',
    avaliacoes: { classificacaoGeral: 4, funcionalidade: 4, papelHigienico: 4, higiene: 4 },
    caracteristicas: { acessibilidade: 'sim', sabonete: 'sim', portaFuncional: 'sim', iluminacao: 'sim' },
    descricao: 'Estrutura bem mantida com manutenção diária. Equipe atenciosa, ambiente sempre limpo e organizado. Todos os itens de higiene disponíveis. Acesso PCD adequado e boa iluminação. Recomendado em qualquer horário.'
  },
];

const samplePosts: Post[] = [
  ...Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    nome: `${basePost.nome} ${i + 1}`,
    imagem: basePost.imagem,
    avaliacoes: basePost.avaliacoes,
    caracteristicas: basePost.caracteristicas,
    descricao: basePost.descricao
  })),
  ...extraPosts,
  ...morePosts
] as Post[];

function Home() {
  return (
    <>
      <Header />
      <div className="content-container">
        <h1>Banheirometrô</h1>

        <section className="cards-grid">
          {samplePosts.map(post => (
            <CardHome
              key={post.id}
              imagem={post.imagem}
              nome={post.nome}
              avaliacoes={post.avaliacoes}
              caracteristicas={post.caracteristicas}
              descricao={post.descricao}
            />
            
          ))}
        </section>
      </div>
    </>
  );
}

export default Home;
