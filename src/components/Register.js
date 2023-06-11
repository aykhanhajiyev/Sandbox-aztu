
function Register() {

    return (
        <section class="wrapper bg-soft-primary">
            <figure><img src="assets/img/photos/clouds.png" alt="" /></figure>
            <div class="signin container-card w-25 pt-10 pb-10">
                <div class="form-floating mb-4">
                    <input
                        id="textInputExample"
                        type="text"
                        class="form-control"
                        placeholder="Username"
                    />
                    <label for="textInputExample">Ad</label>
                </div>
                <div class="form-floating mb-4">
                    <input
                        id="textInputExample"
                        type="text"
                        class="form-control"
                        placeholder="Username"
                    />
                    <label for="textInputExample">Soyad</label>
                </div>
                <div class="form-floating mb-4">
                    <input
                        id="textInputExample"
                        type="text"
                        class="form-control"
                        placeholder="Finkod"
                    />
                    <label for="textInputExample">Finkod</label>
                </div>
                <div class="form-floating mb-4">
                    <input
                        id="textInputExample"
                        type="text"
                        class="form-control"
                        placeholder="Username"
                    />
                    <label for="textInputExample">İstifadəçi adı</label>
                </div>
                <div class="form-floating mb-4">
                    <input
                        id="textInputExample"
                        type="password"
                        class="form-control position-relative"
                        placeholder="Password"
                    />
                    <label for="textInputExample">Şifrə</label>
                </div>
                <a href="#" class="btn btn-red rounded-pill w-100"
                >Qeydiyyatdan keç</a>
            </div>
        </section>
    );
}

export default Register;