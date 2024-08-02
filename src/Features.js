const Features = () => {
  const features = [
    {
      title: "Science Meets Design",
      description:
        "Lorem Ipsum is simply dummy text of the printing and industry.Lorem Ipsum has been the industry's standard.",
      icon: (
        <svg viewBox="0 0 24 24" style={{ height: "2em", width: "2em" }}>
          <path
            fill="#087f5b"
            d="M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L16.53,14.47L14,17L8.93,11.93L5.18,18.43C5.07,18.59 5,18.79 5,19M13,10A1,1 0 0,0 12,11A1,1 0 0,0 13,12A1,1 0 0,0 14,11A1,1 0 0,0 13,10Z"
          ></path>
        </svg>
      ),
      id: 1,
    },
    {
      title: "Maximal Comfort",
      description:
        "Lorem Ipsum is simply dummy text of the printing and industry.Lorem Ipsum has been the industry's standard.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={{ height: "2em", width: "2em" }}
        >
          <title>face-man-shimmer-outline</title>
          <path
            fill="#087f5b"
            d="M19.5 1L18.41 3.41L16 4.5L18.41 5.59L19.5 8L20.6 5.59L23 4.5L20.6 3.41L19.5 1M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 10.53 21.67 9.13 21.1 7.87L19.86 10.57C19.95 11.04 20 11.5 20 12C20 16.43 16.43 20 12 20C7.57 20 4 16.43 4 12C4 11.95 4 11.91 4 11.86A10 10 0 0 0 9.74 6.31C11.61 8.61 14.44 10 17.5 10C17.94 10 18.39 9.97 18.83 9.91L17.96 8C17.81 8 17.65 8 17.5 8C14.68 8 12.1 6.5 10.66 4.12C11.1 4.05 11.54 4 12 4C12.5 4 12.96 4.05 13.42 4.13L16.13 2.91C14.87 2.33 13.47 2 12 2M8.09 5A8 8 0 0 1 4.41 9.5C5.04 7.57 6.37 6 8.09 5M9 11.75A1.25 1.25 0 0 0 7.75 13A1.25 1.25 0 0 0 9 14.25A1.25 1.25 0 0 0 10.25 13A1.25 1.25 0 0 0 9 11.75M15 11.75A1.25 1.25 0 0 0 13.75 13A1.25 1.25 0 0 0 15 14.25A1.25 1.25 0 0 0 16.25 13A1.25 1.25 0 0 0 15 11.75Z"
          />
        </svg>
      ),
      id: 2,
    },
    {
      title: "Ethical and Sustainable",
      description:
        "Lorem Ipsum is simply dummy text of the printing and industry.Lorem Ipsum has been the industry's standard.",
      icon: (
        <svg viewBox="0 0 24 24" style={{ height: "2em", width: "2em" }}>
          <path
            fill="#087f5b"
            d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
          ></path>
        </svg>
      ),
      id: 3,
    },
  ];

  return (
    <div className="section">
      <div>
        <h2>What makes Our Chairs special</h2>
        <div className="features">
          {features.map((feature) => (
            <div className="features-list" key={feature.id}>
              <div>{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
