import { useState } from 'react';
import '../Styles/Education.css'
// import hat from '../Assets/degree.png';

function Education(){

    const [educationDetails, setEducationDetails]=useState([
    {
        institute:"Institute of Chartered Accountants of India",
        course:null,
        year:"March 2021"
    },
    {
        institute:"D.B.R.A.U University, Agra",
        course:"Bachelor of Commerce, Accounting",
        year:"June 2015"
    }
    ]);

    return(
        <>
            <main className="education-main">
                {educationDetails.map((item,index)=>(
                    <div className='education-div animate__animated animate__fadeInUp' key={index}>
                        <div className='edu-left'>
                            {/* <div className='hat-div'>
                                <img src={hat} alt='degree hat' />
                            </div> */}
                            <div className='institute'>
                                {item.institute}
                            </div>
                            {item.course!=null?<div className='course'>
                                {item.course}
                            </div>:<></>}
                        </div>
                        <div className='edu-right'>
                            {item.year}
                        </div>
                    </div>
                ))}
            </main>
        </>
    );
}

export {Education};
