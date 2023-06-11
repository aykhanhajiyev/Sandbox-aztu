import Bank from "./Bank";
import banks from '../static/banks.json'

function Dashboard() {
  
  return (
    <div className="dashboard">
      <section class="wrapper bg-soft-primary">
        <figure><img src="assets/img/photos/clouds.png" alt="" /></figure>
        <div class="container">
          <div class="catalog container-card pt-10 pb-10">
            <div class="cards d-flex justify-content-between flex-wrap">
              {banks.map((bank) => (
                <Bank key={bank.id} id={bank.id} imageUrl={bank.imageUrl} subtitle={bank.subtitle} />
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;