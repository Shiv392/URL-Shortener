const { get_urls } = require('../../models/dashboard/URLDashboard');

const getURLDashboard = async (req, res) => {
  const user = req.user; // Should be populated by JWT middleware

  try {
    const { success, urls, message } = await get_urls(user);

    return res.status(200).json({
      success,
      message,
      urls,
    });
  } catch (error) {
    console.error('Error in getURLDashboard:', error);
    return res.status(502).json({
      success: false,
      message: 'Failed to fetch URLs',
      error: error.message || error,
    });
  }
};

module.exports = { getURLDashboard };