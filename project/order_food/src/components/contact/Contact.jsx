import React from "react";
import Navigation from "../navigation/Navigation";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <div>
        <section class="contact">
          <div class="row-grid">
            <p class="heading-text">LIÊN HỆ</p>
          </div>
          <div class="contact-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.3122064218696!2d108.20643431043173!3d16.049280684563218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b942859af1%3A0xa19e5ff62094542e!2zazM4IE5ndXnhu4VuIEjhu691IFRo4buNLCBIw7JhIFRodeG6rW4gTmFtLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1702571450410!5m2!1svi!2s"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="contact-right">
            <form action="" id="form-contact">
              <h3>Liên hệ với chúng tôi</h3>
              <input type="text" id="fname" name="fname" placeholder="Họ tên" />
              <br />
              <input
                type="email"
                id="femail"
                name="femail"
                placeholder="Địa chỉ Email"
              />
              <br />
              <textarea
                id="fcontent"
                name="fcontent"
                placeholder="Nội dung yêu cầu"
              ></textarea>
              <br />
              <input type="submit" value="Gửi yêu cầu" />
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
