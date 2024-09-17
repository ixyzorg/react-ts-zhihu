import avatatImg from '@/assets/img/avatar.png'
import './HomeHeader.scss'
import { useMemo } from 'react'
interface IHomeHeaderProps {
  today: string
}
const HomeHeader: React.FC<IHomeHeaderProps> = (props) => {
  const { today } = props
  const time = useMemo(() => {
    const [, month, day] = today.match(/^\d{4}(\d{2})(\d{2})$/) || []
    const monthMap = [
      '一',
      '二',
      '三',
      '四',
      '五',
      '六',
      '七',
      '八',
      '九',
      '十',
      '十一',
      '十二',
    ]
    return {
      month: monthMap[Number(month) - 1],
      day,
    }
  }, [today])
  return (
    <div className="home-header">
      <div className="info">
        <div className="time">
          <span>{time.day}</span>
          <span>{time.month}月</span>
        </div>
        <h2 className="title">知乎日报</h2>
      </div>
      <div className="avatar">
        <img src={avatatImg} alt="" />
      </div>
    </div>
  )
}
export default HomeHeader
