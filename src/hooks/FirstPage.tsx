// first page
import React from 'react'
import { Button, Modal } from 'antd'
import useModal from './useModal' // 1. 引入自定义Hooks

export default function FirstPage() {
    const { visible, handleClick, handleOk, handleCancel } = useModal() // 2. 调用自定义Hooks， 获取状态和事件处理函数
    return (
        <div>
            <h2>First Page</h2>

    <Button onClick={handleClick}>alert 1</Button>

    <Modal
    title="First Page Modal"
    visible={visible}
    onOk={handleOk}
    onCancel={handleCancel}
        >
        <p>First Page Some Contents...</p>
    </Modal>
    </div>
)
}


