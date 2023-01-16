import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'

// import './App.css'
import { BrowserRouter, Routes, Route, Redirect, Navigate, useNavigate } from 'react-router-dom'
// import { setToken } from './features/auth/authSlice'
import Authentication from './components/Pages/Authentication'
// import Layout from './components/Pages/Layout'
// import Build from './components/Pages/Build'
// import Support from './components/Pages/Support'
// import SupportTicketThread from './components/Pages/SupportTickets'
// import SearchDomain from './components/Pages/DomainSearch'
import Load from './components/Pages/Load'
// import AppInfo from './components/Pages/AppInfo'
// import ListEmail from './components/Pages/Email'
// import ListChat from './components/Pages/Chat'
// import Notifications from './components/Pages/Notifications'
// import Story from './components/Elements/Notification/Story'
// import Share from './components/Pages/Share'
// import ReqPayment from './components/Pages/ReqPayment'
// import RecPayment from './components/Pages/RecPayment'
// import Analytics from './components/Pages/Analytics'
// import Forms from './components/Pages/Forms'
// import jwt_decode from 'jwt-decode'
// import Add from './components/Pages/add'
// import Interact from './components/Pages/Interact'
// import MarketPlace from './components/Pages/marketPlace'
// import Boost from './components/Pages/Boost'
// import DNS from './components/Pages/DNS'
// import Home from './components/Pages/Home'
// import DetailPage from './components/Pages/DetailPage'
// import FormDetail from './components/Pages/FormDetail'
// import GetStarted from './components/Pages/GetStarted'
// import Overview from './components/Pages/Overview'
// import Websites from './components/Pages/Websites'
// import Domains from './components/Pages/Domains'
// import EmailsControl from './components/Pages/EmailsControl'
// import Categories from './components/Pages/Categories'
// import DSetting from './components/Pages/DSetting'
// import MediaGallery from './components/Pages/MediaGallery'
// import ChatBot from './components/Pages/ChatBot'
// import SocialMedia from './components/Pages/SocialMedia'
// import Webmail from './components/Pages/Webmail'
// import LiveChat from './components/Pages/LiveChat'
// import AddTemplate from './components/Pages/AddTemplate'
// import BlockDetail from './components/Pages/BlockDetail'

