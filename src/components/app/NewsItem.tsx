import './NewsItem.scss'
import { Link } from 'react-router-dom'
const NewsItem: React.FC<any> = (props) => {
  const { id, hint, title, images } = props
  return (
    <div className="news-item">
      <Link to={`/details/${id}`}>
        <div className="content">
          <h4 className="title">{title}</h4>
          <p className="author">{hint}</p>
        </div>
        <div className="img-container">
          <img src={images[0]} />
        </div>
      </Link>
    </div>
  )
}
export default NewsItem
