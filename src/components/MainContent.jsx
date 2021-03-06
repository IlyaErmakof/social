import Profile from "./Profile/Profile";


const  MainContent = () => {
    return (
      <div className="main-content">
        <header>
          <div className="header-inner">
            <div className="left-side">
              <div className="header-search">
                <input type="text" placeholder="Search.."/>
                <div className="icon-search">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="header-link-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                            </svg>
              </div>
              <div className="header-link-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                            </svg>
              </div>
              <div className="header-link-icon">
                <img src="http://demo.foxthemes.net/instellohtml/assets/images/avatars/avatar-2.jpg" />
              </div>
            </div>
          </div>
        </header>
        <div className="content">
          <Profile />
        </div>
      </div>
    );
  }
  
  export default MainContent;
  