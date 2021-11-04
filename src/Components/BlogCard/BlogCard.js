import React from "react";
import "./BlogCard.scss";
import donut from "../../ownAssets/images/donut.jpg";
import coffe from "../../ownAssets/images/coffee.jpg";
import { Link } from "react-router-dom";
function BlogCard({ content }) {
  const chk =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fortemne possumus dicere eund ";
  console.log(chk.length);
  return (
    <>
      <div className="shadow">
        <div className="blogCard">
          <div className="imgContainer">
            <span>July 13,2013</span>
            <img src={content === 1 ? donut : coffe} alt="artical img" />
          </div>
          <div className="cardContent">
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fortemne
              possumus dicere eund Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Fortemne possumus dicere eund
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facit
              igitur Lucius noster prudenter, qui audire de summo bono
              potissimum velit; Qui enim existimabit posse se miserum esse
              beatus non erit. Deinde disputat, quod cuiusque generis animantium
              statui deceat extremum. Quod autem in homine praestantissimum
              atque optimum est, id deseruit. Quae cum essent dicta, finem
              fecimus et ambulandi et disputandi. Duo Reges: constructio
              interrete. Non quaero, quid dicat, sed quid convenienter possit
              rationi et sententiae suae dicere. Satis est ad hoc responsum. Non
              minor, inquit, voluptas percipitur ex vilissimis rebus quam ex
              pretiosissimis. An vero displicuit ea, quae tributa est animi
              virtutibus tanta praestantia? Tum ille: Tu autem cum ipse tantum
              librorum habeas, quos hic tandem requiris? Hanc in motu voluptatem
              -sic enim has suaves et quasi dulces voluptates appellat-interdum
              ita extenuat, ut M. Earum etiam rerum, quas terra gignit, educatio
              quaedam et perfectio est non dissimilis animantium. Quamquam te
              quidem video minime esse deterritum. Licet hic rursus ea
              commemores, quae optimis verbis ab Epicuro de laude amicitiae
              dicta sunt. Vitiosum est enim in dividendo partem in genere
              numerare. Dici enim nihil potest verius. Virtutis, magnitudinis
              animi, patientiae, fortitudinis fomentis dolor mitigari solet.
              Habes, inquam, Cato, formam eorum, de quibus loquor,
              philosophorum. Si stante, hoc natura videlicet vult, salvam esse
              se, quod concedimus; Scio enim esse quosdam, qui quavis lingua
              philosophari possint; An, partus ancillae sitne in fructu
              habendus, disseretur inter principes civitatis, P. Non prorsus,
              inquit, omnisque, qui sine dolore sint, in voluptate, et ea quidem
              summa, esse dico. Legimus tamen Diogenem, Antipatrum, Mnesarchum,
              Panaetium, multos alios in primisque familiarem nostrum
              Posidonium. Quae quidem sapientes sequuntur duce natura tamquam
              videntes; Ergo id est convenienter naturae vivere, a natura
              discedere. Bonum incolumis acies: misera caecitas. Deque his rebus
              satis multa in nostris de re publica libris sunt dicta a Laelio.
            </p>
            <Link className="more" to="/blog/2323">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
