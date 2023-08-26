type ContainerProps = {
  styles: React.CSSProperties;
};

// here we are destructuring the styles from props
const Container = ({ styles }: ContainerProps) => {
  return <div style={styles}>Text content goes here</div>;
};
export default Container;
