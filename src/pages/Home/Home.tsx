import { Button } from '~/shared/ui';

const HomePage = () => {
  const handleClick = (data: unknown): void => {
    console.log(data);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <Button onClick={() => handleClick('clicked')}>Click me</Button>
    </div>
  );
};

export default HomePage;
