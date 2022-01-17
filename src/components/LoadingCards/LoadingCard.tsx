import ContentLoader from 'react-content-loader';

const LoadingCard:React.FC = () => (
    <ContentLoader
        speed={2}
        width="100%"
        height={300}
        backgroundColor="#131313"
        foregroundColor="#191919"
    >
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="300" />
    </ContentLoader>
);

export default LoadingCard;