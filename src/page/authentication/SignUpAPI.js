import React, { useEffect, useState } from "react";

function SignUpAPI(props) {
    const [urlToLogin, setUrlToLogin] = useState('')

    useEffect(() => {
        if (props.APIDetailsSignUp.user.length > 0) {
            let formData = new FormData()
            formData.append('user', props.APIDetailsSignUp.user)
            formData.append('email', props.APIDetailsSignUp.email)
            formData.append('pass', props.APIDetailsSignUp.pass)

            const url = 'https://www.upkasia.com/en/' //ใส่ลิงก์ที่เป็นที่อยู่ของ server side script ตามในวิดีโอนี้ https://youtu.be/aGLUaDaa4ko?t=1208 เวลา 20:10
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then((response) => response.json()) //json
                .then((data) => {
                    if (data['success']===true){
                        localStorage.setItem('jwt', data['data']['jwt'])
                        setUrlToLogin(`https://www.upkasia.com/?rest_route=/simple-jwt-login/v1/autologin&jwt=${data['data']['jwt']}`) //ใส่ลิงก์ที่ได้จาก wordpress ตามในวิดีโอนี้ https://youtu.be/aGLUaDaa4ko?t=1525 เวลา 25:25
                        console.log(data)
                        console.log(data['data']['jwt'])
                    }
                    else{
                        console.log(data)
                        console.log(data['data']['message'])
                        props.setServerMessage(data['data']['message'])
                    }
                })
        }
    }, [props.APIDetailsSignUp])

    useEffect(() => {
        if (urlToLogin.length > 0) {
            fetch(urlToLogin, {
                method: 'GET'
            })
                .then((response) => {
                    if (response.status == '200') {
                        props.setIsLoggedIn(true)
                        props.setUsername(props.APIDetailsSignUp.user)
                        window.location.replace('https://ceedyyy.github.io/production-portfolio/') //ใส่ลิงก์ตามในวิดีโอนี้ https://youtu.be/aGLUaDaa4ko?t=1986 เวลา 33:06
                    }
                    else {
                        console.log('error')
                    }
                })
        }

    }, [urlToLogin])

    return (
        <>
        </>
    )

}

export default SignUpAPI