import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";

import '../Frequently/Frequently.css';
import Email from '../Hero/Email/Email';


const Frequently = () => {

    const data = [
        {
            question: "What is ENTERTAINMENT?",
            answer: 'ENTERTAINMENT is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.',
            answer2: `You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`
        },
        {
            question: "How much does ENTERTAINMENT cost?",
            answer: 'Watch ENTERTAINMENT on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts.',
            answer2: ` `
        },
        {
            question: " Where can I watch?",
            answer: 'Watch anywhere, anytime. Sign in with your ENTERTAINMENT account to watch instantly on the web at ENTERTAINMENT.com from your personal computer or on any internet-connected device that offers the ENTERTAINMENT app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
            answer2: `You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take ENTERTAINMENT with you anywhere.`
        },
        {
            question: "How do I cancel?",
            answer: 'ENTERTAINMENT is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
            answer2: ` `
        },
        {
            question: "What can I watch on ENTERTAINMENT?",
            answer: 'ENTERTAINMENT has an extensive library of feature films, documentaries, TV shows, anime, award-winning ENTERTAINMENT originals, and more. Watch as much as you want, anytime you want.',
            answer2: ` `
        },
        {
            question: "Is ENTERTAINMENT good for kids?",
            answer: 'The ENTERTAINMENT Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.',
            answer2: `Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`
        }
    ]

    const [selected, setSelected]=useState(null)

    const handleSelect = (i)=>{
        if(selected === i){
            return setSelected(null)
        }
        setSelected(i);
    };

  return (
    <>
        <div className="container_border">
            <h2 className='heading'>Frequently Asked Questions</h2>
            <section className="frequently">
                <div className="item">
                    {
                        data.map((item, i)=> {
                            return(
                                <div className="wrapper" key={i}>

                                    <div className="question" onClick={() => handleSelect(i)}>
                                        <h3>{item.question}</h3>
                                        <FaPlus className={ selected===i ? 'reverse' : ''} />
                                    </div>
                                    <div className={selected===i ? 'answer answer2 show' : 'answer answer2'}>
                                        <p>{item.answer}</p>
                                        <br />
                                        <p>{item.answer2}</p>
                                    </div>
                                    
                                </div>
                            );
                        })
                    }
                </div>
                <div className="heroBanner_Freq">
                    <Email/>
                </div>
            </section>    
        </div>
    </>
  )
}

export default Frequently