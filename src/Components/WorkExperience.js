import { useState } from "react";
import '../Styles/WorkExperience.css'

function WorkExperience(){

    const [workDetails,setWorkDetails]=useState([
        {
            company:"IBM India Pvt. Ltd.",
            role:"Accounting Analyst",
            start:"June 2021",
            end:"Present",
            points:[
                "Preparation and finalization of Financial Statements, facilitating Statutory, Tax and GST audits.",
                "Developed and implemented internal controls to streamline processes and improve accuracy of the Cost Plus, RPT and Segmentation Process.",
                "Analyzed and interpreted financial statements to identify trends and variances in the company’s financial performance.",
                "Collaborated with cross-functional teams to ensure accuracy of financial records and compliance with accounting regulations.",
                "Worked with finance controllers/consolidators, understanding variance drivers, and challenging assumptions/methodologies employed.",
                "Maintained US GAAP and local ledgers, preparing and reviewing related   journal entries and reconciliations."
            ]
        },
        {
            company:"SGC Services Pvt. Ltd.",
            role:"Accounts Executive",
            start:"March 2021",
            end:"May 2021",
            points:[
                "Examine the Internal Control System in the Organization.",
                "Responsible for Preparing monthly BRS and Cash flow statements.",
                "Timely Calculation of TDS & Stock Verification for clients."
            ]
        },
    ])

    const [internDetails,setInternDetails]=useState(
        [
            {
                company:"IBM India Pvt. Ltd.",
                role:"Inter",
                start:"April 2019",
                end:"March 2020",
            },
            {
                company:"YKJ & Associates",
                role:"Articled Assistant",
                start:"December 2018",
                end:"March 2019",
            },
        ]
    )

    return(
        <>
            <main className="experience-main">
                <div className="employment">
                    {/* <h1 className="experience-main-heading">Employment History</h1> */}
                {workDetails.map((item,index)=>(
                    <div className="work-div animate__animated animate__fadeInUp" key={index}> 
                    <div className="work-heading">
                        <h2>{item.company}</h2>
                        <h2>|</h2>
                        <h3>{item.role}</h3>
                    </div>
                    <div className="work-time">
                        {item.start} - {item.end}
                    </div>
                    <div className="work-details">
                        <ul className="work-details-list">
                            {item.points.map((listItem,listIndex)=>(
                                <li key={listIndex}>{listItem}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                ))}
                </div>
                <div className="Internships">
                    <h1 className="experience-main-heading">Internships</h1>
                {internDetails.map((item,index)=>(
                    <div className="work-div animate__animated animate__fadeInUp" key={index}> 
                    <div className="work-heading">
                        <h2>{item.company}</h2>
                        <h2>|</h2>
                        <h3>{item.role}</h3>
                    </div>
                    <div className="work-time">
                        {item.start} - {item.end}
                    </div>
                </div>
                ))}
                </div>
            </main>
        </>
    )
}

export {WorkExperience};