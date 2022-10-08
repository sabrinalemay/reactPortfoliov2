import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Sabrina LeMay</h2>
          <ul>
            <li>
              Fullstack Software Developer student.
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/sabrina-lemay-63932923a/">
              <img
                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/wafobb7hb5abdcgff3iv"
                alt="linkedIn"
              />
            </a>
          </p>

          <a
            href="https://my.indeed.com/resume/editor"
            class="link"
          >
            Open Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Familiar with</h2>
          <ul>
            <li>
            HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js, <br />
            Node.js, Express.js, MySQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;