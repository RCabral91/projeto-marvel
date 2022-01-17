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
import { CreatorType } from "../../@types/Creator";
import { getThumbnail } from "../../utils/data";
import Breadcrumb from "../../components/Breadcrumb";


const Creator: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [creator, setCreator] = useState<CreatorType | null>(null);

  const { id } = useParams();
  const { state } = useLocation();
  
  const getCreator = (): void => {
    setLoading(true);
      
    Api.get(`/creators/${id}`)
      .then(response => 
        setCreator(response.data?.data?.results[0] ?? null)
      )
      .finally(() => setLoading(false));
  }; 
 
  useEffect(() => {
    if (state) {
      setCreator(state);
      setLoading(false);
    } else {
      getCreator();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const breadcrumbData = [
    {
      title: "Home",
      backTo: "/",
    },
    {
      title: "Creators",
      backTo: "/creators",
    },
    {
      title: creator?.fullName,
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
            {creator && (
              <div className="row g-5 mt-4">
                <div className="col-3">
                  <img
                    className="img-fluid"
                    src={getThumbnail(creator.thumbnail)}
                    alt={creator.fullName}
                  />
                </div>
                <div className="col-9">
                  <PageTitle 
                    title={creator?.fullName ?? 'Loading'} 
                  />
                  <h5>Description</h5>
                  <p 
                    className="mt-3">
                    {creator?.description === "" 
                    ? 'No futher information' 
                    : creator?.description}
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


export default Creator;