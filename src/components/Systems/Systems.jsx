import React from 'react';
import "./Systems.css";
import { gmail_logo, m365_logo, csm_logo, dts_logo, infohub_logo, mooe_logo, procsys_logo, psmis_logo } from "../../assets";

const Systems = () => {
  return (
    <section id="system">
      <div className="wrapper">
        <h2 className="services-header">OUR SERVICES</h2><br></br>
        <p className="services-description"> Empowering education by providing exceptional support and services to teachers, students, staff and the community.</p>
        <div className="content-container">
          <div className="info-content">
            <a href="https://bit.ly/davnoremailrequest" target="_blank" rel="noopener noreferrer"><img src={gmail_logo} width="100" height="100" alt="Gmail Logo" /></a>
            <div className="title">DepEd Email Request</div>
          </div>

          <div className="info-content">
            <a href="https://bit.ly/davnoroffice365request" target="_blank" rel="noopener noreferrer"><img src={m365_logo} width="100" height="100" alt="M365 Logo" /></a>
            <div className="title">DepEd M365 Request</div>
          </div>

          <div className="info-content">
            <a href="https://bit.ly/davnor-mooe" target="_blank" rel="noopener noreferrer"><img src={mooe_logo} width="150" height="100" alt="MOOE Logo" /></a>
            <div className="title">MOOE Utilization<br></br>Status</div>
          </div>

          <div className="info-content">
            <a href="http://192.168.254.201:8001/procsys" target="_blank" rel="noopener noreferrer"><img src={procsys_logo} width="150" height="100" alt="ProcSys Logo" /></a>
            <div className="title">Procurement System</div>
          </div>
        </div>

        <h2 className="title-header">INFORMATION SYSTEMS</h2><br></br>
        <p className="title-description">A comprehensive information system designed to streamline educational processes, support data-driven <br />decision-making, and enhance service delivery.</p>
        <div className="content-container">
          <div className="info-content">
            <a href="https://bit.ly/davnor-csm" target="_blank" rel="noopener noreferrer"><img src={csm_logo} width="150" height="100" alt="CSM Logo" /></a>
            <div className="title">Customer Satisfaction <br></br>Measurement</div>
          </div>

          <div className="info-content">
            <a href="https://dtsdepeddavnor.site/dts/index.php" target="_blank" rel="noopener noreferrer"><img src={dts_logo} width="150" height="100" alt="DTS Logo" /></a>
            <div className="title">Document Tracking <br></br>System</div>
          </div>

          <div className="info-content">
            <a href="http://192.168.254.201:8001/procsys" target="_blank" rel="noopener noreferrer"><img src={infohub_logo} width="150" height="100" alt="ProcSys Logo" /></a>
            <div className="title">Info Hub</div>
          </div>

          <div className="info-content">
            <a href="https://bit.ly/davnor-mooe" target="_blank" rel="noopener noreferrer"><img src={mooe_logo} width="150" height="100" alt="MOOE Logo" /></a>
            <div className="title">MOOE Utilization<br></br>Status</div>
          </div>
        </div>
        <div className="content-container1">
          
          <div className="info-content">
            <a href="http://192.168.254.201:8001/procsys" target="_blank" rel="noopener noreferrer"><img src={procsys_logo} width="150" height="100" alt="ProcSys Logo" /></a>
            <div className="title">Procurement System</div>
          </div>

          <div className="info-content">
            <a href="http://192.168.254.201:8002/psmis" target="_blank" rel="noopener noreferrer"><img src={psmis_logo} width="150" height="100" alt="PSMIS Logo" /></a>
            <div className="title">Property and Supply Management <br></br>Information System</div>
          </div>

          <div className="info-content">
            <a href="https://dtsdepeddavnor.site/dts/index.php" target="_blank" rel="noopener noreferrer"><img src={dts_logo} width="150" height="100" alt="DTS Logo" /></a>
            <div className="title">Document Tracking <br></br>System</div>
          </div>

          <div className="info-content">
            <a href="https://bit.ly/davnor-mooe" target="_blank" rel="noopener noreferrer"><img src={mooe_logo} width="150" height="100" alt="MOOE Logo" /></a>
            <div className="title">MOOE Utilization<br></br>Status</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Systems;