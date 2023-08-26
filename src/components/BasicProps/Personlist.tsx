// array type
type namesProps = {
  names: {
    first: string;
    last: string;
  }[];
};

const Personlist = (props: namesProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
export default Personlist;
