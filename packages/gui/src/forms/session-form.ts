import { UIForm } from 'mithril-ui-form';
import { IUser } from 'ost-shared';

export const SessionForm = (users: IUser[]) =>
  [
    {
      id: 'name',
      label: 'Session name',
      type: 'text',
      className: 'col s6 m8',
    },
    {
      id: 'userIds',
      label: 'Users',
      options: users.map((user) => ({ id: user.id, label: user.name })),
      type: 'select',
      multiple: true,
      className: 'col s6 m4',
    },
    // {
    //   id: 'roleIds',
    //   label: 'Type of user',
    //   className: 'col s4',
    //   type: 'select',
    //   multiple: true,
    //   options: [
    //     { id: UserRole.ADMIN, label: 'Administrator' },
    //     { id: UserRole.EDITOR, label: 'Editor' },
    //     { id: UserRole.OBSERVER, label: 'Observer' },
    //     { id: UserRole.PARTICIPANT, label: 'Participant' },
    //   ],
    // },
    {
      id: 'desc',
      label: 'Description of the key events in the session',
      type: 'textarea',
    },
  ] as UIForm;
