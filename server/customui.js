Meteor.methods({
  getCustomUI() {
    const customui = {};
    customui = {
      customCompanyName: process.env.CUSTOM_COMPANY_NAME,
      customLoginLogo: process.env.CUSTOM_LOGIN_LOGO,
      customHeaderLogo: process.env.CUSTOM_HEADER_LOGO,
      customShortcutIcon: process.env.CUSTOM_SHORTCUT_ICON,
      customAppleTouchIcon: process.env.CUSTOM_APPLE_TOUCH_ICON,
      customManifest: process.env.CUSTOM_MANIFEST,

    };

    return customui;
  },
});
