import HomeHeader from '@/components/home/HomeHeader'
import { getNewsLatestService } from '@/api'
import { Swiper } from 'antd-mobile'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import './Home.scss'
import { Link } from 'react-router-dom'
import { type IStory } from '@/types/news'
const Home: React.FC = () => {
  const [today, setToday] = useState<string>(dayjs().format('YYYYMMDD'))
  const [bannerData, setBannerData] = useState<IStory[] | []>([])
  useEffect(() => {
    const getBanererData = async () => {
      const res = await getNewsLatestService()
      setBannerData(res.data.top_stories)
      setToday(res.data.date)
    }
    getBanererData()
  }, [])
  return (
    <div className="home-container">
      <HomeHeader today={today}></HomeHeader>
      <div className="swiper-container">
        {bannerData.length > 0 && (
          <Swiper autoplay loop>
            {bannerData.map((item: IStory) => {
              const { id, image, title, hint } = item
              return (
                <Swiper.Item key={id}>
                  <Link to={`/details/${id}`}>
                    <img src={image} />
                    <div className="desc">
                      <h3 className="title">{title}</h3>
                      <p className="author">{hint}</p>
                    </div>
                  </Link>
                </Swiper.Item>
              )
            })}
          </Swiper>
        )}
      </div>
    </div>
  )
}
export default Home
