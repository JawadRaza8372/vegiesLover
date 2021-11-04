import React from "react";
import { useParams } from "react-router";
import Footer from "../../Components/Footer/Footer";
import pic from "../../ownAssets/images/coffee.jpg";
import "./BlogId.scss";
function BlogId() {
  const { id } = useParams();
  return (
    <section className="blogIdSection">
      <div className="customContain">
        <div className="blogid">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. De
            vacuitate doloris eadem sententia erit. Animum autem reliquis rebus
            ita perfecit, ut corpus; Quis Aristidem non mortuum diligit? Duo
            Reges: constructio interrete.
          </h1>
          <img src={pic} alt="aly" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. De
            vacuitate doloris eadem sententia erit. Animum autem reliquis rebus
            ita perfecit, ut corpus; Quis Aristidem non mortuum diligit? Duo
            Reges: constructio interrete. Illud non continuo, ut aeque
            incontentae. Scrupulum, inquam, abeunti; Cenasti in vita numquam
            bene, cum omnia in ista Consumis squilla atque acupensere cum
            decimano. Reguli reiciendam; Nam quibus rebus efficiuntur
            voluptates, eae non sunt in potestate sapientis. Quid enim possumus
            hoc agere divinius? Nos commodius agimus. Quae quo sunt excelsiores,
            eo dant clariora indicia naturae. Hoc dixerit potius Ennius: Nimium
            boni est, cui nihil est mali. Atqui iste locus est, Piso, tibi etiam
            atque etiam confirmandus, inquam; Quid censes in Latino fore? Cum id
            quoque, ut cupiebat, audivisset, evelli iussit eam, qua erat
            transfixus, hastam. Sed tamen omne, quod de re bona dilucide
            dicitur, mihi praeclare dici videtur. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. De vacuitate doloris eadem sententia
            erit. Animum autem reliquis rebus ita perfecit, ut corpus; Quis
            Aristidem non mortuum diligit? Duo Reges: constructio interrete.
            Illud non continuo, ut aeque incontentae. Scrupulum, inquam,
            abeunti; Cenasti in vita numquam bene, cum omnia in ista Consumis
            squilla atque acupensere cum decimano. Reguli reiciendam; Nam quibus
            rebus efficiuntur voluptates, eae non sunt in potestate sapientis.
            Quid enim possumus hoc agere divinius? Nos commodius agimus. Quae
            quo sunt excelsiores, eo dant clariora indicia naturae. Hoc dixerit
            potius Ennius: Nimium boni est, cui nihil est mali. Atqui iste locus
            est, Piso, tibi etiam atque etiam confirmandus, inquam; Quid censes
            in Latino fore? Cum id quoque, ut cupiebat, audivisset, evelli
            iussit eam, qua erat transfixus, hastam. Sed tamen omne, quod de re
            bona dilucide dicitur, mihi praeclare dici videtur.
          </p>
          <span className="thanksdiv">Thanks For Reading.</span>
        </div>
      </div>
    </section>
  );
}

export default BlogId;
