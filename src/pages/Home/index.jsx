import ProfilePicture from '../../assets/pp.png'

function Home() {
  return (
    <>
      <div class="container px-5 pb-5">
        <div class="row gx-5 align-items-center">
          <div class="col-xxl-5">

            <div class="text-center text-xxl-start">
              <div class="badge bg-primary text-white mb-4">
                <div class="text-uppercase">Design &middot; Development &middot; Marketing</div>
              </div>
              <div class="fs-3 fw-light text-muted">I can help your business to</div>
              <h1 class="display-3 fw-bolder mb-5"><span class="text-gradient d-inline">Get online and
                grow fast</span></h1>
              <div
                class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                <a class="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                  href="resume.html">Resume</a>
                <a class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                  href="projects.html">Projects</a>
              </div>
            </div>
          </div>
          <div class="col-xxl-7">

            <div class="d-flex justify-content-center mt-5 mt-xxl-0">
              <div class="profile bg-gradient-primary-to-secondary">

                <img class="profile-img" src={ProfilePicture} alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div >
      <section class="bg-light py-5">
        <div class="container px-5">
          <div class="row gx-5 justify-content-center">
            <div class="col-xxl-8">
              <div class="text-center my-5">
                <h2 class="display-5 fw-bolder"><span class="text-gradient d-inline">About Me</span></h2>
                <p class="lead fw-light mb-4">My name is Start Bootstrap and I help brands grow.</p>
                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                  dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque
                  officiis sed rem iure ipsa! Praesentium ratione atque dolorem?</p>
                <div class="d-flex justify-content-center fs-2 gap-4">
                  <a class="text-gradient" target="_blank" href="https://www.linkedin.com/in/yanzarbasha/"><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home