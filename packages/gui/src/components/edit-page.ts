import m from 'mithril';
import { LayoutForm } from 'mithril-ui-form';
import { RoundIconButton, Select, uniqueId } from 'mithril-materialized';
import { Dashboards, MeiosisComponent } from '../services';
import { ExerciseForm, UserForm, SessionForm, UserQuestionsForm } from '../forms';

export const EditPage: MeiosisComponent = () => {
  let userId = '';
  let showExercise = false;
  let showUser = false;
  let sessionId = '';
  let showSession = false;

  return {
    oninit: async ({
      attrs: {
        actions: { setPage },
      },
    }) => {
      setPage(Dashboards.EDIT);
    },
    view: ({ attrs: { state, actions } }) => {
      console.log(state);
      const {
        exercises: { list = [], current },
      } = state;
      const {
        changePage,
        exercises: { load, create, save },
      } = actions;
      const id = m.route.param('id');
      if (id && current?.id !== id) {
        load(id);
      }

      const exerciseOptions = list && list.map((c) => ({ id: c.id, label: c.name }));
      const currentUser = userId && current && current.users.filter((u) => u.id === userId).shift();
      const currentSession =
        sessionId && current && current.sessions.filter((u) => u.id === sessionId).shift();

      const questions =
        current && current.questions && current.questions.map((q) => ({ id: q.id, label: q.name }));
      const userQuestions =
        current && currentUser && currentSession && currentSession.userQuestions;
      const userQuestionIds =
        userQuestions && userQuestions.hasOwnProperty(userId) ? userQuestions[userId] : [];
      const uq = { userQuestionIds };

      return m('.row.edit-page', [
        m(
          '.col.s12',
          m('.row.manage-exercise', [
            m(
              '.col.s8.m10',
              m(Select, {
                label: 'Exercise',
                placeholder: 'Select an exercise',
                options: exerciseOptions,
                checkedId: current && current.id,
                disabled: !exerciseOptions || exerciseOptions.length === 0,
                onchange: (exerciseId) => {
                  const id = exerciseId[0];
                  showExercise = true;
                  changePage(Dashboards.EDIT, { id });
                },
              })
            ),
            m(
              '.col.s2.m1',
              m(RoundIconButton, {
                iconName: 'add',
                onclick: async () => {
                  const id = uniqueId();
                  await create({
                    id,
                    name: undefined,
                    users: [],
                    questions: [],
                    sessions: [],
                  });
                  // showExercise = true;
                  changePage(Dashboards.EDIT, { id });
                },
              })
            ),
            m(
              '.col.s2.m1',
              m(RoundIconButton, {
                disabled: !current || !current.id,
                iconName: showExercise ? 'arrow_drop_down' : 'arrow_drop_up',
                onclick: async () => (showExercise = !showExercise),
              })
            ),
          ])
        ),
        current &&
          m('.col.s12.exercise-details', [
            showExercise &&
              m(LayoutForm, {
                form: ExerciseForm,
                obj: current,
                onchange: () => save(current),
              }),
            m('.row.manage-users', [
              m(
                '.col.s8.m10',
                m(Select, {
                  label: 'User',
                  placeholder: 'Select a user',
                  options: current.users.map((u) => ({ id: u.id, label: u.name })),
                  checkedId: userId,
                  disabled: current.users.length === 0,
                  onchange: (id) => {
                    // showUser = true;
                    userId = id[0] as string;
                  },
                })
              ),
              m(
                '.col.s2.m1',
                m(RoundIconButton, {
                  iconName: 'add',
                  onclick: async () => {
                    userId = uniqueId();
                    showUser = true;
                    current.users.push({ id: userId, name: 'New user' });
                    save(current);
                  },
                })
              ),
              m(
                '.col.s2.m1',
                m(RoundIconButton, {
                  disabled: !userId,
                  iconName: showUser ? 'arrow_drop_down' : 'arrow_drop_up',
                  onclick: async () => (showUser = !showUser),
                })
              ),
            ]),
            currentUser &&
              showUser &&
              m(LayoutForm, {
                form: UserForm,
                obj: currentUser,
                onchange: () => save(current),
              }),
            m('.row.manage-sessions', [
              m(
                '.col.s8.m10',
                m(Select, {
                  label: 'Session',
                  placeholder: 'Select a session',
                  options: current.sessions.map((u) => ({ id: u.id, label: u.name })),
                  checkedId: sessionId,
                  disabled: current.sessions.length === 0,
                  onchange: (id) => {
                    // showSession = true;
                    sessionId = id[0] as string;
                  },
                })
              ),
              m(
                '.col.s2.m1',
                m(RoundIconButton, {
                  iconName: 'add',
                  onclick: async () => {
                    sessionId = uniqueId();
                    showSession = true;
                    current.sessions.push({
                      id: sessionId,
                      name: 'New session',
                      questionIDs: [],
                      userIds: [],
                      userQuestions: {},
                      keyEvents: [],
                    });
                    save(current);
                  },
                })
              ),
              m(
                '.col.s2.m1',
                m(RoundIconButton, {
                  disabled: !sessionId,
                  iconName: showSession ? 'arrow_drop_down' : 'arrow_drop_up',
                  onclick: async () => (showSession = !showSession),
                })
              ),
            ]),
            currentSession &&
              showSession &&
              m(LayoutForm, {
                form: SessionForm(current.users),
                obj: currentSession,
                onchange: () => save(current),
              }),
          ]),
        currentUser &&
          currentUser.name &&
          currentSession &&
          currentSession.name &&
          questions &&
          current &&
          m(
            '.col.s12.user-questions',
            m(LayoutForm, {
              form: UserQuestionsForm(
                `${currentUser.name} in session ${currentSession.name}`,
                questions
              ),
              obj: uq,
              onchange: () => {
                currentSession.userQuestions[userId] = uq.userQuestionIds;
                save(current);
              },
            })
          ),
      ]);
    },
  };
};
