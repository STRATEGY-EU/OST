import m from 'mithril';
import { Dashboards, MeiosisComponent } from '../services';
import { SlimdownView } from 'mithril-ui-form';
import { Button } from 'mithril-materialized';

export const HomePage: MeiosisComponent = () => {
  return {
    oninit: async ({
      attrs: {
        actions: { setPage },
      },
    }) => {
      setPage(Dashboards.HOME);
    },
    view: ({
      attrs: {
        state,
        actions: { changePage },
      },
    }) => {
      console.log(state);

      return m('.row.home-page.center', [
        m(SlimdownView, {
          md: `#### Welcome to the Observer Support Tool

Easily create observation forms and follow the results in real-time.`,
          removeParagraphs: true,
        }),
        m(Button, {
          label: 'Prepare your exercise',
          onclick: () => changePage(Dashboards.EDIT),
        }),
      ]);
    },
  };
};
