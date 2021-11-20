import React from "react";

const Curso = (props) => {
  return (
      <div class="col s3">  
        <div class="card small">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" alt="" src= "imagens/unaspLogo.png" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">{props.title}<i class="material-icons right">more_vert</i></span>
            <p><a href="#">LINK</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Descrição<i class="material-icons right">close</i></span>
            <p>{props.descReveal}</p>
          </div>
        </div>
      </div>
  );
};

export default Curso;