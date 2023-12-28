import './style.css';

type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function Card({ children, style }: CardProps) {
  return (
    <div className="root-card" style={style}>
      {children}
    </div>
  );
}
