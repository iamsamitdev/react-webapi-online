/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
const Sidebar = () => {
  return (
    <nav id="sidebar" className="sidebar">
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="index.html">
          <span className="align-middle">Smart Design</span>
        </a>
        <ul className="sidebar-nav">
          <li className="sidebar-header">Pages</li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="index.html">
              <i className="align-middle" data-feather="sliders" />{" "}
              <span className="align-middle">Dashboard</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="pages-profile.html">
              <i className="align-middle" data-feather="user" />{" "}
              <span className="align-middle">Profile</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="pages-settings.html">
              <i className="align-middle" data-feather="settings" />{" "}
              <span className="align-middle">Settings</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="pages-invoice.html">
              <i className="align-middle" data-feather="credit-card" />{" "}
              <span className="align-middle">Invoice</span>
            </a>
          </li>
          <li className="sidebar-item active">
            <a className="sidebar-link" href="pages-blank.html">
              <i className="align-middle" data-feather="book" />{" "}
              <span className="align-middle">Blank</span>
            </a>
          </li>
          <li className="sidebar-header">Tools &amp; Components</li>
          <li className="sidebar-item">
            <a
              data-target="#ui"
              data-toggle="collapse"
              className="sidebar-link collapsed"
            >
              <i className="align-middle" data-feather="briefcase" />{" "}
              <span className="align-middle">UI Elements</span>
            </a>
            <ul
              id="ui"
              className="sidebar-dropdown list-unstyled collapse "
              data-parent="#sidebar"
            >
              <li className="sidebar-item">
                <a className="sidebar-link" href="ui-alerts.html">
                  Alerts
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="ui-buttons.html">
                  Buttons
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="ui-cards.html">
                  Cards
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="ui-general.html">
                  General
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="ui-grid.html">
                  Grid
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="ui-modals.html">
                  Modals
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="ui-typography.html">
                  Typography
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="icons-feather.html">
              <i className="align-middle" data-feather="coffee" />{" "}
              <span className="align-middle">Icons</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              data-target="#forms"
              data-toggle="collapse"
              className="sidebar-link collapsed"
            >
              <i className="align-middle" data-feather="check-circle" />{" "}
              <span className="align-middle">Forms</span>
            </a>
            <ul
              id="forms"
              className="sidebar-dropdown list-unstyled collapse "
              data-parent="#sidebar"
            >
              <li className="sidebar-item">
                <a className="sidebar-link" href="forms-layouts.html">
                  Form Layouts
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="forms-basic-inputs.html">
                  Basic Inputs
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="tables-bootstrap.html">
              <i className="align-middle" data-feather="list" />{" "}
              <span className="align-middle">Tables</span>
            </a>
          </li>
          <li className="sidebar-header">Plugins &amp; Addons</li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="charts-chartjs.html">
              <i className="align-middle" data-feather="bar-chart-2" />{" "}
              <span className="align-middle">Charts</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="maps-google.html">
              <i className="align-middle" data-feather="map" />{" "}
              <span className="align-middle">Maps</span>
            </a>
          </li>
        </ul>
        <div className="sidebar-cta">
          <div className="sidebar-cta-content">
            <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
            <div className="mb-3 text-sm">
              Are you looking for more components? Check out our premium
              version.
            </div>
            <a
              href="https://Smart Design.io/pricing"
              target="_blank"
              className="btn btn-primary btn-block"
            >
              Upgrade to Pro
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
