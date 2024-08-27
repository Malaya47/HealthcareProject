import Header from "./Header";
import Footer from "./Footer";

import { useState, useEffect } from "react";
import useFetch from "../useFetch";
import DoctorsSection from "./DoctorsSection";
import FilterSection from "./FilterSection";

const Doctors = () => {
  const { data, loading, error } = useFetch(
    "https://40be6f74-e71b-468a-8562-424bd38c8b93-00-2althmprv821q.sisko.replit.dev/doctors",
  );

  const [allDoctors, setAllDoctors] = useState();

  // Setting doctors into a state Array
  useEffect(() => {
    setAllDoctors(data);
  }, [data]);

  return (
    <section>
      <Header />

      <section className="row">
        {/* LEFT -> Filters Section */}
        <FilterSection />

        {/* RIGHT -> Doctors Section */}
        <DoctorsSection doctors={allDoctors} />
      </section>
      <Footer />
    </section>
  );
};

export default Doctors;
