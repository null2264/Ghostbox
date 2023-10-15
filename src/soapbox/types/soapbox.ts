import {
  PromoPanelItemRecord,
  FooterItemRecord,
  SoapboxConfigRecord,
} from 'soapbox/normalizers/soapbox/soapbox-config';

type Me = string | null | false | undefined;

type PromoPanelItem = ReturnType<typeof PromoPanelItemRecord>;
type FooterItem = ReturnType<typeof FooterItemRecord>;
type SoapboxConfig = ReturnType<typeof SoapboxConfigRecord>;

export {
  Me,
  PromoPanelItem,
  FooterItem,
  SoapboxConfig,
};

export type {
  Ad,
} from 'soapbox/schemas';
