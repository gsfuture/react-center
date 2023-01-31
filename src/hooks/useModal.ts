
//page source : https://www.jianshu.com/p/35dde096dd5c

import { useState } from 'react'

export default function useModal() { // 注意自定义Hooks时， 要以use开头
    // 1. 初始化模态框的visible，用来控制显示 或 隐藏
    const [visible, setVisible] = useState(false)
    // 2. 定义逻辑处理函数，这里是控制模态框显示
    function handleClick() {
        setVisible(true)
    }
    // 同上，ok按钮事件
    function handleOk() {
        setVisible(false)
    }
    // 同上， cancel按钮事件
    function handleCancel() {
        setVisible(false)
    }
    // 3. 统一将需要用到的状态和事件处理函数return 出去，供外面组件使用
    return {
        visible,
        handleClick,
        handleOk,
        handleCancel
    }
}
