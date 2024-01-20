import React, { useState, useEffect } from 'react'
import './App.css';
import { Link } from 'react-router-dom';
import imagejij from "./1705582286867.jpg";
export default function
    Home() {
    const img = ["https://sheridanvoysey.com/wp-content/uploads/2016/05/4-1.jpg", "https://www.teachingenglish.org.uk/sites/teacheng/files/images/class_journals_iStock_000021675732XSmall.jpg", "https://wallpaperaccess.com/full/2878903.jpg", "https://wallpapers.com/images/hd/journals-with-black-leather-cover-c3wnz2qydxd16id6.jpg"];
    const [image, setimage] = useState(img[0]);
    const [i, seti] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            // Increment the image index, and loop back to the first image if it exceeds the array length
            seti((prevIndex) => (prevIndex + 1) % 4);
        }, 3000); // Change image every 3 seconds

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [i]);
    return (
        <div className='app1'>
            <div className="div1">
                <span className="h1">OM PUBLICATION SERVICES</span>

            </div>
            <div className="div2">
                <div className="p1">OM Publication specializes in publishing articles in scholarly journals and conference proceedings. Their goal is to publish high-quality articles that make significant contributions to their respective fields</div>
                <div>
                <img className="imgart1"  src={img[i]}></img>
                </div>
            
            </div>

                    
            <div className='socialmedia'>
                <a href="https://wa.me/918210898441?text=hello mr. gautam i need publication service." target="_blank"><img className='img1' alt="" src="https://tse1.mm.bing.net/th?id=OIP.TwESrblIhpd2D8XG5VDz5QHaHa&pid=Api&rs=1&c=1&qlt=95&w=113&h=113"></img></a>
                <a href="https://www.instagram.com/_.aghori_?igsh=MzRlODBiNWFlZA==" > <img className='img1' alt="" src="https://tse1.mm.bing.net/th?id=OIP.-ZirgQE5pr8e7htQWowJIgHaHa&pid=Api&P=0&h=180" ></img></a>
                <a href="tel:918826296239">
  <img className='img1' alt="" src="https://clipground.com/images/logo-call-png-1.jpg" />
</a>
     <a href="mailto:submit.ompublication@gmail.com">
     <img className='img1' alt="" src="https://tse3.explicit.bing.net/th?id=OIP.zhmbLnhaKr8LAo-YbR_K4wHaFY&pid=Api&P=0&h=180" />
   </a>


            </div>
            <div className='part' >
            <h3 className='partner2'>OUR INDEXING PARTNER</h3>
                <img className='partner'  src={imagejij}></img>
            </div>
        </div>

    )
}

