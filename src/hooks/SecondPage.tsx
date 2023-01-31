// second page
import React from 'react'
import { Button, Modal } from 'antd'
import useModal from './useModal'

export default function SecondPage() {
    const { visible, handleClick, handleOk, handleCancel } = useModal()
    return (
        <div>
            <h2>Second Page</h2>

            <Button onClick={handleClick}>alert 2</Button>

            <Modal
                title="Second Page Modal"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Second Page Some Contents...</p>
            </Modal>
        </div>
    )
}
