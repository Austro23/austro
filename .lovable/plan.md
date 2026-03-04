

## Update Name.com API Credentials

Both the `NAMECOM_API_USERNAME` and `NAMECOM_API_TOKEN` secrets will be updated with your new values.

### Steps
1. Update the `NAMECOM_API_USERNAME` secret with your new API username
2. Update the `NAMECOM_API_TOKEN` secret with your new API token
3. Test the domain search edge function to verify the 403 error is resolved

### Important Reminders
- The **API Username** is found in your Name.com account under **Account → API Settings** — it may differ from your login email
- Make sure IP **44.245.23.74** is still whitelisted in your Name.com API settings
- After updating, I'll run a test search to confirm everything works

