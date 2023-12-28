import React,{useState} from 'react';
import resim1 from './asset/laptop.jpg';
import './App.css';

function Commerce(){
    const [adet,setAdet]=useState(0);

    const adetArt=()=>{
        setAdet(adet+1);
    }

    const adetDüş=()=>{
        setAdet(adet-1);
    }




    return(
        <div className='container'>
            <img src={resim1} alt="" className='resim'/>
            <h1>Oyun Bilgisayari</h1>
            <p>Sizi yari yolda birakmayacak efsanevi oyuncularin vazgecilmezi</p>
            <h5>Adet:{adet}</h5>
            <button onClick={adetArt}>+</button>
            <button onClick={adetDüş}>-</button>
        </div>
    )

}
export default Commerce;