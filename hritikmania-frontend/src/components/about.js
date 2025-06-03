import React from 'react'

export default function about() {
    return (
        <div>
            <div style={{ backgroundImage: `url(${'hrabout.jpg'})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='contactpage'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h1 className='alert bg-danger text-center text-light mt-1'>ABOUT HRITIK ROSHAN</h1>
                            <div className='about p-2'>
                                <span style={{ fontFamily: 'bodono MT',fontSize:'20px' }}>
                                    Hrithik Roshan born 10 January 1974 is an Indian actor who works in Hindi cinema. He has portrayed a variety of characters and is known for his dancing skills. One of the highest-paid actors in India, he has won many awards, including six Filmfare Awards, of which four were for Best Actor. Starting from 2012, he has appeared in Forbes India's Celebrity 100 several times based on his income and popularity.
                                </span> <br />
                                <div>
                                    <ul>
                                    <li>Born : 10 January 1974 (age 49) Bombay, Maharashtra, india </li>

                                    <li>Occupation :	Actor </li>
                                    <li>Years active :	1980–present </li>
                                    <li>Spouse :	Sussanne Khan (m. 2000; div. 2014) </li>
                                    <li>Children :	2 </li>
                                    <li>Parent : Rakesh Roshan (father) </li>
                                    <li>Awards :	<a href="https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Hrithik_Roshan">View Full list</a> </li>
                                    <li>Upcomming Movie : <a href="https://www.imdb.com/title/tt27425164/">War 2</a>(2025) </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
