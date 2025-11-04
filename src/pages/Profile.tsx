import '../style/style.css'
import { useState } from 'react';
import type { ChangeEvent } from 'react';

function Profile() {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div id='profile-page'>
      <h2 className='texto-principal'>Meu Perfil</h2>
      <div className='login-container'>
        <div className='profile-image-container'>
          {profileImage ? (
            <img 
              src={profileImage} 
              alt="Foto de perfil" 
              className='profile-image'
            />
          ) : (
            <div className='profile-image-placeholder'>
              <label htmlFor="image-upload" className='image-upload-label'>
                Adicionar foto
              </label>
            </div>
          )}
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </div>

        <div className='login-formulario'>
          <div className='login-formulario-conteudo'>
            <label>Nome completo:</label>
            <input
              type="text"
              required
            />
          </div>
          
          <div className='login-formulario-conteudo'>
            <label>Nome de usuário:</label>
            <input
              type="text"
              required
            />
          </div>

          <div className='login-formulario-conteudo'>
            <label>E-mail:</label>
            <input
              type="email"
              required
            />
          </div>

          <div className='login-formulario-conteudo'>
            <label>Sexo:</label>
            <select required>
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
              <option value="prefiro-nao-dizer">Prefiro não dizer</option>
            </select>
          </div>

          <div className='login-formulario-conteudo'>
            <label>Data de nascimento:</label>
            <input
              type="date"
              required
            />
          </div>

          <button type="submit">Salvar alterações</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;