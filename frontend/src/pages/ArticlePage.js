import React from 'react';
import { useParams } from 'react-router-dom';

import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
  const params = useParams();
  const name = params.name;

  const article = articleContent.find((article) => article.name === name);

  if (!article) return <h1>Article does not exist!</h1>;

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <>
      <div>
        <h1 className='text-3xl font-bold mb-4'>{article.title}</h1>
        {article.content.map((paragraph, key) => (
          <p className='mb-4' key={key}>
            {paragraph}
          </p>
        ))}
      </div>
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
