import { Link } from "react-router-dom";

const DoctorsSection = ({ doctors }) => {
  return (
    <>
      {/* RIGHT -> Doctors Section */}
      <div className="col-md-9">
        <div className="row">
          {doctors?.allDoctors?.map((doctor) => (
            <div className="col-md-6 d-flex">
              <div className="card shadow-lg flex-fill">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        src={doctor.profileImage}
                        className="img-fluid rounded mb-3"
                        alt={doctor.name}
                      />
                      <Link to={`/doctor/${doctor.name}`}>View Profile</Link>
                    </div>
                    <div className="col-md-9">
                      <h6>Dr. {doctor.name}</h6>
                      <p className="lh-sm">{doctor.description}</p>
                      <hr />
                      <p>
                        <span className="fw-medium">Experience:</span>{" "}
                        {doctor.experience}+ Years <br />
                        <span className="fw-medium">Gender:</span>{" "}
                        {doctor.gender}
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
          ))}

          {/* <div className="col-md-6 d-flex">
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
                      Interventional Cardiology and Electrophysiology, Max Saket
                    </p>
                    <hr />
                    <p className="lh-sm">
                      Cardiac Sciences, Cardiology, Cardiac
                      Electrophysiology-Pacemaker, Interventional Cardiology
                    </p>
                    <p>
                      <span className="fw-medium">Experience:</span> 32+ Years{" "}
                      <br />
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
                      Group Medical Director - Max Healthcare & Senior Director
                      - Institute of Internal Medicine
                    </p>
                    <hr />
                    <p className="lh-sm">Internal Medicine</p>
                    <p>
                      <span className="fw-medium">Experience:</span> 27+ Years{" "}
                      <br />
                      <span className="fw-medium">Gender:</span> Male
                    </p>

                    <div className="d-flex justify-content-end">
                      <Link
                        to="/"
                        className="btn"
                        style={{
                          backgroundColor: "#003a70",
                          color: "white",
                        }}
                      >
                        Book an Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default DoctorsSection;
