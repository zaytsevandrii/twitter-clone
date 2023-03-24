import React, { useCallback, useState } from "react"

const LoginModal = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = useCallback(async() => {
        try {
            setIsLoading(true)
        } catch (error) {
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    },[])
    return <div>LoginModal</div>
}

export default LoginModal
