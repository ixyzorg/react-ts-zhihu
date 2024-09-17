export interface IStory{
  id: string
  title: string
  type: number
  image:string
  hint: string
}
export interface INewsLastest {
  date: string
  stories: IStory[]
  top_stories: IStory[]
}