import React from "react";
import { Row, Col, Card } from 'react-materialize';
import Experience from '../experience/experience'
import company_avatar from '../../images/predioEM.jpg';
import company_avatar2 from '../../images/unaspLogo.png';

const Home = () => (
  <Row>
    <Col m={12} s={10}>
      <h5 className="subtitle">Curso técnico Unasp</h5>
      <Card>
        <div>
          <p><b>Saiba mais:</b></p>
          <p>O curso técnico do Colégio Unasp Campus São Paulo consiste em um ensino médio integrado com curso técnico, 
             onde os jovens saem com dois diplomas: De ensino médio normal e o diploma técnico. Uma de nossas vantagens 
             é que sempre investimos no encaminhamento do aluno para o mercado de trabalho e, por isso, temos várias 
             matérias que auxiliam no enriquecimento do currículo dos estudantes.
          </p>
          <br/>
          <p><b>Algumas matérias oferecidas:</b></p>
          <p>Entre as matérias oferecidas temos: Linguagem de programação (aumentando o nível com o passar dos anos), 
             rede de computadores,análise de sistemas, inovações técnológicas (com conceitos importantes de IOT, UX, 
             UI...), desenvolvimento de aplicações WEB, entre outras.
          </p>
        </div>
      </Card>
      <h5 className="subtitle">Qualidades</h5>
        {}
        <Experience title="Profissionais qualificados"
          description="Contamos com profissionais especializados em suas respectivas áreas de ensino. Além disso, nosso
          corpo docente está sempre atento aos alunos e dispostos a ajudá-los da melhor forma possível."
          avatar={company_avatar}
        />
        <Experience title="Recursos"
          description="Em nosso Campus temos um laboratório cheio de recursos disponíveis para os alunos, como computadores
          de qualidade, programas/aplicativos variados, projetores e, tudo isso, sem deixar de lado o conforto."
          avatar={company_avatar2}                    
        /> 
    </Col>
  </Row>
);

export default Home;