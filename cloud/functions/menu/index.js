const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();

exports.main = async (event, context) => {
  try {
    return await db.collection('menu').get({
      success: function (res) {
        return res;
      },
    });
  } catch (e) {
    console.error(e);
  }
};
