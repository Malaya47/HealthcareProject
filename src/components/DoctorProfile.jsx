import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
// import useFetch from "";

const DoctorProfile = () => {
  const paramsObject = useParams();
  // console.log(paramsObject.doctorName);
  const { data, loading, error } = useFetch(
    `https://40be6f74-e71b-468a-8562-424bd38c8b93-00-2althmprv821q.sisko.replit.dev/doctor/${paramsObject.doctorName}`,
  );

  // console.log(data);
  return (
    <>
      <Header />
      <section
        style={{ backgroundColor: "#35B6B4", color: "white" }}
        className="d-flex px-5 py-5"
      >
        <div className="me-5 ms-5">
          <img className="img-fluid rounded" src="https://placehold.co/200" />
        </div>
        <div className="ms-5">
          <h1>{data?.foundDoctor?.name}</h1>
          <p>{data?.foundDoctor?.description}</p>

          <Link>Share Doctor Profile</Link>
        </div>
      </section>

      <section
        style={{ backgroundColor: "#003A70", color: "white" }}
        className="py-4"
      >
        {/* About section */}
        <section className="px-5">
          <h2>About Dr. {data?.foundDoctor?.name}</h2>
          <p className="fs-5">{data?.foundDoctor?.description}</p>
        </section>

        {/* Work Experience */}
        <section className="px-5">
          <h2>Work Experience</h2>

          <ul>
            {data?.foundDoctor.workExperience.map((exp, index) => (
              <li key={index}>{exp}</li>
            ))}
          </ul>
        </section>

        {/* Education section */}
        <section className="px-5">
          <h2>Education & Training</h2>

          <ul>
            {data?.foundDoctor.education.map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
          </ul>

          {/* <ul className="fs-5">
            <li>MBBS, Maulana Azad Medical College, Delhi, 1983</li>
            <li>
              MD, Internal Medicine, Maulana Azad Medical College, Delhi, 1987
            </li>
            <li>
              MD, Internal Medicine, Maulana Azad Medical College, Delhi, 1987 )
            </li>
            <li>
              DM, Cardiology, Govind Ballabh Pant Hospital, New Delhi, 19922
            </li>
            <li>Fellowship, American College of Cardiology, USA, 2005</li>
          </ul> */}
        </section>
      </section>
      <Footer />
    </>
  );
};

export default DoctorProfile;
