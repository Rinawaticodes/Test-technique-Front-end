import "./App.css";
import logo from "./assets/Logo.svg";

function App() {
  return (
    <div className="container">
      <div className="titleForm">
        <h1>Mon test technique des intégrations</h1>
        <img src={logo} alt="" />
      </div>
      <form action="submit">
        <div className="containerLeft">
          <p>
            <span className="bienvenue">Bienvenu</span> dans ce test technique.
            Pas de stress, le but est simplement de nous donner une idée honnête
            de ce ce que vous avez et ne savez pas faire afin de être capacité
            de vous fournir des tâches interessants lorsque vous rejoindre nos
            équipes.Alors
            <span className="haveFun"> HAVE FUN!</span>
          </p>
        </div>
        <div className="containerRight">
          <div>
            <p>Donnez une note à ce test technique</p>
          </div>
          <div className="note">
            <label htmlFor="note">Note</label>
            <input type="text" id="note" name="note" />
          </div>
        </div>
      </form>
      <div className="buttonSubmit">
        <button type="button">Annuler</button>
        <button type="button">Soumettre</button>
      </div>
    </div>
  );
}

export default App;
