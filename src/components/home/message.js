import React from "react";
import founder from "../../assets/images/founder.webp"

function Message() {
  return (
    <div className="container-fluid bgGray block">
      <div className="container">
        <div className="titleHolder">
          <h2>Founder Director's Message</h2>
        </div>
        <div className="contentHolder founderImage">
            
          <img src={founder} alt="founder" />
          <h6>Rajesh Khadka, Founder Director</h6>

          <p>
            GEMS School has always been at the forefront of education in Nepal
            in terms of quality education. Our students have gone forth and
            excelled in various fields nationally and internationally. This has
            been made possible with the blessings of our elders, visionary
            members of the school managing committee, supportive parents and
            dedicated staff who have relentlessly strived to deliver quality
            education.
          </p>
          <p>
            Since its inception, we have always been committed to providing high
            quality education that emphasizes not only gaining knowledge but
            also focuses on the students’ holistic development. The achievement
            of prestigious awards i.e. ‘Secondary Education National Shield’
            four times (2058, 2059, 2067 and 2069 B.S.) and ‘Secondary Education
            Regional Shield’ two times (2063 and 2068 B.S.) by the Ministry of
            Education (MOE) bears testimony to our commitment towards quality
            education, and have made a breakthrough in our journey of high
            school education.
          </p>
          <p>
            For its continuous improvement, we listen and respond to parents’
            concerns and needs of a changing society. Our child-centred approach
            to teaching and learning at the primary level has become successful
            in terms of the overall development of the children.
          </p>
          <p>
            We have infrastructure of an international standard supported by
            state-of-the-art facilities, and a team of professionals to nurture
            the creative minds of students. We reiterate our commitment to
            provide a nurturing environment and every facility possible to
            ensure a high quality education every student deserves in today’s
            globalized world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Message;
