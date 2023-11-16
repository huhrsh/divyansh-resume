import '../Styles/Home.css'
import picture from  '../Assets/Loki.png';
import { useState,useEffect } from 'react';
import {PacmanLoader} from 'react-spinners'

function Home(){

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = picture
        image.onload = () => {
            setImageLoaded(true);
        };
    }, []);

    return (
        <>
        <main className='home-main'>
        {!imageLoaded ? (
                    <div className="home-spinner">
                        <PacmanLoader color="#333" loading={!imageLoaded} size={20} />
                    </div>
                ) : (
                    <>
                        <div className='home-left'>
                <div className='greeting-name'>
                    <h1 className='name' >Divyansh Jain</h1>
                    <h2 className='job'>Chartered Accountant</h2>
                </div>
                <div className='profile'>
                Certified Accountant with 2.5 years of experience in account reconciliations,
streamlining accounts, and financial planning. Possess a comprehensive
understanding of all aspects of accounting and financial planning. Proficient in
financial reporting, auditing, tax planning, and compliance regulations.
Demonstrated ability to optimize financial performance, implement cost-saving
initiatives, and provide sound financial advice
                </div>
            </div>
            <div className='home-right'>
                <div className='photo-frame'>
                    <div className='photo-glass'></div>
                    <img src={picture}  alt='profile'/>
                </div>
            </div>  
                    </>
                )}
            
        </main>
        </>
    )
}

export {Home}
