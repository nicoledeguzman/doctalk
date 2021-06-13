import Article from './Article.js';

import {Route, Link, Switch} from 'react-router-dom';

const News = () => {
    return(
        <div>
            <div className="news news-left">
                <Link to="/news/covid-19-updates-for-week-of-june-2-2021" className="news news1">
                    <img src="" alt=""/>
                    <div className="heading-and-date">
                        <h3>COVID-19 Updates for the Week of June 7th, 2021</h3>
                        <p>Monday, June 7, 2021</p>
                    </div>
                </Link>
                <Link to="/news/doctalk-finalizes-grant-with-major-cancer-research-pipeline-facit" className="news news2">
                    <img src="" alt=""/>
                    <div className="heading-and-date">
                        <h3>Doctalk® Finalizes Grant with Major Cancer Research Pipeline FACIT</h3>
                        <p>Friday, May 17, 2021</p>   
                    </div>
                </Link>
                <Link to="/news/mason-ross-founder-of-doctalk-discusses-companys-mission" className="news news3">
                    <img src="" alt=""/>
                    <div className="heading-and-date">
                        <h3>Mason Ross, Founder of Doctalk® Discusses Company's Mission</h3>
                        <p>Monday, May 3rd, 2021</p>   
                    </div>
                </Link>
            </div>
            
            <div className="news news-right">
                <Switch>
                    <Route path="/news/covid-19-updates-for-week-of-june-2-2021">
                        <Article number="1" published="Monday, June 7, 2021 10:43AM EDT"/>
                    </Route>
                    <Route path="/news/doctalk-finalizes-grant-with-major-cancer-research-pipeline-facit">
                        <Article number="2" published="Friday, May 17, 2021 8:27AM EDT"/>
                    </Route>
                    <Route path="/news/mason-ross-founder-of-doctalk-discusses-companys-mission">
                        <Article number="3" published="Monday, May 3, 2021 5:39PM EDT"/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default News;