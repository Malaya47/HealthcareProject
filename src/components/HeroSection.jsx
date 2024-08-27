import doctors from "../images/doctors.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <section>
      {/* IMAGE */}
      <div>
        <img src={doctors} className="img-fluid rounded  py-3" alt="Doctors" />
      </div>
      {/* Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://fakeimg.pl/1500x400/cccccc/b56767?text=FIRST+IMAGE&font=noto"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://fakeimg.pl/1500x400/cccccc/b56767?text=SECOND+IMAGE&font=noto"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://fakeimg.pl/1500x400/cccccc/b56767?text=THIRD+IMAGE&font=noto"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Cards */}
      <div className="container text-center mt-4">
        <div className="row">
          <div className="col-md-6 mb-3">
            <div
              className="card text-bg-light mb-3"
              style={{ maxWidth: "30rem", position: "relative" }}
            >
              <div className="card-body d-flex align-items-center justify-content-between">
                <div>
                  <h2 className="card-title text-start">Book an Appointment</h2>
                  <p className="card-text text-start">
                    Book an appointment with country leading experts in just a
                    few clicks
                  </p>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCalendarCheck}
                    size="3x"
                    style={{ marginLeft: "auto", color: "#003a70" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div
              className="card text-bg-light mb-3"
              style={{ maxWidth: "30rem", position: "relative" }}
            >
              <div className="card-body d-flex align-items-center justify-content-between">
                <div>
                  <h2 className="card-title text-start">Doctors</h2>
                  <p className="card-text text-start">
                    Top doctors for your health. Select doctors by your
                    preference.
                  </p>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faUserDoctor}
                    size="3x"
                    style={{ marginLeft: "auto", color: "#003a70" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
