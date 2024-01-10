import React from 'react'
import GithubActions from './GithubActions'
import GithubMobile from './GithubMobile'
import Footer from './Footer'
import '../MyStyles/QuoteStyles.css'

export default function Quote() {
  return (

      <div className="quote-body">
            <div className="grid-container">
                {/* WELCOME TITLE  */}
                <div className="grid-item letsbuild">
                    <h1 className="quote-heading"> Let&#x27;s Build from Here</h1>
                    <h4>The world's leading AI-Powered developer Platform.</h4>
                </div>

                <div className="grid-item emptydiv"></div>

                {/* SEARCH AND SIGNUP BUTTON SECTION */}
                <div className="grid-item sign-in-out-quote">
                    <div className="signUp-quote">
                        <input type='search' className="quote-search"></input>
                        <button type="button" className="btn btn-primary quote-btn">Sign Up for GitHub</button>
                    </div>
                </div>

                <div className="grid-item emptydiv"></div>

                {/* CLIENTS SECTION */}
                <div className="grid-item clients-section">
                    <h3>Trusted by the world's leading organizations </h3>
                    <br></br>
                    <div className="clients">
                        <div className="grid-item client-items">
                            <img alt="clients-images" src="3m.svg"></img>
                        </div>
                        <div className="grid-item client-items">
                        <img alt="clients-images" src="kpmg-c249f20c5173.svg"></img>
                        </div>
                        <div className="grid-item client-items">
                        <img alt="clients-images" src="mercedes-fcf97d2d6ec4.svg"></img>
                        </div>
                        <div className="grid-item client-items">
                        <img alt="clients-images" src="sap-96248a56d312.svg"></img>
                        </div>
                        <div className="grid-item client-items">
                        <img alt="clients-images" src="pg-f1f19955c4e4.svg"></img>
                        </div>
                        <div className="grid-item client-items">
                        <img alt="clients-images" src="telus-df0c2109df99.svg"></img>
                        </div>
                    </div>
                </div>

                <div className="grid-item"></div>

                {/* PRODUCTIVITY SECTION */}
                <div className="grid-item">
                    <h3>Productivity</h3>
                </div>

                <div className="grid-item"></div>
                
                {/* AI SECTION */}
                <div className="grid-item">
                    <div className="productivity-grid">
                        <div className="productivity-grid-items">
                            <h3 className="productivity-h3">Accelerate innovation</h3>
                        </div>
                        <div className="productivity-grid-items">
                            <h3 className="productivity-h3-2">Our AI-powered platform increases </h3>
                            <h3 className="productivity-h3-2">the pace of software development.</h3>
                        </div>
                    </div>
                </div>

                <div className="grid-item"></div>
                
                {/* PYTHON CODE IMAGE */}
                <div className="grid-item">
                    <img alt="clients-images" src="source code python.png"  className="python-source-code"></img>
                </div>

                <div className="grid-item"></div>
                 

                 {/* GITHUB COPILOT */}
                <div className="grid-item">
                    <h4 className="github-copilot"><strong>GitHub Copilot</strong> empowers developers to<br></br> complete tasks 55% faster with<br></br> contextualized AI coding assistance across<br></br> workflows.</h4>
                    <br></br>
                    <h4><strong>Explore GitHub Copilot </strong>
                    <button className="explore-github">&#8594;</button>
                    </h4>
                </div>
                
                <div className="grid-item"></div>

                  {/* didyouknow SECTION */}
                  <div className="grid-item didyouknowgrid">
                   <button className="didyouknow">Did you know</button>
                </div>

                <div className="grid-item"></div>
                
                {/* 22% increase SECTION */}
                <div className="grid-item">
                    <div className="productivity-grid">
                        <div className="productivity-grid-items">
                            <h3 className="productivity-h3">22% increase</h3>
                        </div>
                        <div className="productivity-grid-items">
                            <h3 className="github-report-desc">in developer productivity after three</h3>
                            <h3 className="github-report-desc">years with GitHub</h3>
                        </div>
                        <div className="productivity-grid-items"><br></br></div>
                        <div className="productivity-grid-items">
                            <h3 className="github-report-desc">Read the report <button className="explore-github">&#8594;</button> </h3> 
                        </div>
                    </div>
                </div>

                    <div className="grid-item"></div>

                    {/* github actions */}
                
                <div className="grid-item">
                    <GithubActions />
                </div>
                <div className="grid-item"></div>
                <div className="grid-item">
                    <GithubMobile/>
                </div>
                <div className="grid-item"></div>
                <div className="grid-item">
                    <Footer/>
                </div>
        </div>
      </div>
  )
}
