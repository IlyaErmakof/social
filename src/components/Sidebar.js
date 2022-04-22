const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <a href="#">
          <img
            src="http://demo.foxthemes.net/instellohtml/assets/images/logo.png"
            className="logo_inverse"
          />
        </a>
      </div>
      <div className="sidebar-inner">
        <div className="profile-content">
          <div className="profile-icon">
            <img src="http://demo.foxthemes.net/instellohtml/assets/images/avatars/avatar-2.jpg" />
          </div>
          <div className="profile-title">
            <a href="#">Ilya Ermakov</a>
          </div>
          <div className="profile-info">
            <div>
              <span>Post</span>
              <span className="profile-info-count">132</span>
            </div>
            <div>
              <span>Following</span>
              <span className="profile-info-count">1,132</span>
            </div>
            <div>
              <span>Followers</span>
              <span className="profile-info-count">23,222</span>
            </div>
          </div>
        </div>
        <div className="profile-navbar">
          <ul>
            <li>
              <a href="#">My Profile</a>
            </li>
            <li>
              <a href="#">Feed</a>
            </li>
            <li>
              <a href="#">Messages</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </div>
        <div className="profile-logout">
          <ul>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