const App = ({
  authToken,
  setToken
}) => {

  // const validateToken = () => {
  //   if (authToken) {
  //     return true
  //   } else {
  //     const token = localStorage.getItem('token')
  //     const tokenData = (token) ? jwt_decode(token) : false
  //     if (tokenData && new Date(tokenData.exp * 1000) > new Date()) {
  //       if (tokenData.userInfo.hasOwnProperty('ID') && tokenData.userInfo.hasOwnProperty('RoleID')) {
  //         setToken({ authToken: token })
  //         return true
  //       } else {
  //         localStorage.clear()
  //         return false
  //       }
  //     } else {
  //       localStorage.clear()
  //       return false
  //     }
  //   }
  // }
  // const userLoggedIn = validateToken()
  // console.log(userLoggedIn)
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Fragment>
            <Route path="*" element={<Auth />} />
            <Route path="/load" element={<SelectWebsiteList />} />
            {/* <Route path="getStarted" element={<GetStartedView />} /> */}
          </Fragment>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Auth() {
  return (
    <div className="App pt-5">
      <Authentication></Authentication>
    </div>
  )
}

// function EditContent() {
//   return (
//     <div className="App">
//       <Layout>
//         <Build></Build>
//       </Layout>
//     </div>
//   )
// }

// function Analytic() {
//   return (
//     <div className="App">
//       <Layout>
//         <Analytics></Analytics>
//       </Layout>
//     </div>
//   )
// }

// function SupportInfo() {
//   return (
//     <div className="App">
//     <Layout>
//       <Support></Support>
//     </Layout>
//     </div>
//   )
// }

// function SupportTicketsThread() {
//   return (
//     <div className="App">
//     <Layout>
//       <SupportTicketThread />
//     </Layout>
//     </div>
//   )
// }

// function RequestPayment() {
//   return (
//     <div className="App">
//       <Layout>
//         <ReqPayment></ReqPayment>
//       </Layout>
//     </div>
//   )
// }

// function ReceivePayment() {
//   return (
//     <div className="App">
//       <Layout>
//         <RecPayment></RecPayment>
//       </Layout>
//     </div>
//   )
// }

// function DomainSearch() {
//   return (
//     <div className="App">
//     <Layout>
//       <SearchDomain></SearchDomain>
//     </Layout>
//     </div>
//   )
// }

function SelectWebsiteList() {
  return (
    <div className="App">
      <Load></Load>
    </div>
  )
}

// function AboutApp() {
//   return (
//     <div className="App">
//       <Layout>
//         <AppInfo></AppInfo>
//       </Layout>
//     </div>
//   )
// }

// function ManageEmailPage() {
//   return (
//     <div className="App">
//     <Layout>
//       <ListEmail></ListEmail>
//     </Layout>
//     </div>
//   )
// }

// function ChatView() {
//   return (
//     <div className="App">
//     <Layout>
//       <ListChat></ListChat>
//     </Layout>
//     </div>
//   )
// }

// function NotificationsList() {
//   return (
//     <div className="App">
//       <Layout>
//         <Notifications></Notifications>
//         <Story></Story>
//       </Layout>
//     </div>
//   )
// }

// function ShareLink() {
//   return (
//     <div className="App">
//       <Layout>
//         <Share></Share>
//       </Layout>
//     </div>
//   )
// }

// function ManageForms() {
//   return (
//     <div className="App">
//     <Layout>
//       <Forms></Forms>
//     </Layout>
//     </div>
//   )
// }

// function CommonAdd() {
//   return (
//     <div className="App">
//     <Layout>
//       <Add></Add>
//     </Layout>
//     </div>
//   )
// }

// function InteractFeed() {
//   return (
//     <div className="App">
//     <Layout>
//       <Interact></Interact>
//     </Layout>
//     </div>
//   )
// }

// function MarketCommunity() {
//   return (
//     <div className="App">
//     <Layout>
//       <MarketPlace></MarketPlace>
//     </Layout>
//     </div>
//   )
// }

// function BoostFeature() {
//   return (
//     <div className="App">
//     <Layout>
//       <Boost></Boost>
//     </Layout>
//     </div>
//   )
// }

// function DnsManage() {
//   return(
//     <div className="App">
//     <Layout>
//       <DNS></DNS>
//     </Layout>
//     </div>
//   )
// }

// function AppHome() {
//   return(
//     <div className="App">
//     <Layout>
//       <Home></Home>
//     </Layout>
//     </div>
//   )
// }

// function DetailPageInfo() {
//   return (
//     <div className="App">
//     <Layout>
//       <DetailPage></DetailPage>
//     </Layout>
//     </div>
//   )
// }

// function DetailPageForm() {
//   return(
//     <div className="App">
//     <Layout>
//       <FormDetail></FormDetail>
//     </Layout>
//     </div>
//   )
// }

// function GetStartedView() {
//   return (
//     <div className="App">
//     {/* <Layout> */}
//       <GetStarted></GetStarted>
//     {/* </Layout> */}
//     </div>
//   )
// }

// function OverviewPage() {
//   return(
//     <div className="App">
//     <Layout>
//       <Overview></Overview>
//     </Layout>
//     </div>
//   )
// }

// function WebsitesPage() {
//   return(
//     <div className="App">
//     <Layout>
//       <Websites></Websites>
//     </Layout>
//     </div>
//   )
// }

// function DomainsPage() {
//   return(
//     <div className="App">
//     <Layout>
//       <Domains></Domains>
//     </Layout>
//     </div>
//   )
// }

// function EmailsControlPage() {
//   return(
//     <div className="App">
//     <Layout>
//       <EmailsControl></EmailsControl>
//     </Layout>
//     </div>
//   )
// }

// function CategoriesPage() {
//   return(
//     <div className="App">
//     <Layout>
//       <Categories></Categories>
//     </Layout>
//     </div>
//   )
// }

// function DomainSettingPage() {
//   return(
//     <div className="App">
//     <Layout>
//       <DSetting></DSetting>
//     </Layout>
//     </div>
//   )
// }

// function MediaGalleryPage() {
//   return(
//     <div className="App">
//     <Layout>
//       <MediaGallery></MediaGallery>
//     </Layout>
//     </div>
//   )
// }

// function ChatBotPage() {
//   return(
//     <div className="App">
//     <Layout>
//       <ChatBot></ChatBot>
//     </Layout>
//     </div>
//   )
// }

// function SocialMediaPage() {
//   return(
//     <div className="App">
//     <Layout>
//       <SocialMedia></SocialMedia>
//     </Layout>
//     </div>
//   )
// }

// function WebmailPage() {
//   return(
//     <div className="App">
//     <Layout>
//       <Webmail></Webmail>
//     </Layout>
//     </div>
//   )
// }

// function LiveChatPage() {
//   return(
//     <div className="App">
//     <Layout>
//       <LiveChat></LiveChat>
//     </Layout>
//     </div>
//   )
// }

// function AddTemplatePage() {
//   return(
//     <div className="App">
//     <Layout>
//       <AddTemplate></AddTemplate>
//     </Layout>
//     </div>
//   )
// }

// function BlockDetailPage() {
//   return(
//     <div className="App">
//     <Layout>
//       <BlockDetail></BlockDetail>
//     </Layout>
//     </div>
//   )
// }

// const mapStateToProps = ({ auth }) => {
//   const {
//     authToken
//   } = auth

//   return {
//     authToken
//   }
// }

// const mapDispatchToProps = {
//   setToken
// }

export default App