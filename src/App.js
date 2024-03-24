import './App.css';
import Countries from './components/Countries/Countries';
// import { useEffect, useState } from 'react';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <LoadCountiesAPI></LoadCountiesAPI> */}
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}


// function LoadCountiesAPI(){
//   const [countries, setCountries] = useState([])

//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//       setCountries(data)
//     })
//   },[])

//   return (
//     <div>
//       <h1>Load and Display All countries in the world!!!</h1>
//       <div>
//         <h2>Avabile Countries : {countries.length}</h2>
//         <div className='cardContainer'>
//           {
//             countries.map(country => DisplayCountries(country))
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// function DisplayCountries(props){
//   const {name, region, population, capital, timezones} = props
//   // console.log(Object.values(languages))
//   return (
//     <div className='card'>
//       <div>
//         <img src="{props.flags.png}" alt="" />
//         {/* <img src="" alt="" /> */}
//       </div>
//       <h3>Name : {name.common}</h3>
//       <hr />
//       <p>Region : {region}</p>
//       <p>Population : {population}</p>
     
//       {/* <p>Language : {languages.ell}</p> */}
//       <p>Capital : {capital}</p>
//       <p>TimeZones : {timezones}</p>
//     </div>
//   )
// }
export default App;
