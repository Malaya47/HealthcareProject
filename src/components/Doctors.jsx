import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Doctors = () => {
  return (
    <section>
      <Header />

      <section className="row">
        {/* LEFT -> Filters Section */}
        <div className="col-md-3">
          <section>
            <p>Filters</p>
          </section>
        </div>

        {/* RIGHT -> Doctors Section */}
        <div className="col-md-9">
          <p>Doctors</p>

          <div className="row">
            <div className="col-md-6 d-flex">
              <div className="card shadow-lg flex-fill">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        src="https://d35oenyzp35321.cloudfront.net/Dr_Balbir_singh_a6647a13b9.jpg"
                        className="img-fluid rounded mb-3"
                        alt="Dr. Balbir Singh"
                      />
                      <Link to="/">View Profile</Link>
                    </div>
                    <div className="col-md-9">
                      <h6>Dr. Balbir Singh</h6>
                      <p className="lh-sm">
                        Group Chairman - Cardiac Sciences, Pan Max & Chief of
                        Interventional Cardiology and Electrophysiology, Max
                        Saket
                      </p>
                      <hr />
                      <p className="lh-sm">
                        Cardiac Sciences, Cardiology, Cardiac
                        Electrophysiology-Pacemaker, Interventional Cardiology
                      </p>
                      <p>
                        <span className="fw-medium">Experience:</span> 32+ Years
                      </p>
                      <p>
                        <span className="fw-medium">Gender:</span> Male
                      </p>
                      <div className="d-flex justify-content-end">
                        <Link
                          to="/"
                          className="btn"
                          style={{ backgroundColor: "#003a70", color: "white" }}
                        >
                          Book an Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="card shadow-lg flex-fill">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        src="https://d35oenyzp35321.cloudfront.net/Dr_Sandeep_Budhiraja_0_1_299a06ed04.jpeg"
                        className="img-fluid rounded mb-3"
                        alt="Dr. Sandeep Budhiraja"
                      />
                      <Link to="/">View Profile</Link>
                    </div>
                    <div className="col-md-9">
                      <h6>Dr. Sandeep Budhiraja</h6>
                      <p className="lh-sm">
                        Group Medical Director - Max Healthcare & Senior
                        Director - Institute of Internal Medicine
                      </p>
                      <hr />
                      <p className="lh-sm">Internal Medicine</p>
                      <p>
                        <span className="fw-medium">Experience:</span> 27+ Years
                      </p>
                      <p>
                        <span className="fw-medium">Gender:</span> Male
                      </p>
                      <div className="d-flex justify-content-end">
                        <Link
                          to="/"
                          className="btn"
                          style={{ backgroundColor: "#003a70", color: "white" }}
                        >
                          Book an Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Doctors;
