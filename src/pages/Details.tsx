import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getNewsInfoService } from '@/api'
import {
  LeftOutline,
  LikeOutline,
  MessageOutline,
  StarOutline,
  MoreOutline,
} from 'antd-mobile-icons'
import { Badge } from 'antd-mobile'
import './Details.scss'
const Details: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const getNewsInfo = async () => {
      const res = await getNewsInfoService(id!)
      console.log(res)
    }
    getNewsInfo()
  }, [])
  return (
    <div className="details-container">
      <div className="content"></div>
      <div className="tab-bar">
        <div
          className="back"
          onClick={() => {
            navigate(-1)
          }}
        >
          <LeftOutline />
        </div>
        <div className="icons">
          <span>
            <Badge content="1">
              <MessageOutline />
            </Badge>
          </span>
          <span>
            <Badge content="1">
              <LikeOutline />
            </Badge>
          </span>
          <span className="stored">
            <StarOutline />
          </span>
          <span>
            <MoreOutline />
          </span>
        </div>
      </div>
    </div>
  )
}
export default Details
