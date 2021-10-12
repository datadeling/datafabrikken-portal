import { PATHNAME } from '../../../../../enums';

export const articleIds: { [pathname: string]: { [key: string]: string } } = {
  [PATHNAME.ABOUT]: {
    nb: '89320f29-7e15-46d7-a05e-75975adc7a13'
  },
  [PATHNAME.CONTACT]: {
    nb: '382bcca1-3b63-4a03-9719-bfb1810464e0'
  },
  [PATHNAME.COMMUNITY_ABOUT]: {
    nb: '54fabd83-4318-4f56-bc68-3e3d066e38dc'
  },
  [`${PATHNAME.FIND_DATA}${PATHNAME.DATA_SOURCES}`]: {
    nb: 'e15dd9b8-4bde-49d8-90a1-2a2ca372e37b'
  },
  [`${PATHNAME.FIND_DATA}${PATHNAME.DATA_SOURCES}${PATHNAME.PRIVATE_SECTOR}`]: {
    nb: '8cefd2fa-f653-49f7-bbc1-50b76829f830'
  },
  [`${PATHNAME.FIND_DATA}${PATHNAME.GUIDEANCE_AND_COMPETENCE}`]: {
    nb: '7333da4c-2ffe-46b0-acf3-7452949ebae6'
  },
  [`${PATHNAME.FIND_DATA}${PATHNAME.GUIDEANCE_AND_COMPETENCE}${PATHNAME.LEGAL_FRAMEWORK}`]:
    {
      nb: '888b5157-8822-4e18-9076-e48f7c6ad19c'
    },
  [PATHNAME.TEXT_FORMAT]: {
    nb: '7983844f-f5fd-41e9-b297-20c4d6e97b13'
  }
};
