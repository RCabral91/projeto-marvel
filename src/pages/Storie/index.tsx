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
import { StorieType } from "../../@types/Storie";
// import { getThumbnail } from "../../utils/data";
import Breadcrumb from "../../components/Breadcrumb";
import storieImg from "../../assets/storieImg.jpg";


const Storie: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [storie, setStorie] = useState<StorieType | null>(null);

  const { id } = useParams();
  const { state } = useLocation();
  
  const getStorie = (): void => {
    setLoading(true);
      
    Api.get(`/stories/${id}`)
      .then(response => 
        setStorie(response.data?.data?.results[0] ?? null)
      )
      .finally(() => setLoading(false));
  }; 
 
  useEffect(() => {
    if (state) {
      setStorie(state);
      setLoading(false);
    } else {
      getStorie();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const breadcrumbData = [
    {
      title: "Home",
      backTo: "/",
    },
    {
      title: "Stories",
      backTo: "/stories",
    },
    {
      title: storie?.originalIssue.name,
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
            {storie && (
              <div className="row g-5 mt-4">
                <div className="col-3">
                  <img
                    className="img-fluid"
                    src={storieImg}
                    alt={storie.originalIssue.name}
                  />
                </div>
                <div className="col-9">
                  <PageTitle 
                    title={storie?.originalIssue.name ?? 'Loading'} 
                  />
                  <h5>Description</h5>
                  <p 
                    className="mt-3">
                    {storie?.title === "" 
                    ? 'No futher information' 
                    : storie.title}
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


export default Storie;