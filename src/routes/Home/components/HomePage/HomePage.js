import React from 'react'
import { Link } from 'react-router'
import { paths } from 'constants'
import classes from './HomePage.scss'
const authWrapperUrl = 'https://github.com/mjrussell/redux-auth-wrapper'
const reactRouterUrl = 'https://github.com/ReactTraining/react-router'

export const Home = () => (
  <div className={classes.container}>
    <div className="flex-row-center">
      <h2>Home Route</h2>
    </div>
    <div className="flex-row-center">
      <div className={classes.section}>
        <h3>Routing</h3>
        <span>
          Redirecting and route protection done using:
          <div>
            <span>
              <a
                href={reactRouterUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                react-router
              </a>
            </span>
            <span> and </span>
            <a href={authWrapperUrl} target="_blank" rel="noopener noreferrer">
              redux-auth-wrapper
            </a>
          </div>
        </span>
      </div>
      <div className={classes.section}>
        <h4>Logged Out</h4>
        <span>
          User is redirected to <pre>/login</pre> if not authenticated and
          trying to vist:
        </span>
        <ul>
          <li>
            <Link to={paths.list}>Projects</Link>
          </li>
          <li>
            <Link to={paths.account}>Account</Link>
          </li>
        </ul>
      </div>
      <div className={classes.section}>
        <h4>Logged In</h4>
        <span>
          User is redirected to <pre>/projects</pre> if authenticated and trying
          to vist:
        </span>
        <ul>
          <li>
            <Link to={paths.login}>Login</Link>
          </li>
          <li>
            <Link to={paths.signup}>Signup</Link>
          </li>
        </ul>
      </div>
      <div className={classes.section}>
        <div>
          <h4>Forms</h4>
          <span>Redirecting and route protection done using:</span>
          <div>
            <span>
              <a
                href={reactRouterUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                redux-form
              </a>
            </span>
          </div>
        </div>
        <span>The following routes use redux-form:</span>
        <Link to={paths.account}>
          <p>Account Page</p>
        </Link>
      </div>
    </div>
    <section>
      <h1>Notes:</h1>
      <div>
        <p>Completing Authentication. Working On Dashboard components.</p>

        <ol>User Roles and Dashboards</ol>
        <li>
          <strong>Admin</strong>
        </li>
        <p>
          manages all user accounts. <br />
          read, update, delete accounts. <br />
          responsible for changing general Teacher accounts to Muse accounts.{' '}
          <br />
          Muse accounts will go through basic background check, and further
          verification of experience/references.<br />
          Manages "student-teacher" student decline/blocking request. Request
          will be "pending" until "accepted" or "denied".
        </p>
        <li>
          <strong>Muse</strong>
        </li>
        <p>
          manages students within their "studio".<br />
          Students can be updated and deleted from studio.<br />
          manage fee's, per student, per session.<br />
          manage calender, accept and decline lesson request.<br />
          update account, biography and intro video. <br />
          verified account, masterclass prioity.
        </p>
        <li>
          <strong>Teacher</strong>
        </li>
        <p>
          manages students within their "studio".<br />
          Students can be updated and deleted from studio.<br />
          manage fee's, per student, per session.<br />
          manages calender<br />
          must teach a student at least once before student can be declined from
          lesson request<br />
        </p>
        <li>
          <strong>Student-Teacher</strong>
        </li>
        <p>updating</p>
        <li>
          <strong>Student</strong>
        </li>
        <p>updating</p>
      </div>
    </section>
  </div>
)

export default Home
