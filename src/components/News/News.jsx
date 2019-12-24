import React from 'react'
import s from './News.module.css';

const News = () => {
    return ( 
        <div>
            <div className={s.news}>
                <div><h2 className={s.newsHeader}>News</h2></div>
                <img className={s.newsImg} src='https://sun7-8.userapi.com/c857324/v857324817/8d7d1/7kZRNUGt5MI.jpg'/>
                <div><button className={s.newsBtn}>More news</button></div>
            </div>
        </div>
    )
}

export default News;