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
import { ComicType } from "../../@types/Comic";
import { getThumbnail } from "../../utils/data";
import Breadcrumb from "../../components/Breadcrumb";


const Comic: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [comic, setComic] = useState<ComicType | null>(null);

  const { id } = useParams();
  const { state } = useLocation();
  
  const getComic = (): void => {
    setLoading(true);
      
    Api.get(`/comics/${id}`)
      .then(response => 
        setComic(response.data?.data?.results[0] ?? null)
      )
      .finally(() => setLoading(false));
  }; 
 
  useEffect(() => {
    if (state) {
      setComic(state);
      setLoading(false);
    } else {
      getComic();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const breadcrumbData = [
    {
      title: "Home",
      backTo: "/",
    },
    {
      title: "Comics",
      backTo: "/comics",
    },
    {
      title: comic?.title,
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
            {comic && (
              <div className="row g-5 mt-4">
                <div className="col-3">
                  <img
                    className="img-fluid"
                    src={getThumbnail(comic.thumbnail)}
                    alt={comic.title}
                  />
                </div>
                <div className="col-9">
                  <PageTitle 
                    title={comic?.title ?? 'Loading'} 
                  />
                  <h5>Description</h5>
                  <p 
                    className="mt-3">
                    {comic?.description
                    ? comic?.description
                    : 'No futher information'}
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


export default Comic;