import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://puhbixmllznrryzmisxu.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1aGJpeG1sbHpucnJ5em1pc3h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1NzE4MTIsImV4cCI6MjAxNTE0NzgxMn0.W4KuKYsmu-AFLf03vAUOZ4fWjK_tkTokyPFUkHfpA4E";
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;
