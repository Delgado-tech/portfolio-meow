import React from 'react';
import { EducationContainer } from './style';
import { GridContainer } from '../../styles/GridContainer.style';
import { DecoTitleBlack } from '../../styles/DecoTitle.style';
import { BigParagraphWhite } from '../../styles/BigParagraph.style';
import CardCourse from '../../elements/cards/CardCourse';
import { courseTypes, courses } from '../../../env/courses';
import ListCourseItem from '../../elements/lists/ListCourseItem';
import bookIcon from '../../../assets/book.svg';
import globeIcon from '../../../assets/globe.svg';


function Component() {

    const listCourses = [];
    const listCoursesLang = [];
    const cardCoursesHighLights = [];

    for(let course of courses) {
        if (course.highlight) {
            cardCoursesHighLights.push(
                <CardCourse className="education_cardHighlight" key={courses.indexOf(course)}
                    label={course.label}
                    title={course.title}
                    description={course.description}
                    duration={course.duration}
                /> 
            );
        } else {
            if (course.type === courseTypes.language) {
                listCoursesLang.push(
                    <ListCourseItem  key={courses.indexOf(course)}
                        courseName={course.title}
                        suffix={" / " + course.description}
                    />
                );
            } else {
                listCourses.push(
                    <ListCourseItem key={courses.indexOf(course)}
                        courseName={course.title}
                        progress={course.progress + "%"}
                        duration={course.duration}
                    />
                );
            }
        }
    }

    return(
        <EducationContainer id="education">
            <GridContainer>
                <DecoTitleBlack>Formação</DecoTitleBlack>
                <section>
                    <BigParagraphWhite>
                        Atualmente realizando uma formação intensiva de tecnologia ministrada pela <strong>Escola DNC</strong>, 
                        onde o foco é explorar as tecnologias mais utilizadas no mercado, visando se expecializar no <strong>desenvolvimento
                        FullStack</strong>, onde é aprendido desde metodologias ágeis (<strong>SCRUM</strong>) até a criação de aplicações
                        complexas utilizando <strong>API's</strong>, <strong>SQL</strong>, programação em <strong>React.js</strong>, <strong>Node.js</strong> e muito mais.
                    </BigParagraphWhite>
                    <div className="education_cardHighlights">
                        { cardCoursesHighLights }
                    </div>
                    <div>
                        <div className="education_courseHeader">
                            <figure>
                                <img src={bookIcon} alt="book"/>
                            </figure>
                            <h3>Cursos Intensivos</h3>
                        </div>
                        <div className="listCourses">
                            { listCourses }
                        </div>
                    </div>
                    <div>
                        <div className="education_courseHeader">
                            <figure>
                                <img src={globeIcon} alt="globe"/>
                            </figure>
                            <h3>Idiomas</h3>
                        </div>
                        <div className="listCourses">
                            { listCoursesLang }
                        </div>
                    </div>
                </section>
                <span className='dec'></span>
            </GridContainer>
        </EducationContainer>
    );
}

export default Component;