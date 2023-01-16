import React, { useEffect } from 'react'
import axios from '../../AxiosConfig'
import { connect } from "react-redux"
import { useLocation } from 'react-router-dom'
import { updateUtilities } from '../../features/utilities/utilitiesSlice'
import { setWebsiteData } from '../../features/websiteData/websiteDataSlice'
import jwt_decode from 'jwt-decode'
import Footer from '../layout/Footer/Footer'
import Header from '../layout/Header/Header'
import Appearance from '../layout/Rightpanel/Appearance'
import Sidebar from '../layout/Sidebar/Sidebar'
import SwitchModal from '../Elements/Modals/SwitchModal'
import ErrorModal from '../Elements/Modals/ErrorModal'
import AddPageModal from '../Elements/Modals/AddPageModal'
import Templates from '../layout/Rightpanel/Templates'
import NavigationOffcanvas from '../layout/Rightpanel/NavigationOffcanvas'
import siteSetting from '../layout/Rightpanel/siteSetting'
import SiteSetting from '../layout/Rightpanel/siteSetting'
import DomainSetting from '../layout/Rightpanel/DomainSetting'
import EmailSetting from '../layout/Rightpanel/EmailSetting'

const Layout = ({
    children,
    updateUtilities,
    setWebsiteData,
    offcanvasTemplateVisible
}) => {
    const search = useLocation().search
    const domain = new URLSearchParams(search).get('domain')
    const token = localStorage.getItem('token')
    const tokenData = (token) ? jwt_decode(token) : false
    let selectedDomain = ""
    let websites = ""
    let domains = ""
    let type = ""
    let category = ""
    if(tokenData.userInfo.RoleID != 'Moderator') {
        selectedDomain = tokenData.SelectedDomain.Domain
        domains = tokenData.Domains
        websites = tokenData.Websites
        type = tokenData.SelectedDomain.Type
        category = ""
    } else {
        selectedDomain = tokenData.SelectedDomain.CategoryName
        // selectedDomain = "Kinder Garden School"
        websites = ""
        domains = ""
        type = "category"
        category = tokenData.Categories
    }

    const fetchWebsiteJSON = () => {
        const webDoc = localStorage.getItem('website')
        const res = (webDoc) ? JSON.parse(atob(webDoc)) : false
        if (res) {
          return res
        } else {
          return false
        }
    }

    const websiteJSON = fetchWebsiteJSON()
    let defaultPage
    console.log(websiteJSON)
    if (websiteJSON) {
        if(tokenData.userInfo.RoleID != 'Moderator') {
            defaultPage = websiteJSON.appearance.properties.defaultPage
        } else {
            defaultPage = websiteJSON.defaultPage
        }
    }

    const fetchWebsiteDocument = () => {
        const token = localStorage.getItem('token')
        const tokenData = (token) ? jwt_decode(token) : false
        if(tokenData.userInfo.RoleID != 'Moderator') {
            const selectedDomain = tokenData.SelectedDomain.Domain
            const domains = tokenData.Domains
            const websites = tokenData.Websites
            const userInfo = tokenData.userInfo
            const defaultPage = tokenData.defaultPage
            const type = tokenData.SelectedDomain.Type
            updateUtilities({
                domains: domains,
                websites: websites,
                userInfo: userInfo,
                defaultPage: defaultPage,
                type: type
            })
            console.log('FETCH WEBSITE',tokenData)
            axios.get('/website/'+ selectedDomain).then(res=>{
                localStorage.setItem('website',btoa(unescape(encodeURIComponent(res.data.data[0].DevJsonBlock))))
                setWebsiteData(JSON.parse(res.data.data[0].DevJsonBlock))
            })
        } else {

        }
    }

    const refreshToken = () => {
        axios.get('/user/refresh').then(res=>{
            fetchWebsiteDocument()
        })
    }

    useEffect(() => {
        if (domain === '' || domain === null || domain === undefined) {
            fetchWebsiteDocument()
        } else {
            refreshToken()
        }
    }, [])

    return (
      <div className="App">
        <div class="">
            <div class="row">
                <div class="col-md-3 col-lg-2">
                    <Sidebar></Sidebar>
                </div>
                <div class="col-12 col-md-9 col-lg-10">
                    <Header selectedDomain={selectedDomain} defaultPage={defaultPage}></Header>
                    {children}
                    <Footer></Footer>
                </div>
            </div>
        </div>
        <SwitchModal selectedDomain={selectedDomain} websites={websites} domains={domains} defaultPage={defaultPage} type={type} category={category}></SwitchModal>
        <Appearance></Appearance>
        <ErrorModal></ErrorModal>
        <AddPageModal></AddPageModal>
        <Templates show={offcanvasTemplateVisible}></Templates>
        <NavigationOffcanvas></NavigationOffcanvas>
        <SiteSetting></SiteSetting>
        <DomainSetting></DomainSetting>
        <EmailSetting></EmailSetting>
      </div>
    )
}

const mapStateToProps = ({ utilities, offcanvas }) => {
    const {
        domains,
        websites,
        userInfo,
        type
    } = utilities
    const {
        isTemplateVisible
      } = offcanvas
    return {
        utilitiesDomains:domains,
        utilitiesWebsites:websites,
        utilitiesUserInfo:userInfo,
        utilitiesType:type,
        offcanvasTemplateVisible: isTemplateVisible,
    }
  }
  
  const mapDispatchToProps = {
    updateUtilities,
    setWebsiteData
  }

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
