interface IContainerProps {
  className?: string;
}

const Container: React.FC<IContainerProps> = ({ className, children}) => (
  <div className={`container ${className ?? ''}`}>{children}</div>
);

export default Container;