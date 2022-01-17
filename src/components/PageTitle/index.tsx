

interface IPageTitleProps {
  title: string;
}

const PageTitle: React.FC<IPageTitleProps> = ({ title }) => (
  <h1 className="fs-3 text-dark mb-5">{title}</h1>
  );

export default PageTitle;