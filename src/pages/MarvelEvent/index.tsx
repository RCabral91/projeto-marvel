import { useState, useEffect } from "react"; 
import { useParams, useLocation } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../Footer";
import Container from "../../components/Container";
import LoadingCards from "../../components/LoadingCards";
import LoadingGate from "../../components/LoadingGate";
import Main from "../../components/Main";
import PageTitle from "../../components/PageTitle";
import Api from "../../services/Api";
import Wrapper from "../../components/Wrapper";
import { MarvelEventType } from "../../@types/MarvelEvent";
import { getThumbnail } from "../../utils/data";
import Breadcrumb from "../../components/Breadcrumb";


const MarvelEvent: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [marvelEvent, setMarvelEvent] = useState<MarvelEventType | null>(null);

  const { id } = useParams();
  const { state } = useLocation();
  
  const getMarvelEvent = (): void => {
    setLoading(true);
      
    Api.get(`/events/${id}`)
      .then(response => 
        setMarvelEvent(response.data?.data?.results[0] ?? null)
      )
      .finally(() => setLoading(false));
  }; 
 
  useEffect(() => {
    if (state) {
      setMarvelEvent(state);
      setLoading(false);
    } else {
      getMarvelEvent();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const breadcrumbData = [
    {
      title: "Home",
      backTo: "/",
    },
    {
      title: "Events",
      backTo: "/events",
    },
    {
      title: marvelEvent?.title,
    }
  ];

  return (
    <Wrapper>
      <Header /> 
      <Main> 
        <Breadcrumb data={breadcrumbData} />
        <Container>
          <LoadingGate
            waitFor={isLoading === false}
            meanwhile={<LoadingCards show numberOfCards={1} />}
          >
            {marvelEvent && (
              <div className="row g-5 mt-4">
                <div className="col-3">
                  <img
                    className="img-fluid"
                    src={getThumbnail(marvelEvent.thumbnail)}
                    alt={marvelEvent.title}
                  />
                </div>
                <div className="col-9">
                  <PageTitle 
                    title={marvelEvent?.title ?? 'Loading'} 
                  />
                  <h5>Description</h5>
                  <p 
                    className="mt-3">
                    {marvelEvent?.description === "" 
                    ? 'No futher information' 
                    : marvelEvent?.description}
                  </p>
                </div>
              </div>
            )}
          </LoadingGate>
        </Container> 
      </Main>
      <Footer />
    </Wrapper>
  );
};


export default MarvelEvent;