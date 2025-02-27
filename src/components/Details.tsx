import { useParams } from "react-router-dom";
import CardBookFull from "./subComponents_/CardBookFull";

import { TBook } from "../models/models";
import Title from "./subComponents_/Title";
import { useFetch } from "../hooks/useFetch";
import { useMemo } from "react";
import { IRequestOptions } from "../utils/APIService";
import { initialBooks} from "../context/initialBooksDemo";


const param = {
  h2: "Detalhes",
  sub: "Veja os detalhes do exemplar",
};

/**
 * Renderiza página ver livro completo. Em seu fluxo, captura o parâmetro da URL para determinar o livro selecionado.
 *
 * @return {*}  {JSX.Element}
 */
function Details(): JSX.Element {
  const { _id } = useParams();
  const options = useMemo(
    () => ({ operation: "GET_BY_ID", _id }),
    [_id]
  );

  let book: TBook | null = null;

  const { state } = useFetch<TBook>(options as IRequestOptions)

  if (state && _id) {
    if (!state.data) {
      book = initialBooks.filter(book => book._id = _id)[0] as TBook
    } else if (state.data) {
      book = state.data
    }
  }


  return (
    <>
     
        <div className="flex flex-col md:flex-row">
          <Title param={param} />
          <div className="flex w-full justify-center">
            {book ? <CardBookFull book={book} page="details" /> : <p>Livro</p>}
          </div>
        </div>

    </>
  );
}

export default Details;
