import '../style/style.css';
import { useState } from 'react';

interface CardPostProps {
  imagem?: string;
  nome?: string;
}

function CardPost({ imagem = '', nome = '' }: CardPostProps) {
  const [avaliacoes, setAvaliacoes] = useState({
    classificacaoGeral: 1,
    funcionalidade: 1,
    papelHigienico: 1,
    higiene: 1
  });

  const [caracteristicas, setCaracteristicas] = useState({
    acessibilidade: '',
    sabonete: '',
    portaFuncional: '',
    iluminacao: ''
  });

  const [descricao, setDescricao] = useState('');

  const handleAvaliacaoChange = (campo: keyof typeof avaliacoes, valor: number) => {
    setAvaliacoes(prev => ({ ...prev, [campo]: valor }));
  };

  const handleCaracteristicaChange = (campo: keyof typeof caracteristicas, valor: string) => {
    setCaracteristicas(prev => ({ ...prev, [campo]: valor }));
  };

  return (
    <div className="card-posts">
      {imagem && (
        <div className="card-image">
          <img src={imagem} alt={nome} />
        </div>
      )}
      <h2 className="card-title">{nome}</h2>

      <div className="ratings-section">
        <h3>⭐ Classificação Geral</h3>
        <select 
          value={avaliacoes.classificacaoGeral}
          onChange={(e) => handleAvaliacaoChange('classificacaoGeral', Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {'⭐'.repeat(num)}
            </option>
          ))}
        </select>
      </div>

      <div className="features-section">
        <div className="feature-item">
          <label>✅ Acessibilidade:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="acessibilidade"
                value="sim"
                checked={caracteristicas.acessibilidade === 'sim'}
                onChange={(e) => handleCaracteristicaChange('acessibilidade', e.target.value)}
              /> Sim
            </label>
            <label>
              <input
                type="radio"
                name="acessibilidade"
                value="nao"
                checked={caracteristicas.acessibilidade === 'nao'}
                onChange={(e) => handleCaracteristicaChange('acessibilidade', e.target.value)}
              /> Não
            </label>
          </div>
        </div>

        <div className="feature-item">
          <label>✅ Sabonete:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="sabonete"
                value="sim"
                checked={caracteristicas.sabonete === 'sim'}
                onChange={(e) => handleCaracteristicaChange('sabonete', e.target.value)}
              /> Sim
            </label>
            <label>
              <input
                type="radio"
                name="sabonete"
                value="nao"
                checked={caracteristicas.sabonete === 'nao'}
                onChange={(e) => handleCaracteristicaChange('sabonete', e.target.value)}
              /> Não
            </label>
          </div>
        </div>

        <div className="feature-item">
          <label>✅ Porta funcional:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="portaFuncional"
                value="sim"
                checked={caracteristicas.portaFuncional === 'sim'}
                onChange={(e) => handleCaracteristicaChange('portaFuncional', e.target.value)}
              /> Sim
            </label>
            <label>
              <input
                type="radio"
                name="portaFuncional"
                value="nao"
                checked={caracteristicas.portaFuncional === 'nao'}
                onChange={(e) => handleCaracteristicaChange('portaFuncional', e.target.value)}
              /> Não
            </label>
          </div>
        </div>

        <div className="feature-item">
          <label>✅ Iluminação:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="iluminacao"
                value="sim"
                checked={caracteristicas.iluminacao === 'sim'}
                onChange={(e) => handleCaracteristicaChange('iluminacao', e.target.value)}
              /> Sim
            </label>
            <label>
              <input
                type="radio"
                name="iluminacao"
                value="nao"
                checked={caracteristicas.iluminacao === 'nao'}
                onChange={(e) => handleCaracteristicaChange('iluminacao', e.target.value)}
              /> Não
            </label>
          </div>
        </div>
      </div>

      <div className="ratings-section">
        <div className="rating-item">
          <label>🚽 Funcionalidade:</label>
          <select 
            value={avaliacoes.funcionalidade}
            onChange={(e) => handleAvaliacaoChange('funcionalidade', Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {'⭐'.repeat(num)}
              </option>
            ))}
          </select>
        </div>

        <div className="rating-item">
          <label>🧻 Papel Higiênico:</label>
          <select 
            value={avaliacoes.papelHigienico}
            onChange={(e) => handleAvaliacaoChange('papelHigienico', Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {'⭐'.repeat(num)}
              </option>
            ))}
          </select>
        </div>

        <div className="rating-item">
          <label>🧼 Higiene Geral:</label>
          <select 
            value={avaliacoes.higiene}
            onChange={(e) => handleAvaliacaoChange('higiene', Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {'⭐'.repeat(num)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="description-section">
        <label>Descrição da Experiência:</label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          rows={4}
          placeholder="Compartilhe sua experiência com este banheiro..."
        />
      </div>
    </div>
  );
}

export default CardPost;
