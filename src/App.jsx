import { useState } from 'react';
import './App.css';
import rand from './Functions/randNumber';

const skaicius = rand(5, 25);

function App() {
  // Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja apskritimą. Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą, o paspaudus dar kartą vėl pavirsti apskritimu.
  const [borderis, setBorder] = useState('50');
  const keistiBorderi = () => {
    setBorder(joks => joks === 0 ? 50 : 0)
  }
  // Sukurti aplikaciją, kuri turi mygtukus change ir random bei atvaizduoja apskritimą su random skaičiumi viduje. Paspaudus change mygtuką apskritimas keičiasi į stačiakampį kaip pirmame uždavinyje, o paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25
  const [number, setNumber] = useState(skaicius);
  const [borderis1, setBorder1] = useState('50');
  const keistiBorderi1 = () => {
    setBorder1(joks => joks === 0 ? 50 : 0)
  }
  const keistiSkaiciu = () => {
    setNumber(nr => rand(5, 25))
  }
  // Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0. Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus minus- sumažėja 3
  const [number1, setNumber1] = useState(0);
  const skaiciavimai = sk => setNumber1(x => x + sk);

  // Sukurti aplikaciją, kuri turi mygtuką add, kurį paspaudus vieną kartą atsiranda mėlynas kvadratas, paspaudus du - du kvadratai ir t.t.
  const [melynasKvadratas, setMelynasKvadratas] = useState([]);
  const addMelynas = () => {
    setMelynasKvadratas(k => [...k, melynasKvadratas])
  }

  // Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset. Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t. Spaudinėjant prisideda vis daygiau kvadratų. Paspaudus reset viskas išsitrina

const [melynasKvadratas2, setMelynasKvadratas2] = useState([]);
const addMelynas2 = () => {
  setMelynasKvadratas2(k => [...k, melynasKvadratas2])
}
const [raudonasKvadratas, setRaudonasKvadratas] = useState([]);
const addRaudonas = () => {
  setRaudonasKvadratas(k => [...k, raudonasKvadratas])
}
const reset = () => {
  setMelynasKvadratas2(k => k.slice(-1, (k.length-1)));
  setRaudonasKvadratas(k => k.slice(-1, (k.length-1)));
}

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <div className='kvadratas' style={{borderRadius: borderis}}></div>
          <button onClick={keistiBorderi}>change</button>
        </section>
        <section>
          <div className='kvadratas1' style={{borderRadius: borderis1}}>{number}</div>
          <div>
            <button onClick={keistiBorderi1}>change</button>
            <button onClick={keistiSkaiciu}>random</button>
          </div>
        </section>        
        <section>
          <h1>{number1}</h1>
          <div>
            <button onClick={() => skaiciavimai(1)}>+</button>
            <button onClick={() => skaiciavimai(-3)}>- 3</button>
          </div>
        </section>
        <section>
          <div className='container'>
          {
            melynasKvadratas.map((melynasKvadratas, i) => <div className='melynas-kvadratas' key={i}></div>)
          }
          </div>
          <button onClick={addMelynas}>ADD</button>
        </section>
        <section>
          <div className="container">
          {
            melynasKvadratas2.map((melynasKvadratas2, i) => <div className='melynas-kvadratas' key={i}></div>)
          }
          {
            raudonasKvadratas.map((raudonasKvadratas, i) => <div className='raudonas-kvadratas' key={i}></div>)
          }
          </div>
          <div>
            <button onClick={addRaudonas}>add red</button>
            <button onClick={addMelynas2}>add blue</button>
            <button onClick={reset}>reset</button>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
