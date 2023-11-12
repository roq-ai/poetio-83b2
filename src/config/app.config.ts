interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Viewer'],
  tenantRoles: ['Owner', 'Administrator', 'Content Creator', 'Editor'],
  tenantName: 'Organization',
  applicationName: 'POETIO',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View organization information',
    'View user information',
    'View poetry content',
    'View video content',
  ],
  ownerAbilities: [
    'Manage organization',
    'Manage user',
    'Manage poetry',
    'Manage video',
    'Manage show',
    'Manage content creator',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/158f4a76-34f4-49a0-90cb-f71feeaa77d6',
};
