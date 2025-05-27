import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => {
            let url = "#";
            switch (socialImg.name) {
              case "x":
                url = "https://x.com/theo_madzinga";
                break;
              case "insta":
                url = "https://instagram.com/theo_madzinga";
                break;
              case "linkedin":
                url = "https://www.linkedin.com/in/madzinga-theophelos-munashe";
                break;
              case "fb":
                url = "https://facebook.com/Theophelos Munashe Madzinga";
                break;
              case "github":
                url = "https://github.com/Muna18madzinga";
                break;
              default:
                url = "#";
            }
            return (
              <div key={index} className="icon">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <img src={socialImg.imgPath} alt={socialImg.name + " icon"} />
                </a>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Theophelos Madzinga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
