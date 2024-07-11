import React from "react";
import "../../Style/dashboard.css";
import diagram from "../../assets/dashboardImages/Diagram.png";
import ellipse1 from "../../assets/dashboardImages/Ellipse (1).png";
import ellipse from "../../assets/dashboardImages/Ellipse.png";
import ellipse2 from "../../assets/dashboardImages/Ellipse (2).png";
import disgrams from "../../assets/dashboardImages/Diagrams.png";
import ellipse3 from "../../assets/dashboardImages/Ellipse (3).png";
import ellipse4 from "../../assets/dashboardImages/Ellipse (4).png";
import ellipse5 from "../../assets/dashboardImages/Ellipse (5).png";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dash1">
        <div className="dashOrders">
          <h2>Orders</h2>
          <div className="diagramİmg">
            <img src={diagram} alt="" />
          </div>
          <div className="orders2">
            <img src={ellipse1} alt="" />
            <span>KFC</span>
            <img src={ellipse} alt="" />
            <span>KLM</span>
            <img src={ellipse2} alt="" />
            <span>American Express</span>
          </div>
        </div>
        <div className="dashTotalSalary">
          <h2>Total Salary</h2>
          <p>Years</p>
          <div className="diagramsImages">
            <img src={disgrams} alt="" />
          </div>
          <div className="diagramsMonth">
            <img src={ellipse3} alt="" />
            <span>Feburary</span>
            <img src={ellipse4} alt="" />
            <span>March</span>
            <img src={ellipse5} alt="" />
            <span>April</span>
          </div>
        </div>
      </div>
      <div className="dash2">
        <div className="dashAssignedRisks">
          <h2>Assigned Risks</h2>
          <p>There are no risks assigned</p>
        </div>
        <div className="dashAssignedActionItems">
          <h2>Assigned Action Items</h2>
          <p>There are no action items assigned</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
