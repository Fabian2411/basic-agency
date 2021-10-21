import React from 'react';
import BasicNewsData from '../../data/BasicNews.json';
import './BasicNews.scss';

// sfc
const BasicNews = () => {
    return (
        <div className="basicNews">
            <h2>FEATURED<br />
                NEWS
            </h2>
            {BasicNewsData.map((basicNews, elt) =>
                <div key={elt} className="news">
                    <img src={basicNews.image} alt="" className="bilder" />
                    <div className="bigInfo">
                        <h3>{basicNews.title}</h3>
                        <div className="smallInfo">
                            <p>{basicNews.info}</p>
                            <p>{basicNews.date}</p>
                        </div>
                    </div>
                    <img src={basicNews.arrow} alt="" className="arrow" />
                </div>
            )}
        </div>
    );
}

export default BasicNews;