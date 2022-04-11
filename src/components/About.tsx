import { Link } from 'react-router-dom';

/* Interfaces */
import MailToLinkProps from '../interfaces/MailToLinkProps';

/* Images */
import selfPortrait from '../assets/images/main/alec-thibodeau-self-portrait.jpg';

function MailToLink({ label, mailTo }: MailToLinkProps) {
  return (
    <Link
      to='#'
      onClick={(event) => {
          window.location.href = mailTo;
          event.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

function About() {
  return (
    <div className="px-3 px-md-4">
      <img className="self-portrait" src={selfPortrait} alt="Alec Thibodeau self portrait" />
      <div>
        <p>
          Alec Thibodeau is a visual artist whose work is rooted in drawing and printmaking. This site serves as a portfolio for Alec's earlier pieces and projects. <a href="http://huetown.com">Huetown</a> has his social media links, email list and latest work for sale.
        </p>
        <p>
          Alec's <span className="italic">Epoch Travelers</span> is a permanent installation in marble located in New York City and commissioned by the NYC Department of Education and the NYC School Construction Authority Public Art for Public Schools Program in collaboration with the NYC Department of Cultural Affairs Percent for Art Program. Alec is the recipient of a project grant from the LEF Foundation to print an experimental currency: Noney.
        </p>
        <p>
          Galleries that have shown Alec's work include Tomato House (New York City), Secret Project Robot (New York City), Spudnik Press Cooperative (Chicago), Cade Tompkins Projects (Providence, RI), the University of Tennessee's Ewing Gallery (Knoxville), Boston Center for the Arts Mills Gallery and the University of Alabama at Birmingham's Visual Arts Gallery.
        </p>
        <p>
          Contact: <MailToLink label="alec@alecthibodeau.com" mailTo="mailto:alec@alecthibodeau.com" />
        </p>
      </div>
    </div>
  );
}

export default About;