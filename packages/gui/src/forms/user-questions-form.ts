import { UIForm } from 'mithril-ui-form';

export const UserQuestionsForm = (title: string, options: Array<{ id: string; label: string }>) =>
  [
    {
      id: 'userQuestionIds',
      label: `Questions for ${title}`,
      type: 'options',
      options,
      checkboxClass: 'col s12',
      checkAllOptions: 'Select all|Unselect all',
    },
  ] as UIForm;
