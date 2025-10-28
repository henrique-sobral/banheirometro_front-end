import '../style/style.css';

interface CardHomeProps {
	imagem?: string;
	nome?: string;
	avaliacoes?: {
		classificacaoGeral?: number;
		funcionalidade?: number;
		papelHigienico?: number;
		higiene?: number;
	};
	caracteristicas?: {
		acessibilidade?: string;
		sabonete?: string;
		portaFuncional?: string;
		iluminacao?: string;
	};
	descricao?: string;
}

export default function CardHome({
	imagem = '',
	nome = '',
	avaliacoes = {
		classificacaoGeral: 3,
		funcionalidade: 4,
		papelHigienico: 2,
		higiene: 5
	},
	caracteristicas = {
		acessibilidade: 'sim',
		sabonete: 'nao',
		portaFuncional: 'sim',
		iluminacao: 'sim'
	},
	descricao = ''
}: CardHomeProps) {
	// Mostra a avaliação geral "printada" (como estrelas) e mantém os controles
	// com os valores selecionados (disabled) para indicar a escolha.

	const estrelas = '⭐'.repeat(Math.max(1, Math.min(5, avaliacoes.classificacaoGeral || 1)));

	return (
		<div className="card-posts">
			{imagem && (
				<div className="card-image">
					<img src={imagem} alt={nome} />
				</div>
			)}
			<h2 className="card-title">{nome}</h2>

			<div className="selected-print">
				<strong>Classificação escolhida:</strong> <span>{estrelas}</span>
			</div>

			<div className="ratings-section">
				<h3>⭐ Classificação Geral (selecionada)</h3>
				<select value={avaliacoes.classificacaoGeral} disabled>
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
							<input type="radio" name="acessibilidade" value="sim" checked={caracteristicas.acessibilidade === 'sim'} disabled /> Sim
						</label>
						<label>
							<input type="radio" name="acessibilidade" value="nao" checked={caracteristicas.acessibilidade === 'nao'} disabled /> Não
						</label>
					</div>
				</div>

				<div className="feature-item">
					<label>✅ Sabonete:</label>
					<div className="radio-group">
						<label>
							<input type="radio" name="sabonete" value="sim" checked={caracteristicas.sabonete === 'sim'} disabled /> Sim
						</label>
						<label>
							<input type="radio" name="sabonete" value="nao" checked={caracteristicas.sabonete === 'nao'} disabled /> Não
						</label>
					</div>
				</div>

				<div className="feature-item">
					<label>✅ Porta funcional:</label>
					<div className="radio-group">
						<label>
							<input type="radio" name="portaFuncional" value="sim" checked={caracteristicas.portaFuncional === 'sim'} disabled /> Sim
						</label>
						<label>
							<input type="radio" name="portaFuncional" value="nao" checked={caracteristicas.portaFuncional === 'nao'} disabled /> Não
						</label>
					</div>
				</div>

				<div className="feature-item">
					<label>✅ Iluminação:</label>
					<div className="radio-group">
						<label>
							<input type="radio" name="iluminacao" value="sim" checked={caracteristicas.iluminacao === 'sim'} disabled /> Sim
						</label>
						<label>
							<input type="radio" name="iluminacao" value="nao" checked={caracteristicas.iluminacao === 'nao'} disabled /> Não
						</label>
					</div>
				</div>
			</div>

			<div className="ratings-section">
				<div className="rating-item">
					<label>🚽 Funcionalidade:</label>
					<select value={avaliacoes.funcionalidade} disabled>
						{[1, 2, 3, 4, 5].map((num) => (
							<option key={num} value={num}>
								{'⭐'.repeat(num)}
							</option>
						))}
					</select>
				</div>

				<div className="rating-item">
					<label>🧻 Papel Higiênico:</label>
					<select value={avaliacoes.papelHigienico} disabled>
						{[1, 2, 3, 4, 5].map((num) => (
							<option key={num} value={num}>
								{'⭐'.repeat(num)}
							</option>
						))}
					</select>
				</div>

				<div className="rating-item">
					<label>🧼 Higiene Geral:</label>
					<select value={avaliacoes.higiene} disabled>
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
				<p className="description-text">{descricao || (
					'Localizado no centro de Bauru, este banheiro público é limpo e bem iluminado, com acessibilidade para cadeirantes, sabonete disponível e manutenção regular. Há papel higiênico em boa quantidade e a sensação de segurança é boa durante o dia.'
				)}</p>
			</div>
		</div>
	);
}
