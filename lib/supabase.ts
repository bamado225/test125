import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://iwfoxnabejkqcmqhjxkj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3Zm94bmFiZWprcWNtcWhqeGtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1NDA3MjAsImV4cCI6MjA4OTExNjcyMH0.Jbiu4Eg2f6MiLEKMaIzMQayv82yUQysuSd3QML51228';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
