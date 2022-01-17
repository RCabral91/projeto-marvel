import { Link } from "react-router-dom";
import { Container } from "./styles";
import charactersImg from "../../assets/characters.jpg";
import comicsImg from "../../assets/comics.jpg";
import creatorsImg from "../../assets/creators.jpg";
import eventsImg from "../../assets/events.jpg";
import seriesImg from "../../assets/series.jpg";
import storiesImg from "../../assets/stories.jpg";

export const MainPage:React.FC = () => (
    <Container>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-2">
          <div className="col">
            <div className="card text-center">
              <Link 
                to="/characters">
                  <img src={charactersImg} 
                    className="card-img-top" 
                    alt="characters">
                  </img>
                </Link>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title pt-1">Characters</h5>
                <p className="card-text">Conheça seus personagens favoritos.</p>
                <Link to="/characters" className="btn btn-primary">Veja</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <Link to="/comics"><img src={comicsImg} className="card-img-top" alt="comics"></img></Link>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Comics</h5>
                <p className="card-text">Veja as melhores comics.</p>
                <Link to="/comics" className="btn btn-primary">Veja</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <Link to="/creators"><img src={creatorsImg} className="card-img-top" alt="creators"></img></Link>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Creators</h5>
                <p className="card-text">Conheça os criadores por trás da história.</p>
                <Link to="/creators" className="btn btn-primary">Veja</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <Link to="/events"><img src={eventsImg} className="card-img-top" alt="events"></img></Link>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Events</h5>
                <p className="card-text">Veja a timeline do MCU.</p>
                <Link to="/events" className="btn btn-primary">Veja</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <Link to="/series"><img src={seriesImg} className="card-img-top" alt="series"></img></Link>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Series</h5>
                <p className="card-text">Veja todas as series.</p>
                <Link to="/series" className="btn btn-primary">Veja</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <Link to="/stories"><img src={storiesImg} className="card-img-top" alt="stories"></img></Link>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Stories</h5>
                <p className="card-text">Veja todas as Histórias.</p>
                <Link to="/stories" className="btn btn-primary">Veja</Link>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </Container>
  );
