import AppLayout from "../containers/AppLayout";

const App = ({ Component }) => {
  return (
    <>
      <AppLayout />
      <Component />
    </>
  );
};

export default App;
