import React from 'react';
import classes from './HomePage.scss';

export const Home = () => (
  <div className={classes.container}>
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
);

export default Home;
