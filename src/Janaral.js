// App.js
import React, { useEffect, useState } from 'react';
import SearchComponent from './SearchComponent';
import DisplayComponent from './DisplayComponent';
import "./App.css";
import { Link } from 'react-router-dom';
import imagejij from "./1705582286867.jpg";
const Janaral = () => {
  const [objects, setObjects] = useState([
    { id: 1, name: 'Journal for ReAttach Therapy and Developmental Diversities',issn:"",eissn :'2589-7799',janaral:'https://www.jrtdd.com/index.php/journal'},
    { id: 2, name: 'International Journal on Recent and Innovation Trends in Computing and Communication ',issn:"",eissn:"2321-8169",janaral:"https://ijritcc.org/index.php/ijritcc" },
    { id: 3, name: 'Journal of Law and Sustainable Development  ',issn:"2764-4170",eissn:"",janaral:"https://ojs.journalsdg.org/jlss/index" },
    { id: 2, name: 'MIGRATION LETTERS  ',issn:"1741-8984",eissn:"1741-8992",janaral:" https://migrationletters.com/index.php/ml " },
    { id: 2, name: 'SAMDARSHI',issn:"2581-3986",eissn:"",janaral:"http://punjabiacademydelhi.com/index.php/journal/login?source=%2Findex.php%2Fjournal" },
    { id: 2, name: 'Remittances Review',issn:"2059-6596",eissn:"",janaral:"https://remittancesreview.com/" },
    { id: 2, name: 'Web of science  original Journal',issn:"0976-8653",eissn:"22316996",janaral:"https://scientifictemper.com/index.php/tst" },
    { id: 2, name: 'International Journal of Membrane Science and Technology',issn:"",eissn:"2410-1869",janaral:"https://cosmosscholars.com/phms/index.php/ijmst/issue/view/184 " },
    { id: 2, name: 'International Journal of Intelligent Systems and Applications in Engineering',issn:"2147-6799",eissn:"",janaral:" https://pesjournal.net/index.php" },
    { id: 2, name: 'Proceedings on Engineering Sciences',issn:"2620-2832",eissn:"2683-4111",janaral:" https://pesjournal.net/index.php" },
    // Add more objects as needed
  ]);
 
  const [searchResults, setSearchResults] = useState(objects);
  
  const handleSearch = (query) => {
    const results = objects.filter((object) =>
      object.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    
    <div className="main">
      <SearchComponent onSearch={handleSearch} />
      <DisplayComponent searchResults={searchResults} />
      <div className='socialmedia2'>
        <span>
          
<a href="https://wa.me/918210898441?text=hello mr. gautam i need publication service." target="_blank"><img className='img1' alt="" src="https://tse1.mm.bing.net/th?id=OIP.TwESrblIhpd2D8XG5VDz5QHaHa&pid=Api&rs=1&c=1&qlt=95&w=113&h=113"></img></a>
</span>
<span>
<a href="https://www.instagram.com/_.aghori_?igsh=MzRlODBiNWFlZA==" > <img className='img1' alt="" src="https://tse1.mm.bing.net/th?id=OIP.-ZirgQE5pr8e7htQWowJIgHaHa&pid=Api&P=0&h=180" ></img></a>
</span>
<span>
<Link to="/contact"> <img className='img1' alt="" src="https://clipground.com/images/logo-call-png-1.jpg"></img></Link> 
 </span>
 <span>
 <a href="mailto:submit.ompublication@gmail.com">
     <img className='img1' alt="" src="https://tse3.explicit.bing.net/th?id=OIP.zhmbLnhaKr8LAo-YbR_K4wHaFY&pid=Api&P=0&h=180" />
   </a>
 </span>
  
 
</div>

     
<div className='part1' >
            
                <img className='partner'  src={imagejij}></img>
            </div>
    </div>
   
  );
};

export default Janaral;
