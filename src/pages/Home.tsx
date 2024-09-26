import HomeHeader from '@/components/home/HomeHeader'
import NewsItem from '@/components/app/NewsItem'
import SkeletonCustom from '@/components/app/SkeletonCustom'
import { getNewsLatestService, getNewsPreService } from '@/api'
import { Swiper, Divider, DotLoading } from 'antd-mobile'
import { useEffect, useState, useRef } from 'react'
import dayjs from 'dayjs'
import './Home.scss'
import { Link } from 'react-router-dom'
import { type IStory } from '@/types/news'

const Home: React.FC = () => {
  const [today, setToday] = useState<string>(dayjs().format('YYYYMMDD'))
  const [bannerData, setBannerData] = useState<IStory[] | []>([])
  const [newsList, setNewsList] = useState<any>([])
  const loadingRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const getBanererData = async () => {
      const res = await getNewsLatestService()
      setBannerData(res.data.top_stories)
      setToday(res.data.date)
      newsList.push({
        date: res.data.date,
        stories: res.data.stories,
      })
      setNewsList([...newsList])
    }
    getBanererData()
  }, [])
  useEffect(() => {
    const ob = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting) {
        const time = newsList[newsList.length - 1].date
        const { data } = await getNewsPreService(time)
        newsList.push(data)
        setNewsList([...newsList])
      }
    })
    const currentRef = loadingRef.current!
    ob.observe(currentRef)
    return () => {
      ob.unobserve(currentRef)
    }
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
      {newsList.length <= 0 ? (
        <SkeletonCustom />
      ) : (
        newsList.map((item: any, index: any) => {
          const { date, stories } = item
          return (
            <div className="news-item-container" key={date}>
              {index !== 0 && (
                <Divider contentPosition="left">
                  {dayjs(date).format('MM月DD日')}
                </Divider>
              )}
              {stories.map((item: any) => {
                const { id, hint, title, images } = item
                return (
                  <NewsItem
                    key={id}
                    id={id}
                    title={title}
                    hint={hint}
                    images={images}
                  />
                )
              })}
            </div>
          )
        })
      )}
      <div
        className="loading-more"
        ref={loadingRef}
        style={{ display: newsList.length === 0 ? 'none' : 'block' }}
      >
        <DotLoading />
        <span>加载更多</span>
      </div>
      
    </div>
  )
}
export default Home
