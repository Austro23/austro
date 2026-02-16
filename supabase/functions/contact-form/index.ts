import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function validate(data: unknown): { valid: true; data: ContactPayload } | { valid: false; errors: Record<string, string> } {
  if (!data || typeof data !== "object") {
    return { valid: false, errors: { form: "Invalid request body" } };
  }

  const d = data as Record<string, unknown>;
  const errors: Record<string, string> = {};

  if (typeof d.name !== "string" || d.name.trim().length === 0) {
    errors.name = "Name is required";
  } else if (d.name.trim().length > 100) {
    errors.name = "Name must be less than 100 characters";
  }

  if (typeof d.email !== "string" || d.email.trim().length === 0) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(d.email.trim())) {
    errors.email = "Please enter a valid email address";
  } else if (d.email.trim().length > 255) {
    errors.email = "Email must be less than 255 characters";
  }

  if (typeof d.subject !== "string" || d.subject.trim().length === 0) {
    errors.subject = "Subject is required";
  } else if (d.subject.trim().length > 200) {
    errors.subject = "Subject must be less than 200 characters";
  }

  if (typeof d.message !== "string" || d.message.trim().length === 0) {
    errors.message = "Message is required";
  } else if (d.message.trim().length > 2000) {
    errors.message = "Message must be less than 2000 characters";
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    data: {
      name: (d.name as string).trim(),
      email: (d.email as string).trim(),
      subject: (d.subject as string).trim(),
      message: (d.message as string).trim(),
    },
  };
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const result = validate(body);

    if (!result.valid) {
      return new Response(JSON.stringify({ success: false, errors: result.errors }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Store in database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const dbResponse = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(result.data),
    });

    if (!dbResponse.ok) {
      console.error("DB insert failed:", await dbResponse.text());
      return new Response(JSON.stringify({ success: false, error: "Failed to save message" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, message: "Message received! We'll get back to you soon." }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return new Response(JSON.stringify({ success: false, error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
