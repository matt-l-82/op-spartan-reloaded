import "../../scss/global.scss";
import "../../scss/layout/grid.scss";
import "../../scss/utils/utilities.scss";
import "../../scss/mixins/mixins.scss";

import styles from "./home.module.scss";

//COMPONENTS
import Button from "../../components/button/button.component";

import Swiper from "../../components/swiper/Swiper";

//IMAGES
import Membership from "../../assets/membership.png";
import Kinship from "../../assets/kinship.png";
import Missions from "../../assets/missions.png";
import Support from "../../assets/support.png";
import Events from "../../assets/events.png";
import membershipSupport from "../../assets/cogs-bg.png";

// import required modules
import { Navigation } from "swiper";

//import Directory from "../../components/directory/directory.component";

function Home() {
  // const categories = [
  //   {
  //     id: 1,
  //     title: "Hoodies",
  //     imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  //   },
  //   {
  //     id: 2,
  //     title: "Running T's",
  //     imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  //   },
  //   {
  //     id: 3,
  //     title: "Beanies",
  //     imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  //   },
  //   {
  //     id: 4,
  //     title: "Spoof Coins",
  //     imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  //   },
  //   {
  //     id: 5,
  //     title: "En Route",
  //     imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  //   },
  // ];
  // return <Directory categories={categories} />;
  return (
    <>
      <section className={styles.banner}>
        <div className="container">
          <div className={styles.bannerCopy}>
            <h1 className={`${styles.h1} mb-1`}>op spartan</h1>
            <p className={`${styles.tagline} mb-3`}>
              Standing Together, Side by Side, Always Support, Never Divide
            </p>
            <Button type="button" buttonType="member">
              become a member
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.coreServices}>
        <div className="container">
          <div className="row gap-1 justify-center">
            <div className="col-12-sm col-9-lg col-9-xl">
              <h3>core services</h3>
              <p>How we better serve each other, together</p>
            </div>
            <div className="col-12-sm col-6-lg col-3-xl">
              <div className={styles.coreServicesBadge}>
                <img src={Membership} alt="membership" />
                <h3 className={styles.h3}>Membership</h3>
              </div>
            </div>
          </div>
          <div className="row gap-1 justify-center">
            <div className="col-12-sm col-6-sm col-6-md col-4-lg col-3-xl">
              <div className={styles.coreServicesBadge}>
                <img src={Kinship} alt="kinship" />
                <h3 className={styles.h3}>Kinship</h3>
              </div>
            </div>
            <div className="col-12-sm col-6-sm col-6-md col-4-lg col-3-xl">
              <div className={styles.coreServicesBadge}>
                <img src={Missions} alt="missions" />
                <h3 className={styles.h3}>Missions</h3>
              </div>
            </div>
            <div className="col-12-sm col-6-sm col-6-md col-4-lg col-3-xl">
              <div className={styles.coreServicesBadge}>
                <img src={Support} alt="support" />
                <h3 className={styles.h3}>Support</h3>
              </div>
            </div>
            <div className="col-12-sm col-6-sm col-6-md col-4-lg col-3-xl">
              <div className={styles.coreServicesBadge}>
                <img src={Events} alt="events" />
                <h3 className={styles.h3}>Events</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="community">
        <div className="container">
          <div className={`${styles.count} row pt-3 pb-3`}>
            <div className="col-12-sm col-6-md col-3-lg center">
              <h3 className={`${styles.numbersTitle} mb-2`}>10,395</h3>
              <p className={`${styles.numbersDesc} mb-1`}>
                op spartan
                <br /> members
              </p>
            </div>
            <div className="col-12-sm col-6-md col-3-lg">
              <h3 className={`${styles.numbersTitle} mb-2`}>2,488</h3>
              <p className={`${styles.numbersDesc} mb-1`}>
                Total funds
                <br /> raised
              </p>
            </div>
            <div className="col-12-sm col-6-md col-3-lg">
              <h3 className={`${styles.numbersTitle} mb-2`}>169</h3>
              <p className={`${styles.numbersDesc} mb-1`}>
                funds to
                <br /> community
              </p>
            </div>
            <div className="col-12-sm col-6-md col-3-lg">
              <h3 className={`${styles.numbersTitle} mb-2`}>31</h3>
              <p className={`${styles.numbersDesc} mb-1`}>
                supported
                <br /> missions
              </p>
            </div>
          </div>

          <div className="row gap-2">
            <div
              className={`${styles.communityBgImage} col-12-sm col-8-md col- 6-lg`}
            >
              <h2 className="mb-2">It starts with community</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pharetra, ullamcorper quis adipiscing laoreet accumsan
                scelerisque dui. Penatibus viverra pretium sed phasellus.
                Ultrices consectetur nulla lorem non ac id adipiscing. Purus
                egestas dolor nunc ante sit.
              </p>
            </div>
            <div className="col-12-sm col-6-md">
              <h3>Standing together</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                interdum pellentesque.
              </p>
            </div>
            <div className="col-12-sm col-6-md">
              <h3>Always Support</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                interdum pellentesque.
              </p>
            </div>
            <div className="col-sm-12 col-6-md">
              <h3>Side by Side</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                interdum pellentesque.
              </p>
            </div>
            <div className="col-sm-12 col-6-md">
              <h3>Never Divide</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                interdum pellentesque.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.memberSupport} pt-3 pb-3`}>
        <div className="container">
          <div className={`${styles.memberSupportBG} row gap-3`}>
            <div className="col-6-md">
              <img src={membershipSupport} alt="membership support" />
            </div>
            <div className="col-6-md justify-center">
              <h3 className="mb-3">
                MEMBERS SUPPORTING EACH OTHER TO SUPPORT THEMSELVES
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                sit nam cursus pellentesque pulvinar pharetra aenean sodales.
                Libero nunc molestie euismod iaculis vitae scelerisque. Commodo
                id consectetur dolor aenean dolor auctor. Pulvinar arcu sed
                aliquet cras feugiat neque tristique. Vel cras dolor, morbi
                tellus, odio tellus ut arcu sed. Sed mattis in sollicitudin
                nulla lobortis maecenas. Egestas in lectus suscipit urna ut.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.testimonials} pb-5`}>
        <div className="container">
          <div className="row">
            <div className="col-12-sm">
              <h2 className={`${styles.testimonialsTitle} mb-3`}>
                What Our Members Say
              </h2>
            </div>
            <div className="col-12-sm">
              <Swiper />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
