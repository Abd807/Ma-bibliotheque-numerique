import React, {useState} from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Add = () => {
  const [newBook, setNewBook] = useState({
    title: "",
    desc: "",
    author: "",
    cover: "",
    opinion: null,
    publisher: "",
    genre: "",
  });
  console.log(newBook)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
    // Database fetching
    const handleClick = async (e) => {
      e.preventDefault();
      try {
        await axios.post(`/books`, newBook);
        navigate("/library");
      } catch (err) {
        console.log(err);
      }
    };

  return (
    <div className="lg:flex lg:flex-row md:flex-col sm:flex-col bg-slate-100 dark:bg-slate-800 overflow-hidden justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ajouter un livre</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex flex-col font-bold justify-center items-center text-center ">
        <h2 className="font-poppins text-xl text-center text-black dark:text-white font-bold m-2 p-2">
          Ajouter un livre
        </h2>
        <form className="grid justify-items-center">
          <Fade>
            <label className="font-open grid grid-col mb-2 text-sm font-medium text-black dark:text-white">
              Titre du livre
              <input
                type="text"
                placeholder="ex : Les Misérables"
                name="title"
                required
                aria-required="true"
                autoComplete="off"
                className="font-open m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
                onChange={handleChange}
              />
            </label>
            <label className="font-open grid grid-col mb-2 text-sm font-medium text-black dark:text-white">
              Auteur du livre
              <input
                type="text"
                placeholder="ex : Victor Hugo"
                name="author"
                required
                aria-required="true"
                autoComplete="off"
                className="font-open m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
                onChange={handleChange}
              />
            </label>
            <h2 className="m-2 p-2 font-open grid grid-col mb-2 text-sm font-medium text-black dark:text-white">Genre du livre</h2>
            <label htmlFor="massecritique"> Masse Critique
              <input
                type="radio"
                name="cat"
                required
                value="massecritique"
                id="massecritique"
                onChange={handleChange}
                className="m-2 p-2"
              />
            </label>
            <label htmlFor="coupdecoeur"> Coup de coeur
              <input
                type="radio"
                name="cat"
                required
                value="coupdecoeur"
                id="coupdecoeur"
                onChange={handleChange}
                className="m-2 p-2"
              />
            </label>
            <label htmlFor="feelgood"> Feel-Good
              <input
                type="radio"
                name="cat"
                required
                value="feelgood"
                id="feelgood"
                onChange={handleChange}
                className="m-2 p-2"
              />
            </label>
            <label htmlFor="romance"> Romance
              <input
                type="radio"
                name="cat"
                required
                value="romance"
                id="romance"
                onChange={handleChange}
                className="m-2 p-2"
              />
            </label>
            <label htmlFor="thriller"> Thriller
              <input
                type="radio"
                name="cat"
                required
                value="thriller"
                id="thriller"
                onChange={handleChange}
                className="m-2 p-2"
              />
            </label>
            <label htmlFor="divers"> Divers
              <input
                type="radio"
                name="cat"
                required
                value="divers"
                id="divers"
                onChange={handleChange}
                className="m-2 p-2"
              />
            </label>
            <label className="font-open grid grid-col mb-2 text-sm font-medium text-black dark:text-white">
              Editeur du livre
              <input
                type="text"
                placeholder="ex : Albin Michel"
                name="publisher"
                required
                aria-required="true"
                autoComplete="off"
                className="font-open m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
                onChange={handleChange}
              />
            </label>
            <label className="font-open grid grid-col mb-2 text-sm font-medium text-black dark:text-white">
              Résumé du livre
              <textarea
                type="text"
                placeholder="C'est l'histoire de..."
                name="desc"
                required
                aria-required="true"
                autoComplete="off"
                className="font-open m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
                onChange={handleChange}
              />
            </label>
            <label className="font-open grid grid-col mb-2 text-sm font-medium text-black dark:text-white">
              Avis sur le livre (note /5)
              <select
                name="opinion"
                required
                aria-required="true"
                autoComplete="off"
                className="font-open m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
                onChange={handleChange}
              >
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </label>
            <label htmlFor="file" className="font-open grid grid-col mb-2 text-sm font-medium text-black dark:text-white">Couverture du livre
            <input type="file" id="file" name="img" placeholder="la-couverture-de-mon-livre.png" className="m-2 p-2 "></input>
            </label>
            {/* <label className="font-open grid grid-col mb-2 text-sm font-medium text-black dark:text-white">
              Couverture du livre (url)
              <input
                type="text"
                placeholder="ex : https://la-couverture-de-mon-livre.jpg"
                name="img"
                required
                aria-required="true"
                autoComplete="off"
                className="font-open m-2 p-4 w-96 rounded-lg shadow-md cursor-pointer font-normal"
                onChange={handleChange}
              />
            </label> */}
            <button
              type="button"
              onClick={handleClick}
              className="font-poppins over:animate-bounce cursor-pointer text-white hover:text-white bg-yellow-600 box-shadow-lg font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-8 ml-8 mt-6"
            >
              Ajouter ce livre
            </button>
          </Fade>
        </form>
      </div>
    </div>
  );
};

export default Add;
