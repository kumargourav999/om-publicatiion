// DisplayComponent.js
import React from 'react';
import "./App.css"
const DisplayComponent = ({ searchResults }) => {
  return (
    
      <div className='jour'>
        {
        searchResults.map((result) => (
         <><div className='jo'> <h3 key={result.id}>{result.name}</h3> {result.eissn? <span>E-ISSN-{result.eissn}</span>:null}{result.issn?<span> ISSN-{result.issn}</span> :null}<span className='link'><a className="a"href={result.janaral}>link</a></span><hr></hr></div></>
         
        ))
        }
      </div>
   
  );
}

export default DisplayComponent;
