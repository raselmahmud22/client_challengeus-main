import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ImprintSection = () => {
  //   Zoom out
  const zoomOut = useRef(null);
  const { innerHeight } = window;
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const titleOut = self.selector(".titleOut");
      gsap.from(titleOut, {
        scale: 5,
        stagger: 0.25,
        duration: 3,
        opacity:0,
        scrollTrigger: {
          trigger: zoomOut.current,
          pin: titleOut,
          start :"top top", 
          end: `+=${innerHeight * 1.2}`,
          scrub: 2,
        },
      });
    }, zoomOut);
    return () => ctx.revert();
  }, []);
  return (
    <section className='maxW py-20 overflow-hidden -z-20' ref={zoomOut}>
      <h3
        className='uppercase lg:text-7xl md:text-5xl sm:text-3xl text-xl font-extrabold text-center tracking-widest titleOut'
        >
        imprint
      </h3>

      <p
        className='text-center font-medium text-xs md:text-sm lg:text-base'
        data-aos='fade-up'
        data-aos-duration='600'
        data-aos-easing='ease-in-sine'>
        Verantwortlich für den Inhalt:
      </p>
      <p
        className='text-center font-medium text-xs md:text-sm lg:text-base'
        data-aos='fade-up'
        data-aos-duration='700'
        data-aos-easing='ease-in-sine'>
        Nour Idelbi mendelstraße 11 48149 Münster Deutschland
      </p>
      <p
        className='text-center font-medium text-xs md:text-sm lg:text-base'
        data-aos='fade-up'
        data-aos-duration='800'
        data-aos-easing='ease-in-sine'>
        Kontakt:
      </p>
      <p
        className='text-center font-medium text-xs md:text-sm lg:text-base'
        data-aos='fade-up'
        data-aos-duration='900'
        data-aos-easing='ease-in-sine'>
        E-Mail: challengeus@mail.de
      </p>

      <div className='max-w-5xl mx-auto shadow-lg p-5 rounded my-5'>
        <p
          className='text-center mb-5 text-sm md:text-base lg:text-xl font-bold'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-easing='ease-in-sine'>
          Haftungsausschluss:
        </p>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
          <div className='flex flex-col gap-5'>
            {/* collapse  1 */}
            <details
              className='rounded'
              data-aos='zoom-out-right'
              data-aos-duration='500'>
              <summary className='question py-3 px-4 cursor-pointer select-none w-full bg-[#14794546] text-xs md:text-sm lg:text-base font-semibold'>
                Inhalt des Onlineangebots
              </summary>
              <p className='pt-1 pb-3 px-4 bg-slate-200 tracking-widest leading-5 text-[8px] md:text-sm lg:text-base'>
                Der Inhalt dieser Website wurde mit größtmöglicher Sorgfalt
                erstellt. Trotzdem kann keine Gewähr für die Aktualität,
                Richtigkeit und Vollständigkeit der bereitgestellten
                Informationen übernommen werden. Haftungsansprüche gegen den
                Autor, welche sich auf Schäden materieller oder ideeller Art
                beziehen, die durch die Nutzung oder Nichtnutzung der
                dargebotenen Informationen bzw. durch die Nutzung fehlerhafter
                und unvollständiger Informationen verursacht wurden, sind
                grundsätzlich ausgeschlossen.
              </p>
            </details>

            {/* collapse  2 */}
            <details
              className='rounded'
              data-aos='zoom-out-right'
              data-aos-duration='700'>
              <summary className='question py-3 px-4 cursor-pointer select-none w-full bg-[#14794546] text-xs md:text-sm lg:text-base font-semibold'>
                Verweise und Links
              </summary>
              <p className='pt-1 pb-3 px-4 bg-slate-200 tracking-widest leading-5 text-[8px] md:text-sm lg:text-base'>
                Diese Website enthält Verweise auf externe Websites
                ("Hyperlinks"), auf deren Inhalt der Autor keinen Einfluss hat.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                Anbieter oder Betreiber der Seiten verantwortlich. Eine
                permanente inhaltliche Kontrolle der verlinkten Seiten ist
                jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden
                derartige Links umgehend entfernt.
              </p>
            </details>

            {/* collapse   3*/}
            <details
              className='rounded'
              data-aos='zoom-out-right'
              data-aos-duration='900'>
              <summary className='question py-3 px-4 cursor-pointer select-none w-full bg-[#14794546] text-xs md:text-sm lg:text-base font-semibold'>
                Urheberrecht
              </summary>
              <p className='pt-1 pb-3 px-4 bg-slate-200 tracking-widest leading-5 text-[8px] md:text-sm lg:text-base'>
                Die auf dieser Website veröffentlichten Inhalte und Werke
                unterliegen dem deutschen Urheberrecht. Jede vom deutschen
                Urheberrecht nicht zugelassene Verwertung bedarf der vorherigen
                schriftlichen Zustimmung des jeweiligen Autors oder Urhebers.
                Dies gilt insbesondere für Vervielfältigung, Bearbeitung,
                Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von
                Inhalten in Datenbanken oder anderen elektronischen Medien und
                Systemen. Inhalte und Beiträge Dritter sind dabei als solche
                gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe
                einzelner Inhalte oder kompletter Seiten ist nicht gestattet und
                strafbar.
              </p>
            </details>
          </div>

          <div className='flex flex-col gap-5'>
            {/* collapse   4*/}
            <details
              className='rounded'
              data-aos='zoom-out-left'
              data-aos-duration='500'>
              <summary className='question py-3 px-4 cursor-pointer select-none w-full bg-[#14794546] text-xs md:text-sm lg:text-base font-semibold'>
                Datenschutz
              </summary>
              <p className='pt-1 pb-3 px-4 bg-slate-200 tracking-widest leading-5 text-[8px] md:text-sm lg:text-base'>
                Die Nutzung dieser Website ist in der Regel ohne Angabe
                personenbezogener Daten möglich. Soweit auf dieser Website
                personenbezogene Daten (beispielsweise Name, Anschrift oder
                E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
                stets auf freiwilliger Basis. Diese Daten werden ohne
                ausdrückliche Zustimmung nicht an Dritte weitergegeben. Es wird
                darauf hingewiesen, dass die Datenübertragung im Internet (z.B.
                bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
                kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
                Dritte ist nicht möglich.
              </p>
            </details>
            {/* collapse   5*/}
            <details
              className='rounded'
              data-aos='zoom-out-left'
              data-aos-duration='700'>
              <summary className='question py-3 px-4 cursor-pointer select-none w-full bg-[#14794546] text-xs md:text-sm lg:text-base font-semibold'>
                Rechtswirksamkeit dieses Haftungsausschlusses
              </summary>
              <p className='pt-1 pb-3 px-4 bg-slate-200 tracking-widest leading-5 text-[8px] md:text-sm lg:text-base'>
                Dieser Haftungsausschluss ist als Teil des Internetangebots zu
                betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern
                Teile oder einzelne Formulierungen dieses Textes der geltenden
                Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen,
                bleiben die übrigen Teile des Dokuments in ihrem Inhalt und
                ihrer Gültigkeit davon unberührt.
              </p>
            </details>
            {/* collapse   6*/}
            <details
              className='rounded'
              data-aos='zoom-out-left'
              data-aos-duration='900'>
              <summary className='question py-3 px-4 cursor-pointer select-none w-full bg-[#14794546] text-xs md:text-sm lg:text-base font-semibold'>
                Streitbeilegung
              </summary>
              <p className='pt-1 pb-3 px-4 bg-slate-200 tracking-widest leading-5 text-[8px] md:text-sm lg:text-base'>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit, die Sie unter
                https://ec.europa.eu/consumers/odr finden. Wir sind nicht bereit
                und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImprintSection;
