import Icons from "../icons/Icons";
import "./styles.css";

export default function Skills() {
  return (
    <div className="container skills-container">
      <div className="row justify-content-center justify-content-lg-between">
        <div className="skills-h3">Skills</div>
        <div className="col-4 col-lg-2">
          <div className="card-skill-img ">
            <Icons.HtmlIcon />
          </div>
        </div>
        <div className="col-4 col-lg-2">
          <div className="card-skill-img">
            <Icons.CssIcon />
          </div>
        </div>
        <div className="col-4 col-lg-2">
          <div className="card-skill-img">
            <Icons.JsIcon />
          </div>
        </div>

        <div className="col-4 col-lg-2">
          <div className="card-skill-img">
            <Icons.ReactIcon />
          </div>
        </div>
        <div className="col-4 col-lg-2">
          <div className="card-skill-img">
            <Icons.BootstrapIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
