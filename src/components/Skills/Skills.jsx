import "./styles.css";

export default function Skills() {
  return (
    <div className="container skills-container">
      <div className="row justify-content-center justify-content-lg-between">
        <div className="skills-h3">Skills</div>
        <div className="col-4 col-sm-4 col-lg-2">
          <div className="card-skill-img "><img className="skills-img"src="/static/images/html-100.svg" alt="" /></div>
        </div>
        <div className="col-4 col-sm-4 col-lg-2">
          <div className="card-skill-img"><img className="skills-img"src="/static/images/css-100.svg" alt="" /></div>
        </div>
        <div className="col-4 col-sm-4 col-lg-2">
          <div className="card-skill-img"><img className="skills-img"src="/static/images/js-100.svg" alt="" /></div>
        </div>
        
        <div className="col-4 col-sm-4 col-lg-2">
          <div className="card-skill-img"><img className="skills-img"src="/static/images/react-100.svg" alt="" /></div>
        </div>
        <div className="col-4 col-sm-4 col-lg-2">
          <div className="card-skill-img"><img className="skills-img"src="/static/images/bootstrap-100.svg" alt="" /></div>
        </div>
        
      </div>
    </div>
  );
}
