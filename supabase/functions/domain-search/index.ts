import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const NAMECOM_API = "https://api.name.com/v4";

function formatNameComError(action: string, status: number, data: unknown) {
  if (status === 403) {
    return `Name.com ${action} denied (403 Permission Denied). Whitelist the Lovable Cloud outbound IP 44.245.23.74 in your Name.com API settings, then verify your API user/token permissions.`;
  }

  return `Name.com ${action} failed [${status}]: ${JSON.stringify(data)}`;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const username = Deno.env.get("NAMECOM_API_USERNAME");
  const token = Deno.env.get("NAMECOM_API_TOKEN");

  if (!username || !token) {
    return new Response(JSON.stringify({ error: "Name.com API credentials not configured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const authHeader = "Basic " + btoa(`${username}:${token}`);

  try {
    const { action, keyword, domainName } = await req.json();

    if (action === "search") {
      const response = await fetch(`${NAMECOM_API}/domains:search`, {
        method: "POST",
        headers: {
          "Authorization": authHeader,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keyword }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(formatNameComError("search", response.status, data));
      }

      return new Response(JSON.stringify(data), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "check") {
      const response = await fetch(`${NAMECOM_API}/domains:checkAvailability`, {
        method: "POST",
        headers: {
          "Authorization": authHeader,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ domainNames: [domainName] }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(formatNameComError("availability check", response.status, data));
      }

      return new Response(JSON.stringify(data), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "pricing") {
      const response = await fetch(`${NAMECOM_API}/domains/${domainName}:getPricing`, {
        method: "GET",
        headers: {
          "Authorization": authHeader,
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(formatNameComError("pricing", response.status, data));
      }

      return new Response(JSON.stringify(data), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Invalid action" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Domain search error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
