import LoginForm from './LoginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#020817] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]" />

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-medium text-white tracking-tighter mb-2">Newstag Admin</h1>
          <p className="text-gray-400 font-light">Panel erişimi için giriş yapın.</p>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[32px] shadow-2xl">
          <LoginForm />
        </div>

        <p className="mt-8 text-center text-gray-500 text-sm">
          Newstag Enerji &copy; 2026
        </p>
      </div>
    </div>
  )
}
