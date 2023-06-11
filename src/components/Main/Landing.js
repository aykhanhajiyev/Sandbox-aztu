import banks from '../../static/banks.json'

function Landing() {

    const stylesWeOffer = {
        shapeRound: {
            bottom: "-0.5rem",
            right: "-2.2rem",
            zIndex: "0"
        },

        shapeDot: {
            top: '-0.5rem',
            left: '-2.5rem',
            zIndex: '0'
        }
    }
    return (
        <div>
            {/* Banner section */}
            <section class="wrapper bg-gradient-primary">
                <div class="container pt-10 pt-md-14 pb-8 text-center">
                    <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                        <div class="col-lg-7">
                            <figure><img class="w-auto" src="assets/img/illustrations/i2.png" srcset="./assets/img/illustrations/i2.png" alt="" /></figure>
                        </div>
                        <div class="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start">
                            <h1 class="display-1 mb-5 mx-md-n5 mx-lg-0">Bizimlə biznesinizi böyüdün</h1>
                            <p class="lead fs-lg mb-7">Biz müştərilərimizin Müştəri xidmətləri keyfiyyətini artırmağa kömək edirik.</p>
                            <span><a class="btn btn-primary rounded-pill me-2">Elə indi yoxla</a></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* What we offer section */}
            <section class="wrapper bg-light">
                <div class="container pt-14 pt-md-16">
                    <div class="row text-center">
                        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <h2 class="fs-16 text-uppercase text-muted mb-3">Bİz nə edİrİk?</h2>
                            <h3 class="display-4 mb-10 px-xl-10">Təklif etdiyimiz xidmət sizin ehtiyaclarınızı ödəmək üçün xüsusi olaraq hazırlanmışdır.</h3>
                        </div>
                    </div>
                    <div class="position-relative">
                        <div class="shape rounded-circle bg-soft-blue rellax w-16 h-16" data-rellax-speed="1" style={stylesWeOffer.shapeRound}></div>
                        <div class="shape bg-dot primary rellax w-16 h-17" data-rellax-speed="1" style={stylesWeOffer.shapeDot}></div>
                        <div class="row gx-md-5 gy-5 text-center">
                            <div class="col-md-6 col-xl-3">
                                <div class="card shadow-lg">
                                    <div class="card-body">
                                        <img src="assets/img/icons/lineal/search-2.svg" class="icon-svg icon-svg-md text-yellow mb-3" alt="" />
                                        <h4>Araşdırma</h4>
                                        <p class="mb-2">Müştəri cavablarının dəqiqliyinin hər gün gündəlik araşdırılması.</p>
                                        <a href="#" class="hover link-yellow">Daha çox</a>
                                    </div>

                                </div>

                            </div>

                            <div class="col-md-6 col-xl-3">
                                <div class="card shadow-lg">
                                    <div class="card-body">
                                        <img src="assets/img/icons/lineal/browser.svg" class="icon-svg icon-svg-md text-red mb-3" alt="" />
                                        <h4>Asan inteqrasiya</h4>
                                        <p class="mb-2">Çatbotumuzu asanlıqla saytınıza inteqrasiya edə bilərsiniz.</p>
                                        <a href="#" class="hover link-red">Daha çox</a>
                                    </div>

                                </div>

                            </div>

                            <div class="col-md-6 col-xl-3">
                                <div class="card shadow-lg">
                                    <div class="card-body">
                                        <img src="assets/img/icons/lineal/chat-2.svg" class="icon-svg icon-svg-md text-green mb-3" alt="" />
                                        <h4>7/24 xidmət</h4>
                                        <p class="mb-2">Günün istənilən saatı sual soruşub cavabını öyrənə bilərsiniz.</p>
                                        <a href="#" class="hover link-green">Daha çox</a>
                                    </div>

                                </div>

                            </div>

                            <div class="col-md-6 col-xl-3">
                                <div class="card shadow-lg">
                                    <div class="card-body">
                                        <img src="assets/img/icons/lineal/megaphone.svg" class="icon-svg icon-svg-md text-blue mb-3" alt="" />
                                        <h4>Kontent spesifikasıyası</h4>
                                        <p class="mb-2">Öz kontentlərinizi yaradıb müştərilərə həmin kontent formasını göstər bilərsiniz.</p>
                                        <a href="#" class="hover link-blue">Daha çox</a>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section id="testimonials">
                <div class="wrapper bg-gray">
                    <div class="container py-14 py-md-17">
                        <div className='text-center pb-5'>
                            <h2>Partnyorlarımız</h2>
                        </div>
                        <div class="px-lg-12">
                            <div class="row gx-0 gx-md-8 gx-xl-12 gy-8 align-items-center">
                                {
                                    banks.map(
                                        (bank) => (
                                            bank.id != 2 && bank.id != 4 ?
                                                <div class="col-4 col-md-2">
                                                    <figure class="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4"><img srcSet={bank.imageUrl} alt="" /></figure>
                                                </div> : <></>
                                        )
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="wrapper position-relative mt-8 container">
                <div class="row text-center">
                    <div class="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
                        <h2 class="fs-16 text-uppercase text-muted mb-3">Bİzİm komanda</h2>
                        <h3 class="display-4 mb-10 px-md-13 px-lg-4 px-xl-0">Unikal düşünün və yenilikçi olun. Sandbox chatbot ilə fərq yaradın.</h3>
                    </div>
                </div>
                <div class="position-relative">
                    <div class="shape bg-dot blue rellax w-16 h-17" data-rellax-speed="1" style={{ bottom: "0.5rem", right: "-1.7rem", zIndex: 0 }}></div>
                    <div class="shape rounded-circle bg-line red rellax w-16 h-16" data-rellax-speed="1" style={{ top: "0.5rem", left: "-1.7rem", zIndex: 0 }}></div>

                    <div className="row grid-view gy-6 gy-xl-0 mb-3" style={{display: 'flex', justifyContent:'center'}}>
                    <div class="col-md-4 col-xl-4">
                            <div class="card shadow-lg">
                                <div class="card-body">
                                    <img class="rounded-circle w-15 mb-4" src="https://media.licdn.com/dms/image/C4D03AQGEKHTWHlK1hg/profile-displayphoto-shrink_400_400/0/1650316817279?e=1692230400&v=beta&t=TVS1vs1ItqmjTGPhLgzAGiL33tYfsiEmqI9HAyr0uN8" alt="" />
                                    <h4 class="mb-1">Ayxan Hacıyev</h4>
                                    <div class="meta mb-2">Mühəndis</div>
                                    <p class="mb-2"></p>
                                    <nav class="nav social mb-0">
                                        <a href="#"><span class="iconify" data-icon="uil:twitter"></span></a>
                                        <a href="#"><span class="iconify" data-icon="uil:facebook-f"></span></a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row grid-view gy-6 gy-xl-0">
                        <div class="col-md-4 col-xl-3">
                            <div class="card shadow-lg">
                                <div class="card-body">
                                    <img class="rounded-circle w-15 mb-4" src="https://media.licdn.com/dms/image/D5603AQFHPDPmU9AmTg/profile-displayphoto-shrink_400_400/0/1672933638982?e=1692230400&v=beta&t=mQ_kIkw0qBhlCSXG-53YN0oPPQZjATWBAJxEalo0j-A" alt="" />
                                    <h4 class="mb-1">Günel Zəkiyeva</h4>
                                    <div class="meta mb-2">Dizayner</div>
                                    <p class="mb-2"></p>
                                    <nav class="nav social mb-0">
                                        <a href="#"><span class="iconify" data-icon="uil:twitter"></span></a>
                                        <a href="#"><span class="iconify" data-icon="uil:facebook-f"></span></a>
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-xl-3">
                            <div class="card shadow-lg">
                                <div class="card-body">
                                    <img class="rounded-circle w-15 mb-4" src="https://media.licdn.com/dms/image/C5603AQGc_CoFQNSF6A/profile-displayphoto-shrink_400_400/0/1657778039668?e=1692230400&v=beta&t=6QCbe3R3RziIfnFPQNAcBMa2hUAti5_-pj-JPe7oRuU" alt="" />
                                    <h4 class="mb-1">Vüsal İmanov</h4>
                                    <div class="meta mb-2">Proqramçı</div>
                                    <p class="mb-2"></p>
                                    <nav class="nav social mb-0">
                                        <a href="#"><span class="iconify" data-icon="uil:twitter"></span></a>
                                        <a href="#"><span class="iconify" data-icon="uil:facebook-f"></span></a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-3">
                            <div class="card shadow-lg">
                                <div class="card-body">
                                    <img class="rounded-circle w-15 mb-4" src="assets/img/avatars/te4.jpeg" width={100} height={100} style={{objectFit: 'cover'}} srcset="./assets/img/avatars/te4.jpeg" alt="" />
                                    <h4 class="mb-1">Fidan Rəhimova</h4>
                                    <div class="meta mb-2">Kontent menecer</div>
                                    <p class="mb-2"></p>
                                    <nav class="nav social mb-0">
                                        <a href="#"><span class="iconify" data-icon="uil:twitter"></span></a>
                                        <a href="#"><span class="iconify" data-icon="uil:facebook-f"></span></a>
                                    </nav>

                                </div>

                            </div>
                        </div>
                        <div class="col-md-4 col-xl-3">
                            <div class="card shadow-lg">
                                <div class="card-body">
                                    <img class="rounded-circle w-15 mb-4" src="assets/img/avatars/te2.jpeg" width={100} height={100} style={{objectFit: 'cover'}} srcset="./assets/img/avatars/te2.jpeg" alt="" />
                                    <h4 class="mb-1">Şəhran Məmmədxanova</h4>
                                    <div class="meta mb-2">Müəllimə</div>
                                    <p class="mb-2"></p>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Landing;