import { ProfileRelationsBoxWrapper } from '../ProfileRelations';

export default function ProfileRelationsBox(props) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className='smallTitle'>
        {props.title} ({props.items.length})
      </h2>
      <ul>
        {/* {props.itens.map(comunidade => {
          return (
            <li key={item.id}>
              <a href={`/users/${item.title}`} key={item.id}>
                <img src={item.image} alt={item.title} />
                <span>{item.title}</span>
              </a>
            </li>
          );
        })} */}
      </ul>
    </ProfileRelationsBoxWrapper>
  );
}
