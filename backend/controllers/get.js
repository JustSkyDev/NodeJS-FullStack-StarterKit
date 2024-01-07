// Export the controllers

module.exports = async (req, res) => {
  try {
    res.send("Hello from backend");
  } catch (error) {
    console.error(error);
  }
};
