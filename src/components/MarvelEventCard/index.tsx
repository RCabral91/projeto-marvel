import { Link } from 'react-router-dom';
import { MarvelEventType } from '../../@types/MarvelEvent';

interface IMarvelEventCardProps {
  marvelEvent: MarvelEventType;
}

export const MarvelEventCard: React.FC<IMarvelEventCardProps> = ({marvelEvent}) => (
    <div className="card text-center">
      <Link 
        to={`/events/${marvelEvent.id}`}
        state={marvelEvent}
      >
        <img 
          src={`${marvelEvent.thumbnail.path}.${marvelEvent.thumbnail.extension}`} 
          className="card-img-top p-3" 
          alt={marvelEvent.title} 
        />
      </Link>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mt-auto">{marvelEvent.title}</h5>
        <Link 
          to={`/comics/${marvelEvent.id}`} 
          state={marvelEvent}
          className="btn btn-primary">
            Veja
        </Link>
      </div>
    </div>
);

export default MarvelEventCard;  