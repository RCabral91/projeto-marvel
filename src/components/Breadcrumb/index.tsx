import Container from "../Container";
import { Link } from "react-router-dom";
import { BreadcrumbStyle } from "./styles";



type BreadcrumbItemType = {
  title?: string | null;
  backTo?: string;
};

interface BreadcrumbProps {
  data: BreadcrumbItemType[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ data }) => (
  <BreadcrumbStyle>
    <Container>
      <div className="d-flex">
        {data.map((breadcrumbItem) => (
          <div key={breadcrumbItem.title} className="me-4">
            {breadcrumbItem.backTo ? (<Link 
              to={breadcrumbItem.backTo}
            >
              {breadcrumbItem.title}
            </Link>) : (breadcrumbItem.title)}
          </div>
      ))}
      </div>
    </Container>
  </BreadcrumbStyle>
);

export default Breadcrumb;