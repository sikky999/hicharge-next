import React from 'react';

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <h5>
            here are some reasons why potential customers should consider
            contacting Hicharge for their EV charging needs:
          </h5>
          <h5>
            Overall, contacting Hicharge can be a smart choice for anyone
            looking to install or manage EV charging stations. The
            company&apos;s comprehensive solutions, proven expertise, reliable
            infrastructure, customer support, and sustainable solutions make it
            a leader in the EV charging industry.
          </h5>
          <ul>
            <li>
              Comprehensive Solutions: Hicharge offers a range of EV charging
              solutions that cater to the needs of different clients, including
              home charging, workplace charging, public charging, and mobile
              charging. With Hicharge, customers can find a solution that best
              fits their requirements.
            </li>
            <br></br>
            <li>
              Proven Expertise: Hicharge has a team of experienced professionals
              with deep knowledge and expertise in the EV charging industry. The
              company has successfully installed and managed numerous charging
              stations across different regions, including cities, businesses,
              and homes.
            </li>
            <br></br>
            <li>
              Reliable Infrastructure: Hicharge&apos;s charging infrastructure
              is reliable and user-friendly, featuring state-of-the-art
              technology and networked charging stations. The company&apos;s
              cloud-based management platform allows customers to easily monitor
              their charging stations and access real-time data and analytics.
            </li>
            <br></br>
            <li>
              Customer Support: Hicharge offers 24/7 customer support to ensure
              that its clients have access to timely and effective assistance
              whenever they need it. The company&apos;s support team is
              knowledgeable and responsive, and can help clients with everything
              from installation to billing to technical issues.
            </li>
            <br></br>
            <li>
              Sustainable Solution: By choosing Hicharge&apos;s EV charging
              solutions, customers can contribute to a more sustainable future
              by reducing their carbon footprint and supporting the transition
              to clean energy. Hicharge&apos;s charging solutions are designed
              to be energy-efficient and integrate with renewable energy sources
              whenever possible.
            </li>
          </ul>
        </div>

        <div className="row contact-info">
          <div className="col-md-4">
            <div className="contact-address">
              <i className="bi bi-geo-alt"></i>
              <h3>Address</h3>
              <address>Karghar mumbai :410210</address>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <i className="bi bi-phone"></i>
              <h3>Phone Number</h3>
              <p>
                <a href="tel:+917249096655">+91 7249096655</a>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <i className="bi bi-envelope"></i>
              <h3>Email</h3>
              <p>
                <a href="mailto:info@hicharge.in">info@hicharge.in</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22864.11283411948!2d-73.96468908098944!3d40.630720240038435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbg!4v1540447494452"
          width="100%"
          height="380"
          style={{ border: 0 }}
        ></iframe>
      </div>

      <div className="container">
        <div className="form">
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            className="php-email-form"
          >
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group col-md-6 mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows={5}
                placeholder="Message"
                required
              ></textarea>
            </div>

            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>

            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
