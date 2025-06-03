import React from 'react';

export default function Home() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-sm-7">
            <span
              className="h2 typing-intro"
              style={{ fontFamily: 'Cooper', color: 'red', textShadow: '2px 2px 5px' }}
            >
              WELCOME YOU TO HRITIK ROSHAN HUB...
            </span>

            <div className="p-2 intro mt-5">
              <p className="text-light mt-2" style={{ fontFamily: 'Lucida Sans', fontSize: 21 }}>
                One of the prominent Bollywood personalities of this generation, Hrithik Roshan is said to be the best actor, dancer, television host, and singer. He began his acting as a child artist in his father’s romantic film “Kaho na pyaar hai” which made him very successful and also earned him Filmfare awards. Hrithik Roshan is also referred to as{' '}
                <strong className="h4 text-warning">“Greek God of Bollywood”</strong>. The actor has an impressive physique and has won numerous awards over the years. <br />
                <a
                  href="https://en.wikipedia.org/wiki/Hrithik_Roshan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>More About Hrithik Roshan...</i>
                </a>
              </p>
            </div>

            <h5 className="mt-5 text-warning">
              <u>A thought from Hrithik Roshan:</u>
            </h5>

            <div className="row">
              <div className="col-sm-8">
                <p style={{ fontFamily: 'Tempus Sans ITC', fontSize: '25px', color: 'white' }}>
                  "The only time to take the step towards change is now. Even if they're baby steps, start today! Consistency is important because you must make time to work on your goals. Even if there is little you can do, you must!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
