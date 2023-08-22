import React from "react";
import "../App.css";

function Home() {
  return (
    <div className="container">
      <div className="outer">
        <div className="img1">
          <img src={require("../img/img.jpg")} alt="" />
        </div>
        <div className="text">
          {" "}
          <h3>Akash Thakare</h3>
          Full Stack Developer
        </div>
        <div className="icons">
          <a href="https://instagram.com/the_lost_king_.exe?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
            <i className="fi fi-brands-instagram"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100064798569617&mibextid=ZbWKwL">
            <i className="fi fi-brands-facebook"></i>
          </a>
          <a href="https://wa.me/qr/YR63NBHGTWNEP1">
            <i className="fi fi-brands-whatsapp"></i>
          </a>
          <a href="https://www.snapchat.com/add/a_thakare207890?share_id=8Vj53dqY6nM&locale=en-IN">
            <i className="fi fi-brands-snapchat"></i>
          </a>

          <a href="https://twitter.com/54fcdc2e142f4ec">
            <i className="fi fi-brands-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/thakare-patil-aakash">
            <i className="fi fi-brands-linkedin"></i>
          </a>
          <a href="t.me/akashthakare007">
            <i className="fi fi-brands-telegram"></i>
          </a>

          <a href="https://github.com/AKashT1729">
            <i className="fi fi-brands-github"></i>
          </a>
          <a href="https://discordapp.com/users/514705015709892609">
            <i className="fi fi-brands-discord"></i>
          </a>
        </div>
      </div>

      <div className="bts">
        <a href="https://instagram.com/the_lost_king_.exe?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
          <button className="insta">
            <p>Instagram </p>
            <i className="fi fi-brands-instagram"></i>
          </button>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100064798569617&mibextid=ZbWKwL">
          <button className="fb">
            <p>Facebook</p>
            <i className="fi fi-brands-facebook"></i>
          </button>{" "}
        </a>
        <a href="https://wa.me/qr/YR63NBHGTWNEP1">
          <button className="what-app">
            <p>What's App</p>
            <i className="fi fi-brands-whatsapp"></i>
          </button>
        </a>
        <a href="https://www.snapchat.com/add/a_thakare207890?share_id=8Vj53dqY6nM&locale=en-IN">
          <button className="snapchat">
            <p>Snapchat</p>
            <i className="fi fi-brands-snapchat"></i>
          </button>{" "}
        </a>
        <a href="https://twitter.com/54fcdc2e142f4ec">
          <button className="twitter">
            {" "}
            <p>Twitter</p>
            <i className="fi fi-brands-twitter"></i>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/thakare-patil-aakash">
          <button className="linkedin">
            <p>Linkedin</p>
            <i className="fi fi-brands-linkedin"></i>
          </button>
        </a>
        <a href="t.me/akashthakare007">
          <button className="telegram">
            <p>Telegram</p>
            <i className="fi fi-brands-telegram"></i>
          </button>
        </a>
        <a href="https://github.com/AKashT1729">
          <button className="github">
            {" "}
            <p>Github</p>
            <i className="fi fi-brands-github"></i>
          </button>
        </a>
        <a href="https://discordapp.com/users/514705015709892609">
          <button className="discord">
            <p>Discord</p>
            <i className="fi fi-brands-discord"></i>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
