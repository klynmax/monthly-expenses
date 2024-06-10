import DonutIcon from '../../../assets/imagens/donut_small_24dp_FILL0.svg';
import './style.css';

type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function CardTitle({ children, style }: CardProps) {
  return (
    <div className="root-card" style={style}>
      <div className="title-container">
        <img src={DonutIcon} />
        <div className="card-title">Card Title</div>
      </div>
      <div className="table-divider" />
      {children}
    </div>
  );
}
