import request from '@/utils/request'
import { type INewsLastest } from '@/types/news'
enum BASE_API {
  NewsLatest = '/news_latest',
  NewsPre = '/news_before',
  NewsInfo = '/news_info',
  StoreExtra = '/story_extra',
  Login = '/login',
  PhoneCode = '/phone_code',
}
enum Auth_API {
  CheckLogin = '/check_login',
  UserInfo = '/user_info',
  UserUpdate = '/user_update',
  Store = '/store',
  RemoveStore = '/store_remove',
  StoreList = '/store_list',
}
export const getNewsLatestService = () =>
  request.get<INewsLastest>(BASE_API.NewsLatest)
export const getNewsPreService = (time: string | null) =>
  request.get(BASE_API.NewsPre, { params: { time } })
export const getNewsInfoService = (id: string) =>
  request.get(BASE_API.NewsInfo, { params: { id } })
export const getStoreExtraService = (id: string) =>
  request.get(BASE_API.StoreExtra, { params: { id } })
export const loginService = (phone: string, code: string) => {
  const data = new URLSearchParams()
  data.append('phone', phone)
  data.append('code', code)
  return request.post(BASE_API.Login, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}
export const getPhoneCodeService = (phone: string) => {
  const data = new URLSearchParams()
  data.append('phone', phone)
  return request.post(BASE_API.PhoneCode, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}
export const checkLoginService = () => request.get(Auth_API.CheckLogin)
export const getUserInfoService = () => request.get(Auth_API.UserInfo)
export const updateUserInfoService = (params: any) =>
  request.post(Auth_API.UserUpdate, { params })
export const storeService = (id: string) => request.post(Auth_API.Store, { id })
export const removeStoreService = (id: string) =>
  request.get(Auth_API.RemoveStore, { params: { id } })
export const getStoreListService = () => request.get(Auth_API.StoreList)
