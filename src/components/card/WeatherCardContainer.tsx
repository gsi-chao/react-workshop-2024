type Props = {
  children: React.ReactNode;
};

const WeatherCardContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-w-full min-h-40 bg-white rounded-xl shadow-md py-4 px-6">
      {children}
    </div>
  );
};

export default WeatherCardContainer;
