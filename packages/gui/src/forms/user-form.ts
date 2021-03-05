import { UIForm } from 'mithril-ui-form';
import { UserRole } from 'ost-shared';

export const UserForm = [
  {
    id: 'name',
    label: 'User role or name',
    type: 'text',
    className: 'col s6 m8',
  },
  {
    id: 'roleIds',
    label: 'Type of user',
    className: 'col s6 m4',
    type: 'select',
    multiple: true,
    options: [
      { id: UserRole.ADMIN, label: 'Administrator' },
      { id: UserRole.EDITOR, label: 'Editor' },
      { id: UserRole.OBSERVER, label: 'Observer' },
      { id: UserRole.PARTICIPANT, label: 'Participant' },
    ],
  },
  {
    id: 'desc',
    label: 'Responsibility',
    type: 'textarea',
  },
] as UIForm;
