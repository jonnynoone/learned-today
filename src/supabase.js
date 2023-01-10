import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qjfjaexrrhqrlhpqsaeh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqZmphZXhycmhxcmxocHFzYWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMwMTA4OTksImV4cCI6MTk4ODU4Njg5OX0.DEM3VnXr-G4GLyg-wd2pveZyRFBcKzj-RhjCV0OvpvI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;