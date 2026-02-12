import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://lyduwedqzqphehvmqurs.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_cJ3rd1MVVOVvPk5Ikcl73g_OQPPlQG0';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
