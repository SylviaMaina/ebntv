export default async function handler(req, res) {
    // Verify the request is from GraphCMS (optional but recommended)
    // Parse the payload from the request body
    const payload = req.body;
  
    // Update your application state or trigger a re-fetch of data
    // ...
  
    // Respond with a success status
    res.status(200).json({ success: true });
  }
  