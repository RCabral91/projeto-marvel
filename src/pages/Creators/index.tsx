import { useState, useEffect, useCallback } from "react"; 
import { Header } from "../../components/Header";
import { Footer } from "../../Footer";
import Container from "../../components/Container";
import LoadingCards from "../../components/LoadingCards";
import LoadingGate from "../../components/LoadingGate";
import Main from "../../components/Main";
import PageTitle from "../../components/PageTitle";
import Api from "../../services/Api";
import { CreatorType } from "../../@types/Creator";
import Wrapper from "../../components/Wrapper";
import Pagination from "../../components/Pagination";
import Breadcrumb from "../../components/Breadcrumb";
import { SearchInput } from "../../components/SearchInput";
import CreatorCard from "../../components/CreatorCard";




interface IParams{
  offset: number;
  limit: number;
  nameStartsWith?: string;
}

const breadcrumbData = [
  {
    title: "Home",
    backTo: "/",
  },
];

export const Creators: React.FC = () => {

  const [isLoading, setLoading] = useState(true);
  const [creators, setCreators] = useState<CreatorType[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');

  const getCreators = useCallback (
    async(page = 1, searchText = ''): Promise<void> => {
    if (page !== currentPage || searchText.length > 0) {
    const limit = 24;
    const offset =  limit * (page - 1);
    
    setLoading(true);
    setCurrentPage(page);

    let params = {
      offset,
      limit,
    } as IParams;

    if (searchText.length > 0) {
      params = {
        ...params,
        nameStartsWith: searchText,
      }
    }
    
    try{
      const response = await Api.get('/creators', {
        params  
      })
      setCreators(response.data?.data?.results ?? []);
        setPageCount(
          Math.ceil(
            (response.data?.data?.total ?? 0) / 
              (response.data?.data?.limit ?? 1)
          )
        );
      } catch {
          setPageCount(0);
      } finally {
          setLoading(false);
      }
    }
  }, [currentPage]); 
   
    useEffect(() => {
    getCreators(); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (searchText: string) => {
    setSearch(searchText);
    getCreators(1, searchText);
  }

  const handlePageChange = (event: {selected: number}) => getCreators(event.selected + 1, search);
  
  return (
    <Wrapper>
      <Header />
      <Main>
        <Breadcrumb data={breadcrumbData} />
        <Container>
          <PageTitle title="Creators" />
          <div className="row justify-content-end mb-3">
            <div className="col-3">
             <SearchInput onSearch={handleSearch} placeholder="Search Creators" />
            </div>
          </div>
          <LoadingGate
            waitFor={isLoading === false}
            meanwhile={<LoadingCards show numberOfCards={4} />}
          >           
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-2 mb-5">
              {creators.map((creator) => (
                <div key={creator.id} className="col d-flex">
                  <CreatorCard creator={creator} />
                </div>
              ))}
            </div>
            {pageCount > 1 && (
              <Pagination
                forcePage={currentPage -1}
                pageCount={pageCount} 
                onPageChange={handlePageChange}
              />
            )}
          </LoadingGate>
        </Container>
      </Main>
      <Footer />
    </Wrapper>
  );
}