import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
    <>
    {articles.map((article, key) => (
        <Link className="decoration-0 text-black pt-4" key={key} to={`/article/${article.name}`}>
            <h3 className='my-4 font-bold text-xl'>{article.title}</h3>
            <p className='pb-8 border-solid border-b-4 border-black' >{article.content[0].substring(0, 150)}...</p>
        </Link>
    ))}
    </>
);

export default ArticlesList;