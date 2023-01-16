import React, { useEffect, useLayoutEffect } from 'react'
import axios from 'axios'
import config from './config'
import { useNavigate } from 'react-router-dom'

const instance = axios.create({
    // http://localhost/webweb/websiteEngine
    baseURL : config.apiUrl
})

// const HandleNavigatation = () => {
//     let navigate = useNavigate()
//     return navigate('/')
// }

// useEffect(() => {
//     handleNavigatation()
// }, [])

// const jwt = localStorage.getItem('token')
// if (jwt && jwt !== undefined) {
//     instance.defaults.headers.common['Authorization'] = jwt
// }
instance.defaults.headers.common['Content-Type'] = 'application/json'
instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

instance.interceptors.request.use(request => {
    const jwt = localStorage.getItem('token')
    if (jwt && jwt !== undefined) {
        instance.defaults.headers.common['Authorization'] = jwt
    }
    request.headers = { ...request.headers, Authorization: jwt }
    return request
}, (error) => {
    console.log(error)
    return Promise.reject(error)
})

instance.interceptors.response.use(response => {
    // Edit response config
    return response
}, (error) => {
    console.log(error.message)
    if (error.message === 'Request failed with status code 401') {
        console.log(error.message)
    }
    
    return Promise.reject(error)
})

export default instance