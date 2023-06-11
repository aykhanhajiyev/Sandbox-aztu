function Header() {
    return (
      <header className="wrapper bg-soft-primary">
      <nav className="navbar navbar-expand-lg center-nav transparent navbar-light">
        <div className="container flex-lg-row flex-nowrap align-items-center">
          <div className="navbar-brand w-100">
            <a href="/">
              <img src="assets/img/logo-dark.png" srcSet="./assets/img/logo-dark.png " alt="" />
            </a>
          </div>
          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div className="offcanvas-header d-lg-none">
              <h3 className="text-white fs-30 mb-0">Sandbox</h3>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link scroll" href="/">Ana səhifə</a></li>
                <li className="nav-item"><a className="nav-link scroll" href="/#services">Xidmətlərimiz</a></li>
                <li className="nav-item"><a className="nav-link scroll" href="/#partners">Partnyorlar</a></li>
                <li className="nav-item"><a className="nav-link scroll" href="/#aboutus">Haqqımızda</a></li>
                <li className="nav-item"><a className="nav-link scroll" href="/#contact">Əlaqə</a></li>
              </ul>
              {/* <!-- /.navbar-nav --> */}
              <div className="offcanvas-footer d-lg-none">
                <div>
                  <a href="cdn-cgi/l/email-protection.html#dbbdb2a9a8aff5b7baa8af9bbeb6bab2b7f5b8b4b6" className="link-inverse">info@sandbox.az</a>
                  <br/> +994 (12) 000 00 00 <br/>
                  <nav className="nav social social-white mt-4">
                    <a href="#"><i className="uil uil-twitter"></i></a>
                    <a href="#"><i className="uil uil-facebook-f"></i></a>
                    <a href="#"><i className="uil uil-dribbble"></i></a>
                    <a href="#"><i className="uil uil-instagram"></i></a>
                    <a href="#"><i className="uil uil-youtube"></i></a>
                  </nav>
                  {/* <!-- /.social --> */}
                </div>
              </div>
              {/* <!-- /.offcanvas-footer --> */}
            </div>
            {/* <!-- /.offcanvas-body --> */}
          </div>
          {/* <!-- /.navbar-collapse --> */}
          <div className="navbar-other w-100 d-flex ms-auto">
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              <li className="nav-item d-none d-md-block">
                <a href="/signin" className="btn btn-sm btn-primary rounded">Daxil ol</a>
              </li>
              <li className="nav-item d-lg-none">
                <button className="hamburger offcanvas-nav-btn"><span></span></button>
              </li>
            </ul>
            {/* <!-- /.navbar-nav --> */}
          </div>
          {/* <!-- /.navbar-other --> */}
        </div>
        {/* <!-- /.container --> */}
      </nav>
      {/* <!-- /.navbar --> */}
    </header>
    );
  }

  export default Header;