import React, { useEffect, useState } from "react";

function LoginAPI(props) {
    const [urlToLogin, setUrlToLogin] = useState('')



    useEffect(() => {
        if (props.APIDetailsLogin.user.length > 0) {
            let formData = new FormData()
            formData.append('username', props.APIDetailsLogin.user)
            formData.append('password', props.APIDetailsLogin.pass)
            const url = 'https://www.upkasia.com/?rest_route=/simple-jwt-login/v1/auth' //ใส่ลิงก์ที่ได้จาก wordpress ตามในวิดีโอนี้ https://youtu.be/aGLUaDaa4ko?t=2768 เวลา 46:08
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data['success'] == true) {
                        console.log(data)
                        localStorage.setItem('jwt', data['data']['jwt'])
                        setUrlToLogin(`https://www.upkasia.com/?rest_route=/simple-jwt-login/v1/autologin&jwt=${data['data']['jwt']}`) //ใส่ลิงก์ที่ได้จาก wordpress ตามในวิดีโอนี้ https://youtu.be/aGLUaDaa4ko?t=2815 เวลา 46:55
                    }
                    else {
                        console.log(data)
                        props.setServerMessage(data['data']['message'])
                    }
                })
        }

    }, [props.APIDetailsLogin])

    useEffect(() => {
        if (urlToLogin.length > 0) {
            fetch(urlToLogin, {
                method: 'GET'
            })
                .then((response) => {
                    if (response.status == '200') {
                        props.setIsLoggedIn(true)
                        props.setUsername(props.APIDetailsLogin.user)
                        window.location.replace('https://ceedyyy.github.io/production-portfolio/') //ใส่ลิงก์หน้าหลัก ตามในวิดีโอนี้ https://youtu.be/aGLUaDaa4ko?t=2830 เวลา 47:10
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

export default LoginAPI