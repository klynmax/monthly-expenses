import colors from '../../../assets/color/colors';

type DonutProps = {
  width: number;
  height: number;
  data?: any;
  value?: string;
};

export default function Donut({ width, height, data, value }: DonutProps) {
  return (
    <div
      style={{
        width: width,
        height: height,
        borderRadius: '50%',
        // background:
        //   `radial-gradient(white 50%, transparent 41%), conic-gradient(orange 50%, blue 50%)`,
        background: `radial-gradient(#21222d 60%, transparent 41%), conic-gradient(${data})`,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 11,
        color: colors.secundaryText,
      }}
    >
      <div>{value}</div>
    </div>
  );
}
