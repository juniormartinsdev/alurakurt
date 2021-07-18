import Box from '../Box';
import { AlurakutProfileSidebarMenuDefault } from '../../lib/AluraKutCommons';

export default function ProfileSideBar(props) {
  return (
    <Box as='aside'>
      <img
        src={`https://github.com/${props.githubUser}.png`}
        alt={props.githubUser}
      />
      <hr />
      <p>
        <a href={`https://github.com/${props.githubUser}`} className='boxLink'>
          @{props.githubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}
