import React from "react";
import founder from "../../assets/images/founderfull.jpg";

function FounderMessage() {
  return (
    <div className="container-fluid bgGray block">
      <div className="container">
        <div className="titleHolder">
          <h2>Founder Director's Message</h2>
        </div>
        <div className="contentHolder founder">
          <img src={founder} alt="founder" />
          <h6>Rajesh Khadka, Founder Director</h6>

          <p>
            GEMS has always been at the forefront of education in Nepal. After
            nearly two and half decades of unparalleled commitment and
            dedication to school level education, the management launched higher
            level programmes in 2008 to give students a new avenue in education.
            Since then, we have been offering GCE A level, a prestigious
            programme offered by the University of Cambridge, the UK and Plus 2
            in Science under the affiliation with Higher Secondary Education
            Board (HSEB), Nepal.
          </p>
          <p>
            We aim at developing the self-confidence and analytical skills, and
            inculcating a sense of discipline in students. I firmly believe that
            our students experience a unique learning environment, and feel a
            difference. We have a team of highly qualified and experienced
            faculty and academic administrators, who are always concerned about
            students' academic performance and their overall development. We
            focus on providing students with the education of an international
            standard supported by the state-of-the-art facilities and
            technologies. We have plans afoot to introduce higher level courses
            and some international programmes in the near future.
          </p>
          <p>
            For its continuous improvement, we listen and respond to parents’
            concerns and needs of a changing society. Our child-centred approach
            to teaching and learning at the primary level has become successful
            in terms of the overall development of the children.
          </p>
          <p>
            I would encourage our students, parents and other stakeholders to be
            part of this journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FounderMessage;
