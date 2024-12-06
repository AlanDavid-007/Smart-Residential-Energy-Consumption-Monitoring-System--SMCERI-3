// Dashboard.jsx
import React from "react";
import "../styles/_consumptionHistory.scss";
import { Routes, Route, Link } from "react-router-dom"; // Import Routes and Route components
import '../scripts/default.js'; // Import JS functionality

const Dashboard = () => {
  return (
    <section className="section dashboard mt-3">
      <div className="pagetitle">
        <h1>Consumption History</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>

      <div className="row">
        {/* Left side columns */}
        <div className="col-lg-8">
          <div className="row">
            {/* Reports */}
            <div className="col-12">
              <div className="card">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li><a className="dropdown-item" href="#">Today</a></li>
                    <li><a className="dropdown-item" href="#">This Month</a></li>
                    <li><a className="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Reports <span>/Today</span></h5>
                  {/* Line Chart */}
                  <div id="reportsChart" />
                  {/* End Line Chart */}
                </div>
              </div>
            </div>{/* End Reports */}
            {/* Recent Sales */}
            <div className="col-12">
              <div className="card recent-sales overflow-auto">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li><a className="dropdown-item" href="#">Today</a></li>
                    <li><a className="dropdown-item" href="#">This Month</a></li>
                    <li><a className="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Recent Sales <span>| Today</span></h5>
                  <table className="table table-borderless datatable">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"><a href="#">#2457</a></th>
                        <td>Brandon Jacob</td>
                        <td><a href="#" className="text-primary">At praesentium minu</a></td>
                        <td>$64</td>
                        <td><span className="badge bg-success">Approved</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#">#2147</a></th>
                        <td>Bridie Kessler</td>
                        <td><a href="#" className="text-primary">Blanditiis dolor omnis similique</a></td>
                        <td>$47</td>
                        <td><span className="badge bg-warning">Pending</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#">#2049</a></th>
                        <td>Ashleigh Langosh</td>
                        <td><a href="#" className="text-primary">At recusandae consectetur</a></td>
                        <td>$147</td>
                        <td><span className="badge bg-success">Approved</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#">#2644</a></th>
                        <td>Angus Grady</td>
                        <td><a href="#" className="text-primar">Ut voluptatem id earum et</a></td>
                        <td>$67</td>
                        <td><span className="badge bg-danger">Rejected</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#">#2644</a></th>
                        <td>Raheem Lehner</td>
                        <td><a href="#" className="text-primary">Sunt similique distinctio</a></td>
                        <td>$165</td>
                        <td><span className="badge bg-success">Approved</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>{/* End Recent Sales */}
          </div>
        </div>{/* End Left side columns */}
        {/* Right side columns */}
        <div className="col-lg-4">
          {/* Recent Activity */}
          <div className="card">
            <div className="filter">
              <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>
                <li><a className="dropdown-item" href="#">Today</a></li>
                <li><a className="dropdown-item" href="#">This Month</a></li>
                <li><a className="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Recent Activity <span>| Today</span></h5>
              <div className="activity">
                <div className="activity-item d-flex">
                  <div className="activite-label">32 min</div>
                  <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                  <div className="activity-content">
                    Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
                  </div>
                </div>{/* End activity item*/}
                <div className="activity-item d-flex">
                  <div className="activite-label">56 min</div>
                  <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
                  <div className="activity-content">
                    Voluptatem blanditiis blanditiis eveniet
                  </div>
                </div>{/* End activity item*/}
                <div className="activity-item d-flex">
                  <div className="activite-label">2 hrs</div>
                  <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
                  <div className="activity-content">
                    Voluptates corrupti molestias voluptatem
                  </div>
                </div>{/* End activity item*/}
                <div className="activity-item d-flex">
                  <div className="activite-label">1 day</div>
                  <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
                  <div className="activity-content">
                    Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
                  </div>
                </div>{/* End activity item*/}
                <div className="activity-item d-flex">
                  <div className="activite-label">2 days</div>
                  <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
                  <div className="activity-content">
                    Est sit eum reiciendis exercitationem
                  </div>
                </div>{/* End activity item*/}
                <div className="activity-item d-flex">
                  <div className="activite-label">4 weeks</div>
                  <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                  <div className="activity-content">
                    Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                  </div>
                </div>{/* End activity item*/}
              </div>
            </div>
          </div>{/* End Recent Activity */}
        </div>{/* End Right side columns */}
      </div>
    </section>
  );
};

export default Dashboard;
