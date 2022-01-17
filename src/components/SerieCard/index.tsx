import { Link } from 'react-router-dom';
import { SerieType } from '../../@types/Serie';

interface ISerieCardProps {
  serie: SerieType;
}

export const SerieCard: React.FC<ISerieCardProps> = ({serie}) => (
    <div className="card text-center">
      <Link 
        to={`/series/${serie.id}`}
        state={serie}
      >
        <img 
          src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`} 
          className="card-img-top p-3" 
          alt={serie.title} 
        />
      </Link>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mt-auto">{serie.title}</h5>
        <Link 
          to={`/series/${serie.id}`} 
          state={serie}
          className="btn btn-primary">
            Veja
        </Link>
      </div>
    </div>
);

export default SerieCard;  