import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    
    useEffect(() => {
         const performSearch = async () => { 
             const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: searchTerm
                }
            });

            setSearchResults(data.query.search);
         };

         const timeoutId = setTimeout(() => {
            if (searchTerm) {
                performSearch();
            }
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [searchTerm]);

    const renderedResults = searchResults.map((article) => {
        return (
            <div key={article.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${article.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {article.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: article.snippet }}></span>
                </div>                
            </div> 
        );
    });
    
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    )
}

export default Search