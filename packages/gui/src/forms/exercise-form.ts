import { UIForm } from 'mithril-ui-form';
import { QuestionType } from 'ost-shared';

export const ExerciseForm = [
  {
    id: 'name',
    label: 'Exercise name',
    type: 'text',
    className: 'col s8',
  },
  {
    id: 'id',
    label: 'Exercise ID',
    className: 'col s4',
    type: 'text',
    disabled: true,
  },
  {
    id: 'desc',
    label: 'Description',
    type: 'textarea',
  },
  {
    id: 'questions',
    label: 'Questions',
    repeat: 0,
    pageSize: 1,
    type: [
      {
        id: 'id',
        autogenerate: 'id',
        type: 'autogenerate',
      },
      {
        id: 'name',
        label: 'Question',
        type: 'text',
      },
      {
        id: 'desc',
        label: 'Context',
        type: 'textarea',
      },
      {
        id: 'type',
        label: 'Type',
        type: 'select',
        options: [
          { id: QuestionType.TEXT, label: 'Text' },
          { id: QuestionType.SWITCH, label: 'Switch' },
          { id: QuestionType.NUMBER, label: 'Number' },
          { id: QuestionType.OPTIONS, label: 'Options' },
          { id: QuestionType.SELECT, label: 'Selection' },
          { id: QuestionType.RADIO, label: 'Radio' },
        ],
      },
      {
        id: 'options',
        label: 'Options',
        show: ['type=SELECT', 'type=RADIO', 'type=OPTIONS'],
        repeat: 0,
        type: [
          {
            id: 'id',
            autogenerate: 'id',
            type: 'autogenerate',
          },
          {
            id: 'name',
            label: 'Option',
            type: 'text',
          },
        ],
      },
      {
        id: 'multiple',
        show: 'type < 1',
        label: 'Multiple selections possible',
        type: 'checkbox',
      },
    ],
  },
] as UIForm;
