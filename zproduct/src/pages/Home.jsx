import { Link } from "react-router-dom";

const homeContent = [
  { id: 1, text: "Khám phá các vùng đất mới cùng Stravel" },
  { id: 2, text: "Những chuyến đi đang chờ đợi bạn" },
];
const homeControls = [
  { id: 1, className: "vid-btn active", dataSrc: "../videos/vid-1.mp4" },
  { id: 2, className: "vid-btn", dataSrc: "../videos/vid-2.mp4" },
  { id: 3, className: "vid-btn", dataSrc: "../videos/vid-3.mp4" },
];

function Home(props) {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Mọi chuyến đi đều đáng giá</h3>

        {homeContent.map((homeContent) => {
          return <p key={homeContent.id}>{homeContent.text}</p>;
        })}

        <Link to="/packages" className="btn">
          Khám phá ngay
        </Link>
      </div>
      <div className="controls">
        {homeControls.map((homeControls) => {
          return (
            <span
              key={homeControls.id}
              className={homeControls.className}
              data-src={homeControls.dataSrc}
            ></span>
          );
        })}
      </div>
      <div className="video-container">
        <video
          src="../videos/vid-1.mp4"
          id="video-slider"
          loop
          autoPlay
          muted
        ></video>
      </div>
    </section>
  );
}

export default Home;
