import React, { useEffect, useState, useRef, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import config from '../../config'
import { connect } from "react-redux"
import axios from 'axios'
import 'react-phone-number-input/style.css'
import PhoneInput, { getCountryCallingCode } from 'react-phone-number-input'
// import AppToast from "../Elements/Notification/AppToast"
// import { showAppToast, hideAppToast } from '../../features/utilities/appToastSlice'
import Countdown, { zeroPad } from 'react-countdown'
import { requestOtp, validateOtp, backToLogin } from "../../features/auth/authSlice"



const Authentication = ({
  // showAppToast,
  // hideAppToast,
  // appToastVisible,
  // appToastMessage,
  // appToastIcon,
  // appToastBackground,
  // appToastPosition,
  requestOtp,
  validateOtp,
  otpRequestSuccess,
  otpRequestError,
  hideSendOtpButton,
  showVerifyOtpForm,
  otpValidateSuccess,
  otpValidateError,
  backToLogin
}) => {
  let navigate = useNavigate()

  const inputRef = useRef(null);
  const emailInputRef = useRef(null)

  const [mobileNumber, setMobileNumber] = useState("")
  const [mobileNumberCC, setMobileNumberCC] = useState("+91")
  // const [resMessage, setResMessage] = useState("")
  const [disableVerifyOtpButton, setDisableVerifyOtpButton] = useState(false)
  // const [logo, setAppLogo] = useState("")
  const [font, setAppFont] = useState("")
  const [color, setAppColor] = useState({})
  // const [sendOtpButton, setSendOtpButton] = useState()
  // const [otpVerification, setOtpVerification] = useState(false)
  const [disableOtp, setDisableOtp] = useState(true)

  useEffect(() => {
    if (otpRequestSuccess) {
      // showAppToast({ toastMessage: 'OTP SENT', background: 'success', timeout: '1000', icon:'checkmark-circle-outline', position: 'toast-center' })
    }
  }, [otpRequestSuccess])

  useEffect(() => {
    if (otpRequestError) {
      // showAppToast({ ytoastMessage: 'Error', background: 'danger', timeout: '1000', icon:'close-circle-outline', position: 'toast-center' })
    }
  }, [otpRequestError])

  useEffect(() => {
    if (otpValidateSuccess) {
      // showAppToast({ toastMessage: 'OTP SENT', background: 'success', timeout: '1000', icon:'checkmark-circle-outline', position: 'toast-center' })
      setDisableVerifyOtpButton(true)
    }
  }, [otpValidateSuccess, setDisableVerifyOtpButton])

  useEffect(() => {
    if (otpValidateError) {
      // showAppToast({ toastMessage: 'Error', background: 'danger', timeout: '1000', icon:'close-circle-outline', position: 'toast-center' })
      setDisableVerifyOtpButton(false)
    }
  }, [otpValidateError, setDisableVerifyOtpButton])

  const handleUserNameValidation = (e) => {
    e.preventDefault()
    // setSendOtpButton(true)
    requestOtp({ mobileNumber: mobileNumber.slice(3) })
  }

  const HandleOtpValidation = (e) => {
    e.preventDefault()
    setDisableVerifyOtpButton(true)
    const otp = e.target.otp.value
    validateOtp({ mobileNumber: mobileNumber.slice(3), otp })
  }

  const [timer, setTimer] = useState(Date.now() + 59999)


  const reSendOtp = (e) => {
    e.preventDefault()
    axios.get(config.apiUrl + '/user/login?mobile='+ mobileNumber).then(res=>{

        if (res.data.message === 'Success') {
          // setResMessage(res.data.data)
          setDisableOtp(true)
          // showAppToast({ toastMessage:'OTP Sent', background: 'success', timeout: '1000', icon:'checkmark-circle-outline', position: 'toast-center' })
          setTimer(Date.now() + 59999)
        } else {
          // showAppToast({ toastMessage:'Something Went Wrong', background: 'danger', timeout: '1000', icon:'close-circle-outline', position: 'toast-center' })
        }
    })
  }

  const handleBackToLogin = () => {
    backToLogin()
  }

  const Renderer = () => {
    setDisableOtp(false)
  }

  const countdownRenderer = ({ minutes, seconds }) => {
    return <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>
  }

  useEffect(() => {
    setTimer(Date.now() + 59999)
  }, [showVerifyOtpForm])

  const countDownTimer = useMemo(() => {
    console.log(timer)
    return <Countdown
    key={timer}
    date={timer}
    onComplete={Renderer}
    renderer={countdownRenderer}
  />
  }, [timer])

  // axios.get(config.apiUrl + '/Ai/readWhitelabelJSON/its.me.in').then(res=>{
  //     console.log(res)
  //     if (res.data.message === 'Success') {
  //       setAppLogo(res.data.data.logo)
  //       localStorage.setItem('AppLogo', res.data.data.logo);
  //       console.log(logo)
  //     } else {
  //       // showAppToast({ toastMessage:'Something Went Wrong', background: 'danger', timeout: '1000', icon:'close-circle-outline', position: 'toast-center' })
  //     }
  // })

  const [showEmailInput, setShowEmailInput] = useState(false)
  const [emailInput, setEmailInput] = useState(false)
  const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(false)

  const handleUserNameInput = (event) => {
    const value = event.target.value
    console.log(value)
    if (value) {
      if (isNaN(value)) {
        setShowEmailInput(true)
        setShowPhoneNumberInput(false)
        setEmailInput(value)
      } else {
        setMobileNumber(`${mobileNumberCC}${value}`)
        setShowEmailInput(false)
        setShowPhoneNumberInput(true)
      }
    } else {
      setShowEmailInput(false)
      setShowPhoneNumberInput(false)
      setEmailInput('')
      setMobileNumber('')
    }
  }

  useEffect(() => {
    if (setShowPhoneNumberInput && inputRef && mobileNumber.length <= 4) {
      inputRef?.current?.focus();
    }
  }, [setShowPhoneNumberInput, mobileNumber])

  useEffect(() => {
    if (showEmailInput && emailInputRef && emailInput.length <= 2) {
      emailInputRef?.current?.focus();
    }
  }, [emailInput, showEmailInput])

  const handlePhoneNumberInput = (number) => {
    console.log(number, mobileNumber, mobileNumberCC)
    const codeLength = mobileNumberCC.length
    if (number) {
      if (number.slice(0, codeLength) === mobileNumberCC) {
        setMobileNumber(number)
      } else {
        setMobileNumber(mobileNumber.replace(mobileNumberCC, number))
      }
    } else {
      console.log('else', number)
      setMobileNumber('')
      setEmailInput('')
      setShowEmailInput(false)
      setShowPhoneNumberInput(false)
    }
  }

  const handleEmailInput = (event) => {
    const value = event.target.value
    if (value) {
      setEmailInput(value)
    } else {
      setShowEmailInput(false)
      setShowPhoneNumberInput(false)
      setEmailInput('')
      setMobileNumber('')
    }
  }

  const handleCountryChange = (event) => {
    const countryCode = getCountryCallingCode(event)
    setMobileNumberCC(`+${getCountryCallingCode(event)}`)
    if (countryCode !== '91') {
      setEmailInput('')
      setShowEmailInput(true)
    } else {
      setShowEmailInput(false)
      setEmailInput('')
    }
  }

  return (
    <div>
      {/* {!showVerifyOtpForm && */}
        <div className="login-form mt-1">
          <div className="section">
            <img
              src="https://webweb.ams3.cdn.digitaloceanspaces.com/allposLogo.svg"
              alt="Brand Logo"
              className="form-image"
            />
          </div>
          <div className="section mt-1">
            <h1>Authentication</h1>
            <h4>login to manage your websites</h4>
          </div>
          <div className="section mt-1 mb-5">
            <form>
            {/* onSubmit={handleUserNameValidation} */}
              <div className="form-group boxed">
                <div className="input-wrapper">
                {
                  showPhoneNumberInput &&
                  <PhoneInput
                    className="form-control phoneInput mt-1"
                    international
                    defaultCountry="IN"
                    value={`${mobileNumber}`}
                    onChange={handlePhoneNumberInput}
                    onCountryChange={handleCountryChange}
                    ref={inputRef}
                    maxLength={15}
                    countryCallingCodeEditable={false}
                  />
                }
                {
                  !showPhoneNumberInput && !showEmailInput &&
                  <input
                    type="tel"
                    className="form-control mt-1"
                    id="number"
                    placeholder="Enter Email OR Mobile Number"
                    maxLength={10}
                    required name="mobileNumber"
                    onChange={handleUserNameInput}
                  />
                }
                {
                  showEmailInput && <input
                  className="form-control mt-1"
                  id="email"
                  placeholder="Enter Email"
                  required
                  name="email"
                  value={emailInput}
                  onChange={handleEmailInput}
                  ref={emailInputRef}
                />
                }
                  <i className="clear-input">
                    <ion-icon name="close-circle"></ion-icon>
                  </i>
                </div>
              </div>
              <div className="form-links mt-2 mb-2 d-flex justify-content-center align-items-center">
                <div className="text-info fw-bold">
                  Dont have Website? <a href="#!">Build Instant Website</a>
                </div>
              </div>
              <div className="divider bg-secondary mb-2"></div>
              <small className="mt-3">
                By logging in, you agree to our{" "}
                <a href="https://webweb.in/terms-conditions">Terms of Use</a> and
                to receive Webweb emails & updates and acknowledge that you read
                our <a href="https://webweb.in/privacy-policy">Privacy Policy</a>
              </small>
              <div className="form-button-group container login-form">
                {hideSendOtpButton
                  ? <button class="btn btn-primary btn-block btn-lg" type="button" disabled>
                      <span class="spinner-border spinner-border-sm me-05" role="status" aria-hidden="true"></span>
                      Authorizing...
                  </button>
                  : <button className="btn btn-primary btn-block btn-lg" type="submit">
                  Send OTP
                </button>
                }
              </div>
            </form>
          </div>
        </div>
      {/* // } */}
      {/* {showVerifyOtpForm &&
        <div>
          <div className="appHeader no-border transparent position-absolute">
            <div className="left">
              <button type="button" class="btn btn-text-secondary btn-sm border-0 headerButton goBack" onClick={handleBackToLogin}><ion-icon name="chevron-back-outline"></ion-icon></button>
            </div>
            <div className="pageTitle"></div>
            <div className="right"></div>
          </div>
          <div className="login-form mt-5">
            <div className="section">
              <h1>Enter OTP</h1>
              <h4>We sent a verification code on your phone</h4>
            </div>
            <div className="section mt-2 mb-5">
              <form onSubmit={HandleOtpValidation}>
                <div className="form-group boxed">
                  <div className="input-wrapper">
                    <input type="text" className="form-control verify-input" id="smscode" placeholder="••••••" maxlength={6} required name="otp"
                    />
                    {countDownTimer}
                  </div>
                </div>
                <div className="form-links mt-2 mb-2 d-flex justify-content-center align-items-center">
                  <div className="d-flex flex-column">
                    <span className="d-flex align-items-center justify-content-center">
                      <ion-icon name="stopwatch-outline"></ion-icon>&nbsp;
                    </span>
                    <button type="button" className="btn btn-outline-primary btn-sm rounded" onClick={reSendOtp} disabled={disableOtp}> Resend OTP </button>
                  </div>
                </div>
                <div className="form-button-group container login-form">
                  <button className="btn btn-primary btn-block btn-lg" disabled={disableVerifyOtpButton}>
                    Verify
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      } */}
      {/* {
        appToastVisible &&
        <AppToast
          message={appToastMessage}
          show={appToastVisible}
          background={appToastBackground}
          icon={appToastIcon}
          position={appToastPosition}
        />
      } */}
    </div>
  );
}

// const mapStateToProps = ({ appToast, auth }) => {
//   const {
//     isVisible,
//     toastMessage,
//     background,
//     icon,
//     position
//   } = appToast

//   const {
//     otpRequestSuccess,
//     otpRequestError,
//     hideSendOtpButton,
//     showVerifyOtpForm,
//     otpValidateSuccess,
//     otpValidateError
//   } = auth

//   return {
//     appToastVisible: isVisible,
//     appToastMessage: toastMessage,
//     appToastBackground: background,
//     appToastIcon: icon,
//     appToastPosition: position,
//     otpRequestSuccess,
//     otpRequestError,
//     hideSendOtpButton,
//     showVerifyOtpForm,
//     otpValidateSuccess,
//     otpValidateError
//   }
// }

// const mapDispatchToProps = {
//   showAppToast,
//   hideAppToast,
//   requestOtp,
//   validateOtp,
//   backToLogin
// }

export default Authentication