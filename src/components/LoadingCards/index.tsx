import LoadingCard from './LoadingCard';

interface ILoadingCardsProps {
    show: boolean;
    numberOfCards?: number;
}

const LoadingCards:React.FC<ILoadingCardsProps> = ({
    show,
    numberOfCards = 12,
}) =>
    show ? (
        <div className="row row-cols-4 g-3">
            {[...Array(numberOfCards)].map(() => (
                <div className="col">
                    <LoadingCard />
                </div>
            ))}
        </div>
    ) : null;

export default LoadingCards;