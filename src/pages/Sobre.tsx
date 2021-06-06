import { Link } from 'react-router-dom'; 

function Sobre() {
  return (
    <>
      <h1>Voce esta na Sobre</h1>
      <div>
        <Link to="/" >Home</Link>
      </div>
    </>
  );
}

export default Sobre;