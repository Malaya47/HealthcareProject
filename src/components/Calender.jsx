const Calender = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getNext7DaysWithDates = () => {
    const today = new Date();
    const next7Days = [];

    for (let i = 0; i < 7; i++) {
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i);

      const dayIndex = futureDate.getDay();
      const dayName = days[dayIndex];

      const date = futureDate.getDate();

      next7Days.push({
        day: dayName,
        date: date,
      });
    }

    return next7Days;
  };

  console.log(getNext7DaysWithDates());

  return (
    <>
      <section>
        <div class="container mt-5">
          <div
            id="dateCarousel"
            class="carousel slide"
            data-bs-interval="false"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="d-flex">
                  <div class="date-item p-2">
                    01 <br /> Jan
                  </div>
                  <div class="date-item p-2">
                    02 <br /> Jan
                  </div>
                  <div class="date-item p-2">
                    03 <br /> Jan
                  </div>
                  <div class="date-item p-2">
                    04 <br /> Jan
                  </div>
                  <div class="date-item p-2">
                    05 <br /> Jan
                  </div>
                  <div class="date-item p-2">
                    06 <br /> Jan
                  </div>
                  <div class="date-item p-2">
                    07 <br /> Jan
                  </div>
                  <div class="date-item p-2">
                    08 <br /> Jan
                  </div>
                  <div class="date-item p-2">
                    09 <br /> Jan
                  </div>
                  <div class="date-item p-2">
                    10 <br /> Jan
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-flex">
                  <div class="date-item p-2">
                    11 <br /> Jan
                  </div>
                  <div class="date-item p-2">
                    12 <br /> Jan
                  </div>
                  <div class="date-item p-2">
                    13 <br /> Jan
                  </div>
                  <div class="date-item p-2">
                    14 <br /> Jan
                  </div>
                  <div class="date-item p-2">
                    15 <br /> Jan
                  </div>
                </div>
              </div>
              {/* Add more carousel items as needed  */}
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#dateCarousel"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="bg-dark custom-control-prev">Prev</span>
            </button>

            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#dateCarousel"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="bg-dark custom-control-next">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calender;
