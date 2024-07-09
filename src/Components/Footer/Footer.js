import React from 'react';
import '../Footer/Footer.css';

const MyList = ({ items }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="container_footer">
          <div className="footer_item">
            <p>Question? Call <span>000-800-919-1694</span></p>
          </div>
          <div className="footer_item">
            <div className="footer_item_one">
              {items.map((item, index) => (
                <div key={index}>
                  <li>{item}</li>
                </div>
              ))}
            </div>
            {/* <div className="footer_item">
              <div className="signin signinEng">
                <div className="lang langEng">
                  <RiTranslate2 />
                  <p>English</p>
                  <IoMdArrowDropdown />
                </div>
              </div>
            </div> */}
            <div className="footer_item"><p>ENTERTAINMENT India</p></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

MyList.defaultProps = {
  items: []
};

const Footer = () => (
  <div className="full-width-footer">
    <MyList items={[
      'FAQ',
      'Help Centre',
      'Account',
      'Media Centre',
      'Investor Relations',
      'Jobs',
      'Ways to Watch',
      'Terms of Use',
      'Privacy',
      'Cookie Preferences',
      'Corporate information',
      'Contact Us',
      'Speed Test',
      'Legal Notices',
      'Only on ENTERTAINMENT'
    ]} />
  </div>
);

export default Footer;
