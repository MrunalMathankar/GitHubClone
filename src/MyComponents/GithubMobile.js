import React from 'react'
import '../MyStyles/GithubMobile.css'

export default function GithubMobile() {
  return (
    <div>
      <div className="githubMobileGrid">
        <div className="github-codespaces">
               <div className="codespaces-desc">
                    <div className="codespaces-desc-txt">
                    <h3><strong>Github Codespaces</strong> offers a complete dev environment in seconds.Code,build,test,and open pull requests from any repo.</h3>
                    </div>
                    <div className="codespaces-link">
                        <a>Check out GitHub Codespaces </a>
                    </div>
               </div>

               <div className="codespaces-img">
                 <img src='codespaces.png' alt="codespaces-img" class="codespace"></img>
               </div>
        </div>

        <div className="github-mobile-img-container">
                <div className="mobile-desc">
                    <div className="mobile-desc-txt">
                    <h3><strong>Github Mobile</strong> fits your projects in your pocket, so you never miss a beat while on the go.</h3>
                    </div>
                    <div className="mobile-link"> 
                        <a>Download Github Mobile </a>
                    </div>
               </div>
               <div className="mobile-img">
                 <img src='Mobile.png' alt="mobile-img" class="mobile"></img>
               </div>
        </div>
      </div>
    </div>
  )
}
