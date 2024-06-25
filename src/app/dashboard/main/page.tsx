import { SimpleWidget } from "@/app/components/SimpleWidget";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const MainPage = () => {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span>Información general</span>

      <div className="flex flex-wrap p-2 justify-center">
        <SimpleWidget />
      </div>
    </div>
  );
};

export default MainPage;
