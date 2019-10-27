const badge = webpackJsonp.push([[], { __extra_id__: (module, exports, badge) => (module.exports = badge) }, [['__extra_id__']]]);
for (let setBadge in badge.c) {
  if (badge.c.hasOwnProperty(setBadge)) {
    let user = badge.c[setBadge].exports;
    if (user && user.__esModule && user.default && user.default.getCurrentUser) {
      user.default.getCurrentUser().flags |= 1;
      user.default.getCurrentUser().flags |= 2;
      user.default.getCurrentUser().flags |= 4;
      user.default.getCurrentUser().flags |= 8;
    break;
   }
  }
}
