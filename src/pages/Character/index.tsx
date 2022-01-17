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
import { CharacterType } from "../../@types/Character";
import { getThumbnail } from "../../utils/data";
import Breadcrumb from "../../components/Breadcrumb";


const Character: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [character, setCharacter] = useState<CharacterType | null>(null);

  const { id } = useParams();
  const { state } = useLocation();
  
  const getCharacter = (): void => {
    setLoading(true);
      
    Api.get(`/characters/${id}`)
      .then(response => 
        setCharacter(response.data?.data?.results[0] ?? null)
      )
      .finally(() => setLoading(false));
  }; 
 
  useEffect(() => {
    if (state) {
      setCharacter(state);
      setLoading(false);
    } else {
      getCharacter();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const breadcrumbData = [
    {
      title: "Home",
      backTo: "/",
    },
    {
      title: "Characters",
      backTo: "/characters",
    },
    {
      title: character?.name,
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
            {character && (
              <div className="row g-5 mt-4">
                <div className="col-3">
                  <img
                    className="img-fluid"
                    src={getThumbnail(character.thumbnail)}
                    alt={character.name}
                  />
                </div>
                <div className="col-9">
                  <PageTitle 
                    title={character?.name ?? 'Loading'} 
                  />
                  <h5>Description</h5>
                  <p 
                    className="mt-3">
                    {character?.description === "" 
                    ? 'No futher information' 
                    : character?.description}
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


export default Character;