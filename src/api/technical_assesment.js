const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3005;
app.use(cors());

app.get("/etherscan", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.etherscan.io/v2/api?chainid=1&module=contract&action=getcontractcreation&contractaddresses=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2&apikey=Y6CDIEBAJ1UH3G3RQ4TF1KKF7SPQEIBSCX`
    );

    console.log(response.data);

    res.json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.error("Error fetching :", error.message);
    res.status(500).json({
      success: false,
      error: "Failed to fetch.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
