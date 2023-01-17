import { useQuery } from "react-query";
import { api } from "../axios/config";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function RandomDog() {
  const {
    data: randomDogImg,
    refetch,
    isFetching,
  } = useQuery<string>(
    "randomDog",
    async () => {
      return api.get("/randomDog").then((response) => response.data);
    },
    {
      staleTime: 1000 * 60, // 1 minuto,
    }
  );
    
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center">
        <div className=" w-3/4">
          <h1 className="text-4xl mb-10 text-center">RandomDog</h1>
          <div className="h-64 flex items-center justify-center my-10">
            {isFetching ? (
              <p className="text-xl ">Carregando...</p>
            ) : (
              <img
                src={randomDogImg}
                alt="random dog"
                className="max-w-sm max-h-64 object-cover"
              />
            )}
          </div>
          <button
            type="button"
            onClick={() => refetch()}
            className="mt-5 bg-green-700 w-full py-4 rounded text-white text-lg font-bold hover:bg-green-900"
          >
            Atualizar pagina
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
