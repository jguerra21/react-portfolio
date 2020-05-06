import React from "react";

function Project(props) {
  const { image, name, site, github } = props;

  return (
    <div className="col-md-6 col-12">
      <div className="card">
        <img className="card-img-top" src={image} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <a
            href={site}
            rel="noopener noreferrer"
            target="_blank"
            className="card-link"
          >
            Go To App
          </a>
          <a
            href={github}
            rel="noopener noreferrer"
            target="_blank"
            className="card-link"
          >
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
