import { Skeleton } from 'antd-mobile'
import './SkeletonCustom.scss'
const SkeletonCustom: React.FC = () => {
  return (
    <div className='skeleton-custom-container'>
      <Skeleton.Title animated />
      <Skeleton.Paragraph lineCount={5} animated />
    </div>
  )
}
export default SkeletonCustom
