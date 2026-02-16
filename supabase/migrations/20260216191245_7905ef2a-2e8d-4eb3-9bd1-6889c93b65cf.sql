
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow the service role (edge function) to insert, no public access needed
CREATE POLICY "Service role can insert contact submissions"
ON public.contact_submissions
FOR INSERT
WITH CHECK (true);

-- No select/update/delete for anon users
CREATE POLICY "No public read access"
ON public.contact_submissions
FOR SELECT
USING (false);
