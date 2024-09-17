import { Skeleton } from 'antd-mobile'
const SkeletonCustom: React.FC = () => {
  return (
    <>
      <Skeleton.Title animated />
      <Skeleton.Paragraph lineCount={5} animated />
    </>
  )
}
export default SkeletonCustom
