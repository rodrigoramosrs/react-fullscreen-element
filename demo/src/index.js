import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import ReactFullScreenElement from "../../src";

class Demo extends Component {
  state = {
    fullscreen: false
  };

  fullscreenToggle = () => {
    this.setState({ fullscreen: !this.state.fullscreen });
  };
  render() {
    return (
      <div>
        <div style={{ backgroundColor: "white", padding: "12px" }}>
          <h1>React FullScreen Element Demo</h1>
        </div>
        <ReactFullScreenElement
          fullScreen={this.state.fullscreen}
          allowScrollbar={true}
        >
          <div
            style={{ backgroundColor: "white", padding: "12px", border: "" }}
          >
            <div
              style={{
                width: "90vw",
                position: "relative",
                padding: "12px",
                borderStyle: "solid",
                borderRadius: "24px"
              }}
            >
              <div>
                <input
                  type="button"
                  value={
                    this.state.fullscreen
                      ? "👇🏽 Click Here to Reset"
                      : "🚀 Click Here to Fullscreen"
                  }
                  className="cta"
                  onClick={this.fullscreenToggle}
                />
              </div>

              <div>
                <h1>Etiam beatissimum?</h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atque
                  hoc loco similitudines eas, quibus illi uti solent,
                  dissimillimas proferebas. Quibus natura iure responderit non
                  esse verum aliunde finem beate vivendi, a se principia rei
                  gerendae peti; Duo Reges: constructio interrete. Nos quidem
                  Virtutes sic natae sumus, ut tibi serviremus, aliud negotii
                  nihil habemus. Re mihi non aeque satisfacit, et quidem locis
                  pluribus. <i>Si quicquam extra virtutem habeatur in bonis.</i>{" "}
                  Nam prius a se poterit quisque discedere quam appetitum earum
                  rerum, quae sibi conducant, amittere.{" "}
                  <code>Aliter enim nosmet ipsos nosse non possumus.</code> Quos
                  quidem tibi studiose et diligenter tractandos magnopere
                  censeo. Nunc reliqua videamus, nisi aut ad haec, Cato, dicere
                  aliquid vis aut nos iam longiores sumus.{" "}
                  <b>Nam de isto magna dissensio est.</b> Stoici autem, quod
                  finem bonorum in una virtute ponunt, similes sunt illorum;
                  Possumusne ergo in vita summum bonum dicere, cum id ne in cena
                  quidem posse videamur? Ita, quem ad modum in senatu semper est
                  aliquis, qui interpretem postulet, sic, isti nobis cum
                  interprete audiendi sunt.{" "}
                </p>
                {!this.state.fullscreen && (
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={this.fullscreenToggle}
                  >
                    Read more....
                  </div>
                )}
                {this.state.fullscreen && (
                  <div>
                    <p>
                      <b>Hic ambiguo ludimur.</b>{" "}
                      <mark>Dat enim intervalla et relaxat.</mark>{" "}
                      <i>Tu vero, inquam, ducas licet, si sequetur;</i> Etenim
                      nec iustitia nec amicitia esse omnino poterunt, nisi ipsae
                      per se expetuntur. Legimus tamen Diogenem, Antipatrum,
                      Mnesarchum, Panaetium, multos alios in primisque
                      familiarem nostrum Posidonium. Superiores tres erant, quae
                      esse possent, quarum est una sola defensa, eaque
                      vehementer. In schola desinis. Aliis esse maiora, illud
                      dubium, ad id, quod summum bonum dicitis, ecquaenam possit
                      fieri accessio.{" "}
                    </p>

                    <p>
                      Est igitur officium eius generis, quod nec in bonis
                      ponatur nec in contrariis. Quid ei reliquisti, nisi te,
                      quoquo modo loqueretur, intellegere, quid diceret? Non
                      enim ipsa genuit hominem, sed accepit a natura inchoatum.{" "}
                      <a href="http://loripsum.net/" target="_blank">
                        Nihil opus est exemplis hoc facere longius.
                      </a>{" "}
                      Itaque illa non dico me expetere, sed legere, nec optare,
                      sed sumere, contraria autem non fugere, sed quasi
                      secernere. Praeclare Laelius, et recte sofñw, illudque
                      vere: O Publi, o gurges, Galloni! es homo miser, inquit.
                      Ut etiam contendant et elaborent, si efficere possint, ut
                      aut non appareat corporis vitium aut quam minimum
                      appareat? Sed et illum, quem nominavi, et ceteros
                      sophistas, ut e Platone intellegi potest, lusos videmus a
                      Socrate. In his igitur partibus duabus nihil erat, quod
                      Zeno commutare gestiret. Utrum igitur tibi non placet,
                      inquit, virtutisne tantam esse vim, ut ad beate vivendum
                      se ipsa contenta sit?{" "}
                    </p>

                    <blockquote cite="http://loripsum.net">
                      Quid, si non modo utilitatem tibi nullam afferet, sed
                      iacturae rei familiaris erunt faciendae, labores
                      suscipiendi, adeundum vitae periculum?
                    </blockquote>

                    <h3>Vide, quantum, inquam, fallare, Torquate.</h3>

                    <p>
                      Quae sunt igitur communia vobis cum antiquis, iis sic
                      utamur quasi concessis; Alterum autem genus est magnarum
                      verarumque virtutum, quas appellamus voluntarias, ut
                      prudentiam, temperantiam, fortitudinem, iustitiam et
                      reliquas eiusdem generis.{" "}
                      <b>Dicimus aliquem hilare vivere;</b>{" "}
                      <i>
                        Tubulum fuisse, qua illum, cuius is condemnatus est
                        rogatione, P.
                      </i>{" "}
                      Octavio fuit, cum illam severitatem in eo filio adhibuit,
                      quem in adoptionem D.{" "}
                      <b>Certe, nisi voluptatem tanti aestimaretis.</b> Quid de
                      Platone aut de Democrito loquar? Hoc autem loco tantum
                      explicemus haec honesta, quae dico, praeterquam quod
                      nosmet ipsos diligamus, praeterea suapte natura per se
                      esse expetenda.{" "}
                      <i>Summum ením bonum exposuit vacuitatem doloris;</i>{" "}
                      Aberat omnis dolor, qui si adesset, nec molliter ferret et
                      tamen medicis plus quam philosophis uteretur.{" "}
                    </p>

                    <p>
                      Quod maxime efficit Theophrasti de beata vita liber, in
                      quo multum admodum fortunae datur.{" "}
                      <b>Restinguet citius, si ardentem acceperit.</b> Nec vero
                      intermittunt aut admirationem earum rerum, quae sunt ab
                      antiquis repertae, aut investigationem novarum. Verum hoc
                      loco sumo verbis his eandem certe vim voluptatis Epicurum
                      nosse quam ceteros.{" "}
                    </p>

                    <ol>
                      <li>
                        At quicum ioca seria, ut dicitur, quicum arcana, quicum
                        occulta omnia?
                      </li>
                      <li>
                        Quo studio Aristophanem putamus aetatem in litteris
                        duxisse?
                      </li>
                      <li>
                        Ergo illi intellegunt quid Epicurus dicat, ego non
                        intellego?
                      </li>
                      <li>Negat esse eam, inquit, propter se expetendam.</li>
                      <li>
                        Cur igitur, inquam, res tam dissimiles eodem nomine
                        appellas?
                      </li>
                      <li>
                        Nam constitui virtus nullo modo potesti nisi ea, quae
                        sunt prima naturae, ut ad summam pertinentia tenebit.
                      </li>
                    </ol>

                    <p>
                      Hanc ergo intuens debet institutum illud quasi signum
                      absolvere. Equidem soleo etiam quod uno Graeci, si aliter
                      non possum, idem pluribus verbis exponere. Quodsi Graeci
                      leguntur a Graecis isdem de rebus alia ratione compositis,
                      quid est, cur nostri a nostris non legantur? Amicitiam
                      autem adhibendam esse censent, quia sit ex eo genere, quae
                      prosunt. <mark>Beatus sibi videtur esse moriens.</mark>{" "}
                      Quid me istud rogas?{" "}
                    </p>

                    <p>
                      <i>Proclivi currit oratio.</i>{" "}
                      <a href="http://loripsum.net/" target="_blank">
                        Tuo vero id quidem, inquam, arbitratu.
                      </a>{" "}
                      Octavio fuit, cum illam severitatem in eo filio adhibuit,
                      quem in adoptionem D. Si enim Zenoni licuit, cum rem
                      aliquam invenisset inusitatam, inauditum quoque ei rei
                      nomen inponere, cur non liceat Catoni? Itaque multi, cum
                      in potestate essent hostium aut tyrannorum, multi in
                      custodia, multi in exillo dolorem suum doctrinae studiis
                      levaverunt. Multa sunt dicta ab antiquis de contemnendis
                      ac despiciendis rebus humanis; Hoc est non modo cor non
                      habere, sed ne palatum quidem.{" "}
                    </p>

                    <span>
                      Eloquentiae vero, quae et principibus maximo ornamento
                      est, et qua te audimus valere plurimum, quantum tibi ex
                      monumentis nostris addidisses! Ea cum dixissent, quid
                      tandem talibus viris responderes? Ita finis bonorum
                      existit secundum naturam vivere sic affectum, ut optime is
                      affici possit ad naturamque accommodatissime.
                    </span>

                    <p>
                      <b>Itaque fecimus.</b> Si verbum sequimur, primum longius
                      verbum praepositum quam bonum. Magni enim aestimabat
                      pecuniam non modo non contra leges, sed etiam legibus
                      partam.{" "}
                      <a href="http://loripsum.net/" target="_blank">
                        Istam voluptatem, inquit, Epicurus ignorat?
                      </a>{" "}
                      Poterat autem inpune; Sin laboramus, quis est, qui alienae
                      modum statuat industriae? Quid sequatur, quid repugnet,
                      vident. Homines optimi non intellegunt totam rationem
                      everti, si ita res se habeat.{" "}
                      <i>Sit sane ista voluptas.</i> Neque enim civitas in
                      seditione beata esse potest nec in discordia dominorum
                      domus;{" "}
                    </p>

                    <h3>Uterque enim summo bono fruitur, id est voluptate.</h3>

                    <p>
                      <i>Tria genera bonorum;</i> Haec qui audierit, ut ridere
                      non curet, discedet tamen nihilo firmior ad dolorem
                      ferendum, quam venerat. Eorum enim omnium multa
                      praetermittentium, dum eligant aliquid, quod sequantur,
                      quasi curta sententia; Equidem soleo etiam quod uno
                      Graeci, si aliter non possum, idem pluribus verbis
                      exponere.{" "}
                    </p>

                    <ol>
                      <li>
                        Apud imperitos tum illa dicta sunt, aliquid etiam
                        coronae datum;
                      </li>
                      <li>
                        Vitiosum est enim in dividendo partem in genere
                        numerare.
                      </li>
                      <li>
                        Ergo ita: non posse honeste vivi, nisi honeste vivatur?
                      </li>
                      <li>
                        Hanc ergo intuens debet institutum illud quasi signum
                        absolvere.
                      </li>
                    </ol>

                    <ul>
                      <li>Nam quid possumus facere melius?</li>
                      <li>
                        Illud quaero, quid ei, qui in voluptate summum bonum
                        ponat, consentaneum sit dicere.
                      </li>
                      <li>
                        Si stante, hoc natura videlicet vult, salvam esse se,
                        quod concedimus;
                      </li>
                    </ul>

                    <p>
                      <b>Comprehensum, quod cognitum non habet?</b> Nec lapathi
                      suavitatem acupenseri Galloni Laelius anteponebat, sed
                      suavitatem ipsam neglegebat;{" "}
                      <b>Sin aliud quid voles, postea.</b>{" "}
                      <b>Facillimum id quidem est, inquam.</b> Quid, si
                      reviviscant Platonis illi et deinceps qui eorum auditores
                      fuerunt, et tecum ita loquantur? Rhetorice igitur, inquam,
                      nos mavis quam dialectice disputare? Zenonis est, inquam,
                      hoc Stoici. Quod cum ita sit, perspicuum est omnis rectas
                      res atque laudabilis eo referri, ut cum voluptate vivatur.
                      Illa videamus, quae a te de amicitia dicta sunt. Quamquam
                      haec quidem praeposita recte et reiecta dicere licebit.
                      Quae dici eadem de ceteris virtutibus possunt, quarum
                      omnium fundamenta vos in voluptate tamquam in aqua
                      ponitis. Nam et a te perfici istam disputationem volo, nec
                      tua mihi oratio longa videri potest. Etsi qui potest
                      intellegi aut cogitari esse aliquod animal, quod se
                      oderit?{" "}
                    </p>

                    <p>
                      <a href="http://loripsum.net/" target="_blank">
                        Non igitur bene.
                      </a>{" "}
                      At enim, qua in vita est aliquid mali, ea beata esse non
                      potest. Omnes enim iucundum motum, quo sensus hilaretur.
                      Hoc vero non videre, maximo argumento esse voluptatem
                      illam, qua sublata neget se intellegere omnino quid sit
                      bonum-eam autem ita persequitur: quae palato percipiatur,
                      quae auribus;{" "}
                      <a href="http://loripsum.net/" target="_blank">
                        Quae ista amicitia est?
                      </a>{" "}
                      Nunc ita separantur, ut disiuncta sint, quo nihil potest
                      esse perversius.{" "}
                      <a href="http://loripsum.net/" target="_blank">
                        Summum ením bonum exposuit vacuitatem doloris;
                      </a>{" "}
                      Sed haec ab Antiocho, familiari nostro, dicuntur multo
                      melius et fortius, quam a Stasea dicebantur.{" "}
                    </p>

                    <blockquote cite="http://loripsum.net">
                      Nam si dicent ab illis has res esse tractatas, ne ipsos
                      quidem Graecos est cur tam multos legant, quam legendi
                      sunt.
                    </blockquote>

                    <ul>
                      <li>
                        An quod ita callida est, ut optime possit architectari
                        voluptates?
                      </li>
                      <li>
                        Sed emolumenta communia esse dicuntur, recte autem facta
                        et peccata non habentur communia.
                      </li>
                      <li>
                        Expectoque quid ad id, quod quaerebam, respondeas.
                      </li>
                    </ul>

                    <dl>
                      <dt>
                        <dfn>Erat enim Polemonis.</dfn>
                      </dt>
                      <dd>
                        Cum id fugiunt, re eadem defendunt, quae Peripatetici,
                        verba.
                      </dd>
                      <dt>
                        <dfn>Sed fortuna fortis;</dfn>
                      </dt>
                      <dd>
                        Quodsi vultum tibi, si incessum fingeres, quo gravior
                        viderere, non esses tui similis;
                      </dd>
                      <dt>
                        <dfn>Si longus, levis;</dfn>
                      </dt>
                      <dd>
                        Semper enim ita adsumit aliquid, ut ea, quae prima
                        dederit, non deserat.
                      </dd>
                      <dt>
                        <dfn>At certe gravius.</dfn>
                      </dt>
                      <dd>
                        Ex quo, id quod omnes expetunt, beate vivendi ratio
                        inveniri et comparari potest.
                      </dd>
                    </dl>

                    <dl>
                      <dt>
                        <dfn>Falli igitur possumus.</dfn>
                      </dt>
                      <dd>Nonne igitur tibi videntur, inquit, mala?</dd>
                      <dt>
                        <dfn>Perge porro;</dfn>
                      </dt>
                      <dd>
                        Quae quo sunt excelsiores, eo dant clariora indicia
                        naturae.
                      </dd>
                      <dt>
                        <dfn>Tu quidem reddes;</dfn>
                      </dt>
                      <dd>
                        Quos quidem tibi studiose et diligenter tractandos
                        magnopere censeo.
                      </dd>
                    </dl>

                    <span>
                      Si enim non fuit eorum iudicii, nihilo magis hoc non
                      addito illud est iudicatum-. Verum hoc loco sumo verbis
                      his eandem certe vim voluptatis Epicurum nosse quam
                      ceteros.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ReactFullScreenElement>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
