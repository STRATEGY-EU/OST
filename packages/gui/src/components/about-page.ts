import m from 'mithril';
import { Dashboards, MeiosisComponent } from '../services';
import { SlimdownView } from 'mithril-ui-form';
import eu from '../assets/eu-flag.jpg';

const md = `#### About OST

OST is created by the Dutch Research Organisation [TNO](https://www.tno.nl) as part of the HORIZON2020 project, [STRATEGY](https://strategy-project.eu/).



![EU-FLAG](${eu})
_This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 883520_`;

export const AboutPage: MeiosisComponent = () => ({
  oninit: ({
    attrs: {
      actions: { setPage },
    },
  }) => setPage(Dashboards.ABOUT),
  view: () => m('.row', m(SlimdownView, { md, removeParagraphs: true })),
});
