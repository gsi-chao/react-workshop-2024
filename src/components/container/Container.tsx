import { GlobalProvider } from "../../stores/global";

type Props = {
  children: React.ReactNode;
  customComponent: React.ReactNode;
};

const Container: React.FC<Props> = ({ children, customComponent }) => {
  return (
    <GlobalProvider>
      <div className="container">
        {children}
        {customComponent}
      </div>
    </GlobalProvider>
  );
};

export default Container;
