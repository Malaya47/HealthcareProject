import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const FilterSection = () => {
  const [isSortArrowIcon, setIsSortArrowIcon] = useState(true);
  const [isSpecialityArrowIcon, setIsSpecialityArrowIcon] = useState(true);
  const [isConsultationTypeArrowIcon, setIsConsultationTypeArrowIcon] =
    useState(true);

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const toggleCollapse = (e) => {
    const target = e.currentTarget.getAttribute("data-bs-target");

    if (target === "#sortSection") {
      setIsSortArrowIcon(!isSortArrowIcon);
    } else if (target === "#specialitySection") {
      setIsSpecialityArrowIcon(!isSpecialityArrowIcon);
    } else if (target === "#consultationTypeSection") {
      setIsConsultationTypeArrowIcon(!isConsultationTypeArrowIcon);
    }
  };

  // Experience change handler One
  const experienceChangeHandlerOne = (e) => {
    if (e.target.checked === true) {
      setIsChecked1(true);
      setIsChecked2(false);
    }
  };

  // Experience change handler Two
  const experienceChangeHandlerTwo = (e) => {
    if (e.target.checked === true) {
      setIsChecked2(true);
      setIsChecked1(false);
    }
  };
  return (
    <>
      {/* LEFT -> Filters Section */}
      <div className="col-md-3">
        <section>
          {/* Sort section */}
          <section className="bg-body-secondary">
            <div className="d-flex justify-content-between">
              <label>Sort</label>
              <button
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sortSection"
                aria-expanded="false"
                aria-controls="sortSection"
                className="btn btn-link"
                onClick={toggleCollapse}
              >
                <FontAwesomeIcon
                  icon={isSortArrowIcon ? faAngleDown : faAngleUp}
                  size="2xs"
                />
              </button>
            </div>

            <div className="collapse show" id="sortSection">
              <label htmlFor="lowToHigh">
                <input
                  id="lowToHigh"
                  className="me-2"
                  type="checkbox"
                  onChange={experienceChangeHandlerOne}
                  checked={isChecked1}
                />
                Experience: Low to High
              </label>
              <label htmlFor="highToLow">
                <input
                  id="highToLow"
                  className="me-2"
                  type="checkbox"
                  onChange={experienceChangeHandlerTwo}
                  checked={isChecked2}
                />
                Experience: High to Low
                <br />
              </label>
            </div>
          </section>

          {/* Speciality section */}
          <section className="mt-3 bg-body-secondary">
            <div className="d-flex justify-content-between">
              <p>Speciality</p>
              <button
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#specialitySection"
                aria-expanded="false"
                aria-controls="specialitySection"
                className="btn btn-link"
                onClick={toggleCollapse}
              >
                <FontAwesomeIcon
                  icon={isSpecialityArrowIcon ? faAngleDown : faAngleUp}
                  size="2xs"
                  id="specialityBtn"
                />
              </button>
            </div>
            <section className="collapse show" id="specialitySection">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="Cardilogy"
                />
                <label className="form-check-label" htmlFor="Cardilogy">
                  Cardilogy
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="Neurology"
                />
                <label className="form-check-label" htmlFor="Neurology">
                  Neurology
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="Pediatrics"
                />
                <label className="form-check-label" htmlFor="Pediatrics">
                  Pediatrics
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="Oncology"
                />
                <label className="form-check-label" htmlFor="Oncology">
                  Oncology
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="Dermatology"
                />
                <label className="form-check-label" htmlFor="Dermatology">
                  Dermatology
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="Gastroenterology"
                />
                <label className="form-check-label" htmlFor="Gastroenterology">
                  Gastroenterology
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="Gynecology"
                />
                <label className="form-check-label" htmlFor="Gynecology">
                  Gynecology
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="Urology"
                />
                <label className="form-check-label" htmlFor="Urology">
                  Urology
                </label>
              </div>
            </section>
          </section>

          {/*    Consultation type Section*/}
          <section className="mt-3 bg-body-secondary">
            <div className="d-flex justify-content-between">
              <p>Consultation Type</p>
              <button
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#consultationTypeSection"
                aria-expanded="false"
                aria-controls="consultationTypeSection"
                className="btn btn-link"
                onClick={toggleCollapse}
              >
                <FontAwesomeIcon
                  icon={isConsultationTypeArrowIcon ? faAngleDown : faAngleUp}
                  size="2xs"
                />
              </button>
            </div>
            <section className="collapse show" id="consultationTypeSection">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="InHospitalConsultation"
                />
                <label
                  className="form-check-label"
                  htmlFor="InHospitalConsultation"
                >
                  In-Hospital Consultation
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="VideoConsultation"
                />
                <label className="form-check-label" htmlFor="VideoConsultation">
                  Video Consultation
                </label>
              </div>
            </section>
          </section>

          {/* Gender type section */}
        </section>
      </div>
    </>
  );
};

export default FilterSection;
