import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials container">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Dhivya</h3>
                  <span>xyzz,India</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                eum sed! Minima repellat similique eveniet odit, quae odio
                debitis ipsa nemo vel ullam incidunt laborum ex sit. Mollitia,
                vel dolorem?Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Fugiat, officia.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>John</h3>
                  <span>xyzz,India</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                eum sed! Minima repellat similique eveniet odit, quae odio
                debitis ipsa nemo vel ullam incidunt laborum ex sit. Mollitia,
                vel dolorem?Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Fugiat, officia.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Suresh</h3>
                  <span>xyzz,India</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                eum sed! Minima repellat similique eveniet odit, quae odio
                debitis ipsa nemo vel ullam incidunt laborum ex sit. Mollitia,
                vel dolorem?Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Fugiat, officia.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Mohameed</h3>
                  <span>xyzz,India</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                eum sed! Minima repellat similique eveniet odit, quae odio
                debitis ipsa nemo vel ullam incidunt laborum ex sit. Mollitia,
                vel dolorem?Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Fugiat, officia.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
