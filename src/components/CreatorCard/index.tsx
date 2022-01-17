import { Link } from 'react-router-dom';
import { CreatorType } from '../../@types/Creator';

interface ICreatorCardProps {
  creator: CreatorType;
}

export const CreatorCard: React.FC<ICreatorCardProps> = ({creator}) => (
    <div className="card text-center">
      <Link 
        to={`/creators/${creator.id}`}
        state={creator}
      >
        <img 
          src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`} 
          className="card-img-top p-3" 
          alt={creator.fullName} 
        />
      </Link>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mt-auto">{creator.fullName}</h5>
        <Link 
          to={`/comics/${creator.id}`} 
          state={creator}
          className="btn btn-primary">
            Veja
        </Link>
      </div>
    </div>
);

export default CreatorCard;  