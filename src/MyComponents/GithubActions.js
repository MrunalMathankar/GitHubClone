import React from 'react'
import '../MyStyles/GithubActions.css'

export default function GithubActions() {
  return (
    <div>
      <div className="grid-item">
                    <div className="github-actions-section">

                        <div className="action-text">
                            <div className="actions-text-desc">
                                <h3><strong>GitHub Actions</strong> automates your build,</h3>
                                <h3>test, and deployment workflow with</h3>
                                <h3>simple and secure CI/CD.</h3>
                            </div>
                            <div className="action-text-explore-button">
                                <a>Discover GitHub Actions</a>
                            </div>
                        </div>


                        <div className="action-image">
                            <div className="action-upper-div">
                                <h5></h5>
                            </div>
                            <div className="action-lower-div">
                            <img src='githubactions.png' alt='actions-image' className="actions-image"></img>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}
