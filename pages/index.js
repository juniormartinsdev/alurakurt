import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
} from '../src/lib/AluraKutCommons';

function ProfileSideBar(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} alt='' />
    </Box>
  );
}

export default function Home() {
  const githubUser = 'juniormartinsdev';
  const pessoasFavoritas = [
    'juunegreiros',
    'peas',
    'omariosouto',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ];
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className='profileArea' style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>

        <div className='welcomeArea' style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className='title'>Bem vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>

        <div
          className='profileRelationsArea'
          style={{ gridArea: 'profileRelationsArea' }}
        >
          <Box>Favoritos</Box>
          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map(pessoa => {
                return (
                  <li>
                    <a href={`/users/${pessoa}`} key={pessoa}>
                      <img
                        src={`https://github.com/${pessoa}.png`}
                        alt={pessoa}
                      />
                      <span>{pessoa}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  );
}
