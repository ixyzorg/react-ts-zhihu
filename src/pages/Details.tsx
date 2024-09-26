import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import { useParams, useNavigate } from 'react-router-dom'
import { getNewsInfoService, getStoreExtraService } from '@/api'
import {
  LeftOutline,
  LikeOutline,
  MessageOutline,
  StarOutline,
  MoreOutline,
} from 'antd-mobile-icons'
import { Badge } from 'antd-mobile'
import SkeletonCustom from '@/components/app/SkeletonCustom'

import './Details.scss'
const Details: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [info, setInfo] = useState<any>(null)
  const [extra, setExtra] = useState<any>(null)
  let link: HTMLLinkElement
  const handleCss = ({ css }: any) => {
    link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = css[0]
    document.head.appendChild(link)
  }
  const handleImg = ({ images }: any) => {
    const imgDom = document.querySelector('.img-place-holder')!
    if (!imgDom) {
      return
    }
    const img = new Image()
    img.src = images[0]
    img.onload = () => {
      imgDom.appendChild(img)
    }
  }
  useEffect(() => {
    const getNewsInfo = async () => {
      const res = await Promise.all([
        getNewsInfoService(id!),
        getStoreExtraService(id!),
      ])
      const [infoRes, extraRes] = res
      flushSync(() => {
        setInfo(infoRes.data)
        setExtra(extraRes.data)
      })
      handleCss(infoRes.data)
      handleImg(infoRes.data)
    }
    getNewsInfo()
    return () => {
      if (link) {
        document.head.removeChild(link)
      }
    }
  }, [])
  return (
    <div className="details-container">
      {!info ? (
        <SkeletonCustom />
      ) : (
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: info.body }}
        ></div>
      )}
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
            <Badge content={extra ? extra.comments : 0}>
              <MessageOutline />
            </Badge>
          </span>
          <span>
            <Badge content={extra ? extra.popularity : 0}>
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
