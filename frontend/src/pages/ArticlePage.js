
import { useParams } from 'react-router-dom'
import articleContent from './article-content'

const ArticlePage = () => {
  const params = useParams()
  const name = params.name
  const article = articleContent.find((article) => article.name === name)

  if (!article) {
    return <h1>No Article Found!</h1>
  }
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
    </>
  )
}

export default ArticlePage