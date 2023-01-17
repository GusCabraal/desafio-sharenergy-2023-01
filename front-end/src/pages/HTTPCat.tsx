import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useQuery } from "react-query";
import { api } from "../axios/config";

export function HTTPCat() {  
    
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
