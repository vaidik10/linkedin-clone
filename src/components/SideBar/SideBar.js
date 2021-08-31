import { Avatar } from '@material-ui/core'
import React from 'react'
import './sidebar.css'
function SideBar() {
    const recentItem =(topic)=>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p> 
        </div>
    )
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C5616AQFtA3szo0f8Zg/profile-displaybackgroundimage-shrink_200_800/0/1629308832513?e=1634774400&v=beta&t=8CRe0WKPjo1i6oipxbDJOb8b94mmqZ8ejAjexZoT4t0" alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2>Vaidik Sharma</h2>
                <h4>Frontend Web Developer</h4>

            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">
                        4,723
                    </p>
                </div>
                <div className="sidebar__stat">
                <p>Views on post</p>
                    <p className="sidebar_statNumber">
                        6,254
                    </p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('engineering')}
                {recentItem('UI/Ux')}
                {recentItem('Developer')}
            </div>

            
        </div>
    )
}

export default SideBar
