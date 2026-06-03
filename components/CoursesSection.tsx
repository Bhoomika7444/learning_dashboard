import { createClient } from '@/lib/supabase'
import { Course } from '@/types'
import CourseCardGrid from './CourseCardGrid'

export default async function CoursesSection() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    return (
      <aside
        className="rounded-2xl p-5"
        style={{ border: '1px solid #f472b630', background: '#f472b608' }}
      >
        <p className="text-sm font-medium text-[#f472b6] mb-1">
          ⚠ Could not load courses
        </p>
        <p className="text-xs text-[#555568] font-mono mb-2">{error.message}</p>
        <p className="text-xs text-[#555568]">
          Check that{' '}
          <code className="text-[#7c6af7]">NEXT_PUBLIC_SUPABASE_URL</code> and{' '}
          <code className="text-[#7c6af7]">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> are
          set in your <code className="text-[#7c6af7]">.env.local</code>.
        </p>
      </aside>
    )
  }

  return <CourseCardGrid courses={(data ?? []) as Course[]} />
}
