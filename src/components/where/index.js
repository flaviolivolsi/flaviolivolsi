import React from "react";
import moment from "moment";
import _ from "lodash";
import "./index.scss";

const trips = [
  {
    name: "Berlin",
    dates: [moment("2019-07-25"), moment("2019-07-30")],
    picture:
      "https://content.api.news/v3/images/bin/13571ce51862600ed9b874a1d098fd39?width=1280"
  },
  {
    name: "Milan",
    dates: [moment("2019-07-14"), moment("2019-07-25")],
    picture:
      "http://www.agency11.es/wp-content/uploads/2018/12/milan-duomo-1-fullsize__1280x720.jpg"
  },
  {
    name: "Berlin",
    dates: [moment("2019-07-09"), moment("2019-07-14")],
    picture:
      "https://content.api.news/v3/images/bin/13571ce51862600ed9b874a1d098fd39?width=1280"
  },
  {
    name: "Naples",
    dates: [moment("2019-07-04"), moment("2019-07-09")],
    picture:
      "https://s3-eu-west-1.amazonaws.com/uploads.services.internations.org/files/2018/11/03144747/moving-to-Naples.jpg"
  },
  {
    name: "Budapest",
    dates: [moment("2019-07-01"), moment("2019-07-04")],
    picture: "https://i.ytimg.com/vi/ppyzJFjmzT8/maxresdefault.jpg"
  },
  {
    name: "Malta",
    dates: [moment("2019-06-25"), moment("2019-07-01")],
    picture:
      "https://media.gq.com/photos/5bc4b85c6f8daa7dae417db4/16:9/w_1280,c_limit/travel-guide-gq-malta.jpg"
  },
  {
    name: "Milan",
    dates: [moment("2019-06-12"), moment("2019-06-25")],
    picture:
      "http://www.agency11.es/wp-content/uploads/2018/12/milan-duomo-1-fullsize__1280x720.jpg"
  },
  {
    name: "Berlin",
    dates: [moment("2019-06-09"), moment("2019-06-12")],
    picture:
      "https://content.api.news/v3/images/bin/13571ce51862600ed9b874a1d098fd39?width=1280"
  },
  {
    name: "Milan",
    dates: [moment("2019-06-04"), moment("2019-06-09")],
    picture:
      "http://www.agency11.es/wp-content/uploads/2018/12/milan-duomo-1-fullsize__1280x720.jpg"
  },
  {
    name: "Barcelona",
    dates: [moment("2019-05-27"), moment("2019-06-04")],
    picture:
      "https://media.architecturaldigest.com/photos/5817c28fca98fd04309ae421/16:9/w_1280,c_limit/sagrada-familia-01.jpg"
  },
  {
    name: "Berlin",
    dates: [moment("2019-05-16"), moment("2019-05-27")],
    picture:
      "https://content.api.news/v3/images/bin/13571ce51862600ed9b874a1d098fd39?width=1280"
  }
];

const upcomingTrips = () => {
  let upcoming = _.filter(trips, trip => moment().isBefore(trip.dates[1]));

  upcoming.sort((a, b) => {
    return a.dates[0].format("x") - b.dates[0].format("x");
  });

  return upcoming;
};

const pastTrips = () => {
  let past = _.filter(trips, trip => moment().isAfter(trip.dates[1]));

  past.sort((a, b) => {
    return b.dates[0].format("x") - a.dates[0].format("x");
  });

  return past;
};

const showCard = (trip, i) => (
  <div className="card" key={i}>
    <div className="card-image">
      <figure className="image is-16by9">
        <img src={trip.picture} alt={trip.name} />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4 has-text-white-ter">{trip.name}</p>
        </div>
      </div>

      <div className="content">
        From {moment(trip.dates[0]).format("LL")} to{" "}
        {moment(trip.dates[1]).format("LL")}
      </div>
    </div>
  </div>
);

const Where = () => (
  <section className="where section">
    <div className="container">
      <h1 className="is-size-2 has-text-centered">Where am I?</h1>

      <div className="columns">
        <div className="column">
          <h3 className="is-size-4 has-text-centered">Upcoming</h3>

          {upcomingTrips().map((trip, i) => showCard(trip, i))}
        </div>

        <div className="column">
          <h3 className="is-size-4 has-text-centered">Past</h3>

          {pastTrips().map((trip, i) => showCard(trip, i))}
        </div>
      </div>
    </div>
  </section>
);

export default Where;
