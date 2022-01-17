import { useState, useEffect, useCallback } from "react"; 
import { Header } from "../../components/Header";
import { Footer } from "../../Footer";
import Container from "../../components/Container";
import LoadingCards from "../../components/LoadingCards";
import LoadingGate from "../../components/LoadingGate";
import Main from "../../components/Main";
import PageTitle from "../../components/PageTitle";
import ComicCard from "../../components/ComicCard";
import Api from "../../services/Api";
import { ComicType } from "../../@types/Comic";
import Wrapper from "../../components/Wrapper";
import Pagination from "../../components/Pagination";
import Breadcrumb from "../../components/Breadcrumb";
import { BreadcrumbStyle } from "../../components/Breadcrumb/styles";
import { SearchInput } from "../../components/SearchInput";



interface IParams{
  offset: number;
  limit: number;
  titleStartsWith?: string;
}

const breadcrumbData = [
  {
    title: "Home",
    backTo: "/",
  },
];

export const Comics: React.FC = () => {

  const [isLoading, setLoading] = useState(true);
  const [comics, setComics] = useState<ComicType[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');

  const getComics = useCallback (
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
        titleStartsWith: searchText,
      }
    }
    
    try{
      const response = await Api.get('/comics', {
        params  
      })
      setComics(response.data?.data?.results ?? []);
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
    getComics(); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (searchText: string) => {
    setSearch(searchText);
    getComics(1, searchText);
  }

  const handlePageChange = (event: {selected: number}) => getComics(event.selected + 1, search);
  
  return (
    <Wrapper>
      <Header />
      <Main>
        <BreadcrumbStyle>
          <Breadcrumb data={breadcrumbData} />
        </BreadcrumbStyle>
        <Container>
          <PageTitle title="Comics" />
          <div className="row justify-content-end mb-3">
            <div className="col-3">
             <SearchInput onSearch={handleSearch} placeholder="Search Comics" />
            </div>
          </div>
          <LoadingGate
            waitFor={isLoading === false}
            meanwhile={<LoadingCards show numberOfCards={4} />}
          >           
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-2 mb-5">
              {comics.map((comic) => (
                <div key={comic.id} className="col d-flex">
                  <ComicCard comic={comic} />
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