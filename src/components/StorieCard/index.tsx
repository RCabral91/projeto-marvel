import { Link } from 'react-router-dom';
import { StorieType } from '../../@types/Storie';
// import storieImg from '../../assets/storieCard.jpg';

interface IStorieCardProps {
  storie: StorieType;
}

export const StorieCard: React.FC<IStorieCardProps> = ({storie}) => (
    <div className="card text-center">
      <Link 
        to={`/stories/${storie.id}`}
        state={storie}
      >
        <img 
          src={`${storie.title}`} 
          className="card-img-top p-3" 
          alt={storie.description} 
        />
      </Link>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mt-auto">{storie.originalIssue.name}</h5>
        <Link 
          to={`/stories/${storie.id}`} 
          state={storie}
          className="btn btn-primary">
            Veja
        </Link>
      </div>
    </div>
);

export default StorieCard;  