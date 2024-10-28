import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://pjstuwtcxzstypkmxvpv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqc3R1d3RjeHpzdHlwa214dnB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxMjI3NTEsImV4cCI6MjA0NTY5ODc1MX0.o0G6X0AmawJlm_JE8GsdcX46qb3tShHMaTuA7gPLF-A',
)
