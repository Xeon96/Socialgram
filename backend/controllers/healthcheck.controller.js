export const healthcheck = async (req, res) => {
  try {
    res.status(200).json({
      status: "ok",
      message: "Backend server is running"
    });
  } catch (error) {
    console.error("Error in healthcheck controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};