import React, { useEffect } from 'react'
// import axios from '../../AxiosConfig'
// import { connect } from 'react-redux'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { updateUtilities } from '../../features/utilities/utilitiesSlice'
// import {
//   setWebsiteData,
//   setBlockRules,
//   setInfoData
// } from '../../features/websiteData/websiteDataSlice'
// import jwt_decode from 'jwt-decode'
import SwitchImage from '../images/loading-animate.svg'
// import { counter } from '@fortawesome/fontawesome-svg-core'

const Load = ({
  authToken,
  updateUtilities,
  setWebsiteData,
  setBlockRules,
  setInfoData
}) => {
  // let navigate = useNavigate()
  // const search = useLocation().search
  // const domain = new URLSearchParams(search).get('domain')
  // console.log(domain)
  // const type = new URLSearchParams(search).get('type')
  // const token = localStorage.getItem('token')
  // const tokenData = token ? jwt_decode(token) : false
  // console.log(tokenData)
  // let selectedDomain = ""
  // let aliasDomain = ""
  // let selectedCategoryID = ""

  // if(tokenData.hasOwnProperty("userInfo")) {
  //   if(tokenData.userInfo.RoleID !== 'Moderator') {
  //     selectedDomain = tokenData.SelectedDomain.Domain
  //     console.log(tokenData.SelectedDomain)
  //     aliasDomain = tokenData.SelectedDomain.AliasDomain
  //   } else {
  //     selectedDomain = tokenData.SelectedDomain.CategoryName
  //     selectedCategoryID = tokenData.SelectedDomain.ID
  //     // selectedDomain = "Kinder Garden School"
  //     // selectedCategoryID = "48"
  //   }
  // } else {
  //   console.log("else");
  //   localStorage.clear()
  //   navigate('/getStarted')
  // }

  // const getFieldRules = () => {
  //   return axios.get('/block/rules').then(res => {
  //     setBlockRules({ blockRules: res.data.data })
  //   })
  // }

  // const getInfoData = () => {
  //   return axios.get('/info').then(res => {
  //     if (res.data.message === 'Success') {
  //       const fonts = res.data.data.fonts
  //       const templates = res.data.data.templates
  //       const cropperConfig = res.data.data.cropperConfig
  //       setInfoData({
  //         fonts: fonts,
  //         templates: templates,
  //         cropperConfig: cropperConfig
  //       })
  //     }
  //   })
  // }

  // // const websiteJSON = fetchWebsiteJSON()
  // // console.log(websiteJSON)
  // // const activePage = websiteJSON.appearance.properties.defaultPage
  // // console.log(activePage)

  // const fetchWebsiteDocument = () => {
  //   getFieldRules()
  //   let token
  //   token = authToken ? authToken : localStorage.getItem('token')
  //   const tokenData = token ? jwt_decode(token) : false
  //   console.log(tokenData)
  //   if(tokenData.hasOwnProperty("userInfo")) {
  //     if(tokenData.userInfo.RoleID != 'Moderator') {
  //       const selectedDomain = tokenData.SelectedDomain.Domain
  //       const domains = tokenData.Domains
  //       const websites = tokenData.Websites
  //       const userInfo = tokenData.userInfo
  //       const type = tokenData.SelectedDomain.Type
  //       console.log(selectedDomain)
  //       updateUtilities({
  //         domains: domains,
  //         websites: websites,
  //         userInfo: userInfo,
  //         type: type
  //       })
  //       console.log('FETCH WEBSITE', tokenData)
  //       setTimeout(() => {
  //         axios.get('/website/' + selectedDomain).then(res => {
  //           if (res.status === 200) {
  //             if (res.data.message === 'Success') {
  //               if (tokenData.SelectedDomain.Type === 'website') {
  //                 localStorage.setItem(
  //                   'website',
  //                   btoa(
  //                     unescape(encodeURIComponent(res.data.data[0].DevJsonBlock))
  //                   )
  //                 )
  //                 console.log(
  //                   'SET JSON STORE',
  //                   JSON.parse(res.data.data[0].DevJsonBlock),
  //                   setWebsiteData
  //                 )
  //                 setWebsiteData(JSON.parse(res.data.data[0].DevJsonBlock))

  //                 const navigateTo = JSON.parse(res.data.data[0].DevJsonBlock)

  //                 navigate(
  //                   '/build?url=' + navigateTo.appearance.properties.defaultPage
  //                 )
  //               } else if (tokenData.SelectedDomain.Type === 'domain') {
  //                 localStorage.clear('website')
  //                 navigate('/build')
  //               } else {
  //                 navigate('/')
  //               }
  //             } else if (res.data.message === 'Unathorized Access') {
  //               console.log('ELSE')
  //               navigate('/')
  //             }
  //           } else {
  //             console.log('STATUS CODE ELSE')
  //             navigate('/')
  //           }
  //         })
  //       }, 10000)
  //     } else {
  //       const token = localStorage.getItem('token')
  //       const tokenData = (token) ? jwt_decode(token) : false
  //       console.log(tokenData)
  //       const roleID = tokenData.userInfo.RoleID
  //       selectedCategoryID = tokenData.SelectedDomain.ID
  //       setTimeout(() => {
  //         axios.get('/website/category/' + selectedCategoryID).then(res => {
  //           if (res.status === 200) {
  //             if (res.data.message === 'Success') {
  //               console.log(res.data.data)
  //               localStorage.setItem('category', btoa(unescape(encodeURIComponent(JSON.stringify(res.data.data)))))
  //               console.log(selectedCategoryID)
  //               axios.get('/page/smartPages/' + selectedCategoryID).then(response => {
  //                 console.log(response)
  //                 let categoryPages = []
  //                 let categoryPagesID = []
  //                 if(response.data.data.length == 0) {
  //                 } else {
  //                   console.log(response.data.data)
  //                   localStorage.setItem('CategoryPages', btoa(unescape(encodeURIComponent(JSON.stringify(response.data.data)))))
  //                   for (let i = 0; i < response.data.data.length; i++) {
  //                     console.log(response.data.data[i])
  //                     categoryPages[response.data.data[i].PageID] = JSON.parse(response.data.data[i].StructureConfig)
  //                     categoryPagesID[response.data.data[i].PageID] = response.data.data[i].ID
  //                   }
  //                 }
  //                 console.log(categoryPages)
                       
  //                 const navigateTo = JSON.parse(res.data.data.StructureConfig)

  //                 console.log(navigateTo)

  //                 const defaultPage = navigateTo.defaultPage

  //                 let categoryPageJson = {}
  //                 console.log(categoryPages)

  //                 for (const key in categoryPages) {
  //                   console.log(key)
  //                   if (categoryPages[key]['appearance']['pages']['SM_PAGE1']['url'] === defaultPage) {
  //                     categoryPageJson = btoa(unescape(encodeURIComponent(JSON.stringify(categoryPages[key]))))
  //                     console.log(categoryPageJson)
  //                     localStorage.setItem('website', categoryPageJson)
  //                     localStorage.setItem('selectedPageID', categoryPagesID[key])
  //                     setWebsiteData(categoryPages[key])
  //                     navigate(
  //                       '/build?url=' + navigateTo.defaultPage
  //                     )
  //                     break
  //                   }
  //                 }
  //               })
  //             } else if (res.data.message === 'Unathorized Access') {
  //               console.log('ELSE')
  //               navigate('/')
  //             }
  //           } else {
  //             console.log('STATUS CODE ELSE')
  //             navigate('/')
  //           }
  //         })
  //       }, 10000)
  //     }
  //   } else {
  //     localStorage.clear()
  //     navigate('/getStarted')
  //   }
  // }

  // const refreshToken = () => {
  //   axios.get('/user/refresh?domain=' + domain + '&type=' + type).then(res => {
  //     console.log('Refresh Token')
  //     localStorage.setItem('token', res.data.data)
  //     fetchWebsiteDocument()
  //   })
  // }

  // useEffect(() => {
  //   if (authToken)
  //     if (domain === '' || domain === null || domain === undefined) {
  //       fetchWebsiteDocument()
  //     } else {
  //       refreshToken()
  //     }
  //   else {
  //     navigate('/')
  //   }
  // }, [])

  // useEffect(() => {
  //   getInfoData()
  // }, [domain])

  return (
    <div id="appCapsule" class="pt-5">
      <div
        class="error-page"
        style={{ padding: '0px', maxWidth: 'initial', display: 'none' }}
      >
        <div class="icon-box text-danger">
          <ion-icon name="trash-outline"></ion-icon>
        </div>
        <h1 class="title">Deleted</h1>
        <div class="text mb-5">
          Your website
          <br /> <span class="text-primary">DOMAIN NAME</span> <br />
          is deleted successfully !!
        </div>
        <div class="fixed-footer">
          <div class="row">
            <div class="col-12">
              <a href="#!" class="btn btn-primary btn-lg btn-block">
                Switch Website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="error-page" style={{ padding: '0px', maxWidth: 'initial' }}>
        <div class="icon-box text-danger">
          <img
            src={SwitchImage}
            alt="Brand"
            width="100%"
            style={{ maxWidth: '550px' }}
          />
        </div>
        <button class="btn btn-light btn-lg rounded mb-1" disabled>
          <span
            class="spinner-grow spinner-grow-sm me-05"
            role="status"
            aria-hidden="true"
          ></span>{' '}
          Loading...
        </button>
        {/* {domain !== '' && <h3>{domain}</h3>} */}
        {/* {aliasDomain === '' && 
          <h3>{selectedDomain}</h3>
        }
        {aliasDomain !== '' && 
          <h3>{aliasDomain}</h3>
        } */}
      </div>
    </div>
  )
}

// const mapStateToProps = ({ utilities, auth, websiteData }) => {
//   const { domains, websites, userInfo, type } = utilities
//   const { authToken } = auth
//   const { blockRules, fonts, templates, cropperConfig } = websiteData

//   return {
//     authToken,
//     utilitiesDomains: domains,
//     utilitiesWebsites: websites,
//     utilitiesUserInfo: userInfo,
//     utilitiesType: type,
//     blockRules,
//     fonts,
//     templates,
//     cropperConfig
//   }
// }

// const mapDispatchToProps = {
//   updateUtilities,
//   setWebsiteData,
//   setBlockRules,
//   setInfoData
// }

export default Load
