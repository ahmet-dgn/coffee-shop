import classes from "./footer.module.css";
import Container from "../ui/container";
import FooterLeftArea from "./footer-left-area";
import FooterMiddleArea from "./footer-middle-area";
import FooterRightArea from "./footer-right-area";
function Footer() {
  return (
    <footer className={classes.footer_area} id="footer">
      <Container>
        <div className={classes.footer_area_layout}>
          <FooterLeftArea />
          <FooterMiddleArea />
          <FooterRightArea />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
