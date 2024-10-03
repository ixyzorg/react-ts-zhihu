import NavBarCustom from '@/components/app/NavBarCustom'
import { useState } from 'react'
import { Form, Input, Button } from 'antd-mobile'
import { getPhoneCodeService, loginService } from '@/api'
import { Toast } from 'antd-mobile'
import { setToken } from '@/store/module/userSlice'
import { useDispatch } from 'react-redux'
import _ from 'lodash'
import './Login.scss'
const Login: React.FC = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  let num = 5
  const [buttonText, setButtonText] = useState('发送验证码')
  const couterDown = () => {
    setButtonText(`${num}秒后重新发送`)
    const timer = setInterval(() => {
      num--
      setButtonText(`${num}秒后重新发送`)
      if (num === 0) {
        setButtonText('发送验证码')
        clearInterval(timer)
      }
    }, 1000)
  }
  const checkPhone = (_: any, value: any) => {
    if (!/^1[3456789]\d{9}$/.test(value)) {
      return Promise.reject('手机号格式不正确')
    } else {
      return Promise.resolve()
    }
  }
  const checkCode = (_: any, value: any) => {
    if (value?.length !== 6) {
      return Promise.reject('验证码长度为6位')
    } else {
      return Promise.resolve()
    }
  }
  const sendCode = async () => {
    await form.validateFields(['phone'])
    getPhoneCodeService(form.getFieldValue('phone'))
    Toast.show({
      content: '验证码发送成功',
      icon: 'success',
    })
    couterDown()
  }
  const submit = async () => {
    const res = await loginService(
      form.getFieldValue('phone'),
      form.getFieldValue('code')
    )
    if (res?.data?.code !== 0) {
      Toast.show({
        content: '验证码不匹配',
        icon: 'fail',
      })
      form.resetFields(['code'])
      return
    }
    dispatch(setToken(res?.data?.token))
    console.log('登陆')
  }
  return (
    <div className="login-container">
      <NavBarCustom>登陆/注册</NavBarCustom>
      <Form
        form={form}
        onFinish={_.debounce(submit, 300)}
        layout="horizontal"
        footer={
          <Button block type="submit" color="primary" size="middle">
            提 交
          </Button>
        }
      >
        <Form.Item
          label="手机号"
          name="phone"
          rules={[{ validator: checkPhone }]}
        >
          <Input placeholder="请输入手机号" />
        </Form.Item>
        <Form.Item
          label="验证码"
          name="code"
          rules={[{ validator: checkCode }]}
          extra={
            <Button
              color="primary"
              size="small"
              onClick={sendCode}
              disabled={buttonText !== '发送验证码'}
            >
              {buttonText}
            </Button>
          }
        >
          <Input placeholder="请输入验证码" />
        </Form.Item>
      </Form>
    </div>
  )
}
export default Login
