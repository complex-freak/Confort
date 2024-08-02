import testimonialImg from "./assets/testmon.jpg";

const Testimonials = () => {
  return (
      <div className="section">
        <div className="testimonial">
          <div className="testimonial-content">
            <h3>"We couldn't do without these chairs anymore"</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and industry.
              Lorem Ipsum has been the industry's standard. Lorem Ipsum is
              simply dummy text of the printing and industry. Lorem Ipsum has
              been the industry's standard.
            </p>
            <p>- Mary and Sarah Johnson</p>
          </div>
          <div className="testimonial-img">
            <img src={testimonialImg} alt="Testimonial-Image" />
          </div>
        </div>
      </div>
  );
};

export default Testimonials;
