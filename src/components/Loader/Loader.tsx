import { Grid } from "react-loader-spinner";

const Loader = () => {
  return (
    <Grid
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5rem",
      }}
      wrapperClass="grid-wrapper"
    />
  );
};

export default Loader;
