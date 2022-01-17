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
import { SerieType } from "../../@types/Serie";
import { getThumbnail } from "../../utils/data";
import Breadcrumb from "../../components/Breadcrumb";


const Serie: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [serie, setSerie] = useState<SerieType | null>(null);

  const { id } = useParams();
  const { state } = useLocation();
  
  const getSerie = (): void => {
    setLoading(true);
      
    Api.get(`/series/${id}`)
      .then(response => 
        setSerie(response.data?.data?.results[0] ?? null)
      )
      .finally(() => setLoading(false));
  }; 
 
  useEffect(() => {
    if (state) {
      setSerie(state);
      setLoading(false);
    } else {
      getSerie();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const breadcrumbData = [
    {
      title: "Home",
      backTo: "/",
    },
    {
      title: "Series",
      backTo: "/series",
    },
    {
      title: serie?.title,
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
            {serie && (
              <div className="row g-5 mt-4">
                <div className="col-3">
                  <img
                    className="img-fluid"
                    src={getThumbnail(serie.thumbnail)}
                    alt={serie.title}
                  />
                </div>
                <div className="col-9">
                  <PageTitle 
                    title={serie?.title ?? 'Loading'} 
                  />
                  <h5>Description</h5>
                  <p 
                    className="mt-3">
                    {serie?.description === "" 
                    ? 'No futher information' 
                    : serie.description}
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


export default Serie;