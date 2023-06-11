function Footer() {
    return (
        <footer class="bg-white">
        <div class="container pt-8 pt-md-10 pb-7">
          <div class="row gx-lg-0 gy-6">
            <div class="col-lg-4">
              <div class="widget">
                <img class="mb-4" src="assets/img/logo-dark.png" srcset="./assets/img/logo-dark.png" alt="" />
                <p class="lead mb-0">Bizə 500-dən çox müştəri etibar edir. Xidmətlərimizdən istifadə edərək onlara qoşulun və biznesinizi inkişaf etdirin.</p>
              </div>
              {/* <!-- /.widget --> */}
            </div>
            {/* <!-- /column --> */}
            <div class="col-lg-3 offset-lg-2">
              <div class="widget">
                <div class="d-flex flex-row">
                  <div>
                    <div class="icon text-primary fs-28 me-4 mt-n1"></div>
                  </div>
                  <div>
                    <h5 class="mb-1">Əlaqə</h5>
                    <p class="mb-0"> info@sandbox.com <br /> +994 12 200 20 20 </p>
                  </div>
                </div>
                {/* <!--/div --> */}
              </div>
              {/* <!-- /.widget --> */}
            </div>
            {/* <!-- /column --> */}
            <div class="col-lg-3">
              <div class="widget">
                <div class="d-flex flex-row">
                  <div>
                    <div class="icon text-primary fs-28 me-4 mt-n1"></div>
                  </div>
                  <div class="align-self-start justify-content-start">
                    <h5 class="mb-1">Ünvan</h5>
                    <address>AzTU, Bakı, Azərbaycan</address>
                  </div>
                </div>
                {/* <!--/div --> */}
              </div>
              {/* <!-- /.widget --> */}
            </div>
            {/* <!-- /column --> */}
          </div>
          {/* <!--/.row --> */}
          <hr class="mt-13 mt-md-14 mb-7" />
          <div class="d-md-flex align-items-center justify-content-between">
            <p class="mb-2 mb-lg-0">© 2023 Sandbox Chat. Azərbaycan Texniki Universiteti üçün hazırlanmışdır.</p>
            {/* <!-- /.social --> */}
          </div>
        </div>
        {/* <!-- /.container --> */}
      </footer> 
    )
}

export default Footer;