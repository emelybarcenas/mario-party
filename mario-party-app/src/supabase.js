// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vnlvhzioqyhjwbvvejgk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZubHZoemlvcXloandidnZlamdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMDQ4ODksImV4cCI6MjA2MDU4MDg4OX0.JJdfS91HZyGtGW9oejXEj5Z6F6SCC52kGg8Gq3wE3cU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
