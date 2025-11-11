import { useFilms } from "@/hooks";
import FilmsTemplate from "./FilmsTemplate";

const FilmsDataProvider = () => {
  const { data } = useFilms();
  return <FilmsTemplate data={data} />;
};

export default FilmsDataProvider;
