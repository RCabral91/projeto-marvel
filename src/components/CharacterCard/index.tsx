import { Link } from 'react-router-dom';
import { CharacterType } from '../../@types/Character';

interface ICharacterCardProps {
  character: CharacterType;
}

export const CharacterCard: React.FC<ICharacterCardProps> = ({character}) => (
    <div className="card text-center">
      <Link 
        to={`/characters/${character.id}`}
        state={character}
      >
        <img 
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
          className="card-img-top p-3" 
          alt={character.name} 
        />
      </Link>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mt-auto">{character.name}</h5>
        <Link 
          to={`/comics/${character.id}`} 
          state={character}
          className="btn btn-primary">
            Veja
        </Link>
      </div>
    </div>
);

export default CharacterCard;  