/**
 * Resetting state with a key 
 * Thường gặp key attribute khi rendering lists. Tuy nhiên nõ cũng phục vụ 1 mục đích khác
 * Bạn có thể đặt lại trạng thái của 1 component bằng cách chuyển key khác cho component.
 */

import { ChangeEvent, useState } from "react";

const ResetingStateForm = () => {
    const [version, setVersion] = useState<number>(0)

    const handleReset = () => {
        setVersion(version + 1)
    }

    return (
        <>
            <button onClick={handleReset}>
                Reset
            </button>
            <Form key={version} />
        </>
    )
}

function Form() {
    const [name, setName] = useState<string>('Neil')

    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    return (
        <>
            <input value={name} onChange={handleChangeName} />
            <p>Name: {name}</p>
        </>
    )
}

export default ResetingStateForm