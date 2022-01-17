import { Link } from 'react-router-dom';
import { ComicType } from '../../@types/Comic';

interface IComicCardProps {
  comic: ComicType;
}

export const ComicCard: React.FC<IComicCardProps> = ({comic}) => (
    <div className="card text-center">
      <Link 
        to={`/comics/${comic.id}`}
        state={comic}
      >
        <img 
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} 
          className="card-img-top p-3" 
          alt={comic.title} 
        />
      </Link>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mt-auto">{comic.title}</h5>
        <Link 
          to={`/comics/${comic.id}`} 
          state={comic}
          className="btn btn-primary">
            Veja
        </Link>
      </div>
    </div>
);

export default ComicCard;  