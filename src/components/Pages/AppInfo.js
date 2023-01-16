import React from 'react';

function AppInfo(props) {
    return (
        <div id="appCapsule">
            <div className="section mt-5">
                <div className="section mt-5">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center mb-1">
                            <img src="assets/img/webweb.svg" width="110px" alt="Brand Logo" />
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <h2 className="text-primary">WEBWEB</h2>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <span ng-if="appType == 1" className="text-center" ng-click="toggleID('deviceVersion')">Mobile App v4.1.0</span>
                        </div>
                    </div>
                </div>
                <div className="appFooter" style={{position: "absolute",bottom: "60px",right: 0,left: 0}}>
                    <div className="footer-title">
                        Copyright © WebWeb 2021. All Rights Reserved.
                    </div>
                    <div className="mt-2 mb-3">
                        <a href="https://www.facebook.com/webwebinfotech" className="btn btn-icon btn-sm btn-facebook">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a href="https://www.linkedin.com/company/webwebai" className="btn btn-icon btn-sm btn-linkedin">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a href="https://www.instagram.com/webweb.ai/" className="btn btn-icon btn-sm btn-instagram">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                        <a href="https://www.youtube.com/channel/UCo8Hp68_PmGmYp_jst0WqtQ" className="btn btn-icon btn-sm btn-youtube">
                            <ion-icon name="logo-youtube"></ion-icon>
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=918097578727&text&app_absent=0" className="btn btn-icon btn-sm btn-whatsapp">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=co.webweb.app" className="btn btn-icon btn-sm btn-secondary">
                            <ion-icon name="logo-google-playstore"></ion-icon>
                        </a>
                    </div>
                    <div>A Product of <a href="https://www.skyq.in/">SkyQ Infotech</a></div>
                </div>
            </div>
        </div>
    )
}

export default AppInfo