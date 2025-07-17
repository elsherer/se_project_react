import "./Footer.css";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__name">Developed by Name Surname</p>
      <p className="footer__date">{currentYear}</p>
    </footer>
  );
}

export default Footer;
