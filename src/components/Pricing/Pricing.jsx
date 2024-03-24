import "./pricing.css";
import data from "../../data.json";

export default function Pricing() {
    
  return (
    <div className="main">
      <div className="pricing-title">
        <h1>Our Pricing</h1>
        <div className="toggle-switch">
          <p>Annually</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <p>Monthly</p>
        </div>
      </div>
      <div className="pricing-container">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`pricing-item${index === 1 ? "-active" : ""}`}
          >
            <h3 className={`title${index === 1 ? "-active" : ""}`}>
              {item.title}
            </h3>
            <h1 className={`price${index === 1 ? "-active" : ""}`}>
              <span className={`currency${index === 1 ? "-active" : ""}`}>
                $
              </span>
              {item.price.monthly}
            </h1>
            <div className={`line${index === 1 ? "-active" : ""}`}></div>
            <h4 className={`detail${index === 1 ? "-active" : ""}`}>
              {item.storage}
            </h4>
            <div className={`line${index === 1 ? "-active" : ""}`}></div>
            <h4 className={`detail${index === 1 ? "-active" : ""}`}>
              {item.users}
            </h4>
            <div className={`line${index === 1 ? "-active" : ""}`}></div>
            <h4 className={`detail${index === 1 ? "-active" : ""}`}>
              {item.send}
            </h4>
            <div className={`line${index === 1 ? "-active" : ""}`}></div>
            <button className={`learn-more${index === 1 ? "-active" : ""}`}>
              LEARN MORE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
