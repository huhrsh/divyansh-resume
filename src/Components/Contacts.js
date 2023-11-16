import { useState } from 'react';
import '../Styles/Contacts.css'

function Contacts(){

    const [contactDetails,setContactDetails]=useState([
        {
            name:"Gmail",
            image:"https://cdn-icons-png.flaticon.com/128/5968/5968534.png",
            link:"mailto:jdivyansh2023@gmail.com"
        },
        {
            name:"Whatsapp",
            image:"https://cdn-icons-png.flaticon.com/128/5968/5968841.png",
            link:"https://wa.me/6366139686"
        },
        {
            name:"Linkedin",
            image:"https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
            link:"www.linkedin.com/in/jaindivyansh/"
        },
    ])

    return(
        <>
            <main className='contacts-main'>
                {contactDetails.map((contacts,index)=>(
                    <div className='contact-div animate__animated animate__fadeInUp' key={index}>
                        <div className='contact-left'>
                            <img src={contacts.image} alt={contacts.name}/>
                        </div>
                        <div className='contact-right'>
                            <a target='_blank' href={contacts.link}>{contacts.name}</a>
                        </div>
                    </div>
                ))}
            </main>
        </>
    )
}

export {Contacts};