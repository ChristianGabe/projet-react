import './App.css';

function App(){
  return(
  <div>
    <div className='container'>

    <form action=""  className="mx-auto mt-50" method="post">

      <div className= "text-3xl text-primary">
        <h1>VEUILLEZ VOUS INSCRIRE</h1>
      </div>
    <div>
      <label htmlFor="">Nom</label>
      <input type="text" className="form-control" />
    </div>

    <div>
      <label htmlFor="">Prenom</label>
      <input type="text" className="form-control" />
    </div>

    <div>
      <label htmlFor="">Tel</label>
      <input type="tel" className="form-control"  />
    </div>

    <div>
      <label htmlFor="">Email</label>
      <input type="email" className="form-control"  />
    </div>

    <div>
      <label htmlFor="">Mot de passe</label>
      <input type="password" className="form-control"  />
    </div>
    
    <div>
      <label htmlFor="">Profession</label>
      <input type="text" className="form-control"  />
    </div>
    
    <div>
      <button className="btn btn-primary btn-block mt-3">S'INSCRIRE</button>
    </div>
    </form>
        

    </div>
    </div>
  );
}
export default App;





