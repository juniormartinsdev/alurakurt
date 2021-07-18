import React, { useEffect, useState } from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
//import { ProfileRelationsBox } from '../src/components/ProfileRelationsBox';
import ProfileSideBar from '../src/components/ProfileSideBar';
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from '../src/lib/AluraKutCommons';

function ProfileRelationsBox(props) {
  console.log(props.items);
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className='smallTitle'>
        {props.title} ({props.items.length})
      </h2>
      <ul>
        {props.items.map((item, indice) => {
          if (indice <= 5) {
            return (
              <li key={item.id}>
                <a href={`https://github.com/${item.login}`} key={item.id}>
                  <img
                    src={`https://github.com/${item.login}.png`}
                    alt={item.login}
                  />
                  <span>{item.login}</span>
                </a>
              </li>
            );
          }
        })}
      </ul>
    </ProfileRelationsBoxWrapper>
  );
}

export default function Home() {
  const [comunidades, setComunidades] = useState([]);
  const [seguidores, setSeguidores] = useState([]);
  const [amigos, setAmigos] = useState([]);

  const githubUser = 'juniormartinsdev';

  useEffect(() => {
    fetch('https://api.github.com/users/peas/followers')
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Aconteceu algum problema :( ' + response.status);
      })
      .then(responseFinal => {
        setSeguidores(responseFinal);
      });

    fetch('http://localhost:3000/api/amigos')
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Aconteceu algum problema :( ' + response.status);
      })
      .then(responseFinal => {
        setAmigos(responseFinal);
      });

    fetch('http://localhost:3000/api/usuarios')
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Aconteceu algum problema :( ' + response.status);
      })
      .then(responseFinal => {
        setComunidades(responseFinal);
      });
  }, []);

  function actionCriarComunidade(e) {
    e.preventDefault();

    const dadosForm = new FormData(e.target);
    const comunidade = {
      id: new Date().toISOString(),
      title: dadosForm.get('title'),
      image: dadosForm.get('image'),
    };

    if (comunidades.length <= 5) {
      const comunidadesAtualizadas = [...comunidades, comunidade];

      setComunidades(comunidadesAtualizadas);
    }
  }

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className='profileArea' style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>

        <div className='welcomeArea' style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className='title'>
              Bem vindo(a) <br />
              <small>Chupa Facebook!</small>
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className='smallTitle'>O quê você deseja fazer?</h2>

            <form onSubmit={actionCriarComunidade}>
              <div>
                <input
                  type='text'
                  placeholder='Qual vai ser o nome da sua comunidade?'
                  name='title'
                  aria-label='Qual vai ser o nome da sua comunidade?'
                />
              </div>
              <div>
                <input
                  type='text'
                  placeholder='Coloque uma url para usarmos de capa'
                  name='image'
                  aria-label='Coloque uma url para usarmos de capa'
                />
              </div>

              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>

        <div
          className='profileRelationsArea'
          style={{ gridArea: 'profileRelationsArea' }}
        >
          <ProfileRelationsBox title='Meus seguidores' items={seguidores} />

          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>
              Minhas comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((comunidade, i_comunidade) => {
                if (i_comunidade <= 5) {
                  return (
                    <li key={comunidade.id}>
                      <a
                        href={`/users/${comunidade.title}`}
                        key={comunidade.id}
                      >
                        <img src={comunidade.image} alt={comunidade.title} />
                        <span>{comunidade.title}</span>
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>Meu amigos ({amigos.length})</h2>
            <ul>
              {amigos.map((pessoa, i_pessoa) => {
                if (i_pessoa <= 5) {
                  return (
                    <li key={pessoa}>
                      <a href={`/users/${pessoa}`} key={pessoa}>
                        <img
                          src={`https://github.com/${pessoa}.png`}
                          alt={pessoa}
                        />
                        <span>{pessoa}</span>
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
