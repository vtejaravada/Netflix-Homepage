import React from 'react';
import { RiTranslate2 } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import '../Footer/Footer.css';

const MyList = ({ items }) => {
  const footerArray = (array, size) => {
    const footeredArray = [];
    for (let i = 0; i < array.length; i += size) {
      footeredArray.push(array.slice(i, i + size));
    }
    return footeredArray;
  };

  const rows = footerArray(items, 4);

  return (
    <footer className="footer">

      <div className="container">

        <div className="container_footer">

          <div className="footer_item">
            <p>Question? Call <span>000-800-919-1694</span></p>
          </div>

          <div className="footer_item">

            <div className="footer_item_one">
              {rows.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex' }}>
                  {row.map((item, index) => (
                    <div key={index} style={{ flex: 1 }}>
                      {item && <li>{item}</li>}
                    </div>
                  ))}
                  {row.length < 4 &&
                    Array.from({ length: 4 - row.length }).map((_, index) => (
                      <div key={`empty-${index}`} style={{ flex: 1 }}></div>
                    ))}
                </div>
              ))}
            </div>

            <div className="footer_item">
              <div className="signin signinEng">
                <div className="lang langEng">
                  <RiTranslate2 />
                  <p>English</p>
                  <IoMdArrowDropdown />
                </div>
              </div>
            </div>

            <div className="footer_item"><p>Netflix India</p></div>

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
      'Corporate information ',
      'Contact Us',
      'Speed Test',
      'Legal Notices',
      'Only on Netflix'
    ]} />
  </div>
);

export default Footer;